<script setup lang="ts">
import { defineAsyncComponent, onMounted } from "vue";
import { useRouter, RouterView } from "vue-router";

import useScrollTriggers from "../lib/gsap/useScrollTriggers.ts";

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

const router = useRouter();
const { refreshScrollTriggers } = useScrollTriggers();

onMounted(() => {
  router.afterEach(() => {
    refreshScrollTriggers();
  });
});
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
