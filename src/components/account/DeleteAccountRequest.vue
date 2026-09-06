<template>
   <!-- Delete account request -->
   <UCard>
      <template #header>
         <slot name="header">
            <h2 class="heading-lg heading-mb-sm">{{ headingText }}</h2>
         </slot>
      </template>
      <div v-if="!props.isDeleteEmailSent" class="vstack-form">
         <p>
            You will receive an email to verify your account deletion. Please click on the email
            link to delete your account.
         </p>

         <UButton
            label="Send deletion email"
            type="button"
            block
            :loading="props.isLoading"
            @click="sendDeleteEmail"
         />
      </div>

      <ActionConfirmMsg v-else icon="i-lucide-mail">
         <p>
            We have sent you an email to verify your account deletion. Please check your inbox and
            click on the verification link.
         </p>
      </ActionConfirmMsg>
   </UCard>
</template>

<script setup lang="ts">
import ActionConfirmMsg from "../feedback/ActionConfirmMsg.vue"

// props, emits & slots
// -----------------------------------------
defineSlots<{
   header?: () => unknown
}>()
const props = withDefaults(
   defineProps<{
      isDeleteEmailSent: boolean
      isLoading?: boolean
      headingText?: string
   }>(),
   {
      isLoading: false,
      headingText: "Delete your account",
   }
)
const emits = defineEmits(["sendDeleteEmail"])

// methods
// -----------------------------------------
function sendDeleteEmail() {
   emits("sendDeleteEmail")
}
</script>

<style scoped></style>
