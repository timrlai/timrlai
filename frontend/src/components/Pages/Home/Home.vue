<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const LogoCanvas = defineAsyncComponent(
  () => import("../../3D/LogoCanvas.vue"),
);
const Hi = defineAsyncComponent(() => import("./Hi.vue"));
const Summary = defineAsyncComponent(() => import("./Summary.vue"));
const Skills = defineAsyncComponent(() => import("./Skills.vue"));
</script>

<template>
  <div class="min-h-[90vh]">
    <Suspense>
      <LogoCanvas />
    </Suspense>
  </div>
  <main class="flex flex-col gap-4 max-w-[95vw] min-h-[80vh] mx-auto mb-10">
    <Hi v-once />
    <Summary v-once />
    <Skills v-once />
  </main>
</template>

<style scoped lang="scss"></style>
