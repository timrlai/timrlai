<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const LogoCanvas = defineAsyncComponent(
  () => import("../../3D/LogoCanvas.vue"),
);
const Hi = defineAsyncComponent(() => import("./Hi.vue"));
const Summary = defineAsyncComponent(() => import("./Summary.vue"));
const Skills = defineAsyncComponent(() => import("./Skills.vue"));
const Experience = defineAsyncComponent(() => import("./Experience.vue"));
</script>

<template>
  <div class="min-h-[90vh] motion-reduce:hidden print:hidden">
    <Suspense>
      <LogoCanvas v-once />
    </Suspense>
  </div>
  <main
    id="main"
    class="flex flex-col gap-4 not-print:max-w-[95vw] not-print:min-h-[80vh] mx-auto mb-10 motion-reduce:pt-30"
  >
    <Suspense>
      <Hi v-once />
    </Suspense>
    <Suspense>
      <Summary v-once />
    </Suspense>
    <Suspense>
      <Skills v-once />
    </Suspense>
    <Suspense>
      <Experience v-once />
    </Suspense>
  </main>
</template>

<style scoped lang="scss">
.is-typed span.cursor {
  width: 5px;
  background-color: oklch(98% 0.05 101);
  animation: blink 1s infinite;
  display: inline-block;
}

@keyframes blink {
  49% {
    background-color: oklch(98% 0.05 101);
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>
