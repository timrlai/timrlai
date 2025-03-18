<script setup lang="ts">
import LogoCanvas from "../3D/LogoCanvas.vue";
import Hi from "./Hi.vue";
import Summary from "./Summary.vue";
import Skills from "./Skills.vue";
</script>

<template>
  <LogoCanvas />
  <main class="flex flex-col gap-4 max-w-[95vw] min-h-[80vh] mx-auto mb-10">
    <Hi />
    <Summary />
    <Skills />
  </main>
</template>

<style scoped lang="scss"></style>
