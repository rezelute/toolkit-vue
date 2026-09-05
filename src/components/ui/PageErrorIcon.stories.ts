import type { Meta, StoryObj } from "@storybook/vue3-vite"
import PageErrorIcon from "./PageErrorIcon.vue"

const meta = {
   title: "Icons/PageErrorIcon",
   component: PageErrorIcon,
   tags: ["autodocs"],
} satisfies Meta<typeof PageErrorIcon>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
