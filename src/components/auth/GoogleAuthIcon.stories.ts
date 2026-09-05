import type { Meta, StoryObj } from "@storybook/vue3-vite"
import GoogleAuthIcon from "./GoogleAuthIcon.vue"

const meta = {
   title: "Icons/GoogleAuthIcon",
   component: GoogleAuthIcon,
   tags: ["autodocs"],
   argTypes: {
      authType: { control: { type: "select", options: ["sign-in", "sign-up"] } },
   },
   args: {
      authType: "sign-in",
   },
} satisfies Meta<typeof GoogleAuthIcon>

export default meta

type Story = StoryObj<typeof meta>

export const SignIn: Story = {
   args: {
      authType: "sign-in",
   },
}

export const SignUp: Story = {
   args: {
      authType: "sign-up",
   },
}
