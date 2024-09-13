import { NuxtPage } from "nuxt/schema";

import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  devtools: { enabled: true },

  rootDir: __dirname,
  srcDir: "src/",

  dir: { public: "../public" },

  serverDir: "../server",

  build: {
    transpile: ["vuetify"],
  },

  ssr: false,
  css: ["@/styles/main.scss"],

  app: {
    head: {
      title: "Can i HelpU",

      link: [
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap",
        },

        { rel: "icon", type: "image/png", href: "/public/favicon.png" },
      ],
    },
  },

  hooks: {
    "pages:extend"(pages) {
      pages.push({
        name: "home",
        path: "/",
        redirect: "auth/login",
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

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  components: [
    {
      global: true,
      path: "@/components/ui",
      pathPrefix: false,
    },
    { global: true, path: "@/components/partials", pathPrefix: false },
  ],

  modules: [
    "@pinia/nuxt",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],

  compatibilityDate: "2024-09-12",
});
