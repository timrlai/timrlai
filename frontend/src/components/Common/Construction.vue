<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { Icon } from "@iconify/vue";

const LottiePlayer = defineAsyncComponent(() => import("./LottiePlayer.vue"));
</script>

<template>
  <section
    id="construction-notice"
    class="mockup-window bg-warning/80 text-warning-content border-4 border-primary shadow-lg shadow-primary"
  >
    <div class="grid place-content-center text-center p-5">
      <h1 class="text-3xl sm:text-5xl md:text-8xl ubuntu-titling mb-4">
        <Icon icon="fluent-emoji:construction" class="inline-block" />
        Under Construction!
        <Icon icon="fluent-emoji:construction" class="inline-block" />
        <Icon
          icon="fluent-emoji:man-construction-worker-light"
          class="inline-block"
        />
      </h1>
      <p class="text-xl md:text-3xl ahn-bold md:max-w-4/5 mx-auto mb-4">
        This page is under construction.
        <Icon icon="fluent-emoji:construction" class="inline-block" /> Please
        pardon the mess!
        <Icon icon="fluent-emoji:broom" class="inline-block" /> They are working
        so hard on this page!
        <Icon icon="fluent-emoji:flexed-biceps-light" class="inline-block" />
        Look at them go!
        <Icon icon="fluent-emoji:eyes" class="inline-block" /> Actually, don't
        look!
        <Icon icon="fluent-emoji:man-gesturing-no-light" class="inline-block" />
        You're stressing them out! Don't stress them out! They have performance
        anxiety!
        <Icon
          icon="fluent-emoji:anxious-face-with-sweat"
          class="inline-block"
        />
      </p>
      <div class="flex justify-center items-center gap-4">
        <div class="max-w-100">
          <LottiePlayer
            src="/lottie/construction/construction_guy.json"
            autoPlay
          />
        </div>
        <div class="max-w-50">
          <LottiePlayer
            src="/lottie/construction/construction_penguin.json"
            autoPlay
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@media screen and (max-height: 459px) {
  section#construction-notice {
    margin-top: 3rem;
  }
}
@media screen and (min-height: 500px) {
  section#construction-notice {
    margin-top: 7rem;
  }
}
</style>
