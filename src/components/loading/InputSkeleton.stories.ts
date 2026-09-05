import type { Meta, StoryObj } from "@storybook/vue3-vite"
import InputSkeleton from "./InputSkeleton.vue"

const meta = {
   title: "Feedback/InputSkeleton",
   component: InputSkeleton,
   tags: ["autodocs"],
   argTypes: {
      isLoading: { control: "boolean" },
      height: { control: "text" },
   },
   args: {
      isLoading: true,
      height: "2.5rem",
   },
} satisfies Meta<typeof InputSkeleton>

export default meta

type Story = StoryObj<typeof meta>

export const Loading: Story = {
   args: {
      isLoading: true,
      height: "2.5rem",
   },
   // Skeleton's gray blends into the default story background — use white for contrast.
   parameters: {
      background: "#ffffff",
   },
}

export const Loaded: Story = {
   args: {
      isLoading: false,
      height: "2.5rem",
   },
   render: (args) => ({
      components: { InputSkeleton },
      setup: () => ({ args }),
      template: '<InputSkeleton v-bind="args">Loaded content</InputSkeleton>',
   }),
}

export const CustomHeight: Story = {
   args: {
      isLoading: true,
      height: "4rem",
   },
   parameters: {
      background: "#ffffff",
   },
}
