<template>
  <div class="px-2">
    <app-box
      background="gray-50"
      border-color="gray-50"
      class="mt-15 py-4 d-flex justify-center align-center mb-9"
    >
      <ph-info :size="25" weight="light" />
      <app-text
        class="ms-2 d-block"
        size="sm"
        color="gray-600"
        as="span"
        weight="medium"
      >
        Escolha uma nova senha para a sua conta
      </app-text>
    </app-box>

    <label for="senha">
      <app-text size="sm" color="gray-600" as="span" weight="medium"
        >Informe sua senha</app-text
      >
    </label>

    <v-text-field
      id="senha"
      v-model="inputs.password.value"
      class="mt-3"
      :type="inputs.password.show ? 'text' : 'password'"
      :color="primaryColor"
      placeholder="Digite sua Senha"
      :error-messages="inputs.password.errors"
      @input="$emit('changePassword', inputs.password.value)"
    >
      <template #prepend-inner>
        <ph-key class="me-3" :color="gray500" size="20" />
      </template>

      <template #append-inner>
        <ph-eye
          v-if="!inputs.password.show"
          class="me-3 cursor-pointer"
          :color="gray500"
          size="20"
          @click="inputs.password.show = true"
        />
        <ph-eye-slash
          v-else
          class="me-3 cursor-pointer"
          :color="gray500"
          size="20"
          @click="inputs.password.show = true"
        />
      </template>
    </v-text-field>

    <div class="mb-4">
      <div
        v-for="(status, index) in passwordStatus"
        :key="'status' + index"
        class="d-flex align-center"
      >
        <ph-x-circle :color="status.value ? green500 : orange500" />
        <app-text
          as="span"
          size="sm"
          :color="status.value ? 'green-500' : 'orange-500'"
          class="ms-1"
        >
          {{ status.name }}
        </app-text>
      </div>
    </div>

    <label for="senha">
      <app-text size="sm" color="gray-600" as="span" weight="medium">
        Confirme sua nova senha
      </app-text>
    </label>

    <v-text-field
      id="senha"
      v-model="inputs.password_confirmation.value"
      class="mt-3"
      :type="inputs.password_confirmation.show ? 'text' : 'password'"
      :color="primaryColor"
      placeholder="Confirme sua senha"
      :error-messages="inputs.password_confirmation.errors"
      @input="
        $emit('changePasswordConfirmation', inputs.password_confirmation.value)
      "
    >
      <template #prepend-inner>
        <ph-key class="me-3" :color="gray500" size="20" />
      </template>

      <template #append-inner>
        <ph-eye
          v-if="!inputs.password_confirmation.show"
          class="me-3 cursor-pointer"
          :color="gray500"
          size="20"
          @click="inputs.password_confirmation.show = true"
        />
        <ph-eye-slash
          v-else
          class="me-3 cursor-pointer"
          :color="gray500"
          size="20"
          @click="inputs.password_confirmation.show = false"
        />
      </template>
    </v-text-field>
  </div>
</template>

<script setup lang="ts">
import {
  PhInfo,
  PhKey,
  PhEye,
  PhEyeSlash,
  PhXCircle,
} from "@phosphor-icons/vue";
import { useTheme } from "vuetify";

const theme = useTheme();

type EmitTypes = {
  passwordValidated: [isValid: boolean];
  changePassword: [password: string];
  changePasswordConfirmation: [password: string];
};
const emit = defineEmits<EmitTypes>();

const {
  primary: primaryColor,
  "gray-500": gray500,
  "green-500": green500,
  "orange-500": orange500,
} = theme.current.value.colors;

const inputs = reactive({
  password: { errors: [], show: false, value: "" },
  password_confirmation: { errors: [], show: false, value: "" },
});

const passwordStatusNoWrapper = toRaw(passwordStatus);

watch(inputs.password, () => {
  for (const key in passwordStatusNoWrapper) {
    const status = passwordStatus[key as "1" | "2" | "3" | "4"];

    status.value = inputs.password.value.match(status.regex) !== null;
  }

  const isValid = Object.values(passwordStatusNoWrapper).every(
    (status) => status.value,
  );

  if (isValid) {
    emit("passwordValidated", true);
  } else {
    emit("passwordValidated", false);
  }
});
</script>

<style scoped></style>
