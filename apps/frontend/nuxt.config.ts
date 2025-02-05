import { NuxtPage } from "nuxt/schema";

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },
  rootDir: __dirname,
  srcDir: "src/",
  dir: { public: "../public" },
  serverDir: "../server",

  build: {
    transpile: ["@can-i-helpu-ds/vue", "@vue/devtools-api"],
  },

  alias: {
    "@vue/devtools-api": "@vue/devtools-api",
  },

  ssr: false,
  css: ["@can-i-helpu-ds/vue/style"],

  app: {
    head: {
      title: "Can i HelpU",

      link: [
        { rel: "preconnect", href: "https://fonts.gstatic.com" },

        { rel: "icon", type: "image/png", href: "/public/favicon.png" },
      ],
    },
  },

  hooks: {
    "pages:extend"(pages) {
      pages.push({
        name: "login",
        path: "/",
        redirect: "/auth/login",
      });

      function acceptPagesMatching(pages: NuxtPage[] = []) {
        const pagesToRemove = [];
        for (const page of pages) {
          if (
            page.path.includes("@components") ||
            page.path.includes("@types")
          ) {
            pagesToRemove.push(page);
          } else {
            acceptPagesMatching(page.children);
          }
        }
        for (const page of pagesToRemove) {
          pages.splice(pages.indexOf(page), 1);
        }
      }
      acceptPagesMatching(pages);
    },
  },

  modules: ["@pinia/nuxt"],

  vite: {
    resolve: {
      preserveSymlinks: true,
    },
  },

  compatibilityDate: "2025-02-04",
});
