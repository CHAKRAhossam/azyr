import NextImage, { type ImageProps } from "next/image";
import { SHOW_IMAGES } from "@/lib/flags";

/**
 * Wrapper d'image piloté par le flag `SHOW_IMAGES` (lib/flags.ts).
 * - SHOW_IMAGES = true  → rend un <Image> Next.js normal.
 * - SHOW_IMAGES = false → rend un simple bloc gris, SANS aucune requête réseau
 *   (diagnostic : permet de mesurer le site « sans images »).
 */
export default function Img(props: ImageProps) {
  if (SHOW_IMAGES) return <NextImage {...props} />;

  const { fill, className, style, width, height } = props as ImageProps & {
    width?: number;
    height?: number;
  };

  return (
    <span
      aria-hidden
      className={className}
      style={{
        display: "block",
        backgroundColor: "#17171a",
        ...(fill
          ? { position: "absolute", inset: 0, width: "100%", height: "100%" }
          : { width, height }),
        ...(style as React.CSSProperties),
      }}
    />
  );
}
