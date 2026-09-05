import type { Meta, StoryObj } from "@storybook/vue3-vite"
import SectionPattern from "./SectionPattern.vue"

const meta = {
   title: "UI/SectionPattern",
   component: SectionPattern,
   tags: ["autodocs"],
   argTypes: {
      pattern: {
         control: { type: "select" },
         options: [
            "grid-orbs",
            "aurora",
            "topographic",
            "rays",
            "noise",
            "geometric",
            "synthwave",
            "diagonal",
            "dots",
            "scanlines",
            "mesh",
         ],
      },
   },
   args: {
      pattern: "grid-orbs",
   },
} satisfies Meta<typeof SectionPattern>

export default meta

type Story = StoryObj<typeof meta>

const sectionStyle = (width: string, height = "220px") =>
   `position: relative; width: ${width}; height: ${height}; overflow: hidden; border-radius: 12px; background: var(--ui-color-neutral-900, #1a1a2e); display: flex; align-items: center; justify-content: center;`

const textStyle =
   "position: relative; z-index: 10; text-align: center; color: var(--ui-color-primary-100, #e0e7ff); padding: 2rem;"

export const GridOrbs: Story = {
   args: { pattern: "grid-orbs" },
   render: (args) => ({
      components: { SectionPattern },
      setup: () => ({ args, sectionStyle, textStyle }),
      template: `
         <div :style="sectionStyle('100%', '260px')">
            <SectionPattern v-bind="args" />
            <div :style="textStyle">
               <h2 style="font-size: 1.75rem; font-weight: 700; margin: 0 0 0.5rem;">Grid Orbs</h2>
               <p style="opacity: 0.7; margin: 0;">A grid with glowing orb overlays</p>
            </div>
         </div>
      `,
   }),
}

export const Aurora: Story = {
   args: { pattern: "aurora" },
   render: (args) => ({
      components: { SectionPattern },
      setup: () => ({ args, sectionStyle, textStyle }),
      template: `
         <div :style="sectionStyle('75%', '280px')">
            <SectionPattern v-bind="args" />
            <div :style="textStyle">
               <h2 style="font-size: 1.75rem; font-weight: 700; margin: 0 0 0.5rem;">Aurora</h2>
               <p style="opacity: 0.7; margin: 0;">Soft blurred colour blooms like the northern lights</p>
            </div>
         </div>
      `,
   }),
}

export const Topographic: Story = {
   args: { pattern: "topographic" },
   render: (args) => ({
      components: { SectionPattern },
      setup: () => ({ args, sectionStyle, textStyle }),
      template: `
         <div :style="sectionStyle('60%', '240px')">
            <SectionPattern v-bind="args" />
            <div :style="textStyle">
               <h2 style="font-size: 1.75rem; font-weight: 700; margin: 0 0 0.5rem;">Topographic</h2>
               <p style="opacity: 0.7; margin: 0;">Repeating contour rings radiating outward</p>
            </div>
         </div>
      `,
   }),
}

export const Rays: Story = {
   args: { pattern: "rays" },
   render: (args) => ({
      components: { SectionPattern },
      setup: () => ({ args, sectionStyle, textStyle }),
      template: `
         <div :style="sectionStyle('100%', '300px')">
            <SectionPattern v-bind="args" />
            <div :style="textStyle">
               <h2 style="font-size: 1.75rem; font-weight: 700; margin: 0 0 0.5rem;">Rays</h2>
               <p style="opacity: 0.7; margin: 0;">Conic light rays fanning from below the horizon</p>
            </div>
         </div>
      `,
   }),
}

export const Noise: Story = {
   args: { pattern: "noise" },
   render: (args) => ({
      components: { SectionPattern },
      setup: () => ({ args, sectionStyle, textStyle }),
      template: `
         <div :style="sectionStyle('50%', '240px')">
            <SectionPattern v-bind="args" />
            <div :style="textStyle">
               <h2 style="font-size: 1.75rem; font-weight: 700; margin: 0 0 0.5rem;">Noise</h2>
               <p style="opacity: 0.7; margin: 0;">Fractal noise texture with radial colour bloom</p>
            </div>
         </div>
      `,
   }),
}

export const Geometric: Story = {
   args: { pattern: "geometric" },
   render: (args) => ({
      components: { SectionPattern },
      setup: () => ({ args, sectionStyle, textStyle }),
      template: `
         <div :style="sectionStyle('80%', '280px')">
            <SectionPattern v-bind="args" />
            <div :style="textStyle">
               <h2 style="font-size: 1.75rem; font-weight: 700; margin: 0 0 0.5rem;">Geometric</h2>
               <p style="opacity: 0.7; margin: 0;">Layered concentric circles in opposing corners</p>
            </div>
         </div>
      `,
   }),
}

export const Synthwave: Story = {
   args: { pattern: "synthwave" },
   render: (args) => ({
      components: { SectionPattern },
      setup: () => ({ args, sectionStyle, textStyle }),
      template: `
         <div :style="sectionStyle('100%', '320px')">
            <SectionPattern v-bind="args" />
            <div :style="textStyle">
               <h2 style="font-size: 1.75rem; font-weight: 700; margin: 0 0 0.5rem;">Synthwave</h2>
               <p style="opacity: 0.7; margin: 0;">Retro sun, animated perspective grid, and star field</p>
            </div>
         </div>
      `,
   }),
}

