/**
 * Detecta si el usuario prefiere movimiento reducido.
 * Se ejecuta solo en el cliente (no en SSR).
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Detecta viewport móvil (cliente).
 */
export function isMobileViewport(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 767px)").matches;
}
