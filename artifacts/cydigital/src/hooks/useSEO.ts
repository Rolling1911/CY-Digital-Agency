import { useEffect } from "react";

const SITE_URL = "https://cydigital.agency";

interface SEOOptions {
  title: string;
  description: string;
  path: string;
}

function setMetaTag(selector: string, attr: string, key: string, value: string) {
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

export function useSEO({ title, description, path }: SEOOptions) {
  useEffect(() => {
    const canonical = `${SITE_URL}${path === "/" ? "" : path}`;

    document.title = title;

    setMetaTag('meta[name="description"]', "name", "description", description);
    setMetaTag('meta[property="og:title"]', "property", "og:title", title);
    setMetaTag('meta[property="og:description"]', "property", "og:description", description);
    setMetaTag('meta[property="og:url"]', "property", "og:url", canonical);
    setMetaTag('meta[property="og:type"]', "property", "og:type", "website");
    setMetaTag('meta[property="og:site_name"]', "property", "og:site_name", "CYDigital");

    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.rel = "canonical";
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.href = canonical;

    return () => {
      document.title = "CYDigital - Premium Digital Agency Κύπρος";
    };
  }, [title, description, path]);
}
