import type { Meta, StoryObj } from "@storybook/vue3-vite"
import DeleteAccountRequest from "./DeleteAccountRequest.vue"

const meta = {
   title: "Account/DeleteAccountRequest",
   component: DeleteAccountRequest,
   tags: ["autodocs"],
   argTypes: {
      isDeleteEmailSent: { control: "boolean" },
      isLoading: { control: "boolean" },
   },
   args: {
      isDeleteEmailSent: false,
      isLoading: false,
   },
} satisfies Meta<typeof DeleteAccountRequest>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      isDeleteEmailSent: false,
      isLoading: false,
   },
}

export const Loading: Story = {
   args: {
      isDeleteEmailSent: false,
      isLoading: true,
   },
}

export const EmailSent: Story = {
   args: {
      isDeleteEmailSent: true,
      isLoading: false,
   },
}
