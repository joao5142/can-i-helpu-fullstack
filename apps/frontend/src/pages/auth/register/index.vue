<template>
  <div class="login d-flex flex-column w-100">
    <app-text as="strong" size="xl" color="text-900">
      Cadastre sua conta</app-text
    >
    <app-text as="span" size="sm" color="text-900" class="d-block mt-1">
      Registre sua conta parar ajudar outras pessoas.
    </app-text>

    <app-input class="mt-10" type="text" placeholder="E-mail" />
    <app-input class="mt-3" type="text" placeholder="Senha" />
    <app-input class="mt-3" type="text" placeholder="Senha" />
    <app-input class="mt-3" type="text" placeholder="Repetir Senha" />

    <app-button
      glow
      class="mt-10"
      full
      @click="$router.push('/auth/login')"
      prefetch
    >
      Cadastrar
    </app-button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: "register",
  layout: "auth",
});

useHead({
  title: "Register",
});
</script>

<style scoped lang="scss">
.login {
  &__image {
    max-width: 150px;
  }
}
</style>
