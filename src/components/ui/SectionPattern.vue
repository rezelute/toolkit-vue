<template>
   <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- ── Pattern: grid-orbs ─────────────────────────────── -->
      <template v-if="pattern === 'grid-orbs'">
         <div class="absolute inset-0 pattern-grid pointer-events-none opacity-60" />
         <div
            class="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none"
            style="
               background: radial-gradient(circle, var(--ui-color-primary-600) 0%, transparent 65%);
               opacity: 0.25;
            "
         />
         <div
            class="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
            style="
               background: radial-gradient(circle, var(--ui-color-primary-500) 0%, transparent 65%);
               opacity: 0.2;
            "
         />
         <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
            style="
               background: radial-gradient(
                  ellipse,
                  var(--ui-color-primary-700) 0%,
                  transparent 60%
               );
               opacity: 0.15;
            "
         />
      </template>

      <!-- ── Pattern: aurora ─────────────────────────────────── -->
      <template v-else-if="pattern === 'aurora'">
         <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div
               class="absolute -top-1/4 -left-1/4 w-[70%] aspect-square rounded-full blur-[100px]"
               style="
                  background: radial-gradient(
                     circle,
                     var(--ui-color-primary-600) 0%,
                     transparent 70%
                  );
                  opacity: 0.45;
               "
            />
            <div
               class="absolute top-1/4 -right-1/4 w-[55%] aspect-square rounded-full blur-[100px]"
               style="
                  background: radial-gradient(
                     circle,
                     var(--ui-color-primary-400) 0%,
                     transparent 70%
                  );
                  opacity: 0.35;
               "
            />
            <div
               class="absolute -bottom-1/4 left-1/3 w-[60%] aspect-square rounded-full blur-[100px]"
               style="
                  background: radial-gradient(
                     circle,
                     var(--ui-color-primary-700) 0%,
                     transparent 70%
                  );
                  opacity: 0.4;
               "
            />
            <div
               class="absolute top-1/2 left-1/4 w-[40%] aspect-square rounded-full blur-[80px]"
               style="
                  background: radial-gradient(
                     circle,
                     var(--ui-color-primary-500) 0%,
                     transparent 70%
                  );
                  opacity: 0.25;
               "
            />
         </div>
      </template>

      <!-- ── Pattern: topographic ────────────────────────────── -->
      <template v-else-if="pattern === 'topographic'">
         <div
            class="absolute inset-0 pointer-events-none"
            style="
               background-image: repeating-radial-gradient(
                  ellipse at 50% 50%,
                  transparent 0px,
                  transparent 38px,
                  color-mix(in srgb, var(--ui-color-primary-400) 10%, transparent) 38px,
                  color-mix(in srgb, var(--ui-color-primary-400) 10%, transparent) 39px,
                  transparent 39px,
                  transparent 77px
               );
            "
         />
         <div
            class="absolute inset-0 pointer-events-none"
            style="
               background: radial-gradient(
                  ellipse at 50% 50%,
                  color-mix(in srgb, var(--ui-color-primary-600) 22%, transparent) 0%,
                  transparent 60%
               );
            "
         />
      </template>

      <!-- ── Pattern: rays ───────────────────────────────────── -->
      <template v-else-if="pattern === 'rays'">
         <div
            class="absolute inset-0 pointer-events-none"
            style="
               background-image: repeating-conic-gradient(
                  from 0deg at 50% 120%,
                  color-mix(in srgb, var(--ui-color-primary-400) 10%, transparent) 0deg 7deg,
                  transparent 7deg 18deg
               );
            "
         />
         <div
            class="absolute top-0 left-0 right-0 h-1/2 pointer-events-none"
            style="
               background: linear-gradient(
                  to bottom,
                  color-mix(in srgb, var(--ui-color-primary-950) 60%, transparent) 0%,
                  transparent 100%
               );
            "
         />
         <!-- Horizon glow -->
         <div class="absolute left-0 right-0 pointer-events-none" style="top: 38%">
            <div
               class="h-px w-full"
               style="
                  background: linear-gradient(
                     90deg,
                     transparent 0%,
                     var(--ui-color-primary-400) 20%,
                     var(--ui-color-primary-300) 50%,
                     var(--ui-color-primary-400) 80%,
                     transparent 100%
                  );
                  box-shadow: 0 0 30px 8px
                     color-mix(in srgb, var(--ui-color-primary-500) 50%, transparent);
                  opacity: 0.6;
               "
            />
         </div>
      </template>

      <!-- ── Pattern: noise ──────────────────────────────────── -->
      <template v-else-if="pattern === 'noise'">
         <div class="absolute inset-0 pointer-events-none opacity-25">
            <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
               <filter id="section-noise-filter">
                  <feTurbulence
                     type="fractalNoise"
                     baseFrequency="0.72"
                     numOctaves="4"
                     stitchTiles="stitch"
                  />
                  <feColorMatrix type="saturate" values="0" />
               </filter>
               <rect width="100%" height="100%" filter="url(#section-noise-filter)" opacity="0.6" />
            </svg>
         </div>
         <div
            class="absolute inset-0 pointer-events-none"
            style="
               background:
                  radial-gradient(
                     ellipse at 30% 40%,
                     color-mix(in srgb, var(--ui-color-primary-600) 35%, transparent) 0%,
                     transparent 55%
                  ),
                  radial-gradient(
                     ellipse at 70% 65%,
                     color-mix(in srgb, var(--ui-color-primary-500) 25%, transparent) 0%,
                     transparent 50%
                  );
            "
         />
      </template>

      <!-- ── Pattern: geometric ─────────────────────────────── -->
      <template v-else-if="pattern === 'geometric'">
         <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div
               class="absolute -top-40 -right-40 w-[620px] h-[620px] rounded-full"
               style="
                  border: 2px solid color-mix(in srgb, var(--ui-color-primary-400) 18%, transparent);
               "
            />
            <div
               class="absolute -top-16 -right-16 w-[380px] h-[380px] rounded-full"
               style="
                  border: 1px solid color-mix(in srgb, var(--ui-color-primary-400) 11%, transparent);
               "
            />
            <div
               class="absolute top-20 right-32 w-[220px] h-[220px] rounded-full"
               style="
                  border: 1px solid color-mix(in srgb, var(--ui-color-primary-300) 8%, transparent);
               "
            />
            <div
               class="absolute -bottom-40 -left-40 w-[540px] h-[540px] rounded-full"
               style="
                  border: 2px solid color-mix(in srgb, var(--ui-color-primary-500) 14%, transparent);
               "
            />
            <div
               class="absolute -bottom-16 -left-16 w-[320px] h-[320px] rounded-full"
               style="
                  border: 1px solid color-mix(in srgb, var(--ui-color-primary-400) 9%, transparent);
               "
            />
            <div
               class="absolute top-1/4 right-1/4 w-[420px] h-[420px] rounded-full"
               style="
                  background: radial-gradient(
                     circle,
                     color-mix(in srgb, var(--ui-color-primary-500) 18%, transparent) 0%,
                     transparent 60%
                  );
               "
            />
            <div
               class="absolute bottom-1/4 left-1/4 w-[320px] h-[320px] rounded-full"
               style="
                  background: radial-gradient(
                     circle,
                     color-mix(in srgb, var(--ui-color-primary-600) 14%, transparent) 0%,
                     transparent 60%
                  );
               "
            />
         </div>
      </template>

      <!-- ── Pattern: synthwave ─────────────────────────────── -->
      <template v-else-if="pattern === 'synthwave'">
         <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <!-- Star dots -->
            <div
               class="absolute top-0 left-0 right-0 h-2/3"
               style="
                  background-image: radial-gradient(
                     circle,
                     color-mix(in srgb, var(--ui-color-primary-200) 70%, white) 1px,
                     transparent 1px
                  );
                  background-size: 48px 48px;
                  opacity: 0.2;
               "
            />
            <!-- Gradient sky fade -->
            <div
               class="absolute top-0 left-0 right-0 h-3/5"
               style="
                  background: linear-gradient(
                     to bottom,
                     color-mix(in srgb, var(--ui-color-primary-950) 70%, transparent) 0%,
                     transparent 100%
                  );
               "
            />
            <!-- Perspective grid -->
            <div
               class="synthwave-grid-anim absolute left-0 right-0 bottom-0 h-[260px]"
               style="
                  background-image:
                     linear-gradient(
                        color-mix(in srgb, var(--ui-color-primary-500) 65%, transparent) 0.4px,
                        transparent 1px
                     ),
                     linear-gradient(
                        90deg,
                        color-mix(in srgb, var(--ui-color-primary-500) 65%, transparent) 0.4px,
                        transparent 1px
                     );
                  background-size: 80px 40px;
                  transform: perspective(280px) rotateX(25deg);
                  transform-origin: top center;
                  -webkit-mask-image: linear-gradient(
                     to top,
                     rgba(0, 0, 0, 0.6) 0%,
                     rgba(0, 0, 0, 0.25) 40%,
                     transparent 70%
                  );
                  mask-image: linear-gradient(
                     to top,
                     rgba(0, 0, 0, 0.6) 0%,
                     rgba(0, 0, 0, 0.25) 40%,
                     transparent 70%
                  );
               "
            />
            <!-- Retro sun -->
            <div
               class="absolute left-1/2 -translate-x-1/2 rounded-full overflow-hidden"
               style="
                  top: 8%;
                  width: 110px;
                  height: 110px;
                  background: linear-gradient(
                     to bottom,
                     var(--ui-color-primary-200),
                     var(--ui-color-primary-500)
                  );
                  opacity: 0.75;
                  box-shadow: 0 0 60px 20px
                     color-mix(in srgb, var(--ui-color-primary-400) 45%, transparent);
               "
            >
               <div
                  class="absolute inset-0"
                  style="
                     background-image: repeating-linear-gradient(
                        0deg,
                        transparent 0px,
                        transparent 7px,
                        color-mix(in srgb, var(--ui-color-primary-950) 45%, transparent) 7px,
                        color-mix(in srgb, var(--ui-color-primary-950) 45%, transparent) 8px
                     );
                  "
               />
            </div>
            <!-- Side glows -->
            <div
               class="absolute -left-20 top-1/3 w-64 h-64 rounded-full blur-3xl"
               style="
                  background: radial-gradient(
                     circle,
                     var(--ui-color-primary-600) 0%,
                     transparent 70%
                  );
                  opacity: 0.3;
               "
            />
            <div
               class="absolute -right-20 top-1/3 w-64 h-64 rounded-full blur-3xl"
               style="
                  background: radial-gradient(
                     circle,
                     var(--ui-color-primary-500) 0%,
                     transparent 70%
                  );
                  opacity: 0.25;
               "
            />
         </div>
      </template>

      <!-- ── Pattern: diagonal ──────────────────────────────── -->
      <template v-else-if="pattern === 'diagonal'">
         <div class="absolute inset-0 pattern-diagonal pointer-events-none" />
         <div
            class="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
            style="
               background: radial-gradient(circle, var(--ui-color-primary-500) 0%, transparent 70%);
               opacity: 0.12;
            "
         />
         <div
            class="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none"
            style="
               background: radial-gradient(circle, var(--ui-color-primary-400) 0%, transparent 70%);
               opacity: 0.1;
            "
         />
      </template>

      <!-- ── Pattern: dots ──────────────────────────────────── -->
      <template v-else-if="pattern === 'dots'">
         <div
            class="absolute inset-0 pointer-events-none"
            style="
               background-image: radial-gradient(
                  circle,
                  color-mix(in srgb, var(--ui-color-primary-400) 28%, transparent) 1.5px,
                  transparent 1.5px
               );
               background-size: 28px 28px;
               opacity: 0.45;
            "
         />
         <div
            class="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full pointer-events-none blur-3xl"
            style="
               background: radial-gradient(circle, var(--ui-color-primary-600) 0%, transparent 70%);
               opacity: 0.1;
            "
         />
      </template>

      <!-- ── Pattern: scanlines ─────────────────────────────── -->
      <template v-else-if="pattern === 'scanlines'">
         <div
            class="absolute inset-0 pointer-events-none"
            style="
               background-image: repeating-linear-gradient(
                  0deg,
                  transparent 0px,
                  transparent 3px,
                  color-mix(in srgb, var(--ui-color-primary-400) 9%, transparent) 3px,
                  color-mix(in srgb, var(--ui-color-primary-400) 9%, transparent) 4px
               );
               background-size: 100% 4px;
            "
         />
         <div
            class="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
            style="
               background: radial-gradient(
                  circle,
                  color-mix(in srgb, var(--ui-color-primary-500) 18%, transparent) 0%,
                  transparent 60%
               );
            "
         />
      </template>

      <!-- ── Pattern: mesh ─────────────────────────────────── -->
      <template v-else-if="pattern === 'mesh'">
         <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div
               class="absolute -top-1/4 left-1/4 w-[50%] aspect-square rounded-full blur-3xl"
               style="
                  background: radial-gradient(
                     circle,
                     var(--ui-color-primary-600) 0%,
                     transparent 65%
                  );
                  opacity: 0.2;
               "
            />
            <div
               class="absolute -bottom-1/4 right-1/4 w-[45%] aspect-square rounded-full blur-3xl"
               style="
                  background: radial-gradient(
                     circle,
                     var(--ui-color-primary-400) 0%,
                     transparent 65%
                  );
                  opacity: 0.18;
               "
            />
            <div
               class="absolute top-1/3 -right-1/4 w-[40%] aspect-square rounded-full blur-3xl"
               style="
                  background: radial-gradient(
                     circle,
                     var(--ui-color-primary-700) 0%,
                     transparent 65%
                  );
                  opacity: 0.16;
               "
            />
         </div>
      </template>
   </div>
