import type { Meta, StoryObj } from "@storybook/vue3-vite"
import SiteNavigation from "./SiteNavigation.vue"

const meta = {
   title: "Navigation/SiteNavigation",
   component: SiteNavigation,
   tags: ["autodocs"],
   parameters: {
      docs: {
         description: {
            component:
               "A site navigation bar with a slide-in drawer menu. Fully slot-based — the library owns layout and drawer behavior, the consumer owns all routing and content.",
         },
      },
   },
} satisfies Meta<typeof SiteNavigation>

export default meta
type Story = StoryObj<typeof meta>

// -----------------------------------------
// VARIABLES
// -----------------------------------------

const navLinkClass =
   "flex items-center gap-3 px-3 py-2.5 rounded-lg text-default hover:bg-elevated transition-colors"
const signUpClass =
   "flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium text-primary hover:bg-primary/10 transition-colors"
const contentBlock = `
      <div class="p-4">
        <h1 class="text-2xl font-bold">Content starts here</h1>
        <p>This should be right below the navbar</p>
      </div>
    `

// <UIcon> can't be resolved inside these stories: it's only wired up by a build-time transform
// on real .vue SFCs, and these stories hand Vue a plain runtime-compiled template string instead
// (see render() below) — so the tag never gets resolved and silently fails to render. Inlining
// the Lucide SVGs directly sidesteps that; this is example content, not part of SiteNavigation's
// own API, so it doesn't need to demonstrate real <UIcon> usage.
const lucideIconBodies = {
   layers:
      '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/>',
   search: '<path d="m21 21l-4.34-4.34"/><circle cx="11" cy="11" r="8"/>',
   "log-in": '<path d="m10 17l5-5l-5-5m5 5H3m12-9h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>',
   "user-plus":
      '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6m3-3h-6"/>',
   bell: '<path d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',
   settings:
      '<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0a2.34 2.34 0 0 0 3.319 1.915a2.34 2.34 0 0 1 2.33 4.033a2.34 2.34 0 0 0 0 3.831a2.34 2.34 0 0 1-2.33 4.033a2.34 2.34 0 0 0-3.319 1.915a2.34 2.34 0 0 1-4.659 0a2.34 2.34 0 0 0-3.32-1.915a2.34 2.34 0 0 1-2.33-4.033a2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/>',
} as const

