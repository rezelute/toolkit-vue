<template>
   <UCard class="max-w-xl w-full">
      <template #header>
         <h1 class="heading-lg heading-mb-sm">
            {{ title }}
         </h1>
      </template>
      <!-- Notice banner (e.g. invite-only message, maintenance warning) -->
      <slot name="notice" />

      <!-- OAuth providers (e.g. Google sign-in button) -->
      <slot name="oauth-providers" />

      <!-- Divider — only rendered when the oauth-providers slot is used -->
      <div v-if="slots['oauth-providers']" class="flex items-center my-10">
         <hr class="flex-1 border-default" />
         <span class="px-4 text-muted uppercase">Or</span>
         <hr class="flex-1 border-default" />
      </div>

      <UForm
         :schema="schema"
         :state="state"
         class="vstack-form"
         data-test="auth-form"
         @submit="onSubmit"
         @error="onError"
      >
         <!-- Description text (e.g. passwordless explanation) -->
         <slot name="description" />

         <UFormField name="email">
            <UInput
               v-model="state.email"
               placeholder="Email"
               class="w-full"
               data-test="auth-email-input"
            />
         </UFormField>

         <!-- Additional fields (e.g. captcha). isSubmitClicked is passed down so slot content
              knows when the user first attempted submission — use it to delay showing
              validation errors until after the first submit click. -->
         <slot name="additional-fields" :isSubmitClicked="isSubmitClicked" />

         <UButton
            :label="submitText"
            type="submit"
            block
            :loading="loading"
            data-test="auth-send-code-button"
         />
      </UForm>
   </UCard>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
import { z } from "zod"
import { emailSchema } from "@/utils"

// props, emits & slots
// -----------------------------------------
const slots = defineSlots<{
   notice?: () => unknown
   "oauth-providers"?: () => unknown
   description?: () => unknown
   "additional-fields"?: (props: { isSubmitClicked: boolean }) => unknown
}>()
const emits = defineEmits<{
   (e: "submit", payload: { email: string }): void
}>()

withDefaults(
   defineProps<{
      /** Override the card title */
      title?: string
      /** Override the submit button label */
      submitText?: string
      loading?: boolean
   }>(),
   {
      title: "Sign in",
      submitText: "Sign in",
      loading: false,
   }
)

// form state
// -----------------------------------------
const schema = z.object({ email: emailSchema })
const state = reactive({ email: "" })
const isSubmitClicked = ref(false) // To show validation errors, and passed to #additional-fields

// methods
// -----------------------------------------
// event.data is UForm's validated result, already trimmed by emailSchema.
function onSubmit(event: { data: z.infer<typeof schema> }) {
   isSubmitClicked.value = true
   emits("submit", { email: event.data.email })
}

function onError() {
   isSubmitClicked.value = true
}
</script>

<style scoped></style>
