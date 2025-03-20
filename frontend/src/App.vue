<script setup lang="ts">
import { RouterView } from "vue-router";
import PageHeader from "./components/Layout/PageHeader.vue";
import PageFooter from "./components/Layout/PageFooter.vue";
</script>

<template>
  <PageHeader />
  <RouterView />
  <PageFooter />
</template>

<style scoped></style>
