<template>
  <section>
    <slot></slot>
    <app-loading v-if="isPageLoading" />
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useLoadingStore } from '@/stores/loadingStore'

const loadingStore = useLoadingStore()
const { isPageLoading } = storeToRefs(loadingStore)
</script>

<style scoped lang="scss"></style>
