import type { Meta, StoryObj } from "@storybook/vue3-vite"
import DialogLoader from "./DialogLoader.vue"

const meta = {
   title: "Feedback/DialogLoader",
   component: DialogLoader,
   tags: ["autodocs"],
   argTypes: {
      visible: { control: "boolean" },
      headerText: { control: "text" },
      loadingText: { control: "text" },
   },
   args: {
      visible: false,
      headerText: "Please Wait",
      loadingText: "Loading, please wait...",
   },
} satisfies Meta<typeof DialogLoader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      visible: true,
      headerText: "Please Wait",
      loadingText: "Loading, please wait...",
   },
}

export const Hidden: Story = {
   args: {
      visible: false,
      headerText: "Please Wait",
      loadingText: "",
   },
}

export const WithNoText: Story = {
   args: {
      visible: true,
      headerText: "Processing",
      loadingText: "",
   },
}

export const CustomHeader: Story = {
   args: {
      visible: true,
      headerText: "Custom Header Example",
      loadingText: "Almost done...",
   },
}
