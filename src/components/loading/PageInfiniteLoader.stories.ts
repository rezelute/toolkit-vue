import type { Meta, StoryObj } from "@storybook/vue3-vite"
import PageInfiniteLoader from "./PageInfiniteLoader.vue"

const meta = {
   title: "Feedback/PageInfiniteLoader",
   component: PageInfiniteLoader,
   tags: ["autodocs"],
   argTypes: {
      isLoading: { control: "boolean" },
      color: { control: "color", description: "Bar color" },
      height: { control: "text", description: "Bar height (e.g. '5px', '8px')" },
   },
   args: {
      isLoading: true,
      color: "#35a626",
      height: "5px",
   },
} satisfies Meta<typeof PageInfiniteLoader>

export default meta

type Story = StoryObj<typeof meta>

export const Loading: Story = {
   args: {
      isLoading: true,
      color: "#35a626",
      height: "5px",
   },
}

export const CustomColorAndHeight: Story = {
   args: {
      isLoading: true,
      color: "#e63946",
      height: "8px",
   },
}

export const NotLoading: Story = {
   args: {
      isLoading: false,
   },
}
