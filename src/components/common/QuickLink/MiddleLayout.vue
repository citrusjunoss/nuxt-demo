<template>
  <div class="simple-search-container">
    <ul>
      <li v-for="item in list">Middle-{{ item }}</li>
    </ul>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
const list = ref(Array.from({ length: 20 }, (v, i) => i));
</script>

<style scoped>
.simple-search-container {
  width: 100vw;
}
</style>
