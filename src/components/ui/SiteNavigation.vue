<template>
   <header :class="headerClasses">
      <div :class="innerClasses">
         <nav aria-label="Top navigation bar" class="flex items-center h-full gap-4 p-1">
            <div class="flex items-center h-full py-2 shrink-0 overflow-hidden">
               <slot name="logo" />
            </div>
            <div class="flex items-center gap-3 ms-auto">
               <slot name="action-items" />
               <UButton
                  icon="i-lucide-menu"
                  variant="ghost"
                  class="rounded-full"
                  square
                  aria-label="Open navigation menu"
                  aria-haspopup="true"
                  data-test="sitenav-toggle-btn"
                  @click="drawerOpen = true"
               />
            </div>
         </nav>
      </div>
   </header>

   <!-- Spacer only needed when fixed, since fixed elements leave the normal flow -->
   <div v-if="needsSpacer" :class="navHeight" aria-hidden="true" />

   <USlideover
      v-model:open="drawerOpen"
      side="right"
      aria-label="Navigation menu panel"
      :ui="{
         // USlideover sets no z-index of its own, so our header's z-header above was winning
         // the stacking order and covering the drawer wherever they overlap. z-drawer is the
         // next tier up in the shared stacking scale — see tokens.css.
         overlay: 'z-drawer',
         content: `${drawerWidth} z-drawer`,
      }"
   >
      <template #header>
         <slot name="drawer-logo" />
         <UButton
            icon="i-lucide-x"
            variant="ghost"
            color="neutral"
            class="ms-auto rounded-full"
            square
            aria-label="Close navigation menu"
            @click="closeDrawer"
         />
      </template>

      <template #body>
         <nav aria-label="Main navigation" class="flex flex-col gap-1">
            <slot name="menu-items" :close="closeDrawer" />
         </nav>

         <div
            v-if="$slots['menu-footer']"
            class="mt-20 border-t border-default pt-4 pb-2 flex flex-col gap-1"
         >
            <slot name="menu-footer" :close="closeDrawer" />
         </div>
      </template>
   </USlideover>
</template>

<script setup lang="ts">
import { computed } from "vue"

interface SiteNavigationProps {
   /**
    * Controls how the nav is positioned in the document.
    * - 'fixed'  → pinned to top, requires spacer (handled internally)
    * - 'sticky' → sticks on scroll, no spacer needed (in normal flow)
    * - 'static' → normal document flow, no spacer needed
    */
   position?: "fixed" | "sticky" | "static"
   navHeight?: string
   /** Show a border beneath the nav */
   border?: boolean
   /** Add a subtle drop shadow (alternative or complement to border) */
   shadow?: boolean
   /** Frosted glass effect — applies backdrop-blur + semi-transparent bg */
   frosted?: boolean
   /** Constrain inner content to a max-width container, or go full-bleed */
   contained?: boolean
   /**
    * Override the inner container's width/max-width classes.
    * When provided, replaces the default `container mx-auto` from `contained`.
    * Example: `"max-w-7xl mx-auto"` or `"max-w-screen-xl mx-auto"`
    */
   containerClass?: string
   drawerWidth?: string
}

defineSlots<{
   logo?: () => unknown
   "action-items"?: () => unknown
   "drawer-logo"?: () => unknown
   "menu-items"?: (props: { close: () => void }) => unknown
   "menu-footer"?: (props: { close: () => void }) => unknown
}>()
const props = withDefaults(defineProps<SiteNavigationProps>(), {
   position: "fixed",
   navHeight: "h-16",
   border: true,
   shadow: false,
   frosted: false,
   contained: true,
   drawerWidth: "w-100!",
})

const drawerOpen = defineModel<boolean>("drawerOpen", { default: false })

function closeDrawer() {
   drawerOpen.value = false
}

const headerClasses = computed(() => [
   // Positioning
   props.position === "fixed" && "fixed top-0 left-0 right-0 z-header",
   props.position === "sticky" && "sticky top-0 z-header",
   props.position === "static" && "relative",

   props.navHeight,

   // Background
   props.frosted ? "bg-default/80 backdrop-blur-md" : "bg-default",

   // Border
   props.border && "border-b border-default",

   // Shadow
   props.shadow && "shadow-md",
])

const innerClasses = computed(() => [
   "h-full px-4",
   props.containerClass ?? (props.contained && "container mx-auto"),
])

// Only fixed positioning requires a spacer — sticky/static are in normal flow
const needsSpacer = computed(() => props.position === "fixed")
</script>
