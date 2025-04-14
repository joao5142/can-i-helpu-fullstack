<template>
  <div class="chat h-100">
    <div class="pa-3">
      <AppText as="strong" size="lg">Bate Papo</AppText>

      <div class="d-flex flex-column gap-5 chat__conversations">
        <div
          v-for="item in 4"
          class="d-flex align-center mt-6 gap-10 chat__conversations-item"
        >
          <AppAvatar size="30" />

          <div>
            <AppText as="strong" class="d-block" size="lg">João </AppText>

            <AppText
              as="span"
              color="text-600"
              class="chat__conversations-resume"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              facere quos sit itaque unde provident ea, maxime accusamus
              voluptas doloribus laboriosam possimus veniam consectetur totam
              consequatur, nemo animi voluptates ipsum.
            </AppText>
          </div>
        </div>
      </div>
    </div>

    <div class="pa-3 px-10 chat__message">
      <div class="chat__message-content">
        <AppMessage type="reciever">Teste</AppMessage>
        <AppMessage>Teste 2</AppMessage>
      </div>
      <footer class="chat__message-footer">
        <AppInput placeholder="Digite seu texto" class="w-100" />
      </footer>
    </div>

    <div class="pa-3 d-flex flex-column align-center">
      <AppAvatar size="150" />

      <AppText
        as="span"
        color="text-900"
        size="sm"
        class="d-block text-center mt-2"
      >
        Ultima atividade em 14:33
      </AppText>

      <AppText as="strong" size="xl" class="d-block text-center my-5">
        João Paulo
      </AppText>

      <div class="d-flex align-center gap-10 mt-10">
        <div class="d-flex align-center gap-5 cursor-pointer">
          <AppText as="span" weight="600"> Bloquear </AppText>
          <PhLockSimple size="20" />
        </div>

        <div class="d-flex align-center cursor-pointer gap-5">
          <AppText as="span" weight="600"> Silenciar </AppText>
          <PhSpeakerSimpleSlash size="20" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhLockSimple, PhSpeakerSimpleSlash } from "@phosphor-icons/vue";
import AppMessage from "./@components/AppMessage.vue";

definePageMeta({
  name: "chat",
  layout: "chat",
});
</script>

<style scoped lang="scss">
.chat {
  height: 100%;

  display: grid;

  height: fit-content;

  grid-template-columns: 1fr 4fr 1fr;
  gap: 1rem;

  &__conversations {
    flex: 1;
    max-height: 100%;
    overflow: auto;

    &-item {
    }

    &-resume {
      display: block;
      white-space: nowrap;
      text-overflow: ellipsis;
      max-height: 20px;
      width: 150px;

      overflow: hidden;
    }
  }

  &__message {
    display: flex;
    flex-direction: column;

    border-inline: 1px solid rgb(var(--v-theme-gray-200));

    &-content {
      flex: 1;
      overflow-y: auto;

      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    &-footer {
    }
  }
}
</style>
