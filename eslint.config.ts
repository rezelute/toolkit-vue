// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import pluginVitest from "@vitest/eslint-plugin"
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting"
import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript"
import simpleImportSort from "eslint-plugin-simple-import-sort"
// import storybook from "eslint-plugin-storybook"
import pluginVue from "eslint-plugin-vue"

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
   {
      name: "app/files-to-lint",
      files: ["**/*.{ts,mts,tsx,vue}"],
   },

   {
      name: "app/files-to-ignore",
      ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"],
   },

   pluginVue.configs["flat/essential"],
   vueTsConfigs.recommended,

   {
      ...pluginVitest.configs.recommended,
      files: ["src/**/__tests__/*"],
   },

   // simple-import-sort here
   {
      plugins: {
         "simple-import-sort": simpleImportSort,
      },
      rules: {
         "simple-import-sort/imports": [
            "error",
            {
               groups: [
                  // Single group: order is "side effects" → packages → aliases → relatives
                  [
                     "^\\u0000", // side effects first (like polyfills, etc.)
                     "^@?\\w", // packages (starting with a letter or digit)
                     "^@", // aliases (starting with @)
                     "^", // everything else, including ./ and ../
                  ],
               ],
            },
         ],
      },
   },

   skipFormatting,

   // Custom rules
   {
      files: ["**/*.{js,jsx,ts,tsx,vue}"],
      rules: {
         "vue/attributes-order": "warn",
         "vue/attribute-hyphenation": "off",
         "vue/no-use-v-if-with-v-for": ["warn", { allowUsingIterationVar: true }],
         "vue/require-default-prop": "off",
         "vue/prop-name-casing": ["warn", "camelCase"],
         "vue/v-slot-style": "off",
         "vue/multi-word-component-names": "off",
         "vue/no-v-html": "off",
         "vue/enforce-style-attribute": ["error", { allow: ["scoped"] }],
         "no-undef": "off",
         "no-trailing-spaces": ["error", { skipBlankLines: true }],
         camelcase: [
            "off",
            { ignoreImports: true, ignoreGlobals: true, ignoreDestructuring: true },
         ],
         "import/no-cycle": "off",
         "arrow-body-style": "off",
         "prefer-destructuring": ["warn", { object: true, array: false }],
         "one-var": ["error", "never"],
         "no-restricted-syntax": "off",
         "linebreak-style": 0,
         "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
         "no-unused-vars": "off",
         "no-console": ["warn", { allow: ["info", "warn", "error", "clear"] }],
         "no-var": "error",
         "no-param-reassign": ["warn", { props: false }],
         "keyword-spacing": "error",
         "comma-dangle": [
            "error",
            {
               arrays: "always-multiline",
               objects: "always-multiline",
               imports: "always-multiline",
               exports: "always-multiline",
               functions: "never",
            },
         ],
         "import/extensions": "off",
         "prefer-template": "error",
         "no-useless-escape": "warn",
         "@typescript-eslint/no-explicit-any": "off",
         "@typescript-eslint/no-unused-vars": [
            "warn",
            { args: "none", vars: "all", ignoreRestSiblings: true },
         ],
         "@typescript-eslint/no-unused-expressions": "off",
      },
   }
)
