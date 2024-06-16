<template>
  <div ref="root" class="code">
    <input
      v-for="(input, index) in 6"
      :id="'input-number-' + input"
      :key="'input-' + index"
      class="input-number"
      type="number"
      minlength="1"
      maxlength="1"
      pattern="/^\d$/"
      @keypress.prevent
      @keyup.prevent="giveTextToInput($event)"
    />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  isFilled: [code: boolean]
  codeFilled: [code: string]
}>()

const root = ref<HTMLInputElement | null>(null)
const code = ref<string>('')
const filled = ref<boolean>(false)
const inputs = ref<NodeListOf<HTMLInputElement> | null>(null)

function validateBackOrNextKeyboard(event: KeyboardEvent) {
  const target = event.target as HTMLInputElement
  const key = event.key as string

  if (event.target) {
    const nextSiblingEl = target.nextSibling as HTMLElement

    if (nextSiblingEl && !isNaN(Number(key)) && target.value !== '') {
      if (nextSiblingEl instanceof HTMLInputElement) nextSiblingEl?.focus()
    }

    if (event.key === 'Backspace') {
      const previusSiblingEl = target.previousSibling as HTMLElement

      if (previusSiblingEl) {
        previusSiblingEl?.focus()
        target.value = ''
      }
    }
  }
}

function getCode() {
  let code = ''
  inputs.value?.forEach((input: HTMLInputElement) => {
    code += input.value
  })
  return code
}

function isANumber(value: string) {
  return value.match(/^[0-9]$/)
}
function validateValue(e: KeyboardEvent) {
  const target = e.target as HTMLInputElement

  if (!isANumber(e.key)) {
    target.value = target.value!
  } else if (target.value.length > 1) {
    target.value = e.key
  } else {
    target.value = e.key
  }
}

function giveTextToInput(e: KeyboardEvent) {
  validateValue(e)

  validateBackOrNextKeyboard(e)

  verifyAllInputsIsFilled()
}

function verifyAllInputsIsFilled() {
  filled.value = Array.prototype.slice.call(inputs.value).every((input: any) => {
    return input.value !== ''
  })

  emit('isFilled', filled.value)

  if (filled.value) {
    code.value = getCode()
    emit('codeFilled', code.value)
  }
}

onMounted(() => {
  nextTick(() => {
    if (root.value) {
      inputs.value = root.value.querySelectorAll('input.input-number')
    }
  })
})
</script>

<style lang="scss" scoped>
.code {
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 340px) {
    & {
      gap: 10px;
    }
  }
}

.input-number {
  display: inline-block;

  background: transparent;
  border: 1px solid rgb(var(--v-theme-text-200));
  width: 56px !important;
  height: 56px !important;
  border-radius: 10px;

  box-shadow: -3px 20px 20px rgba(0, 0, 0, 0.03);
  height: 50px;
  width: 20%;

  text-align: center;
  font-size: 1.4rem;
  font-weight: 300;
  outline: none;

  font-weight: 800;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  &:focus,
  &[value] {
    border-color: rgb(var(--v-theme-primary));
  }

  @media (max-width: 500px) {
    & {
      width: 46px !important;
      height: 46px !important;
    }
  }

  @media (max-width: 430px) {
    & {
      width: 36px !important;
      height: 36px !important;
    }
  }

  @media (max-width: 360px) {
    & {
      width: 26px !important;
      height: 26px !important;
      font-size: 1rem;
    }
  }

  @media (min-width: 900px) and (max-width: 1100px) {
    & {
      width: 36px !important;
      height: 36px !important;
    }
  }
}
</style>
