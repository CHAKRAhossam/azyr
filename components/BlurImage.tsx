import NextImage, { type ImageProps } from "next/image";
import { BLUR } from "@/lib/blurData";

/**
 * Remplaçant de next/image qui ajoute automatiquement un aperçu flou
 * (placeholder="blur") pour les images dont on a généré le blurDataURL.
 * → l'image apparaît instantanément (floue) puis devient nette, jamais de noir.
 */
export default function BlurImage(props: ImageProps) {
  const src = typeof props.src === "string" ? props.src : undefined;
  const blurDataURL = src ? BLUR[src] : undefined;

  if (blurDataURL && !props.placeholder) {
    return <NextImage placeholder="blur" blurDataURL={blurDataURL} {...props} />;
  }
  return <NextImage {...props} />;
}
