import type { Meta, StoryObj } from "@storybook/vue3-vite"
import ChangeEmailRequest from "./ChangeEmailRequest.vue"

const meta = {
   title: "Account/ChangeEmailRequest",
   component: ChangeEmailRequest,
   tags: ["autodocs"],
   argTypes: {
      isEmailSent: { control: "boolean" },
      isLoading: { control: "boolean" },
   },
   args: {
      isEmailSent: false,
      initialEmail: "user@example.com",
      isLoading: false,
   },
} satisfies Meta<typeof ChangeEmailRequest>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      isEmailSent: false,
      initialEmail: "user@example.com",
      isLoading: false,
   },
}

export const Loading: Story = {
   args: {
      isEmailSent: false,
      initialEmail: "user@example.com",
      isLoading: true,
   },
}

export const EmailSent: Story = {
   args: {
      isEmailSent: true,
      initialEmail: "user@example.com",
      isLoading: false,
   },
}

export const InvalidEmail: Story = {
   args: {
      isEmailSent: false,
      initialEmail: "invalid-email",
      isLoading: false,
   },
   parameters: {
      docs: {
         description: {
            story: "Click the button to see the error.",
         },
      },
   },
}
