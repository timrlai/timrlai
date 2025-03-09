<script setup lang="ts">
import Header from "./components/Layout/Header.vue";
import Footer from "./components/Layout/Footer.vue";
import Content from "./components/Content/Content.vue";
</script>

<template>
  <Header />
  <div class="max-w-4xl mx-auto my-10 p-5">
    <img
      src="./assets/img/logos/timrlai_logo.svg"
      alt="Tim R. Lai"
      title="Tim R. Lai"
      class="w-full h-full"
    />
  </div>
  <Content />
  <Footer />
</template>

<style scoped></style>
