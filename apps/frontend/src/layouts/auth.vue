<template>
  <div>
    <div class="auth">
      <div>
        <img class="auth__image" :src="BannerImage" alt="Banner" />
      </div>

      <div class="auth__content">
        <slot></slot>
      </div>
    </div>
    <app-loading v-if="isLoading" />
    <vite-pwa-manifest></vite-pwa-manifest>
  </div>
</template>

<script setup lang="ts">
import BannerImage from "@/assets/img/wallpaper.jpg";

const { isLoading } = useLoadingIndicator();
</script>

<style scoped lang="scss">
.auth {
  display: grid;
  grid-template-columns: 1fr 500px;

  height: 100vh;
  overflow-y: hidden;

  &__image {
    width: 100%;
    max-height: 100vh;
    height: 100%;

    object-fit: cover;
  }

  &__content {
    padding: 5rem;
    flex: 1;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
  }

  @media (max-width: 700px) {
    &__image {
      display: none;
    }
    & {
      grid-template-columns: 1fr;
    }

    &__content {
      padding: 2rem;
    }
  }
}
</style>
