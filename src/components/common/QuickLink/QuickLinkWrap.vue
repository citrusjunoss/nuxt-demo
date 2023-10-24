<template>
  <div class="search-layout" :style="{ '--opacityVal': '1' }">
    <NuxtPage key="static" keepalive :class="route.name" />
  </div>
</template>
<script lang="ts" name="QuickLinkWrap" setup>
const route = useRoute();
</script>
