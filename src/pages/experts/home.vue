<template>
  <QuickLinkLayout >
    <button @click="handleLink">Start</button>
  </QuickLinkLayout>
</template>

<script setup lang="ts" name="ExpertHomePage">
import QuickLinkLayout from '@/components/common/QuickLink/QuickLinkLayout.vue';

const router = useRouter()

definePageMeta({
  _title: '找专家首页',
  pageTransition: {
    name: 'rotate',
    mode: 'out-in'
  }
})

useSeoMeta({
  title: '找专家',
})

function handleLink() {
  router.push('/experts/middle')
}
</script>

