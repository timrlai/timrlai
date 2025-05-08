<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const Developer = defineAsyncComponent(() => import("./Developer.vue"));
const Teacher = defineAsyncComponent(() => import("./Teacher.vue"));
</script>

<template>
  <main
    id="main"
    class="flex flex-col gap-4 not-print:max-w-[95vw] not-print:min-h-[80vh] mx-auto mb-10 not-print:pt-30"
  >
    <Developer v-once />
    <Teacher v-once />
  </main>
</template>

<style scoped lang="scss"></style>
