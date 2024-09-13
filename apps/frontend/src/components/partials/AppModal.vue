<template>
  <v-dialog v-model="value" persistent :max-width="maxWidth" width="100%">
    <v-card class="ma-0 modal">
      <button v-if="isClosable" class="close-btn" @click="value = false">
        <ph-x :size="32" color="white" />
      </button>

      <slot></slot>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { PhX } from '@phosphor-icons/vue'

interface IProps {
  modelValue: boolean
  maxWidth?: string
  isClosable?: boolean
}
const props = withDefaults(defineProps<IProps>(), {
  maxWidth: '700px',
  isClosable: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})
</script>

<style scoped lang="scss">
.v-card.v-card--density-default {
  border-radius: 0.5rem !important;

  background-color: rgb(var(--v-theme-card));
}
.modal {
  $paddingY: 1.5rem;
  $paddingX: 1.5rem;

  padding: $paddingY $paddingX;

  .close-btn {
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.625rem;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-shrink: 0;

    border-radius: 50%;

    background: rgb(var(--v-theme-red-500));

    position: absolute;

    top: $paddingY;
    right: $paddingX;
  }
}
</style>
