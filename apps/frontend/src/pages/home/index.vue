<template>
  <div>
    <div class="page-container">
      <div class="w-100">
        <AppCard class="pa-4 send-post mb-4">
          <div class="d-flex gap-10">
            <AppAvatar
              size="50"
              class="cursor-pointer"
              @click="$router.push('/perfil/joao5142')"
              src="https://img.freepik.com/fotos-gratis/retrato-de-homem-branco-isolado_53876-40306.jpg?t=st=1744521220~exp=1744524820~hmac=6ec460f52147af55b6c98f56cb8c96a86cba62837bdd98fa5e634b35b3fb76de&w=826"
            />
            <textarea
              class="send-post__message"
              type="text"
              placeholder="Inicie sua postagem..."
            />
          </div>

          <footer class="d-flex align-center justify-space-between">
            <div class="d-flex align-center gap-5 r">
              <PhImage size="25" class="cursor-pointer" />
              <PhSmiley size="25" class="cursor-pointer" />
            </div>
            <AppButton>Salvar post</AppButton>
          </footer>
        </AppCard>

        <div>
          <AppPost />
        </div>
      </div>

      <AppDivider direction="vertical"></AppDivider>

      <div class="d-flex flex-column gap-20 ml-auto w-lg-75">
        <AppCard class="pa-4">
          <AppText as="strong" size="lg">Amigos</AppText>

          <div class="d-flex align-center mt-6 gap-10">
            <AppAvatar size="30" />
            <AppText as="span">João </AppText>
          </div>
        </AppCard>

        <AppCard class="pa-4">
          <AppText as="strong" size="xl">Ongs de animais</AppText>

          <div class="mt-6">
            <div class="d-flex align-center gap-10">
              <AppAvatar size="30" />
              <AppText as="strong">Ong 1 </AppText>
            </div>
            <AppText as="p" class="mt-5"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique expedita nulla aut officiis quaerat? Libero modi in enim
              nihil sint laborum culpa labore, minus, voluptates omnis hic,
              architecto sed aperiam?
            </AppText>
          </div>
        </AppCard>

        <AppCard class="pa-4">
          <AppText as="strong" size="xl">Ongs Hospitais</AppText>

          <div class="mt-6">
            <div class="d-flex align-center gap-10">
              <AppAvatar size="30" />
              <AppText as="strong">Ong 1 </AppText>
            </div>
            <AppText as="p" class="mt-5"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique expedita nulla aut officiis quaerat? Libero modi in enim
              nihil sint laborum culpa labore, minus, voluptates omnis hic,
              architecto sed aperiam?
            </AppText>
          </div>
          <AppDivider />
          <div class="mt-6">
            <div class="d-flex align-center gap-10">
              <AppAvatar size="30" />
              <AppText as="strong">Ong 1 </AppText>
            </div>
            <AppText as="p" class="mt-5"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique expedita nulla aut officiis quaerat? Libero modi in enim
              nihil sint laborum culpa labore, minus, voluptates omnis hic,
              architecto sed aperiam?
            </AppText>
          </div>
        </AppCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PhImage, PhSmiley } from "@phosphor-icons/vue";

definePageMeta({
  name: "home",
  layout: "default",
});
</script>

<style scoped lang="scss">
.page-container {
  display: grid;
  grid-template-columns: minmax(700px, 1fr) auto 1fr;
  gap: 2rem;

  @media (max-width: 900px) {
    & {
      grid-template-columns: 1fr;
    }
  }
}

.send-post {
  &__message {
    flex: 1;

    resize: none;
    outline: none;
    border: 0;
  }
}
</style>
