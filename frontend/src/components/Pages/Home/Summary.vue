<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { storeToRefs } from "pinia";
import { Icon } from "@iconify/vue";

import { lottieConstants } from "../../../../lib/constants";
import { useThemeStore } from "../../../../lib/stores/theme";

const Lazy = defineAsyncComponent(() => import("../../Common/Lazy.vue"));
const LottiePlayer = defineAsyncComponent(
  () => import("../../Common/LottiePlayer.vue"),
);

const { AVATAR_SUMMARY_LOTTIE_PATH, BAT_SUMMARY_LOTTIE_PATH } = lottieConstants;

const store = useThemeStore();
const { isNight } = storeToRefs(store);
</script>

<template>
  <section
    id="summary"
    class="mockup-window bg-secondary/80 text-secondary-content border-4 border-primary shadow-lg shadow-primary"
  >
    <Lazy :min-height="700">
      <div class="px-5">
        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase ubuntu-titling border-b-4 border-primary mb-4"
        >
          <Icon
            icon="mingcute:list-check-3-fill"
            class="inline-block h-[1em]"
          />
          Summary
        </h1>
        <div class="flex flex-wrap justify-between items-center">
          <ul
            class="list w-full sm:w-3/4 text-lg sm:text-xl atkinson-hyperlegible-next-bold"
          >
            <li class="list-row">
              <div class="text-4xl sm:text-5xl">
                <Icon icon="fluent-emoji:robot" />
              </div>
              <div>
                Worked as a web developer at
                <a
                  href="https://futuretalk.ca"
                  target="_blank"
                  class="link link-accent link-hover"
                  >Futuretalk Inc.</a
                >
                making
                <a
                  href="https://learnwithtrek.com"
                  target="_blank"
                  class="link link-accent link-hover"
                  >VR/AR and AI applications</a
                >
                with React/Next.js and Three.js
              </div>
            </li>
            <li class="list-row">
              <div class="text-4xl sm:text-5xl">
                <Icon icon="fluent-emoji:man-teacher-light" />
              </div>
              <div>
                Teacher of
                <a
                  href="https://www.senecapolytechnic.ca/ce/creative/graphics-web-design/web-programming-development.html"
                  target="_blank"
                  class="link link-accent link-hover"
                  >Web Programming</a
                >
                with Python and Django, PHP and Laravel and JavaScript and
                Angular at Seneca Polytechnic
              </div>
            </li>
            <li class="list-row">
              <div class="text-4xl sm:text-5xl">
                <Icon icon="fluent-emoji:student-light" />
              </div>
              <div>
                Graduated with an
                <a
                  href="https://www.senecapolytechnic.ca/programs/fulltime/BSD.html"
                  target="_blank"
                  class="link link-accent link-hover"
                  >Honours Bachelor of Technology - Software Development</a
                >
                degree from Seneca Polytechnic
              </div>
            </li>
            <li class="list-row">
              <div class="text-4xl sm:text-5xl">
                <Icon icon="fluent-emoji:man-technologist-light" />
              </div>
              <div>
                A passionate full stack developer/designer with 5+ years of web
                development experience
              </div>
            </li>
            <li class="list-row">
              <div class="text-4xl sm:text-5xl">
                <Icon icon="fluent-emoji:heart-on-fire" />
              </div>
              <div>
                Enthusiastic, creative, detail-oriented, resourceful, reliable,
                fast learning, dedicated and adaptable
              </div>
            </li>
            <li class="list-row">
              <div class="text-4xl sm:text-5xl">
                <Icon icon="fluent-emoji:handshake" />
              </div>
              <div>
                Experience working both independently and in team-oriented,
                collaborative environments
              </div>
            </li>
            <li class="list-row">
              <div class="text-4xl sm:text-5xl">
                <Icon icon="flag:ca-1x1" />
              </div>
              <div>Canadian citizen</div>
            </li>
          </ul>
          <div v-if="!isNight" class="w-full sm:w-1/4 pl-14 sm:pl-0 pr-14">
            <Suspense>
              <LottiePlayer :src="AVATAR_SUMMARY_LOTTIE_PATH" autoPlay v-once />
            </Suspense>
          </div>
          <div v-if="isNight" class="w-full sm:w-1/4 sm:pl-0">
            <Suspense>
              <LottiePlayer :src="BAT_SUMMARY_LOTTIE_PATH" autoPlay v-once />
            </Suspense>
          </div>
        </div>
      </div>
    </Lazy>
  </section>
</template>

<style scoped lang="scss"></style>
