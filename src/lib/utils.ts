import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Adds the GitHub Pages sub-path (e.g. "/my-repo") in front of files in /public.
 * next/link adds it automatically for page links, but images need it added by hand.
 * On a <username>.github.io site the base path is empty, so nothing changes.
 */
export function asset(src: string): string {
  if (!src || /^(https?:)?\/\//.test(src) || src.startsWith("data:")) return src;
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${base}${src.startsWith("/") ? src : `/${src}`}`;
}

/** "Hans Pepka" -> "HP", "Hans" -> "H" */
export function initials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

/** True when a link has been filled in (not empty and not a "#!" placeholder). */
export function hasLink(value?: string): value is string {
  return !!value && value.trim() !== "" && value.trim() !== "#!" && value.trim() !== "#";
}
