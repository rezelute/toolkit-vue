<template>
   <div class="flex flex-col items-center gap-4 text-center">
      <div class="border-2 rounded-full p-4 text-primary">
         <UIcon :name="icon" class="size-5" />
      </div>

      <div class="flex flex-col gap-2">
         <slot></slot>
      </div>
   </div>
</template>

<script setup lang="ts">
// UIcon is auto-imported by Nuxt UI's Vite plugin — no import needed, and no explicit-import
// path exists for it (only the Nuxt-flavored Icon export is published at
// @nuxt/ui/components/Icon.vue; the plain-Vue one Nuxt UI actually uses here is only reachable
// through auto-import, which correctly resolves the right variant for this context).
defineProps<{
   // An Iconify icon name, e.g. "i-lucide-mail" — see https://ui.nuxt.com/docs/getting-started/integrations/icons/vue
   icon: string
}>()
</script>

<style scoped></style>
