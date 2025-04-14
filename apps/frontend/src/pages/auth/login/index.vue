<template>
  <div class="login d-flex flex-column w-100">
    <AppText
      class="mt-10"
      weight="bold"
      as="span"
      size="4xl"
      color="text-900"
      family="secondary"
    >
      Can I HelpU
    </AppText>

    <app-text class="mt-10" as="span" size="lg" color="text-900">
      Bem vindo
    </app-text>

    <app-text as="strong" size="xl" color="text-900">
      Entre na sua conta
    </app-text>

    <app-input class="mt-10" type="text" placeholder="E-mail" />

    <app-input class="mt-3" type="text" placeholder="Senha" />

    <app-text
      as="span"
      class="text-end mt-2 cursor-pointer"
      weight="medium"
      size="sm"
      color="text-900"
    >
      <NuxtLink to="/auth/recover-password" prefetch class="link"
        >Esqueceu sua senha ?
      </NuxtLink>
    </app-text>

    <app-button glow class="mt-10" full @click="$router.push('/home')" prefetch>
      Entrar
    </app-button>

    <AppText class="mt-10 text-center" size="sm" as="span" color="text-700">
      Ainda não possui Conta?
      <app-text color="primary" as="strong">
        <NuxtLink to="/auth/register" prefetch class="link"
          >Cadastre-se
        </NuxtLink>
      </app-text>
    </AppText>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: "login",
  layout: "auth",
});

useHead({
  title: "Login",
});
</script>

<style scoped lang="scss">
.login {
  &__image {
    max-width: 150px;
  }
}
</style>
