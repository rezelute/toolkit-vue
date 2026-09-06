import type { Meta, StoryObj } from "@storybook/vue3-vite"

/* No component to bind to — heading-lg/xl/2xl are plain CSS utility classes (see
   tailwind-utilities.css), applied directly to whatever native tag fits the document outline. */
const meta = {
   title: "Typography/Heading",
   tags: ["autodocs"],
   argTypes: {
      size: {
         control: { type: "select" },
         options: ["lg", "xl", "2xl"],
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
      size: "lg",
      tag: "h2",
      default: "Heading Text",
   },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   render: (args) => ({
      setup: () => ({ args }),
      template: `<component :is="args.tag" :class="'heading-' + args.size">{{ args.default }}</component>`,
   }),
}

export const AllSizes: Story = {
   render: () => ({
      template: `
      <div>
        <h1 class="heading-lg">Large Heading</h1>
        <h1 class="heading-xl">XL Heading</h1>
        <h1 class="heading-2xl">2XL Heading</h1>
      </div>
    `,
   }),
}

export const CustomTag: Story = {
   args: {
      size: "xl",
      tag: "h1",
      default: "Custom Tag H1 Heading",
   },
   render: (args) => ({
      setup: () => ({ args }),
      template: `<component :is="args.tag" :class="'heading-' + args.size">{{ args.default }}</component>`,
   }),
}
