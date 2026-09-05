import type { Meta, StoryObj } from "@storybook/vue3-vite"
import Heading from "./Heading.vue"

const meta = {
   title: "Typography/Heading",
   component: Heading,
   tags: ["autodocs"],
   argTypes: {
      textSize: {
         control: { type: "select" },
         options: ["sm", "md", "lg", "xl", "2xl", "3xl"],
      },
      tag: {
         control: { type: "select" },
         options: ["h1", "h2", "h3", "h4", "h5", "h6", "div", "span", "p"],
      },
      default: {
         control: false,
      },
   },
   args: {
      textSize: "lg",
      tag: "h2",
      default: "Heading Text",
   },
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   args: {
      textSize: "lg",
      tag: "h2",
      default: "Heading Text",
   },
   render: (args) => ({
      components: { Heading },
      setup: () => ({ args }),
      template: `<Heading tag="h1" v-bind="args">{{ args.default }}</Heading>`,
   }),
}

export const AllSizes: Story = {
   render: () => ({
      components: { Heading },
      template: `
      <div>
        <Heading tag="h1" textSize="sm">Small Heading</Heading>
        <Heading tag="h1" textSize="md">Medium Heading</Heading>
        <Heading tag="h1" textSize="lg">Large Heading</Heading>
        <Heading tag="h1" textSize="xl">XL Heading</Heading>
        <Heading tag="h1" textSize="2xl">2XL Heading</Heading>
        <Heading tag="h1" textSize="3xl">3XL Heading</Heading>
      </div>
    `,
   }),
}

export const CustomTag: Story = {
   args: {
      textSize: "xl",
      tag: "h1",
      default: "Custom Tag H1 Heading",
   },
   render: (args) => ({
      components: { Heading },
      setup: () => ({ args }),
      template: `<Heading tag="h1" v-bind="args">{{ args.default }}</Heading>`,
   }),
}
