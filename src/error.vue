<template>
  <div class="layout_error">
    error
  </div>
</template>

<script setup lang="ts">
interface Props {
  /** 错误详情 */
  error: any
}
const props = defineProps<Props>()

onMounted(() => {
  setTimeout(() => {
    showError(props.error)
  }, 1000)
})

const handleError = () => clearError({ redirect: '/' })
</script>
