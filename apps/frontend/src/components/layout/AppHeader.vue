<template>
  <header class="header">
    <AppContainer class="d-flex align-center justify-space-between">
      <div class="d-flex gap-15 align-center">
        <AppAvatar />

        <AppInput placeholder="Pesquisar" />
      </div>

      <div class="d-flex align-center gap-10">
        <PhChatCircle size="25" class="cursor-pointer" />
        <PhBell size="25" class="cursor-pointer" />
        <PhGear size="25" class="cursor-pointer" />
      </div>
    </AppContainer>
  </header>
</template>

<script setup lang="ts">
import { PhChatCircle, PhBell, PhGear } from "@phosphor-icons/vue";
import AppContainer from "./AppContainer.vue";
</script>

<style scoped lang="scss">
.header {
  border-bottom: 1px solid rgb(var(--v-theme-gray-200));
}
</style>
