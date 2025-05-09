<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { RouterView } from "vue-router";

const PageHeader = defineAsyncComponent(
  () => import("./components/Layout/PageHeader.vue"),
);
const PageFooter = defineAsyncComponent(
  () => import("./components/Layout/PageFooter.vue"),
);
</script>

<template>
  <Suspense>
    <PageHeader v-once />
  </Suspense>
  <div class="not-print:min-h-[80vh]">
    <Suspense>
      <RouterView />
    </Suspense>
  </div>
  <Suspense>
    <PageFooter v-once />
  </Suspense>
</template>

<style scoped></style>
