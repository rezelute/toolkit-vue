<template>
   <UModal
      :open="visible"
      :title="headerText"
      :close="false"
      :dismissible="false"
      :ui="{ overlay: 'bg-black/90' }"
   >
      <template #body>
         <div class="flex flex-col justify-center">
            <UIcon name="i-lucide-loader-circle" class="size-8 animate-spin mx-auto" />
            <div v-if="loadingText" class="mt-8 text-center">{{ loadingText }}</div>
         </div>
      </template>
   </UModal>
</template>

<script setup lang="ts">
// Deliberately a hard-blocking, non-dismissible modal (no close button, no escape/overlay
// dismiss). This is the right call only for operations where letting the user navigate away or
// double-submit mid-flight would actually be wrong (e.g. payment processing). For an ordinary
// "please wait" loading state, prefer PageLoader instead — a blocking modal is a heavier
// interruption than most loading states warrant.
defineProps<{
   visible: boolean
   headerText: string
   loadingText?: string
}>()
</script>

<style scoped></style>