export const Diagonal: Story = {
   args: { pattern: "diagonal" },
   render: (args) => ({
      components: { SectionPattern },
      setup: () => ({ args, sectionStyle, textStyle }),
      template: `
         <div :style="sectionStyle('65%', '220px')">
            <SectionPattern v-bind="args" />
            <div :style="textStyle">
               <h2 style="font-size: 1.75rem; font-weight: 700; margin: 0 0 0.5rem;">Diagonal</h2>
               <p style="opacity: 0.7; margin: 0;">Repeating diagonal stripe hatching</p>
            </div>
         </div>
      `,
   }),
}

export const Dots: Story = {
   args: { pattern: "dots" },
   render: (args) => ({
      components: { SectionPattern },
      setup: () => ({ args, sectionStyle, textStyle }),
      template: `
         <div :style="sectionStyle('55%', '240px')">
            <SectionPattern v-bind="args" />
            <div :style="textStyle">
               <h2 style="font-size: 1.75rem; font-weight: 700; margin: 0 0 0.5rem;">Dots</h2>
               <p style="opacity: 0.7; margin: 0;">Uniform dot grid with a soft glow accent</p>
            </div>
         </div>
      `,
   }),
}

export const Scanlines: Story = {
   args: { pattern: "scanlines" },
   render: (args) => ({
      components: { SectionPattern },
      setup: () => ({ args, sectionStyle, textStyle }),
      template: `
         <div :style="sectionStyle('70%', '240px')">
            <SectionPattern v-bind="args" />
            <div :style="textStyle">
               <h2 style="font-size: 1.75rem; font-weight: 700; margin: 0 0 0.5rem;">Scanlines</h2>
               <p style="opacity: 0.7; margin: 0;">Fine horizontal scan lines with a corner radial glow</p>
            </div>
         </div>
      `,
   }),
}

export const Mesh: Story = {
   args: { pattern: "mesh" },
   render: (args) => ({
      components: { SectionPattern },
      setup: () => ({ args, sectionStyle, textStyle }),
      template: `
         <div :style="sectionStyle('85%', '260px')">
            <SectionPattern v-bind="args" />
            <div :style="textStyle">
               <h2 style="font-size: 1.75rem; font-weight: 700; margin: 0 0 0.5rem;">Mesh</h2>
               <p style="opacity: 0.7; margin: 0;">Overlapping blurred blobs forming a colour mesh</p>
            </div>
         </div>
      `,
   }),
}

export const AllPatterns: Story = {
   render: () => ({
      components: { SectionPattern },
      setup: () => ({ sectionStyle, textStyle }),
      template: `
         <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            <div v-for="item in patterns" :key="item.name" :style="sectionStyle(item.width, item.height)">
               <SectionPattern :pattern="item.name" />
               <div :style="textStyle">
                  <h2 style="font-size: 1.5rem; font-weight: 700; margin: 0 0 0.25rem; text-transform: capitalize;">{{ item.label }}</h2>
                  <p style="opacity: 0.65; margin: 0; font-size: 0.9rem;">{{ item.desc }}</p>
               </div>
            </div>
         </div>
      `,
      data: () => ({
         patterns: [
            {
               name: "grid-orbs",
               label: "Grid Orbs",
               width: "100%",
               height: "240px",
               desc: "Grid with glowing orb overlays",
            },
            {
               name: "aurora",
               label: "Aurora",
               width: "75%",
               height: "260px",
               desc: "Soft blurred colour blooms",
            },
            {
               name: "topographic",
               label: "Topographic",
               width: "60%",
               height: "220px",
               desc: "Repeating contour rings",
            },
            {
               name: "rays",
               label: "Rays",
               width: "100%",
               height: "280px",
               desc: "Conic light rays from below the horizon",
            },
            {
               name: "noise",
               label: "Noise",
               width: "50%",
               height: "220px",
               desc: "Fractal noise with colour bloom",
            },
            {
               name: "geometric",
               label: "Geometric",
               width: "80%",
               height: "260px",
               desc: "Layered concentric circles",
            },
            {
               name: "synthwave",
               label: "Synthwave",
               width: "100%",
               height: "300px",
               desc: "Retro sun, animated grid, and stars",
            },
            {
               name: "diagonal",
               label: "Diagonal",
               width: "65%",
               height: "220px",
               desc: "Diagonal stripe hatching",
            },
            {
               name: "dots",
               label: "Dots",
               width: "55%",
               height: "220px",
               desc: "Uniform dot grid with glow",
            },
            {
               name: "scanlines",
               label: "Scanlines",
               width: "70%",
               height: "220px",
               desc: "Horizontal scan lines with radial glow",
            },
            {
               name: "mesh",
               label: "Mesh",
               width: "85%",
               height: "240px",
               desc: "Overlapping blurred colour blobs",
            },
         ],
      }),
   }),
}
