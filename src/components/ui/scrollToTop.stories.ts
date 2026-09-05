import type { Meta, StoryObj } from "@storybook/vue3-vite"
import ScrollToTop from "./scrollToTop.vue"

const meta = {
   title: "Feedback/ScrollToTop",
   component: ScrollToTop,
   tags: ["autodocs"],
} satisfies Meta<typeof ScrollToTop>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
   render: () => ({
      components: { ScrollToTop },
      template: `
         <div style="height: 2000px; padding-top: 1rem; background: linear-gradient(white, #eee);">
            <p>Scroll down to see the button appear in the bottom right corner.</p>
            <ScrollToTop />
         </div>
      `,
   }),
}
