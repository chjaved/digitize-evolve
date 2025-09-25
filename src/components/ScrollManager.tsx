import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import smoothscroll from "smoothscroll-polyfill";

const HEADER_OFFSET = 80; // matches scroll-padding-top in CSS

// Utility: calculate absolute top position without forcing reflow
function getElementTop(el: HTMLElement): number {
  let y = 0;
  let node: HTMLElement | null = el;
  while (node) {
    y += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return y;
}

// Smooth scroll to target element
function scrollToHash(hash: string) {
  if (!hash) return;
  const id = decodeURIComponent(hash.replace("#", ""));
  const el =
    document.getElementById(id) ||
    (document.querySelector(`[name="${id}"]`) as HTMLElement | null);
  if (!el) return;

  const y = getElementTop(el) - HEADER_OFFSET;
  window.scrollTo({ top: y, behavior: "smooth" });
}

export default function ScrollManager() {
  const location = useLocation();

  // Polyfill for older browsers (e.g., Safari/iOS)
  useEffect(() => {
    // @ts-ignore - polyfill method exists on default export
    if (typeof smoothscroll?.polyfill === "function") {
      smoothscroll.polyfill();
    }
  }, []);

  // Scroll to top on route change (when no hash present)
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Scroll to element when hash changes
  useEffect(() => {
    if (location.hash) {
      // wait for content render
      const t = setTimeout(() => scrollToHash(location.hash), 0);
      return () => clearTimeout(t);
    }
  }, [location.hash]);

  // Intercept same-page anchor clicks
  useEffect(() => {
    const onClick = (e: Event) => {
      const target = e.target as Element | null;
      if (!target) return;

      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      if (!href.startsWith("#")) return; // only hash links

      try {
        const url = new URL(anchor.href);
        const sameOrigin = url.origin === window.location.origin;
        const samePath = url.pathname === window.location.pathname;
        if (sameOrigin && samePath && url.hash) {
          e.preventDefault();
          scrollToHash(url.hash);
        }
      } catch {
        // ignore malformed URLs
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
