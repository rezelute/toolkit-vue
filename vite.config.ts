// import AutoImport from "unplugin-auto-import/vite";
import ui from "@nuxt/ui/vite"
import vue from "@vitejs/plugin-vue"
import { fileURLToPath, URL } from "node:url"
import path from "path"
import copy from "rollup-plugin-copy"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import { configDefaults } from "vitest/config"

// Use standard localhost and default port for development
const envHost = "localhost"
const port = 5173

// https://vite.dev/config/
export default defineConfig({
   server: {
      host: envHost,
      port: port,
      strictPort: true, // Ensure it always uses port 5173, and not another port
   },
   // Build the library for use in other projects
   build: {
      lib: {
         entry: {
            "components/index": path.resolve(__dirname, "src/components/index.ts"),
            "stores/index": path.resolve(__dirname, "src/stores/index.ts"),
            "composables/index": path.resolve(__dirname, "src/composables/index.ts"),
            "utils/index": path.resolve(__dirname, "src/utils/index.ts"),
            "content/index": path.resolve(__dirname, "src/content/index.ts"),
            "types/index": path.resolve(__dirname, "src/types/index.ts"),
         },
         name: "ToolkitVue",
         formats: ["es"],
      },
      rollupOptions: {
         plugins: [
            // manually copy tailwindcss config file to dist folder
            copy({
               targets: [
                  { src: "src/assets/styles/tailwind.css", dest: "dist" },
                  { src: "src/assets/styles/tailwind-setup.css", dest: "dist" },
                  { src: "src/assets/styles/tailwind-utilities.css", dest: "dist" },
                  { src: "src/assets/styles/tailwind-source.css", dest: "dist" },
                  { src: "src/assets/styles/spacing.token.css", dest: "dist" },
               ],
               verbose: true, // Optional: logs output
               hook: "writeBundle", // Ensures it runs after build output
            }),
         ],
         // input: "src/index.ts", // Entry point
         // When we mark these as an external dependency,
         // we tell Rollup not to include them in the final output bundle because the consumer is expected to provide it externally
         external: (id) =>
            ["vue", "pinia", "tailwindcss", "zod"].includes(id) || id.startsWith("@nuxt/ui"),
         output: {
            // References these as global variables provided by the consuming application
            globals: {
               vue: "Vue",
               pinia: "Pinia",
               "@nuxt/ui": "NuxtUI",
            },
         },
      },
   },
   plugins: [
      vue(),
      // @nuxt/ui's Vite plugin wraps Tailwind CSS v4 processing itself (bundles @tailwindcss/vite
      // internally) — no separate tailwindcss() plugin needed alongside it.
      // Nuxt UI components (<UButton>, <UIcon>, ...) are used with no import statement at all —
      // component/composable auto-import is Nuxt UI's own tested, documented path, and it's the
      // only one that correctly resolves components (like Icon) that ship a Nuxt-flavored and a
      // plain-Vue-flavored implementation: the plain-Vue one has no public explicit-import path,
      // only the auto-import resolver picks it correctly. See getting-started/installation/vue.
      ui({
         // No vue-router dependency — this library has no routing/pages of its own. Must be
         // matched by `app.use(ui, { router: false })` in .storybook/preview.ts too; this
         // build-time flag alone doesn't stop the runtime plugin from expecting a router.
         router: false,
         icon: {
            clientBundle: { scan: true },
         },
         // One override cascading to every component's default size, same as the primary color.
         theme: {
            defaultVariants: {
               size: "xl",
            },
         },
         // Skeleton defaults to bg-elevated (neutral-100), bump it to bg-accented (neutral-200) for a visibly darker pulse
         ui: {
            skeleton: {
               base: "bg-accented",
            },
         },
      }),
      dts({
         // use app tsconfig (not root) so vue/dom types are included
         tsconfigPath: "./tsconfig.app.json",
         // strip the src/ prefix from output paths so d.ts files land in dist/ not dist/src/
         entryRoot: path.resolve(__dirname, "src"),
         // without this TS infers rootDir as the project root, causing the src/ prefix in emitted paths
         compilerOptions: { rootDir: path.resolve(__dirname, "src") },
         include: [
            // limit declaration generation to public entry points only — without this, dts would process the whole tsconfig include
            "src/components",
            "src/stores",
            "src/composables",
            "src/utils",
            "src/content",
            "src/types",
            "src/generated_types",
         ],
      }),
   ],
   resolve: {
      dedupe: ["vue"], // force single copy
      alias: {
         "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
   },
   test: {
      // https://vitest.dev/guide/environment.html
      // Future - use 'browser mode' instead of jsdom once stable? (Currently experimental)
      // https://github.com/vitest-dev/vitest/discussions/5828 https://vitest.dev/guide/browser/#browser-option-types
      environment: "jsdom",
      exclude: [...configDefaults.exclude, "**/*.spec.ts"], // exclude vitest config stuff (node_modules etc), e2e folder and spec files
      include: ["**/*.test.ts"], // Only look for files with .test.js or .test.ts extensions
      root: fileURLToPath(new URL("./", import.meta.url)),
   },
})
