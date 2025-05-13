<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const Developer = defineAsyncComponent(() => import("./Developer.vue"));
const Teacher = defineAsyncComponent(() => import("./Teacher.vue"));
const Designer = defineAsyncComponent(() => import("./Designer.vue"));
const Illustrator = defineAsyncComponent(() => import("./Illustrator.vue"));
const Education = defineAsyncComponent(() => import("./Education.vue"));
const Volunteer = defineAsyncComponent(() => import("./Volunteer.vue"));
</script>

<template>
  <main
    id="main"
    class="flex flex-col gap-4 not-print:max-w-[95vw] not-print:min-h-[80vh] mx-auto mb-10 not-print:pt-30"
  >
    <Suspense>
      <Developer v-once />
    </Suspense>
    <Suspense>
      <Teacher v-once />
    </Suspense>
    <Suspense>
      <Designer v-once />
    </Suspense>
    <Suspense>
      <Illustrator v-once />
    </Suspense>
    <Suspense>
      <Education v-once />
    </Suspense>
    <Suspense>
      <Volunteer v-once />
    </Suspense>
  </main>
</template>

<style scoped lang="scss"></style>
