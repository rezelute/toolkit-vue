<template>
   <div v-if="isLoading" class="bar">
      <div></div>
   </div>
</template>

<script setup lang="ts">
const props = withDefaults(
   defineProps<{
      isLoading: boolean
      color?: string
      height?: string
   }>(),
   {
      color: "#35a626", // default to a green color
      height: "5px",
   }
)
</script>

<style scoped>
.bar {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: v-bind("props.height");
   background: transparent;
   overflow: hidden;
   z-index: 9999;
}
.bar div:before {
   content: "";
   position: absolute;
   top: 0px;
   left: 0px;
   bottom: 0px;
   background: v-bind("props.color");
   animation: box-1 3100ms cubic-bezier(0.65, 0.81, 0.73, 0.4) infinite;
}
.bar div:after {
   content: "";
   position: absolute;
   top: 0px;
   left: 0px;
   bottom: 0px;
   background: v-bind("props.color");
   animation: box-2 3100ms cubic-bezier(0.16, 0.84, 0.44, 1) infinite;
   animation-delay: 2150ms;
}
@keyframes box-1 {
   0% {
      left: -35%;
      right: 100%;
   }
   60%,
   100% {
      left: 100%;
      right: -90%;
   }
}
@keyframes box-2 {
   0% {
      left: -200%;
      right: 100%;
   }
   60%,
   100% {
      left: 107%;
      right: -8%;
   }
}
</style>
