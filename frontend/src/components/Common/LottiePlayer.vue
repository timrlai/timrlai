<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, watch } from "vue";
import { Vue3Lottie, type AnimationItem } from "vue3-lottie";
import type { ScrollTrigger } from "gsap/ScrollTrigger";
import { storeToRefs } from "pinia";

import type {
  LottiePlayerProps,
  LottieScrollTriggerVars,
} from "../../../lib/types";
import useScrollTriggers from "../../../lib/gsap/useScrollTriggers";
import { useThemeStore } from "../../../lib/stores/theme";

const {
  src,
  scrolling,
  scrollTarget,
  scrollStart = "-=70",
  scrollRenderer = "svg",
  scrollSpeed = "medium",
} = defineProps<LottiePlayerProps>();

let animation: AnimationItem | undefined;
let scrollTrigger: ScrollTrigger | undefined;
const lottieScrollTriggerVars: LottieScrollTriggerVars = {
  target: scrollTarget,
  path: src,
  start: scrollStart,
  renderer: scrollRenderer,
  speed: scrollSpeed,
};

const {
  motionReduce,
  gsapCtx,
  refreshScrollTriggers,
  buildLottieScrollTriggerConfig,
  createScrollingLottieAnimation,
  connectLottieToScrollTrigger,
  cleanupLottieScrollTrigger,
} = useScrollTriggers();

const store = useThemeStore();
const { isNight } = storeToRefs(store);

const initLottieScrollTrigger = async () => {
  await nextTick();

  if (!scrolling || !scrollTarget || motionReduce || !src) return;

  cleanupLottieScrollTrigger(animation, scrollTrigger, gsapCtx);

  animation = createScrollingLottieAnimation(lottieScrollTriggerVars);

  if (!animation) return;

  animation.addEventListener("DOMLoaded", function () {
    const scrollTriggerConfig = buildLottieScrollTriggerConfig(
      lottieScrollTriggerVars,
    );
    if (!scrollTriggerConfig) return;

    if (gsapCtx && gsapCtx.add) {
      gsapCtx.add(() => {
        scrollTrigger = connectLottieToScrollTrigger(
          animation,
          scrollTriggerConfig,
        );
      });
    } else {
      scrollTrigger = connectLottieToScrollTrigger(
        animation,
        scrollTriggerConfig,
      );
    }
    // In case there are any other ScrollTriggers on the page and the loading of this Lottie asset caused layout changes
    refreshScrollTriggers();
  });
};

onMounted(initLottieScrollTrigger);
watch(
  () => src,
  () => initLottieScrollTrigger(),
);
watch(
  () => isNight,
  () => initLottieScrollTrigger(),
);
onBeforeUnmount(() =>
  cleanupLottieScrollTrigger(animation, scrollTrigger, gsapCtx),
);
</script>

<template>
  <section v-if="scrolling && !motionReduce" :id="scrollTarget"></section>
  <section v-if="!scrolling && !motionReduce">
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
  <section v-if="motionReduce">
    <Vue3Lottie
      v-if="typeof src === 'string'"
      :animationLink="src"
      :height="height"
      :width="width"
      :speed="0"
      :autoPlay="false"
      :pauseAnimation="true"
      :pauseOnHover="false"
      :playOnHover="false"
      :backgroundColor="backgroundColor"
    />
    <Vue3Lottie
      v-if="data"
      :animationData="data"
      :height="height"
      :width="width"
      :speed="0"
      :autoPlay="false"
      :pauseAnimation="true"
      :pauseOnHover="false"
      :playOnHover="false"
      :backgroundColor="backgroundColor"
    />
  </section>
</template>

<style scoped></style>
