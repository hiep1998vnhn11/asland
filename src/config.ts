import type { NavItems } from "./types";

export const NAV_ITEMS: NavItems = {
  home: {
    path: "/",
    title: "Home",
  },
  blog: {
    path: "/product",
    title: "Product",
  },
  tags: {
    path: "/pricing",
    title: "Pricing",
  },
  media: {
    path: "/about",
    title: "About",
  },
  about: {
    path: "/contact",
    title: "Contact",
  },
};

export const SITE = {
  // Your site's detail?
  name: "Ink",
  title: "Astro - Ink",
  description: "Crisp, minimal, personal blog theme for Astro",
  url: "https://astro-ink.vercel.app",
  githubUrl: "https://github.com/one-aalam/astro-ink",
  listDrafts: true,
  // description ?
};

export const PAGE_SIZE = 8;
