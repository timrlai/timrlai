<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const Lazy = defineAsyncComponent(() => import("../../Common/Lazy.vue"));
const LogoCanvas = defineAsyncComponent(
  () => import("../../3D/LogoCanvas.vue"),
);
const Hi = defineAsyncComponent(() => import("./Hi.vue"));
const Summary = defineAsyncComponent(() => import("./Summary.vue"));
const Skills = defineAsyncComponent(() => import("./Skills.vue"));
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
    <Lazy>
      <Suspense>
        <Hi v-once />
      </Suspense>
    </Lazy>
    <Lazy>
      <Suspense>
        <Summary v-once />
      </Suspense>
    </Lazy>
    <Lazy>
      <Suspense>
        <Skills v-once />
      </Suspense>
    </Lazy>
  </main>
</template>

<style scoped lang="scss"></style>
