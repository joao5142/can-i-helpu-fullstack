<template>
  <section class="h-screen d-flex flex-column gap-5">
    <AppHeader />
    <AppContainer class="flex-1-1">
      <slot></slot>
    </AppContainer>
    <app-loading v-if="isPageLoading" />
    <vite-pwa-manifest></vite-pwa-manifest>
  </section>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useLoadingStore } from "@/stores/loadingStore";
import AppContainer from "~/components/layout/AppContainer.vue";
import AppHeader from "~/components/layout/AppHeader.vue";

const loadingStore = useLoadingStore();
const { isPageLoading } = storeToRefs(loadingStore);
</script>

<style scoped lang="scss"></style>
