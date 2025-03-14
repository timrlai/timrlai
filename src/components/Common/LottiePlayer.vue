<script setup lang="ts">
import { Vue3Lottie } from "vue3-lottie";

defineProps<{
  src?: string;
  data?: JSON;
  height?: number;
  width?: number;
  speed?: number;
  direction?: "forward" | "backward";
  autoPlay?: boolean;
  delay?: number;
  pauseAnimation?: boolean;
  pauseOnHover?: boolean;
  playOnHover?: boolean;
  backgroundColor?: string;
}>();
</script>

<template>
  <section>
    <Vue3Lottie
      v-if="typeof src === 'string'"
      :animationLink="src"
      :height="height"
      :width="width"
      :speed="speed"
      :direction="direction"
      :autoPlay="autoPlay"
      :delay="delay"
      :pauseAnimation="pauseAnimation"
      :pauseOnHover="pauseOnHover"
      :playOnHover="playOnHover"
      :backgroundColor="backgroundColor"
    />
    <Vue3Lottie
      v-if="data"
      :animationData="data"
      :height="height"
      :width="width"
      :speed="speed"
      :direction="direction"
      :autoPlay="autoPlay"
      :delay="delay"
      :pauseAnimation="pauseAnimation"
      :pauseOnHover="pauseOnHover"
      :playOnHover="playOnHover"
      :backgroundColor="backgroundColor"
    />
  </section>
</template>

<style scoped></style>
