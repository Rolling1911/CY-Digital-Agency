import { useEffect } from "react";
import { useLocation } from "wouter";
import { languageRoutes } from "@/lib/languageRoutes";

const SITE_URL = "https:" + "/" + "/" + "cydigital.agency";

interface SEOOptions {
  title: string;
  description: string;
  path: string;
}

function normalizePath(path: string) {
  let result = path;
  while (result.length > 1 && result.endsWith("/")) {
    result = result.slice(0, -1);
  }
  return result;
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

function setLinkTag(rel: string, attributes: Record<string, string>) {
  const selector = `link[rel="${rel}"]${
    attributes.hreflang ? `[hreflang="${attributes.hreflang}"]` : ""
  }`;

  let el = document.querySelector(selector) as HTMLLinkElement | null;

  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    el!.setAttribute(key, value);
  });
}

export function useSEO({ title, description, path }: SEOOptions) {
  const [location] = useLocation();

  useEffect(() => {
    const currentPath = normalizePath(location);
    const basePath = normalizePath(path);

    const matchingRoute = Object.values(languageRoutes).find(
      (routes) => normalizePath(routes.el) === basePath,
    );

    const greekPath = matchingRoute?.el ?? basePath;
    const englishPath = matchingRoute?.en;

    const canonicalPath = matchingRoute
      ? currentPath === normalizePath(matchingRoute.en)
        ? matchingRoute.en
        : matchingRoute.el
      : basePath;

    const canonical = `${SITE_URL}${canonicalPath === "/" ? "" : canonicalPath}`;

    document.title = title;

    setMetaTag('meta[name="description"]', "name", "description", description);
    setMetaTag('meta[property="og:title"]', "property", "og:title", title);
    setMetaTag('meta[property="og:description"]', "property", "og:description", description);
    setMetaTag('meta[property="og:url"]', "property", "og:url", canonical);
    setMetaTag('meta[property="og:type"]', "property", "og:type", "website");
    setMetaTag('meta[property="og:site_name"]', "property", "og:site_name", "CYDigital");

    setLinkTag("canonical", { href: canonical });

    document
      .querySelectorAll('link[rel="alternate"][hreflang]')
      .forEach((el) => el.remove());

    if (englishPath) {
      setLinkTag("alternate", {
        hreflang: "el",
        href: `${SITE_URL}${greekPath === "/" ? "" : greekPath}`,
      });

      setLinkTag("alternate", {
        hreflang: "en",
        href: `${SITE_URL}${englishPath}`,
      });

      setLinkTag("alternate", {
        hreflang: "x-default",
        href: `${SITE_URL}${greekPath === "/" ? "" : greekPath}`,
      });
    }

    document.documentElement.lang =
      currentPath === "/en" || currentPath.startsWith("/en/") ? "en" : "el";
  }, [location, title, description, path]);
}
