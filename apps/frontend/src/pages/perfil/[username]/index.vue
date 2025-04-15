<template>
  <div class="perfil">
    <v-img
      width="100%"
      height="500px"
      cover
      :lazy-src="computedUser?.perfilPhoto ?? DefaultProfileWallpaper"
      :src="computedUser?.perfilPhoto ?? DefaultProfileWallpaper"
      alt="mountain"
    />

    <main>
      <div class="d-flex flex-column justify-center align-center gap-30">
        <app-avatar
          src="https://img.freepik.com/fotos-gratis/retrato-de-homem-branco-isolado_53876-40306.jpg?t=st=1744521220~exp=1744524820~hmac=6ec460f52147af55b6c98f56cb8c96a86cba62837bdd98fa5e634b35b3fb76de&w=826"
          :size="200"
          :src="computedUser?.avatar"
        />

        <div class="d-flex align-center">
          <app-text as="strong" color="text-900" size="2xl">
            {{ computedUser?.name }}
          </app-text>
          <MessengerIcon
            v-if="!isMe && imFollowing"
            @click="$router.push('/chat')"
            class="ms-4 cursor-pointer messager-icon"
          />
        </div>

        <div class="d-flex gap-5">
          <app-button v-if="!isMe && imFollowing" size="sm" class="px-7">
            Deixar de seguir
          </app-button>

          <app-button
            outlined
            size="sm"
            class="px-7"
            @click="
              isFundraiserModalOpen = true;
              fundraiserModalMode = 'create';
            "
          >
            <app-text class="text-primary">Criar Vaquinha</app-text>
          </app-button>
        </div>
      </div>

      <div class="mt-5">
        <v-tabs v-model="selectedTab" grow stacked>
          <v-tab>
            <div class="d-flex flex-column">
              <app-text as="span" color="text-500" size="xs">135</app-text>
              <app-text class="d-block mt-2" as="strong" color="text-900">
                Timeline
              </app-text>
            </div>
          </v-tab>

          <v-tab>
            <div class="d-flex flex-column">
              <app-text as="span" color="text-500" size="xs">135</app-text>
              <app-text class="d-block mt-2" as="strong" color="text-900">
                Seguindo
              </app-text>
            </div>
          </v-tab>

          <v-tab>
            <div class="d-flex flex-column">
              <app-text as="span" color="text-500" size="xs">135</app-text>
              <app-text class="d-block mt-2" as="strong" color="text-900">
                Seguidores
              </app-text>
            </div>
          </v-tab>

          <v-tab>
            <div class="d-flex flex-column">
              <app-text as="span" color="text-500" size="xs">135</app-text>
              <app-text class="d-block mt-2" as="strong" color="text-900">
                Vaquinhas
              </app-text>
            </div>
          </v-tab>
        </v-tabs>
      </div>

      <v-window v-model="selectedTab" class="mt-15 pb-10">
        <v-window-item>
          <app-post-input class="mb-5" />

          <app-post
            v-for="(item, index) in 3"
            :key="index + 'post'"
            class="mb-5"
          />
        </v-window-item>

        <v-window-item>
          <v-row>
            <v-col
              v-for="(item, index) in 3"
              :key="index + 'following'"
              cols="6"
              lg="4"
              md="6"
            >
              <app-user-card :is-me="isMe" class="mt-5" />
            </v-col>
          </v-row>
        </v-window-item>

        <v-window-item>
          <v-row>
            <v-col
              v-for="(item, index) in 3"
              :key="index + 'followers'"
              cols="6"
              lg="4"
              md="6"
            >
              <app-user-card :is-me="isMe" class="mt-5" />
            </v-col>
          </v-row>
        </v-window-item>

        <v-window-item>
          <v-row>
            <v-col
              v-for="(item, index) in 3"
              :key="index + 'followers'"
              cols="6"
              lg="4"
              md="6"
            >
              <app-card
                @click="
                  isFundraiserViewModalOpen = true;
                  fundraiserModalMode = 'edit';
                "
                class="mt-5 pa-0 fundraiser cursor-pointer"
              >
                <img
                  class="fundraiser__img"
                  src="https://www.petz.com.br/blog/wp-content/uploads/2020/10/ong-de-animais-abandonados-3.jpg"
                />

                <div class="pa-3">
                  <app-text as="strong">Vaquinha 123</app-text>
                  <app-text as="p"> Loremreasdasdas</app-text>

                  <app-button
                    class="mt-4"
                    @click.stop="
                      isFundraiserModalOpen = true;
                      fundraiserModalMode = 'edit';
                    "
                  >
                    Editar
                  </app-button>
                </div>
              </app-card>
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
    </main>

    <app-modal v-model="isFundraiserModalOpen">
      <div class="mt-10 d-flex flex-column gap-10">
        <app-text as="strong" class="mb-5">
          {{
            fundraiserModalMode == "create"
              ? "Criar Vaquinha"
              : "Editar Vaquinha"
          }}
        </app-text>

        <app-text as="span">Insira a Tumb</app-text>
        <AppDragFile class="image-select" v-model="thumbImage" />

        <app-text as="span">Insira as imagens </app-text>
        <AppDragFile class="image-select" v-model="fundraiserImages" />

        <app-text as="span">Nome Da Vaquinha </app-text>
        <app-input type="text" placeholder="Nome" />

        <app-text as="span">Insira a url de arrecadação </app-text>
        <app-input type="text" placeholder="Url" />

        <app-text as="span">Descrição </app-text>
        <app-input type="text" placeholder="Insira a descrição" />

        <app-text as="span">Chave Pix </app-text>
        <app-input type="text" placeholder="Insira a chave pix" />

        <app-button
          glow
          class="mt-10"
          full
          @click="$router.push('/home')"
          prefetch
        >
          <app-text as="strong">
            {{ fundraiserModalMode == "create" ? "Cadastrar" : "Atualizar" }}
          </app-text>
        </app-button>
      </div>
    </app-modal>

    <app-modal v-model="isFundraiserViewModalOpen">
      <app-text as="strong" class="mb-5"> Vaquinha Solidária </app-text>

      <v-carousel height="300" class="mt-4">
        <template v-slot:prev="{ props }">
          <app-button fab @click="props.onClick">
            <PhCaretLeft size="15" color="white" />
          </app-button>
        </template>
        <template v-slot:next="{ props }">
          <app-button fab @click="props.onClick">
            <PhCaretRight size="15" color="white" />
          </app-button>
        </template>

        <v-carousel-item
          src="https://www.petz.com.br/blog/wp-content/uploads/2020/10/ong-de-animais-abandonados-3.jpg"
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="https://www.petz.com.br/blog/wp-content/uploads/2020/10/ong-de-animais-abandonados.jpg"
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="https://www.petz.com.br/blog/wp-content/uploads/2020/10/ong-de-animais-abandonados-2.jpg"
          cover
        ></v-carousel-item>
      </v-carousel>

      <p class="my-3">
        Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Curabitur tempus urna at turpis condimentum lobortis.
      </p>

      <span><strong>Chave Pix :</strong> 9090.09090.2333</span>

      <app-button class="mt-3">Acessar Link</app-button>
    </app-modal>
  </div>
