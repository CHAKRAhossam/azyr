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

    // Déjà visible au montage → on garde affiché (pas de flash)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60 && rect.bottom > 0) return;

    setState("hidden");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
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
