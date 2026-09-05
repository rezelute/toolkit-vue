import type { Meta, StoryObj } from "@storybook/vue3-vite"
import ActionConfirmMsg from "./ActionConfirmMsg.vue"

const meta = {
   title: "Feedback/ActionConfirmMsg",
   component: ActionConfirmMsg,
   tags: ["autodocs"],
   argTypes: {
      icon: { control: "text" },
   },
   args: {
      icon: "i-lucide-mail",
   },
} satisfies Meta<typeof ActionConfirmMsg>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      icon: "i-lucide-mail",
   },
}

export const CustomIcon: Story = {
   args: {
      icon: "i-lucide-check-circle",
   },
}
