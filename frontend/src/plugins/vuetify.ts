import 'vuetify/styles'

import { createVuetify, ThemeDefinition } from 'vuetify'

import { defineNuxtPlugin } from '#app'

import { DefaultTheme } from '@/theme'

const themeInUse = DefaultTheme

export const vuetifyFontSizesVariables = {
  'theme-font-size-xs': themeInUse.fontSizes.xs,
  'theme-font-size-sm': themeInUse.fontSizes.sm,
  'theme-font-size-md': themeInUse.fontSizes.md,
  'theme-font-size-lg': themeInUse.fontSizes.lg,
  'theme-font-size-xl': themeInUse.fontSizes.xl,
  'theme-font-size-2xl': themeInUse.fontSizes['2xl'],
  'theme-font-size-3xl': themeInUse.fontSizes['3xl'],
  'theme-font-size-4xl': themeInUse.fontSizes['4xl'],
  'theme-font-size-5xl': themeInUse.fontSizes['5xl'],
  'theme-font-size-6xl': themeInUse.fontSizes['6xl'],
  'theme-font-size-7xl': themeInUse.fontSizes['7xl'],
} as const

export const vuetifyFontWeightVariables = {
  'theme-font-weight-regular': themeInUse.fontWeights.regular,
  'theme-font-weight-medium': themeInUse.fontWeights.medium,
  'theme-font-weight-semibold': themeInUse.fontWeights.semibold,
  'theme-font-weight-bold': themeInUse.fontWeights.bold,
} as const

const variablesTheme = {
  ...vuetifyFontSizesVariables,
  ...vuetifyFontWeightVariables,
}

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: { ...themeInUse.colors.light },
  variables: variablesTheme,
}
const darkTheme: ThemeDefinition = {
  dark: true,
  colors: { ...themeInUse.colors.dark },
  variables: variablesTheme,
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
    },

    defaults: {},
  })
  app.vueApp.use(vuetify)
})

export type FontSizesTypes = keyof typeof themeInUse.fontSizes
export type FontWeightTypes = keyof typeof themeInUse.fontWeights
export type FontFamilyTypes = keyof typeof themeInUse.fontFamily

type DefaultColorTypes = typeof themeInUse.colors.light
type CustomColorTypes = typeof themeInUse.colors.light

export type ColorTypes = keyof (DefaultColorTypes & CustomColorTypes)
