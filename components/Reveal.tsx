"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type RevealState = "idle" | "hidden" | "shown";

/**
 * Hook de révélation au scroll — pur CSS + IntersectionObserver (remplace framer-motion).
 * Le contenu est rendu VISIBLE côté serveur (aucun opacity:0 dans le HTML).
 * Le masquage/animation n'est ajouté qu'après montage, en progressive enhancement,
 * pour les éléments encore hors écran. Si le JS est lent/absent, tout reste lisible.
 */
export function useReveal<T extends HTMLElement>(delay = 0) {
  const ref = useRef<T>(null);
  const [state, setState] = useState<RevealState>("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Accessibilité : on ne masque jamais si l'utilisateur réduit les animations
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // On ne masque QUE ce qui est encore entièrement SOUS la ligne de flottaison.
    // Tout ce qui est déjà visible OU déjà dépassé (au-dessus de l'écran, ex. après
    // une hydratation tardive en prod pendant que l'utilisateur a scrollé) reste
    // affiché → plus jamais de section blanche au re-scroll.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 40) return;

    setState("hidden");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    // Filet de sécurité : le contenu ne reste JAMAIS masqué (au cas où l'observer échoue)
    const failSafe = window.setTimeout(() => setState("shown"), 2500);
    return () => {
      io.disconnect();
      window.clearTimeout(failSafe);
    };
  }, []);

  const className =
    state === "hidden"
      ? "reveal reveal-hidden"
      : state === "shown"
      ? "reveal reveal-shown"
      : "";
  const style: CSSProperties | undefined =
    state !== "idle" ? { transitionDelay: `${delay}s` } : undefined;

  return { ref, className, style };
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "span";
}) {
  const { ref, className: revealCls, style } = useReveal<HTMLDivElement>(delay);
  const Tag = as as "div";

  return (
    <Tag
      ref={ref}
      className={`${className} ${revealCls}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}
