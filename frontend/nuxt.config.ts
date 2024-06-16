import { NuxtPage } from 'nuxt/schema'

import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },

  srcDir: './src',

  dir: { public: '../public' },

  build: {
    transpile: ['vuetify'],
  },

  app: {
    head: {
      title: 'Can i HelpU',

      link: [
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
        },

        { rel: 'icon', type: 'image/png', href: '/public/favicon.png' },
      ],
    },
  },

  hooks: {
    'pages:extend'(pages) {
      function acceptPagesMatching(pages: NuxtPage[] = []) {
        const pagesToRemove = []
        for (const page of pages) {
          if (page.path.includes('@components') || page.path.includes('@types')) {
            pagesToRemove.push(page)
          } else {
            acceptPagesMatching(page.children)
          }
        }
        for (const page of pagesToRemove) {
          pages.splice(pages.indexOf(page), 1)
        }
      }
      acceptPagesMatching(pages)
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
      path: '@/components/ui',
      pathPrefix: false,
    },
    { global: true, path: '@/components/partials', pathPrefix: false },
  ],

  modules: [
    '@pinia/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
})
