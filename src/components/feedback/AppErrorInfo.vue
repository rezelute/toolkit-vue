<template>
   <UCard class="p-2 sm:p-10 w-full">
      <template #header>
         <h1 class="text-2xl sm:text-3xl font-semibold text-highlighted text-center">Oops!</h1>
      </template>
      <div class="text-center">
         <div class="mx-auto">
            <PageErrorIcon class="mx-auto max-w-70 text-primary slow-pulse" />
         </div>

         <p class="mt-4 text-lg sm:text-xl">
            {{
               errorText ||
               "Something went wrong! We have been notified about this automatically. Try refreshing the page or come back later."
            }}
         </p>

         <UButton label="Retry" type="button" class="btn mt-10 w-fit" @click="reloadPage" />
      </div>
   </UCard>
</template>

<script setup lang="ts">
import PageErrorIcon from "../ui/PageErrorIcon.vue"

defineProps<{
   errorText?: string
}>()

// methods
// -----------------------------------------
function reloadPage() {
   window.location.reload()
}
</script>

<style scoped>
@keyframes slow-pulse {
   0%,
   100% {
      opacity: 1;
   }
   50% {
      opacity: 0.5;
   }
}
.slow-pulse {
   animation: slow-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
