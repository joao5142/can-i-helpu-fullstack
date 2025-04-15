import { NuxtPage } from "nuxt/schema";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },
  rootDir: __dirname,
  srcDir: "src/",
  dir: { public: "./public" },
  serverDir: "../server",

  build: {
    transpile: ["@can-i-helpu-ds/vue", "@vue/devtools-api", "vuetify"],
  },

  alias: {
    "@vue/devtools-api": "@vue/devtools-api",
  },

  ssr: false,
  css: ["@can-i-helpu-ds/vue/style", "vuetify/styles"],

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

  modules: [
    "@pinia/nuxt",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "nuxt-svgo",
    "@vite-pwa/nuxt",
  ],

  pwa: {
    devOptions: {
      enabled: true,
    },
    workbox: {
      globPatterns: [], // Não fazer precache de nada
      runtimeCaching: [],
    },
    selfDestroying: true,
    manifest: {
      name: "Can I HelpU",
      short_name: "Can I HelpU",
      description: "Can I HelpU",
      start_url: "/",
      theme_color: "#ffffff",
      display: "standalone",
      lang: "pt-br",
      screenshots: [
        {
          src: "manifest/screen.png",
          sizes: "512x512",
          type: "image/png",
          form_factor: "wide",
          label: "Can I HelpU",
        },
        {
          src: "manifest/narrow.jpg",
          type: "image/jpg",
          sizes: "360x640",
          form_factor: "narrow",
        },
      ],
      icons: [
        {
          src: "manifest/icons/64x64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "manifest/icons/144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "manifest/icons/192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "manifest/icons/512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  compatibilityDate: "2025-02-04",
});
