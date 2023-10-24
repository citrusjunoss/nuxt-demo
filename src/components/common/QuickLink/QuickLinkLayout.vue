<template>
  <div class="home">
    <ul>
      <li v-for="item in list" :key="item">Home-{{ item }}</li>
    </ul>
    <slot></slot>
  </div>
</template>

<script lang="ts" name="QuickLinkLayout" setup>
const list = ref(Array.from({ length: 10 }, (v, i) => i));
</script>

<style>
.home {
  width: 100vw;
}
</style>
