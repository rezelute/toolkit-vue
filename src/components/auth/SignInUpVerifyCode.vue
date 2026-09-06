<template>
   <div class="px-4 py-8 sm:p-8">
      <!-- Back button sits above the card, outside it -->
      <div class="max-w-xl mx-auto mb-2">
         <UButton
            type="button"
            variant="ghost"
            icon="i-lucide-arrow-left"
            label="Start over"
            aria-label="Restart authentication process"
            data-test="auth-change-email"
            @click="onRestartFlow"
         />
      </div>

      <UCard class="max-w-xl w-full mx-auto">
         <template #header>
            <h1 class="heading-lg heading-mb-sm">{{ title }}</h1>
         </template>
         <form class="vstack-md" @submit.prevent="onCodeSubmit">
            <!-- Code input & Submit -->
            <div class="vstack-form">
               <!-- Description text (e.g. explain the code and its expiry time) -->
               <slot name="description" />

               <UFormField
                  class="mb-4"
                  :error="showError ? codeValidationMessage : ''"
                  data-test="auth-error-message"
               >
                  <div class="flex justify-center sm:justify-start">
                     <UPinInput
                        id="magic-code-input"
                        v-model="userMagicCode"
                        :length="otpLength"
                        otp
                        required
                        data-test="auth-code-input"
                     />
                  </div>
               </UFormField>
               <UButton
                  label="Submit code"
                  class="w-full sm:w-fit justify-center"
                  type="submit"
                  :loading="isSubmittingCode"
                  :disabled="isResendingCode"
                  data-test="auth-verify-button"
               />
            </div>

            <USeparator />

            <!-- Code re-send -->
            <div class="vstack-form">
               <!-- Resend description (e.g. junk folder reminder) -->
               <slot name="resend-description" />

               <UButton
                  class="w-full sm:w-fit"
                  label="Resend code"
                  variant="outline"
                  type="button"
                  :loading="isResendingCode"
                  :disabled="isSubmittingCode"
                  data-test="auth-resend-code"
                  @click="onResendCode"
               />
            </div>
         </form>
      </UCard>
   </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"

// props, emits & slots
// -----------------------------------------
defineSlots<{
   description?: () => unknown
   "resend-description"?: () => unknown
}>()
const emits = defineEmits(["codeSubmit", "codeResendSubmit", "restartFlow"])
const props = withDefaults(
   defineProps<{
      /** Override the card title */
      title?: string
      /** Length of the OTP code */
      otpLength?: number
      /** Server-side error message (e.g. invalid or expired code) */
      errorMessage?: string
      isSubmittingCode: boolean
      isResendingCode: boolean
   }>(),
   {
      title: "Input validation code",
      otpLength: 6,
   }
)

// state
// -----------------------------------------
const userMagicCode = ref<string[]>([]) // user input code — UPinInput's v-model is an array of characters
const isSubmitClicked = ref(false) // To show validation errors

// computed
// -----------------------------------------
const enteredCode = computed(() => userMagicCode.value.join(""))

const isCodeLengthValid = computed(() => {
   return enteredCode.value.length === props.otpLength
})

const codeValidationMessage = computed(() => {
   if (!isCodeLengthValid.value) {
      return `The code must be ${props.otpLength} characters long.`
   }
   if (props.errorMessage) {
      return props.errorMessage
   }
   return ""
})

const showError = computed(() => {
   return isSubmitClicked.value && codeValidationMessage.value.length > 0
})

// methods
// -----------------------------------------
/** If the code is valid, we tell the parent so it can redirect to the home page  */
async function onCodeSubmit() {
   isSubmitClicked.value = true

   // if the code is not valid, do not emit
   if (!isCodeLengthValid.value) {
      return
   }

   emits("codeSubmit", enteredCode.value)
}

//** Resend OTP code which might have not been received by the user */
async function onResendCode() {
   emits("codeResendSubmit")
}

function onRestartFlow() {
   emits("restartFlow")
}
</script>

<style scoped></style>