</template>

<script setup lang="ts">
import DefaultProfileWallpaper from "@/assets/img/profile-wallpaper.jpg";
import { storeToRefs } from "pinia";

import MessengerIcon from "@/assets/img/messenger-icon.svg";

import { useUserStore } from "@/stores/userStore";

import { users } from "@/mocks/User";
import { PhCaretLeft, PhCaretRight } from "@phosphor-icons/vue";

definePageMeta({
  layout: "perfil",
});

useHead({
  title: "Perfil",
});

const thumbImage = ref<File[]>();
const fundraiserImages = ref<File[]>();

const isFundraiserModalOpen = ref(false);
const isFundraiserViewModalOpen = ref(false);
const fundraiserModalMode = ref("create");

const route = useRoute();
const userStore = useUserStore();

const username = route.params.username as string;

const { user: userAuthenticated } = storeToRefs(userStore);

const avatarSize = 200;
const avatarSizeUnitMargin = `-${avatarSize / 2}px`;

const selectedTab = ref<number>(0);

const isMe = computed(() => {
  return userAuthenticated.value.username === username;
});

const computedUser = computed(() => {
  const selectedUser = users[username];
  return selectedUser;
});

const imFollowing = true;
</script>

<style scoped lang="scss">
.perfil {
  main {
    max-width: 700px;
    margin: 0 auto;
    margin-top: v-bind(avatarSizeUnitMargin);
  }
}

.messager-icon {
  width: 1.5rem;
  height: 1.5rem;

  color: rgb(var(--v-theme-text-900));
  fill: rgb(var(--v-theme-text-900));
}

.fundraiser {
  &__img {
    border-radius: inherit;
    height: 100px;
    object-fit: cover;
    width: 100%;
  }
}

.image-select {
  @media (max-width: 800px) {
    height: 400px;
    width: 100%;
    overflow: hidden;
  }
}
</style>
