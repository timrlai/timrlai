<script setup lang="ts">
import { defineAsyncComponent, nextTick, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { Icon } from "@iconify/vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { lottieConstants } from "../../../../lib/constants";
import { useThemeStore } from "../../../../lib/stores/theme";

const Lazy = defineAsyncComponent(() => import("../../Common/Lazy.vue"));
const LottiePlayer = defineAsyncComponent(
  () => import("../../Common/LottiePlayer.vue"),
);

const { AVATAR_SUMMARY_LOTTIE_PATH, BAT_SUMMARY_LOTTIE_PATH } = lottieConstants;

const store = useThemeStore();
const { isNight } = storeToRefs(store);

const sectionId = "summary";

gsap.registerPlugin(ScrollTrigger);

onMounted(async () => {
  await nextTick();

  const from = {
    x: -1000,
    opacity: 0,
  };
  const timelineSettings = {
    scrollTrigger: {
      trigger: `#${sectionId}`,
      pin: true,
      pinSpacing: true,
      start: "-=70",
      end: "+=2000",
      scrub: 1,
    },
    duration: 2,
    x: 0,
    opacity: 1,
  };

  const timeline = gsap.timeline(timelineSettings);

  timeline
    .from(".item1", from)
    .from(".item2", from)
    .from(".item3", from)
    .from(".item4", from)
    .from(".item5", from)
    .from(".item6", from)
    .from(".item7", from)
    .from(".item8", from);

  ScrollTrigger.refresh();
});
</script>

<template>
  <div class="pin-wrapper block relative isolate">
    <section
      :id="sectionId"
      class="mockup-window bg-secondary/80 text-secondary-content border-4 border-primary shadow-lg shadow-primary"
    >
      <div class="px-5 pb-2">
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
          <ul class="list w-full sm:w-3/4 text-lg sm:text-xl ahn-bold">
            <li class="list-row item1">
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
            <li class="list-row item2">
              <div class="text-4xl sm:text-5xl">
                <Icon icon="fluent-emoji:man-teacher-light" />
              </div>
              <div>
                Teacher of
                <a
                  href="https://www.senecapolytechnic.ca/ce/creative/graphics-web-design/web-programming-development.html"
                  target="_blank"
                  class="link link-accent link-hover"
                  >JavaScript & React, Python & Django and PHP & Laravel</a
                >
                at Seneca Polytechnic
              </div>
            </li>
            <li class="list-row item3">
              <div class="text-4xl sm:text-5xl">
                <Icon icon="fluent-emoji:man-artist-light" />
              </div>
              <div>
                Teacher of
                <a
                  href="https://continuingstudies.ocadu.ca/search/publicCourseSearchDetails.do?method=load&courseId=18023"
                  target="_blank"
                  class="link link-accent link-hover"
                  >Introduction to Web Development</a
                >
                and
                <a
                  href="https://continuingstudies.ocadu.ca/search/publicCourseSearchDetails.do?method=load&courseId=18145"
                  target="_blank"
                  class="link link-accent link-hover"
                  >Web Programming with JavaScript and React</a
                >
                at OCAD University
              </div>
            </li>
            <li class="list-row item4">
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
            <li class="list-row item5">
              <div class="text-4xl sm:text-5xl">
                <Icon icon="fluent-emoji:man-technologist-light" />
              </div>
              <div>
                A passionate full stack developer/designer with 5+ years of web
                development experience
              </div>
            </li>
            <li class="list-row item6">
              <div class="text-4xl sm:text-5xl">
                <Icon icon="fluent-emoji:heart-on-fire" />
              </div>
              <div>
                Enthusiastic, creative, detail-oriented, resourceful, reliable,
                fast learning, dedicated and adaptable
              </div>
            </li>
            <li class="list-row item7">
              <div class="text-4xl sm:text-5xl">
                <Icon icon="fluent-emoji:handshake" />
              </div>
              <div>
                Experience working both independently and in team-oriented,
                collaborative environments
              </div>
            </li>
            <li class="list-row item8">
              <div class="text-4xl sm:text-5xl">
                <Icon icon="flag:ca-1x1" />
              </div>
              <div>
                Canadian citizen living in the Greater Toronto Area, able to
                work in the GTA or remote environments
              </div>
            </li>
          </ul>
          <div v-if="!isNight" class="w-full sm:w-1/4 pl-14 sm:pl-0 pr-14">
            <Lazy :min-height="200">
              <Suspense>
                <LottiePlayer
                  :src="AVATAR_SUMMARY_LOTTIE_PATH"
                  autoPlay
                  v-once
                />
              </Suspense>
            </Lazy>
          </div>
          <div v-if="isNight" class="w-full sm:w-1/4 sm:pl-0">
            <Lazy :min-height="200">
              <Suspense>
                <LottiePlayer :src="BAT_SUMMARY_LOTTIE_PATH" autoPlay v-once />
              </Suspense>
            </Lazy>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss"></style>
