<template>
  <div class="message" :class="classes">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  type?: "sender" | "reciever";
}
const props = withDefaults(defineProps<IProps>(), {
  type: "sender",
});

const classes = computed(() => {
  return {
    [`message--${props.type}`]: true,
  };
});
</script>

<style scoped lang="scss">
.message {
  border-radius: 3rem;
  border-bottom-right-radius: 0px;

  padding: 2rem;

  display: block;

  width: 33%;

  @media (max-width: 1000px) {
    width: 100%;
  }

  &--sender {
    color: rgb(var(--v-theme-text-100));

    margin-right: auto;
    background: rgb(var(--v-theme-primary));
  }

  &--reciever {
    margin-left: auto;

    color: rgb(var(--v-theme-text-800));

    background: rgb(var(--v-theme-gray-100));
  }
}
</style>
