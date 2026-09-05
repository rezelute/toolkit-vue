import type { Meta, StoryObj } from "@storybook/vue3-vite"
import UserAccountInfo from "./UserAccountInfo.vue"

const meta = {
   title: "Account/UserAccountInfo",
   component: UserAccountInfo,
   tags: ["autodocs"],
   argTypes: {
      isLoading: { control: "boolean" },
      userId: { control: "text" },
      userEmail: { control: "text" },
   },
   args: {
      isLoading: false,
      userId: "1234567890abcdef",
      userEmail: "user@example.com",
   },
} satisfies Meta<typeof UserAccountInfo>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      isLoading: false,
      userId: "1234567890abcdef",
      userEmail: "user@example.com",
   },
}

export const Loading: Story = {
   args: {
      isLoading: true,
      userId: "",
      userEmail: "",
   },
}

export const NoEmail: Story = {
   args: {
      isLoading: false,
      userId: "1234567890abcdef",
      userEmail: "",
   },
}
