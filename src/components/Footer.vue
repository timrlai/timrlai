<script setup lang="ts">
import { Icon } from "@iconify/vue";
const year = new Date().getFullYear();
</script>

<template>
  <footer
    class="footer footer-center bg-primary text-primary-content p-10 tw-relative text-center atkinson-hyperlegible-next-bold"
  >
    <p>
      <small>Copyright &copy; {{ year }} Tim R. Lai</small>
    </p>
    <div class="flex justify-center gap-4 my-6">
      <div class="tooltip tooltip-secondary tooltip-top" data-tip="GitHub!">
        <div class="tooltip-content">
          <div class="animate-bounce text-lg gluten">GitHub!</div>
        </div>
        <a
          href="https://github.com/timrlai"
          target="_blank"
          class="btn btn-secondary text-2xl"
          ><Icon icon="mingcute:github-fill"
        /></a>
      </div>
      <div class="tooltip tooltip-secondary tooltip-top" data-tip="LinkedIn!">
        <div class="tooltip-content">
          <div class="animate-bounce text-lg gluten">LinkedIn!</div>
        </div>
        <a
          href="https://www.linkedin.com/in/timrlai/"
          target="_blank"
          class="btn btn-secondary text-2xl"
          ><Icon icon="mingcute:linkedin-fill"
        /></a>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
