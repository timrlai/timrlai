<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { RouterView } from "vue-router";

const Lazy = defineAsyncComponent(() => import("./components/Common/Lazy.vue"));
const PageHeader = defineAsyncComponent(
  () => import("./components/Layout/PageHeader.vue"),
);
const PageFooter = defineAsyncComponent(
  () => import("./components/Layout/PageFooter.vue"),
);
const ToTopButton = defineAsyncComponent(
  () => import("./components/Common/ToTopButton.vue"),
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
  <Lazy :min-height="400"
    ><Suspense><PageFooter v-once /></Suspense
  ></Lazy>
  <ToTopButton button-color="accent" tooltip-color="accent" />
</template>

<style scoped></style>
