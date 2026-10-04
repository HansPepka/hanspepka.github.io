import { SVGProps } from "react";

/**
 * Hand-drawn "H" monogram. Uses currentColor so it turns white in dark mode.
 * To use your own logo instead, put an image in public/assets and swap this
 * component for an <img> in navbar.tsx.
 */
export default function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      stroke="currentColor"
      strokeWidth={30}
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="Home"
      {...props}
    >
      <path d="M168 92c-4 52-6 104-8 156-2 54-3 108-6 160" />
      <path d="M336 78c2 60 3 120 2 180-1 52-2 104-6 156" />
      <path d="M78 286c58-6 116-14 174-22 62-9 116-16 178-26" />
    </svg>
  );
}
