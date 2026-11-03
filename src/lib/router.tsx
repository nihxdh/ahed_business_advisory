import { useEffect, useSyncExternalStore, type AnchorHTMLAttributes, type MouseEvent } from "react";

// A minimal history-API router: the site has a handful of static pages, so a routing library is not needed.
const EVENT = "ahed:navigate";

const subscribe = (cb: () => void) => {
  window.addEventListener("popstate", cb);
  window.addEventListener(EVENT, cb);
  return () => {
    window.removeEventListener("popstate", cb);
    window.removeEventListener(EVENT, cb);
  };
};

export function useLocation() {
  const path = useSyncExternalStore(subscribe, () => window.location.pathname);
  const search = useSyncExternalStore(subscribe, () => window.location.search);
  return { path: path.replace(/\/+$/, "") || "/", search };
}

export function navigate(to: string) {
  const url = new URL(to, window.location.href);
  const samePage = url.pathname === window.location.pathname && url.search === window.location.search;
  if (!samePage) window.history.pushState(null, "", url);
  window.dispatchEvent(new Event(EVENT));
  if (url.hash) document.getElementById(url.hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
  else window.scrollTo({ top: 0, behavior: samePage ? "smooth" : "instant" });
}

export function Link({ to, onClick, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }) {
  const { path } = useLocation();
  const target = new URL(to, window.location.origin).pathname;
  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigate(to);
  };
  return <a href={to} aria-current={target === path ? "page" : undefined} onClick={handle} {...rest} />;
}

export function useTitle(title: string) {
  useEffect(() => {
    document.title = title ? `${title} | Ahed` : "Ahed | Business advisory, transformation and growth";
  }, [title]);
}
