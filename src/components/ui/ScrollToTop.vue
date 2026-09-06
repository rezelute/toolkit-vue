<template>
   <UButton
      v-if="show"
      class="scroll-to-top-btn rounded-full"
      icon="i-lucide-arrow-up"
      square
      aria-label="Scroll to top"
      @click="scrollToTop"
   />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue"

const show = ref(false)

function handleScroll() {
   show.value = window.scrollY > 0
}

function scrollToTop() {
   window.scrollTo({ top: 0, behavior: "smooth" })
}

onMounted(() => {
   window.addEventListener("scroll", handleScroll)
   handleScroll()
})
onUnmounted(() => {
   window.removeEventListener("scroll", handleScroll)
})
</script>

<style scoped>
.scroll-to-top-btn {
   position: fixed;
   bottom: 0.5rem;
   inset-inline-end: 0.5rem;
   z-index: 1000;
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
</style>
