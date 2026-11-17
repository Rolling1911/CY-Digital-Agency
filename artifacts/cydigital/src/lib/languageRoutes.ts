export type SiteLanguage = "el" | "en";

export const languageRoutes = {
  home: {
    el: "/",
    en: "/en",
  },
  services: {
    el: "/ypiresies",
    en: "/en/services",
  },
  websiteDevelopment: {
    el: "/ypiresies/kataskevi-istoselidas",
    en: "/en/services/website-development",
  },
  socialMedia: {
    el: "/ypiresies/social-media",
    en: "/en/services/social-media",
  },
  graphicDesign: {
    el: "/ypiresies/grafistika",
    en: "/en/services/graphic-design",
  },
  contentCreation: {
    el: "/ypiresies/dimioyrgia-periekhomenou",
    en: "/en/services/content-creation",
  },
  packages: {
    el: "/paketa",
    en: "/en/packages",
  },
  about: {
    el: "/giati-emas",
    en: "/en/about",
  },
  contact: {
    el: "/epikoinonia",
    en: "/en/contact",
  },
} as const;

export type SitePage = keyof typeof languageRoutes;

export function getLanguageRoute(
  page: SitePage,
  language: SiteLanguage,
): string {
  return languageRoutes[page][language];
}

export function getCurrentPage(pathname: string): SitePage {
  const normalizedPath = pathname.replace(/\/$/, "") || "/";

  for (const [page, routes] of Object.entries(languageRoutes)) {
    if (routes.el === normalizedPath || routes.en === normalizedPath) {
      return page as SitePage;
    }
  }

  return "home";
}

export function getPathLanguage(pathname: string): SiteLanguage {
  return pathname === "/en" || pathname.startsWith("/en/")
    ? "en"
    : "el";
}
