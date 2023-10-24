<template>
  <MiddleLayout>
    <button @click="handleLink">Back</button>
  </MiddleLayout>
</template>

<script lang="ts" setup>
import MiddleLayout from '@/components/common/QuickLink/MiddleLayout.vue';
const router = useRouter()
definePageMeta({
  pageTransition: {
    name: 'rotate',
    mode: 'out-in'
  }
})

function handleLink() {
  router.back()
}

</script>