function lucideIcon(name: keyof typeof lucideIconBodies, classes: string) {
   // width/height="1em" mirrors <UIcon>'s own default sizing (scales with font-size, e.g. the
   // "text-base" classes below) — set as plain attributes rather than inline style so a real size
   // utility class (size-8, h-20 w-auto, ...) still wins via the normal CSS cascade.
   return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="1em" height="1em" class="${classes}">${lucideIconBodies[name]}</svg>`
}

// <UButton> has the same problem as <UIcon> above — it can't be resolved inside these stories
// either, for the same reason. This replicates UButton's own "ghost" variant classes (default
// color + this library's "xl" default size override, see vite.config.ts) on a plain <button>.
function ghostIconButton(name: keyof typeof lucideIconBodies, ariaLabel: string) {
   return `<button
      type="button"
      class="rounded-full font-medium inline-flex items-center justify-center transition-colors text-primary hover:bg-primary/10 active:bg-primary/10 p-2"
      aria-label="${ariaLabel}"
   >${lucideIcon(name, "size-6")}</button>`
}

const defaultLogo = `
        <template #logo>
          <a href="/" class="flex items-center gap-2">
            ${lucideIcon("layers", "size-8 text-primary")}
            <span class="font-semibold text-highlighted text-base">Logo App Name</span>
          </a>
        </template>`

const defaultDrawerLogo = `
        <template #drawer-logo>
          <div class="flex items-center gap-2">
            ${lucideIcon("layers", "size-7 text-primary")}
            <span class="font-semibold text-highlighted">Logo App Name</span>
          </div>
        </template>`

const defaultMenuItems = `
        <template #menu-items="{ close }">
          <a href="/cheese" :class="linkClass" @click="close">
            ${lucideIcon("search", "text-base")}
            <span>Cheese Search</span>
          </a>
        </template>`

const signInSignUpFooter = `
        <template #menu-footer="{ close }">
          <a href="/signin" :class="linkClass" @click="close">
            ${lucideIcon("log-in", "text-base")}
            <span>Sign in</span>
          </a>
          <a href="/signup" :class="signUpClass" @click="close">
            ${lucideIcon("user-plus", "text-base")}
            <span>Sign up</span>
          </a>
        </template>`

const signInOnlyFooter = `
        <template #menu-footer="{ close }">
          <a href="/signin" :class="linkClass" @click="close">
            ${lucideIcon("log-in", "text-base")}
            <span>Sign in</span>
          </a>
        </template>`

// -----------------------------------------
// STORIES
// -----------------------------------------

// Action Items (icon buttons) story
export const ActionIconButtons: Story = {
   name: "Action Items: Icon Buttons",
   parameters: {
      docs: {
         description: {
            story: "Shows two icon-only action items in the action-items slot using UButton with icons.",
         },
      },
   },
   render: () => ({
      components: { SiteNavigation },
      template: `
      <SiteNavigation>
        ${defaultLogo}
        ${defaultDrawerLogo}
        <template #action-items>
          ${ghostIconButton("bell", "Notifications")}
          ${ghostIconButton("settings", "Settings")}
        </template>
        ${defaultMenuItems}
      </SiteNavigation>
      ${contentBlock}
    `,
      setup() {
         return { linkClass: navLinkClass }
      },
   }),
}

export const DrawerFooterItems: Story = {
   name: "Drawer - Footer Items Available",
   render: () => ({
      components: { SiteNavigation },
      template: `
      <SiteNavigation>
        ${defaultLogo}
        ${defaultDrawerLogo}
        ${defaultMenuItems}
        ${signInSignUpFooter}
      </SiteNavigation>
      ${contentBlock}
    `,
      setup() {
         return { linkClass: navLinkClass, signUpClass }
      },
   }),
}

export const DrawerNoFooter: Story = {
   name: "Drawer - No Footer Slot",
   parameters: {
      docs: {
         description: { story: "Drawer renders gracefully when no menu-footer slot is provided." },
      },
   },
   render: () => ({
      components: { SiteNavigation },
      template: `
      <SiteNavigation>
        ${defaultLogo}
        ${defaultDrawerLogo}
        ${defaultMenuItems}
      </SiteNavigation>
      ${contentBlock}
    `,
      setup() {
         return { linkClass: navLinkClass }
      },
   }),
}

export const TallLogoImage: Story = {
   name: "Tall Logo Image",
   parameters: {
      docs: {
         description: {
            story: "Logo slot receives a tall image, navbar height remains fixed (h-16).",
         },
      },
   },
   render: () => ({
      components: { SiteNavigation },
      template: `
      <SiteNavigation>
        <template #logo>
          <a href="/" class="flex items-center h-full gap-2">
            ${lucideIcon("layers", "h-20 w-auto text-primary")}
            <span class="font-semibold text-highlighted text-base">Logo App Name</span>
          </a>
        </template>
        <template #drawer-logo>
          <div class="flex items-center gap-2">
            ${lucideIcon("layers", "h-6 w-auto text-primary")}
            <span class="font-semibold text-highlighted">Logo App Name</span>
          </div>
        </template>
        ${defaultMenuItems}
        ${signInOnlyFooter}
      </SiteNavigation>
      ${contentBlock}
    `,
      setup() {
         return { linkClass: navLinkClass }
      },
   }),
}

// Dark background
export const DarkBackground: Story = {
   name: "Dark Background",
   parameters: {
      docs: {
         description: {
            story: "Preview nav against a dark page (Tailwind dark mode).",
         },
      },
   },
   decorators: [
      () => ({
         template: "<story />",
         mounted() {
            document.documentElement.classList.add("dark")
         },
         unmounted() {
            document.documentElement.classList.remove("dark")
         },
      }),
   ],
   render: () => ({
      components: { SiteNavigation },
      template: `
      <div class="dark min-h-screen bg-default">
        <SiteNavigation>
          ${defaultLogo}
          ${defaultDrawerLogo}
          ${defaultMenuItems}
          ${signInSignUpFooter}
        </SiteNavigation>
        ${contentBlock}
      </div>
    `,
      setup() {
         return { linkClass: navLinkClass, signUpClass }
      },
   }),
}

// Individual prop stories

export const PositionFixed: Story = {
   name: "Position: Fixed",
   parameters: {
      layout: "fullscreen",
      docs: { description: { story: "Nav bar is fixed to top (position='fixed')." } },
   },
   render: () => ({
      components: { SiteNavigation },
      template: `
      <div style="min-height: 200vh;">
        <SiteNavigation position="fixed">
          ${defaultLogo}
          ${defaultDrawerLogo}
          ${defaultMenuItems}
          ${signInOnlyFooter}
        </SiteNavigation>
        ${contentBlock}
      </div>
    `,
      setup() {
         return { linkClass: navLinkClass }
      },
   }),
}

export const PositionSticky: Story = {
   name: "Position: Sticky",
   parameters: {
      layout: "fullscreen",
      docs: { description: { story: "Nav bar sticks on scroll (position='sticky')." } },
   },
   render: () => ({
      components: { SiteNavigation },
      template: `
      <div style="min-height: 200vh;">
        <div class="py-8">Content above sticky navbar</div>
        <SiteNavigation position="sticky">
          ${defaultLogo}
          ${defaultDrawerLogo}
          ${defaultMenuItems}
          ${signInOnlyFooter}
        </SiteNavigation>
        ${contentBlock}
      </div>
    `,
      setup() {
         return { linkClass: navLinkClass }
      },
   }),
}

export const NavHeightTall: Story = {
   name: "Nav Height: Tall",
   parameters: {
      docs: { description: { story: "Nav bar height is taller (navHeight='h-24')." } },
   },
   render: () => ({
      components: { SiteNavigation },
      template: `
      <SiteNavigation navHeight="h-24">
        <template #logo>
          <a href="/" class="flex items-center h-full gap-2">
            ${lucideIcon("layers", "h-full w-auto text-primary")}
            <span class="font-semibold text-highlighted text-base">Logo App Name</span>
          </a>
        </template>
        <template #drawer-logo>
          <div class="flex items-center gap-2">
            ${lucideIcon("layers", "h-6 w-auto text-primary")}
            <span class="font-semibold text-highlighted">Logo App Name</span>
          </div>
        </template>
        ${defaultMenuItems}
        ${signInOnlyFooter}
      </SiteNavigation>
      ${contentBlock}
    `,
      setup() {
         return { linkClass: navLinkClass }
      },
   }),
}

export const BorderEnabled: Story = {
   name: "Border Enabled",
   parameters: {
      docs: { description: { story: "Nav bar shows border (border=true)." } },
   },
   render: () => ({
      components: { SiteNavigation },
      template: `
      <SiteNavigation :border="true">
        ${defaultLogo}
        ${defaultDrawerLogo}
        ${defaultMenuItems}
        ${signInOnlyFooter}
      </SiteNavigation>
      ${contentBlock}
    `,
      setup() {
         return { linkClass: navLinkClass }
      },
   }),
}

export const ShadowEnabled: Story = {
   name: "Shadow Enabled",
   parameters: {
      docs: { description: { story: "Nav bar shows shadow (shadow=true)." } },
   },
   render: () => ({
      components: { SiteNavigation },
      template: `
      <div>
        <SiteNavigation :shadow="true">
          ${defaultLogo}
          ${defaultDrawerLogo}
          ${defaultMenuItems}
          ${signInOnlyFooter}
        </SiteNavigation>
        ${contentBlock}
      </div>
    `,
      setup() {
         return { linkClass: navLinkClass }
      },
   }),
}

export const FrostedEnabled: Story = {
   name: "Frosted Enabled",
   parameters: {
      layout: "fullscreen",
      docs: {
         description: {
            story: "Nav bar has frosted glass effect (frosted=true). Scroll to see the blur effect on content behind the header.",
         },
      },
   },
   render: () => ({
      components: { SiteNavigation },
      template: `
      <div style="min-height: 120vh; background: #f9fafb;">
        <SiteNavigation :frosted="true" position="fixed">
          ${defaultLogo}
          ${defaultDrawerLogo}
          ${defaultMenuItems}
          ${signInOnlyFooter}
        </SiteNavigation>
        <div class="bg-primary py-20">
            <div>Content starts here</div>
            <p>Scroll down to see the frosted glass effect in action as the header blurs the content behind it.</p>
        </div>
      </div>
    `,
      setup() {
         return { linkClass: navLinkClass }
      },
   }),
}

export const ContainedDisabled: Story = {
   name: "Contained Disabled",
   parameters: {
      docs: { description: { story: "Nav bar is full-bleed (contained=false)." } },
   },
   render: () => ({
      components: { SiteNavigation },
      template: `
      <SiteNavigation :contained="false">
        ${defaultLogo}
        ${defaultDrawerLogo}
        ${defaultMenuItems}
        ${signInOnlyFooter}
      </SiteNavigation>
      ${contentBlock}
    `,
      setup() {
         return { linkClass: navLinkClass }
      },
   }),
}

export const ContainerClassCustom: Story = {
   name: "Container Class: Custom Max Width",
   parameters: {
      layout: "fullscreen",
      docs: {
         description: {
            story: "Uses `containerClass` to override the default `container mx-auto` with a specific max-width. Useful when a consumer app defines its own layout breakpoints rather than relying on the Tailwind `container` class.",
         },
      },
   },
   render: () => ({
      components: { SiteNavigation },
      template: `
      <SiteNavigation containerClass="max-w-3xl mx-auto">
        ${defaultLogo}
        ${defaultDrawerLogo}
        ${defaultMenuItems}
        ${signInOnlyFooter}
      </SiteNavigation>
      ${contentBlock}
    `,
      setup() {
         return { linkClass: navLinkClass }
      },
   }),
}

export const DrawerWidthCustom: Story = {
   name: "Drawer Width Custom",
   parameters: {
      docs: { description: { story: "Drawer width set to w-80! (drawerWidth='w-80!')." } },
   },
   render: () => ({
      components: { SiteNavigation },
      template: `
      <SiteNavigation drawerWidth="w-80!">
        ${defaultLogo}
        ${defaultDrawerLogo}
        ${defaultMenuItems}
        ${signInOnlyFooter}
      </SiteNavigation>
      ${contentBlock}
    `,
      setup() {
         return { linkClass: navLinkClass }
      },
   }),
}
