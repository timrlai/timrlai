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
  <PageHeader v-once />
  <RouterView />
  <PageFooter v-once />
</template>

<style scoped></style>
