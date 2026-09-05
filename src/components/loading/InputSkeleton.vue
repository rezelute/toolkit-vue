<template>
   <div>
      <slot v-if="!props.isLoading" />
      <USkeleton v-else :style="{ width, height }" />
   </div>
</template>

<script setup lang="ts">
const props = withDefaults(
   defineProps<{
      isLoading: boolean
      height?: string
      width?: string
   }>(),
   {
      isLoading: false,
      height: "40px",
      width: "100%",
   }
)
</script>
