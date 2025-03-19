<script setup lang="ts">
import { Icon } from "@iconify/vue";
import LottiePlayer from "./LottiePlayer.vue";
</script>

<template>
  <section
    class="mockup-window bg-warning text-warning-content border-4 border-primary shadow-lg shadow-primary mt-30"
  >
    <div class="grid place-content-center text-center p-5">
      <h1 class="text-4xl sm:text-5xl md:text-8xl ubuntu-titling mb-4">
        Under Construction!
        <Icon
          icon="fluent-emoji:man-construction-worker-light"
          class="inline-block"
        />
      </h1>
      <p
        class="text-xl md:text-3xl atkinson-hyperlegible-next-bold md:max-w-4/5 mx-auto mb-4"
      >
        This page is under construction. Please pardon the mess! They are
        working so hard on this page! Look at them go! Actually, don't look!
        You're stressing them out! Don't stress them out! They have performance
        anxiety!
      </p>
      <div class="flex flex-row justify-center items-center gap-4">
        <div class="max-w-100">
          <LottiePlayer src="/lottie/construction_guy.json" autoPlay />
        </div>
        <div class="max-w-50">
          <LottiePlayer src="/lottie/construction_penguin.json" autoPlay />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
