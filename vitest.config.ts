// import { storybookTest } from "@storybook/addon-vitest/vitest-plugin"
// import { playwright } from "@vitest/browser-playwright"
// import path from "node:path"
import { fileURLToPath } from "node:url"
import { configDefaults, defineConfig, mergeConfig } from "vitest/config"
import viteConfig from "./vite.config"

// const dirname =
//    typeof __dirname !== "undefined" ? __dirname : path.dirname(fileURLToPath(import.meta.url))

export default mergeConfig(
   viteConfig,
   defineConfig({
      test: {
         environment: "jsdom",
         exclude: [...configDefaults.exclude, "e2e/**"],
         root: fileURLToPath(new URL("./", import.meta.url)),

         // Storybook play-function tests — uncomment to enable
         // projects: [
         //    {
         //       extends: true,
         //       plugins: [storybookTest({ configDir: path.join(dirname, ".storybook") })],
         //       test: {
         //          name: "storybook",
         //          browser: {
         //             enabled: true,
         //             headless: true,
         //             provider: playwright({}),
         //             instances: [{ browser: "chromium" }],
         //          },
         //          setupFiles: [".storybook/vitest.setup.ts"],
         //       },
         //    },
         // ],
      },
   })
)
