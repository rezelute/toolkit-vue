import type { Meta, StoryObj } from "@storybook/vue3-vite"
import AppErrorInfo from "./AppErrorInfo.vue"

const meta = {
   title: "Feedback/AppErrorInfo",
   component: AppErrorInfo,
   tags: ["autodocs"],
   argTypes: {
      errorText: { control: "text" },
   },
   args: {
      errorText: undefined,
   },
} satisfies Meta<typeof AppErrorInfo>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      errorText: undefined,
   },
}

export const WithCustomErrorText: Story = {
   args: {
      errorText: "Custom error message.",
   },
}
