import DsConfig from "@can-i-helpu-ds/vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(DsConfig);
});
