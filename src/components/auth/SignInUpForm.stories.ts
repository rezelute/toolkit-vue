import type { Meta, StoryObj } from "@storybook/vue3-vite"
import GoogleAuthIcon from "./GoogleAuthIcon.vue"
import SignInUpForm from "./SignInUpForm.vue"

const meta = {
   title: "SignInUp/SignInUpForm",
   component: SignInUpForm,
   tags: ["autodocs"],
   argTypes: {
      loading: { control: "boolean" },
   },
   args: {
      loading: false,
   },
} satisfies Meta<typeof SignInUpForm>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {},
}

export const Loading: Story = {
   args: {
      loading: true,
   },
}

/** Override the card title and submit button text via props. */
export const CustomLabels: Story = {
   args: {
      title: "Create your account",
      submitText: "Get started",
   },
}

/**
 * Use the #notice slot to show any banner above the form — invite-only
 * messages, maintenance warnings, beta notices, etc.
 */
export const WithNotice: Story = {
   render: (args) => ({
      components: { SignInUpForm },
      setup() {
         return { args }
      },
      template: `
         <SignInUpForm v-bind="args">
            <template #notice>
               <div style="background:#e0f0ff; border:1px solid #90c0f0; border-radius:6px; padding:0.75rem 1rem; margin-bottom:1rem; font-size:0.9em;">
                  Sign up is currently invite-only during the beta period.
               </div>
            </template>
         </SignInUpForm>
      `,
   }),
   args: {},
   parameters: {
      docs: {
         description: {
            story: "Use the #notice slot for any banner (invite-only, maintenance, etc.).",
         },
      },
   },
}

/**
 * Use the #oauth-providers slot to add third-party auth buttons.
 * The 'Or' divider is rendered automatically when this slot is used.
 */
export const WithGoogleAuth: Story = {
   render: (args) => ({
      components: { SignInUpForm, GoogleAuthIcon },
      setup() {
         return { args }
      },
      template: `
         <SignInUpForm v-bind="args">
            <template #oauth-providers>
               <GoogleAuthIcon />
            </template>
         </SignInUpForm>
      `,
   }),
   args: {},
   parameters: {
      docs: {
         description: {
            story: "Use the #oauth-providers slot to inject OAuth buttons. The 'Or' divider is shown automatically.",
         },
      },
   },
}

/**
 * Use the #description slot to explain the sign-in flow to your users.
 */
export const WithDescription: Story = {
   render: (args) => ({
      components: { SignInUpForm },
      setup() {
         return { args }
      },
      template: `
         <SignInUpForm v-bind="args">
            <template #description>
               <p class="mb-2">
                  This site uses Passwordless Sign-In. Instead of a password, you'll receive
                  a one-time code via email each time you sign in.
               </p>
            </template>
         </SignInUpForm>
      `,
   }),
   args: {},
}

/**
 * Use the #additional-fields slot for extra form inputs (e.g. captcha).
 * The slot exposes `isSubmitClicked` so child fields know when to show validation errors.
 */
export const WithAdditionalFields: Story = {
   render: (args) => ({
      components: { SignInUpForm },
      setup() {
         return { args }
      },
      template: `
         <SignInUpForm v-bind="args">
            <template #additional-fields="{ isSubmitClicked }">
               <div style="text-align: center;">
                  <img src="/src/stories/assets/cloudflare.png" alt="Cloudflare Captcha" style="max-width: 260px; width:100%; margin-bottom: 0.5rem;" />
                  <div style="font-size: 0.9em; color: #888;">
                     Captcha required. Submit clicked: <b>{{ isSubmitClicked ? 'Yes' : 'No' }}</b>
                  </div>
               </div>
            </template>
         </SignInUpForm>
      `,
   }),
   args: {},
   parameters: {
      docs: {
         description: {
            story: "The #additional-fields slot exposes isSubmitClicked so validation timing matches the main form.",
         },
      },
   },
}
