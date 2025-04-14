<template>
  <div>
    <app-box
      background="gray-50"
      border-color="gray-50"
      class="mt-15 py-4 d-flex justify-center align-center"
    >
      <ph-info :size="25" weight="light" />
      <app-text class="ms-2 d-block" size="sm" color="gray-600" as="span" weight="medium">
        Escolha a maneira de recuperar sua senha
      </app-text>
    </app-box>

    <v-radio-group v-model="selectedRecoverModeValue" class="mt-8">
      <app-box
        class="pa-3 d-flex align-center flex-wrap mt-4 gap-5"
        :border-color="selectedRecoverModeValue === 'email' ? 'primary' : 'gray-300'"
        @click="selectedRecoverModeValue = 'email'"
      >
        <v-radio inline value="email" />

        <app-text as="span" color="gray-400" class="flex-fill">joa************@gmail.com</app-text>

        <app-button class="flex-grow-1 flex-sm-grow-0" size="sm" background="secondary">
          <app-text size="sm" as="span" color="text-500">Email</app-text>
        </app-button>
      </app-box>

      <app-box
        class="pa-3 d-flex align-center mt-4 flex-wrap gap-5"
        :border-color="selectedRecoverModeValue === 'phone' ? 'primary' : 'gray-300'"
        @click="selectedRecoverModeValue = 'phone'"
      >
        <v-radio inline value="phone" />

        <app-text as="span" color="gray-400" class="flex-fill">(83) 9 ****3184</app-text>

        <app-button class="flex-grow-1 flex-sm-grow-0" size="sm" background="secondary">
          <app-text size="sm" as="span" color="text-500">Celular</app-text>
        </app-button>
      </app-box>
    </v-radio-group>
  </div>
</template>

<script setup lang="ts">
import { PhInfo } from '@phosphor-icons/vue'

type ModeTypes = 'email' | 'phone'

type EmitTypes = {
  changeMode: [mode: ModeTypes]
}
const emit = defineEmits<EmitTypes>()

const selectedRecoverModeValue: Ref<ModeTypes | ''> = ref('')

watch(selectedRecoverModeValue, () => {
  emit('changeMode', selectedRecoverModeValue.value as ModeTypes)
})
</script>

<style scoped></style>