</template>

<script setup lang="ts">
export type SectionPatternName =
   | "grid-orbs"
   | "aurora"
   | "topographic"
   | "rays"
   | "noise"
   | "geometric"
   | "synthwave"
   | "diagonal"
   | "dots"
   | "scanlines"
   | "mesh"

defineProps<{ pattern?: SectionPatternName }>()
</script>

<style scoped>
.pattern-grid {
   background-image:
      linear-gradient(
         color-mix(in srgb, var(--ui-color-primary-400) 14%, transparent) 1px,
         transparent 1px
      ),
      linear-gradient(
         90deg,
         color-mix(in srgb, var(--ui-color-primary-400) 14%, transparent) 1px,
         transparent 1px
      );
   background-size: 48px 48px;
}

.pattern-diagonal {
   background-image: repeating-linear-gradient(
      -45deg,
      color-mix(in srgb, var(--ui-color-primary-400) 4%, transparent) 0px,
      color-mix(in srgb, var(--ui-color-primary-400) 4%, transparent) 1px,
      transparent 1px,
      transparent 28px
   );
}

.synthwave-grid-anim {
   animation: synthwave-scroll 3s linear infinite;
}

@keyframes synthwave-scroll {
   from {
      background-position: 0 0;
   }
   to {
      background-position: 0 40px;
   }
}
</style>
