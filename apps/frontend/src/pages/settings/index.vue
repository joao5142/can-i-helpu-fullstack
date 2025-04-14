<template>
  <v-row>
    <v-col cols="12" md="4" class="d-flex flex-column w-md-33 w-100">
      <AppText as="strong" class="mt-5 mb-3">Dados Pessoais </AppText>
      <AppAvatar
        @click="$router.push('/perfil/joao5142')"
        size="150"
        src="https://img.freepik.com/fotos-gratis/retrato-de-homem-branco-isolado_53876-40306.jpg?t=st=1744521220~exp=1744524820~hmac=6ec460f52147af55b6c98f56cb8c96a86cba62837bdd98fa5e634b35b3fb76de&w=826"
        class="mx-auto cursor-pointer"
      />

      <app-input class="mt-10" type="text" placeholder="E-mail" />
      <app-input class="mt-3" type="text" placeholder="Senha" />
      <app-input class="mt-3" type="text" placeholder="Senha" />
      <app-input class="mt-3" type="text" placeholder="Repetir Senha" />

      <app-button
        glow
        class="mt-10"
        full
        @click="$router.push('/home')"
        width="300px"
      >
        Atualizar
      </app-button>

      <a
        @click.prevent="$router.push('/auth/login')"
        href=""
        class="mt-5 text-center mb-3 text-primary"
        >Desconectar
      </a>
    </v-col>

    <v-col md="2" class="d-flex justify-center">
      <AppDivider direction="vertical" />
    </v-col>

    <v-col cols="12" md="4" class="d-flex flex-column w-md-33 w-100">
      <AppText as="strong" class="mt-5 mb-3">Dados Empresarias</AppText>

      <app-input class="mt-10" type="text" placeholder="Cnpj" />
      <app-input class="mt-3" type="text" placeholder="Chave Pix" />

      <AppSelect
        class="mt-3"
        label="Categoria "
        :items="['Ambiental', 'Animais', 'Fome']"
      />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { PhImage, PhSmiley } from "@phosphor-icons/vue";

definePageMeta({
  name: "settings",
  layout: "default",
});
</script>

<style lang="scss" scoped></style>
