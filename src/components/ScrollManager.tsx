import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import smoothscroll from "smoothscroll-polyfill";

const HEADER_OFFSET = 80; // matches scroll-padding-top in CSS

function scrollToHash(hash: string) {
  if (!hash) return;
  const id = decodeURIComponent(hash.replace("#", ""));
  const el = document.getElementById(id) || (document.querySelector(`[name="${id}"]`) as HTMLElement | null);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
  window.scrollTo({ top: y, behavior: "smooth" });
}

export default function ScrollManager() {
  const location = useLocation();

  // Polyfill for older browsers (e.g., older Safari/iOS)
  useEffect(() => {
    // @ts-ignore - polyfill method exists on default export
    if (typeof smoothscroll?.polyfill === "function") smoothscroll.polyfill();
  }, []);

  // Smooth scroll to top on pathname change (no hash)
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Smooth scroll to element on hash change or initial load
  useEffect(() => {
    if (location.hash) {
      // Wait for content to render
      const t = setTimeout(() => scrollToHash(location.hash), 0);
      return () => clearTimeout(t);
    }
  }, [location.hash]);

  // Intercept same-page anchor clicks like <a href="#section">...
  useEffect(() => {
    const onClick = (e: Event) => {
      const target = e.target as Element | null;
      if (!target) return;
      const anchor = (target.closest && target.closest("a")) as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      if (!href) return;

      // Only intercept same-page hash links
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
