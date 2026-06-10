<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { storeToRefs } from "pinia";
import { Icon } from "@iconify/vue";

import { lottieConstants } from "../../../../lib/constants";
import { useThemeStore } from "../../../../lib/stores/theme";

const LottiePlayer = defineAsyncComponent(
  () => import("../../Common/LottiePlayer.vue"),
);

const { AVATAR_SKILLS_SOFT_LOTTIE_PATH, BAT_SKILLS_SOFT_LOTTIE_PATH } =
  lottieConstants;

const store = useThemeStore();
const { isNight } = storeToRefs(store);
</script>

<template>
  <div
    id="soft-skills"
    class="mockup-window bg-secondary/80 text-secondary-content border-4 rounded-t-none border-primary shadow-lg shadow-primary"
  >
    <div class="p-5">
      <div class="flex flex-wrap justify-between items-center">
        <div class="w-full sm:w-1/2 sm:pr-14">
          <h2 class="text-3xl sm:text-4xl ubuntu-titling mb-8">
            <Icon icon="fluent-emoji:handshake" class="inline-block h-[1em]" />
            Soft Skills
          </h2>
          <h3 class="text-2xl sm:text-3xl ubuntu-titling mb-4">Teamwork</h3>
          <p class="text-xl sm:text-2xl mb-8 text-justify">
            Having worked with large, fast-paced organizations such as
            Futuretalk Inc., Seneca Polytechnic and the Toronto Animation Arts
            Festival International, I have experience communicating with large
            teams and working under time constraints. People know me to be
            passionate, creative, detail-oriented, resourceful, reliable and
            adaptable.
          </p>
          <h3 class="text-2xl sm:text-3xl ubuntu-titling mb-4">
            Work Philosophy Statement
          </h3>
          <p class="text-xl sm:text-2xl text-justify">
            As a developer who is also an artist and educator, I approach work
            with creativity and curiosity, adapting to meet the team's unique
            needs and articulating complex technical concepts to varying
            stakeholders.
          </p>
        </div>
        <div class="w-full sm:w-1/2 min-h-75">
          <Suspense>
            <LottiePlayer
              :key="isNight ? 'night' : 'day'"
              :src="
                isNight
                  ? BAT_SKILLS_SOFT_LOTTIE_PATH
                  : AVATAR_SKILLS_SOFT_LOTTIE_PATH
              "
              scrolling
              scroll-target="soft-skills-lottie"
            />
          </Suspense>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
