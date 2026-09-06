<template>
   <UCard>
      <template #header>
         <slot name="header">
            <h2 class="heading-lg heading-mb-sm">{{ headingText }}</h2>
         </slot>
      </template>
      <!-- Change email form -->
      <div v-if="!isEmailSent">
         <UForm :schema="schema" :state="state" class="vstack-form" @submit="onSubmit">
            <UFormField name="email" label="Enter your new email">
               <UInput
                  v-model="state.email"
                  placeholder="Email"
                  class="w-full"
                  data-test="auth-email-field"
               />
            </UFormField>
            <p class="text-sm">
               You will receive an email to your old email to verify your new email address. Please
               click on the email link to update your email.
            </p>
            <UButton label="Change email" type="submit" block :loading="isLoading" />
         </UForm>
      </div>
      <!-- Email sent -->
      <ActionConfirmMsg v-else icon="i-lucide-mail" class="w-full max-w-lg mx-auto">
         <p>
            <span class="block text-wrap">We have sent a verification email to:</span>
            <strong class="text-primary break-all px-2">{{ submittedEmail }}</strong>
            <span class="block mt-8">
               Please check the inbox of your new email and click on the verification link to change
               your email.
            </span>
         </p>
      </ActionConfirmMsg>
   </UCard>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
import { z } from "zod"
import { emailSchema } from "@/utils"
import ActionConfirmMsg from "../feedback/ActionConfirmMsg.vue"

// props, emits & slots
// -----------------------------------------
defineSlots<{
   header?: () => unknown
}>()
const emits = defineEmits<{
   (e: "requestEmailChange", payload: { email: string }): void
}>()
const props = withDefaults(
   defineProps<{
      isEmailSent: boolean
      isLoading?: boolean
      headingText?: string
      /** Pre-fill the email field, e.g. with the user's current email. */
      initialEmail?: string
   }>(),
   {
      isLoading: false,
      headingText: "Change your email",
      initialEmail: "",
   }
)

// form state
// -----------------------------------------
const schema = z.object({ email: emailSchema })
const state = reactive({ email: props.initialEmail })
const submittedEmail = ref("")

// methods
// -----------------------------------------
// event.data is UForm's validated result, already trimmed by emailSchema.
function onSubmit(event: { data: z.infer<typeof schema> }) {
   submittedEmail.value = event.data.email
   emits("requestEmailChange", { email: event.data.email })
}
</script>

<style scoped></style>
