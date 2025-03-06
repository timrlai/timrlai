<script setup lang="ts">
import SocialButtons from "./SocialButtons.vue";

const year = new Date().getFullYear();
</script>

<template>
  <footer
    class="footer footer-center bg-accent text-accent-content border-t-4 border-primary p-10 tw-relative text-center atkinson-hyperlegible-next-bold"
  >
    <p>
      <small>Copyright &copy; {{ year }} Tim R. Lai</small>
    </p>
    <SocialButtons buttonColor="secondary" tooltipPosition="top" />
  </footer>
</template>

<style scoped></style>
