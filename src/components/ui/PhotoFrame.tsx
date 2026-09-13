"use client";

/**
 * PhotoFrame — drops a Next.js Image with a visible placeholder
 * while the file is missing, and graceful fallback on error.
 *
 * Usage:
 *   <PhotoFrame
 *     src="/keith.jpg"
 *     alt="Keith Tugume"
 *     hint="public/keith.jpg"
 *     aspectClass="aspect-[4/5]"   // optional, defaults to aspect-[4/3]
 *     sizes="320px"
 *     priority
 *   />
 */

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  hint?: string;          // filename shown in the placeholder
  aspectClass?: string;   // Tailwind aspect-ratio class
  sizes?: string;
  className?: string;     // extra classes on the <Image>
  priority?: boolean;
};

export default function PhotoFrame({
  src,
  alt,
  hint,
  aspectClass = "aspect-[4/3]",
  sizes = "100vw",
  className = "",
  priority = false,
}: Props) {
  const [errored, setErrored] = useState(false);

  return (
    <div className={`relative w-full overflow-hidden bg-line/20 ${aspectClass}`}>
      {!errored && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover object-top transition-[filter] duration-500
                      grayscale hover:grayscale-0 ${className}`}
          onError={() => setErrored(true)}
        />
      )}

      {/* Placeholder — shown while file is missing or after error */}
      {errored && (
        <div
          aria-hidden
          className="absolute inset-0 flex flex-col items-center justify-center gap-2
                     border border-dashed border-line"
        >
          <span className="font-mono text-[11px] uppercase tracking-wider text-mute/60">
            Add photo
          </span>
          {hint && (
            <span className="font-mono text-[10px] text-mute/40">{hint}</span>
          )}
        </div>
      )}
    </div>
  );
}
