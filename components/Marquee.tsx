import Image from "@/components/Img";

const WORDS = [
  "100% Fait Maison",
  "Sans Conservateur",
  "Produits frais",
  "Restaurant familial",
  "Service continu",
  "Marrakech — Targa",
];

export default function Marquee() {
  const group = (
    <div className="flex shrink-0 items-center">
      {WORDS.map((w) => (
        <span key={w} className="flex items-center">
          <span className="px-8 font-display text-2xl text-cream/90 sm:text-4xl">{w}</span>
          <Image
            src="/images/mgharba.png"
            alt=""
            aria-hidden="true"
            width={128}
            height={128}
            className="h-20 w-20 shrink-0 select-none opacity-80 sm:h-32 sm:w-32"
          />
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-ink-soft py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-soft to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-soft to-transparent" />
      <div className="flex w-max animate-marquee">
        {group}
        {group}
      </div>
    </div>
  );
}
