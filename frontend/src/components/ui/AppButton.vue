<template>
  <button class="button" :class="styleClasses">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { ColorTypes } from '@/plugins/vuetify'

interface IProps {
  disabled?: boolean
  outlined?: boolean
  full?: boolean
  isFab?: boolean
  rounded?: boolean | 'xl' | 'lg' | 'md' | 'sm'
  borderColor?: ColorTypes
  color?: ColorTypes
  background?: ColorTypes
  size?: 'xl' | 'lg' | 'md' | 'sm'

  transparent?: boolean

  width?: string | number | undefined
  height?: string | number | undefined

  translucid?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  size: 'md',
  background: 'primary',
  color: 'white',
  width: undefined,
  height: undefined,
  borderColor: undefined,
  translucid: false,
})

const styleClasses = computed(() => {
  let stringClass = ''

  if (props.full !== undefined && props.full) {
    stringClass += 'button--full '
  }

  if (props.disabled && props.disabled === true) {
    stringClass += 'button--disabled '
  }

  if (props.color !== undefined) {
    stringClass += `text-${props.color} `
  }

  if (props.background !== undefined && !props.outlined) {
    stringClass += `bg-${props.background} `
  }

  if (props.outlined !== undefined && props.outlined) {
    stringClass += 'button--outlined  '
  }

  if (props.borderColor !== undefined && props.borderColor) {
    stringClass += `button--border border-${props.borderColor} `
  }

  if (props.size) {
    stringClass += `button--size-${props.size} `
  }

  if (props.isFab !== undefined && props.isFab) {
    stringClass += 'button--fab '
  }

  if (props.transparent !== undefined && props.transparent) {
    stringClass += 'button--transparent '
  }

  if (props.rounded !== undefined && props.rounded) {
    stringClass += 'button--rounded '
  }

  if (props.rounded !== undefined && props.rounded === 'lg') {
    stringClass += 'button--rounded-lg '
  }

  if (props.rounded !== undefined && props.rounded === 'sm') {
    stringClass += 'button--rounded-sm '
  }

  if (props.rounded !== undefined && props.rounded === 'md') {
    stringClass += 'button--rounded-md '
  }

  if (props.rounded !== undefined && props.rounded === 'xl') {
    stringClass += 'button--rounded-xl '
  }

  if (props.width !== undefined && props.width) {
    stringClass += 'button--width '
  }

  if (props.height !== undefined && props.height) {
    stringClass += 'button--height '
  }

  if (props.translucid !== undefined && props.translucid) {
    stringClass += 'button--translucid '
  }

  return stringClass
})

const computedWidthUnit = computed(() => {
  return `${props.width}px`
})
const computedHeightUnit = computed(() => {
  return `${props.height}px`
})
</script>

<style scoped lang="scss">
.button {
  font-weight: 600;
  text-transform: none;

  transition: all 0.3s linear;

  border-radius: 6px;
  border-color: rgb(var(--v-border-color));

  display: flex;
  align-items: center;
  justify-content: center;

  width: max-content;

  &:active {
    scale: 0.98;
  }

  &--outlined {
    border-width: 1px;
    border-style: solid;

    background: none !important;
  }

  &--disabled {
    pointer-events: none;
    background-color: rgb(var(--v-theme-gray-100)) !important;

    color: rgb(var(--v-theme-text-500)) !important;

    > * {
      color: rgb(var(--v-theme-text-500)) !important;
    }
  }

  &.button--outlined.button--disabled {
    border-color: rgb(var(--v-theme-gray-100));
    background-color: transparent !important;
    color: rgb(var(--v-theme-text-500)) !important;
  }

  &--full {
    width: 100%;
  }

  &--size-xl {
    padding: 1.25rem;
  }
  &--size-lg {
    padding: 1rem;
  }
  &--size-md {
    padding: 0.75rem;
  }
  &--size-sm {
    padding: 0.625rem;
  }

  &--fab {
    width: 4rem;
    height: 4rem;
    border-radius: 10px;
  }

  &--border {
    border-width: 1px;
    border-style: solid;
  }

  &--transparent {
    background: transparent !important;
  }

  &--rounded {
    border-radius: 50% !important;
  }

  &--rounded-sm {
    border-radius: 20px !important;
  }

  &--rounded-md {
    border-radius: 30px !important;
  }

  &--rounded-lg {
    border-radius: 40px !important;
  }

  &--rounded-xl {
    border-radius: 50px !important;
  }

  &--width {
    width: v-bind(computedWidthUnit);
    min-width: v-bind(computedWidthUnit);
  }
  &--height {
    height: v-bind(computedHeightUnit);
    min-height: v-bind(computedHeightUnit);
  }

  &--translucid {
    background-color: rgba(255, 255, 255, 0.06) !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
  }
}
</style>
