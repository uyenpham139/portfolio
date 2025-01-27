import { LocalePrefix, Pathnames } from "next-intl/routing";

export const locales = ["en", "vie"] as const;

export type Locales = typeof locales;

export const pathnames: Pathnames<Locales> = {
    "/": "/",
    "/about": "/about",
    "projects": "/project",
    "/contact": "/contact",
    "view-cv": "view-cv"
};

export const localePrefix: LocalePrefix<Locales> = "always";
