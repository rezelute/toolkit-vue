<template>
   <UCard>
      <template #header>
         <slot name="header">
            <Heading tag="h2" textSize="md" class="heading-mb-sm">{{ headingText }}</Heading>
         </slot>
      </template>
      <dl class="flex flex-col m-0 p-0">
         <!-- ID row -->
         <div
            class="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4 py-6 border-b border-default first:pt-0 last:border-b-0 last:pb-0"
         >
            <dt
               class="shrink-0 sm:w-20 text-sm font-semibold uppercase tracking-wide text-muted select-none"
            >
               User ID
            </dt>
            <dd class="min-w-0 m-0 text-default">
               <USkeleton v-if="isLoading" :style="{ height: '1.2rem' }" class="w-full sm:w-52!" />
               <code
                  v-else
                  class="inline-block font-mono text-sm px-2 py-0.5 rounded bg-elevated text-primary break-all"
                  >{{ userId ?? "—" }}</code
               >
            </dd>
         </div>

         <!-- Email row -->
         <div
            class="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4 py-6 border-b border-default first:pt-0 last:border-b-0 last:pb-0"
         >
            <dt
               class="shrink-0 sm:w-20 text-sm font-semibold uppercase tracking-wide text-muted select-none"
            >
               Email
            </dt>
            <dd class="min-w-0 m-0">
               <USkeleton v-if="isLoading" :style="{ height: '1.2rem' }" class="w-full sm:w-52!" />
               <span v-else class="break-all">{{ userEmail ?? "—" }}</span>
            </dd>
         </div>
      </dl>
   </UCard>
</template>

<script setup lang="ts">
import Heading from "../ui/Heading.vue"

// props & slots
// -----------------------------------------
defineSlots<{
   header?: () => unknown
}>()
withDefaults(
   defineProps<{
      userId?: string
      userEmail?: string
      isLoading?: boolean
      headingText?: string
   }>(),
   {
      isLoading: false,
      headingText: "Your details",
   }
)
</script>
