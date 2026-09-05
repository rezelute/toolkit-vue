import type { Meta, StoryObj } from "@storybook/vue3-vite"
import SignInUpVerifyCode from "./SignInUpVerifyCode.vue"

const meta = {
   title: "SignInUp/SignInUpVerifyCode",
   component: SignInUpVerifyCode,
   tags: ["autodocs"],
   argTypes: {
      isSubmittingCode: { control: "boolean" },
      isResendingCode: { control: "boolean" },
      errorMessage: { control: "text" },
      otpLength: { control: "number" },
   },
   args: {
      isSubmittingCode: false,
      isResendingCode: false,
      errorMessage: "",
      otpLength: 6,
   },
} satisfies Meta<typeof SignInUpVerifyCode>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Submitting: Story = {
   args: {
      isSubmittingCode: true,
   },
}

export const Resending: Story = {
   args: {
      isResendingCode: true,
   },
}

// 1. Local invalid code (length < 6)
export const InvalidLength: Story = {
   args: {},
   parameters: {
      docs: {
         description: {
            story: "Shows error for code less than 6 characters (local validation).",
         },
      },
   },
   play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
      const otpInputs = canvasElement.querySelectorAll('[data-test="auth-code-input"] input')
      const code = "123"
      otpInputs.forEach((input, idx) => {
         const el = input as HTMLInputElement
         if (el) {
            el.value = code[idx] || ""
            el.dispatchEvent(new Event("input", { bubbles: true }))
         }
      })
      const submitButton = canvasElement.querySelector(
         '[data-test="auth-verify-button"]'
      ) as HTMLButtonElement | null
      if (submitButton) {
         submitButton.click()
      }
   },
}

// 2. Server error (errorMessage)
export const ServerError: Story = {
   args: {
      errorMessage: "The code you entered is incorrect. You have 2 attempts left.",
   },
   parameters: {
      docs: {
         description: {
            story: "Shows a server-side error message via the errorMessage prop.",
         },
      },
   },
   play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
      const otpInputs = canvasElement.querySelectorAll('[data-test="auth-code-input"] input')
      const code = "123456"
      otpInputs.forEach((input, idx) => {
         const el = input as HTMLInputElement
         if (el) {
            el.value = code[idx] || ""
            el.dispatchEvent(new Event("input", { bubbles: true }))
         }
      })
      const submitButton = canvasElement.querySelector(
         '[data-test="auth-verify-button"]'
      ) as HTMLButtonElement | null
      if (submitButton) {
         submitButton.click()
      }
   },
}
// 3. Valid code (no error, 6 digits)
export const ValidCode: Story = {
   args: {
      codeInputErrorMessage: "",
   },
   parameters: {
      docs: {
         description: {
            story: "Valid code entered (6 digits, no error message).",
         },
      },
   },
   play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
      const otpInputs = canvasElement.querySelectorAll('[data-test="auth-code-input"] input')
      const code = "123456"
      otpInputs.forEach((input, idx) => {
         const el = input as HTMLInputElement
         if (el) {
            el.value = code[idx] || ""
            el.dispatchEvent(new Event("input", { bubbles: true }))
         }
      })
      const submitButton = canvasElement.querySelector(
         '[data-test="auth-verify-button"]'
      ) as HTMLButtonElement | null
      if (submitButton) {
         submitButton.click()
      }
   },
}

/** Override the card title via the title prop. */
export const CustomTitle: Story = {
   args: {
      title: "Check your email",
   },
}

/** Use a 4-digit OTP instead of the default 6. */
export const FourDigitCode: Story = {
   args: {
      otpLength: 4,
   },
   parameters: {
      docs: {
         description: { story: "Set otpLength to match whatever code length your backend sends." },
      },
   },
}

/** Use slots to provide context-specific copy. */
export const WithSlotContent: Story = {
   render: (args) => ({
      components: { SignInUpVerifyCode },
      setup() {
         return { args }
      },
      template: `
         <SignInUpVerifyCode v-bind="args">
            <template #description>
               <p>To finish signing in, enter the code that was emailed to you. The code is only valid for 10 minutes.</p>
            </template>
            <template #resend-description>
               <p>Didn't receive an email? Check your Junk folder or request a new code below.</p>
            </template>
         </SignInUpVerifyCode>
      `,
   }),
   args: {},
   parameters: {
      docs: {
         description: {
            story: "Use #description and #resend-description slots to provide app-specific copy.",
         },
      },
   },
}
