<template>
  <div>
    <app-box
      background="gray-50"
      border-color="gray-50"
      class="mt-15 py-4 d-flex justify-center align-center mb-15"
    >
      <ph-info :size="25" weight="light" />
      <app-text class="ms-2 d-block" size="sm" color="gray-600" as="span" weight="medium">
        Digite o código enviado por e-mail
      </app-text>
    </app-box>
    <app-code-input
      @is-filled="
        (isFullFilled) => {
          codeIsFullFilled = isFullFilled
        }
      "
      @code-filled="
        (code) => {
          codeFilled = code
        }
      "
    />
  </div>
</template>

<script setup lang="ts">
const codeIsFullFilled = ref<boolean>(false)

const codeFilled = ref<string>('')

type EmitTypes = {
  codeFilled: [code: string]
  codeIsFullFilled: [isFilled: boolean]
}
const emit = defineEmits<EmitTypes>()

watch(codeFilled, () => {
  emit('codeFilled', codeFilled.value)
})

watch(codeIsFullFilled, () => {
  emit('codeIsFullFilled', codeIsFullFilled.value)
})
</script>

<style scoped></style>
