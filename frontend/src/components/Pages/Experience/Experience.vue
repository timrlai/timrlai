<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const Lazy = defineAsyncComponent(() => import("../../Common/Lazy.vue"));
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
    <Lazy :min-height="2000">
      <Suspense>
        <Developer v-once />
      </Suspense>
    </Lazy>
    <Lazy :min-height="1000">
      <Suspense>
        <Teacher v-once />
      </Suspense>
    </Lazy>
    <Lazy :min-height="2000">
      <Suspense>
        <Designer v-once />
      </Suspense>
    </Lazy>
    <Lazy :min-height="1000">
      <Suspense>
        <Illustrator v-once />
      </Suspense>
    </Lazy>
    <Lazy :min-height="1500">
      <Suspense>
        <Education v-once />
      </Suspense>
    </Lazy>
    <Lazy :min-height="1000">
      <Suspense>
        <Volunteer v-once />
      </Suspense>
    </Lazy>
  </main>
</template>

<style scoped lang="scss"></style>
