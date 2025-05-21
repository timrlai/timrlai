<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { Icon } from "@iconify/vue";

import { lottieConstants } from "../../../../lib/constants";

const LottiePlayer = defineAsyncComponent(
  () => import("../../Common/LottiePlayer.vue"),
);

const { AVATAR_SKILLS_SOFT_LOTTIE_PATH } = lottieConstants;
</script>

<template>
  <div
    class="mockup-window bg-secondary text-secondary-content border-4 rounded-t-none border-primary shadow-lg shadow-primary"
  >
    <div class="p-5">
      <div class="flex flex-wrap justify-between">
        <div class="w-full sm:w-3/4 sm:pr-14">
          <h2 class="text-3xl sm:text-4xl ubuntu-titling mb-4">
            <Icon icon="fluent-emoji:handshake" class="inline-block h-[1em]" />
            Soft Skills
          </h2>
          <p class="text-xl sm:text-2xl">
            Having worked with large, fast-paced organizations such as
            Futuretalk Inc.,
            <Icon icon="fluent-emoji:robot" class="inline-block" /> Seneca
            Polytechnic
            <Icon icon="fluent-emoji:man-teacher-light" class="inline-block" />
            and the Toronto Animation Arts Festival International,
            <Icon icon="fluent-emoji:clapper-board" class="inline-block" />
            I have experience communicating
            <Icon icon="fluent-emoji:speech-balloon" class="inline-block" />
            with large teams and working under time constraints.
            <Icon icon="fluent-emoji:hourglass-done" class="inline-block" />
            People know me to be passionate,
            <Icon icon="fluent-emoji:heart-on-fire" class="inline-block" />
            creative,
            <Icon icon="fluent-emoji:artist-palette" class="inline-block" />
            detail-oriented,
            <Icon icon="fluent-emoji:eye" class="inline-block" />
            resourceful,
            <Icon icon="fluent-emoji:light-bulb" class="inline-block" />
            reliable
            <Icon icon="fluent-emoji:hundred-points" class="inline-block" />
            and adaptable.
            <Icon
              icon="fluent-emoji:flexed-biceps-light"
              class="inline-block"
            />
          </p>
        </div>
        <div class="w-full sm:w-1/4">
          <Suspense>
            <LottiePlayer
              :src="AVATAR_SKILLS_SOFT_LOTTIE_PATH"
              autoPlay
              v-once
            />
          </Suspense>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
