<template>
  <header class="header">
    <AppContainer class="d-flex gap-10 align-center justify-space-between">
      <div class="d-flex gap-30 align-center">
        <HomeIcon
          class="cursor-pointer header__icon"
          @click="() => handleClickActionIcons('home')"
        />

        <AppInput placeholder="Pesquisar" class="header__search" />
      </div>

      <div class="d-flex align-center gap-10">
        <MessengerIcon
          class="cursor-pointer header__icon"
          @click="() => handleClickActionIcons('chat')"
        />
        <SettingsIcon
          size="25"
          class="cursor-pointer header__icon"
          @click="() => handleClickActionIcons('settings')"
        />
      </div>
    </AppContainer>
  </header>
</template>

<script setup lang="ts">
import MessengerIcon from "@/assets/img/messenger-icon.svg";
import HomeIcon from "@/assets/img/home-icon.svg";
import SettingsIcon from "@/assets/img/settings-icon.svg";

import {
  PhChatCircle,
  PhBell,
  PhGear,
  PhHouseSimple,
  PhHouse,
} from "@phosphor-icons/vue";
import AppContainer from "./AppContainer.vue";

const isNotificationsOpen = ref(false);

const router = useRouter();

function handleClickActionIcons(action: string) {
  switch (action) {
    case "settings":
      router.push("/settings");
      break;
    case "chat":
      router.push("/chat");
      break;
    case "home":
      router.push("/home");
      break;
  }
}
</script>

<style scoped lang="scss">
.header {
  border-bottom: 1px solid rgb(var(--v-theme-gray-200));

  gap: 1rem;

  &__search {
    max-width: 800px;

    width: 100%;
  }

  &__icon {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>
