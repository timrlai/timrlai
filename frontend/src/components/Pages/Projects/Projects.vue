<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const Construction = defineAsyncComponent(
  () => import("../../Common/Construction.vue"),
);
</script>

<template>
  <main
    class="flex flex-col justify-center gap-4 max-w-[95vw] min-h-[80vh] mx-auto mb-10"
  >
    <Construction v-once />
  </main>
</template>

<style scoped lang="scss"></style>
