<template>
   <component :is="tag" :class="['heading', textSize]">
      <slot />
   </component>
</template>

<script setup lang="ts">
import { computed } from "vue"

export interface HeadingProps {
   textSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
   tag: string
}

const props = defineProps<HeadingProps>()

const textSize = computed(() => (props.textSize ? `heading-${props.textSize}` : "heading-lg"))
</script>

<!--
Usage:
<Heading textSize="2xl">My Heading</Heading>
-->

<style scoped>
@reference "tailwindcss";

.heading {
   @apply font-semibold tracking-tight;
}

/* text size styles */
.heading-sm {
   @apply text-base md:text-lg;
}
.heading-md {
   @apply text-lg md:text-xl;
}
.heading-lg {
   @apply text-xl md:text-2xl;
}
.heading-xl {
   @apply text-2xl md:text-3xl;
}
.heading-2xl {
   @apply text-3xl md:text-4xl;
}
.heading-3xl {
   @apply text-4xl md:text-5xl;
}
</style>
