import "../src/assets/styles/main.css"
import UApp from "@nuxt/ui/components/App.vue"
import ui from "@nuxt/ui/vue-plugin"
import { setup } from "@storybook/vue3"
import type { Preview } from "@storybook/vue3-vite"
import { MINIMAL_VIEWPORTS } from "storybook/viewport"
import { onMounted, onUnmounted } from "vue"

// Setup Vue plugins globally for all stories.
// Theming is Nuxt UI's own default via main.css's `@import "@nuxt/ui"` — no preset to configure
// here. Dark mode keys off the `.dark` class, matched by the decorator below.
setup((app) => {
   // This library has no routing/pages of its own, so no vue-router dependency — `router: false`
   // here (matching vite.config.ts's build-time `ui({ router: false })`) tells Nuxt UI not to
   // expect one, instead of silently defaulting to real router integration.
   app.use(ui, { router: false })
})

const preview: Preview = {
   decorators: [
      // Applies dark mode class to <html> when darkMode parameter is set — Nuxt UI's dark mode
      // is built around the same `.dark`-class convention.
      (story, context) => {
         const isDarkMode = !!context.parameters.darkMode

         return {
            components: { story },
            setup() {
               onMounted(() => {
                  document.documentElement.classList.toggle("dark", isDarkMode)
               })
               onUnmounted(() => {
                  document.documentElement.classList.remove("dark")
               })
            },
            template: `<story />`,
         }
      },
      // Nuxt UI's <UApp> sets up global config and is required for Toast, Tooltip, and
      // programmatic overlays (UModal/USlideover) to work — wrap every story with it, the same
      // way a real consumer app wraps its root. Imported explicitly since Nuxt UI's auto-import
      // only scans compiled .vue templates, not this runtime-compiled template string.
      (story) => ({
         components: { story, UApp },
         template: `<UApp><story /></UApp>`,
      }),
      // Wraps every story in the same off-white background the consumer app uses,
      // so Cards and other surface components are visible against the page. Some content reads
      // poorly against that background though — e.g. USkeleton's default `bg-elevated` is a
      // neutral-100 gray nearly identical to #f5f5f5 — so stories can opt into a different
      // background via `parameters.background` when they need the contrast.
      (story, context) => {
         const { layout, minHeight, padding, background } = context.parameters
         const isFullscreen = layout === "fullscreen"

         const height = minHeight || (isFullscreen ? "100vh" : "auto")
         const pad = isFullscreen ? "0" : padding || "1rem"
         const bg = background || "#f5f5f5"

         return {
            components: { story },
            template: `<div style="min-height:${height}; padding:${pad}; background:${bg};"><story /></div>`,
         }
      },
   ],
   parameters: {
      viewport: {
         options: MINIMAL_VIEWPORTS,
      },
      initialGlobals: {
         viewport: { value: "ipad", isRotated: false },
      },

      controls: {
         matchers: {
            color: /(background|color)$/i,
            date: /Date$/i,
         },
      },

      a11y: {
         // 'todo' - show a11y violations in the test UI only
         // 'error' - fail CI on a11y violations
         // 'off' - skip a11y checks entirely
         test: "todo",
      },
   },
}

export default preview
