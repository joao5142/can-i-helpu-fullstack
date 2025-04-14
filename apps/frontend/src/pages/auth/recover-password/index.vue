<template>
  <div class="login d-flex flex-column w-100">
    <app-button fab size="sm" class="mb-4" @click="handleBackStep">
      <PhCaretLeft size="15" color="white" />
    </app-button>

    <app-text as="strong" size="xl" color="text-900" class="mb-10">
      Recuperar de Senha
    </app-text>

    <app-step :current="currentStep" :steps="steps">
      <template #item.1>
        <app-input
          class="w-100"
          type="text"
          placeholder="Informe seu email de recuperação"
        />
      </template>

      <template #item.2>
        <app-code-input class="w-100" v-model="code" />
      </template>

      <template #item.3>
        <app-input type="password" placeholder="Senha" class="mb-3 w-100" />
        <app-input
          type="password"
          placeholder="Confirmar Senha"
          class="w-100"
        />
      </template>
    </app-step>

    <app-button glow full @click="handleNextStep"> Continuar </app-button>
  </div>
</template>

<script setup lang="ts">
import { PhCaretLeft } from "@phosphor-icons/vue";

definePageMeta({
  name: "recover-password",
  layout: "auth",
});

useHead({
  title: "Recuperar Senha",
});

const router = useRouter();

const code = ref("");

const steps = [{ name: "Email" }, { name: "Codigo" }, { name: "Senha" }];

const currentStep = ref<number>(0);

function handleBackStep() {
  if (currentStep.value > 0) {
    currentStep.value = currentStep.value - 1;
  } else {
    router.back();
  }
}
function handleNextStep() {
  if (currentStep.value < steps.length - 1) {
    currentStep.value = currentStep.value + 1;
  } else {
    router.push("/auth/login");
  }
}
</script>
