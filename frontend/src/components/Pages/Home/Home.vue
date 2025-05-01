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
  <Suspense>
    <LogoCanvas />
  </Suspense>
  <main class="flex flex-col gap-4 max-w-[95vw] min-h-[80vh] mx-auto mb-10">
    <Hi />
    <Summary />
    <Skills />
  </main>
</template>

<style scoped lang="scss"></style>
