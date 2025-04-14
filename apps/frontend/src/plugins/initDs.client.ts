import DsConfig, { vuetifyConfig } from "@can-i-helpu-ds/vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(DsConfig);

  nuxtApp.vueApp.use(vuetifyConfig);
});
