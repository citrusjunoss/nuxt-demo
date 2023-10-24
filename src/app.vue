<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script lang="ts" setup>

const app = useAppConfig()

useHead({
  title: app.name as string,
  titleTemplate: '%s',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: '链接全球资源,抢占技术先机',
    },
  ],
})
</script>
<style>
.rotate-enter-active,
.rotate-leave-active {
  transition: all 10s;
}
.rotate-enter-from,
.rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}
</style>
