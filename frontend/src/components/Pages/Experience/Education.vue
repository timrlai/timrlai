<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { Icon } from "@iconify/vue";

import { lottieConstants, educationSkills } from "../../../../lib/constants";

const LottiePlayer = defineAsyncComponent(
  () => import("../../Common/LottiePlayer.vue"),
);
const SkillsUsed = defineAsyncComponent(
  () => import("../../Common/SkillsUsed.vue"),
);

const { AVATAR_EDUCATION_LOTTIE_PATH } = lottieConstants;
</script>

<template>
  <section id="education">
    <div
      class="mockup-window bg-secondary text-secondary-content border-4 border-primary shadow-lg shadow-primary"
    >
      <div class="px-5 pb-5">
        <h1
          class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase ubuntu-titling border-b-4 border-primary mb-8"
        >
          <Icon icon="mingcute:mortarboard-fill" class="inline-block h-[1em]" />
          Education
        </h1>
        <div class="flex flex-wrap justify-between items-start gap-y-8">
          <div class="w-full sm:w-3/4">
            <div class="flex flex-row justify-between items-start gap-2 mb-8">
              <h2
                class="text-lg sm:text-xl md:text-2xl lg:text-3xl ubuntu-titling h-40 sm:h-auto sm:w-sm"
              >
                <Icon
                  icon="fluent-emoji:school"
                  class="block sm:inline-block text-6xl sm:text-3xl"
                />
                Seneca Polytechnic
              </h2>
              <h3
                class="text-lg sm:text-xl md:text-2xl atkinson-hyperlegible-next-bold border-l-2 border-primary h-40 sm:h-auto pl-2 sm:w-xl"
              >
                <Icon
                  icon="fluent-emoji:man-technologist-light"
                  class="block sm:inline-block text-6xl sm:text-3xl"
                />
                Degree &mdash; Honours Bachelor of Technology<br />
                &mdash; Software Development
              </h3>
              <h3
                class="text-lg sm:text-xl md:text-2xl atkinson-hyperlegible-next-bold border-l-2 border-primary h-40 sm:h-auto pl-2 sm:w-3xs"
              >
                <Icon
                  icon="fluent-color:calendar-28"
                  class="block sm:inline-block text-6xl sm:text-3xl"
                />
                2019 to 2023
              </h3>
            </div>
            <div class="mb-8">
              <Suspense>
                <SkillsUsed :skills="educationSkills.bsd" v-once />
              </Suspense>
            </div>
            <div class="flex flex-row justify-between items-start gap-2 mb-8">
              <h2
                class="text-lg sm:text-xl md:text-2xl lg:text-3xl ubuntu-titling h-40 sm:h-auto sm:w-sm"
              >
                <Icon
                  icon="fluent-emoji:school"
                  class="block sm:inline-block text-6xl sm:text-3xl"
                />
                Seneca Polytechnic
              </h2>
              <h3
                class="text-lg sm:text-xl md:text-2xl atkinson-hyperlegible-next-bold border-l-2 border-primary h-40 sm:h-auto pl-2 sm:w-xl"
              >
                <Icon
                  icon="fluent-emoji:man-teacher-light"
                  class="block sm:inline-block text-6xl sm:text-3xl"
                />
                Excellence in Educating Adults
              </h3>
              <h3
                class="text-lg sm:text-xl md:text-2xl atkinson-hyperlegible-next-bold border-l-2 border-primary h-40 sm:h-auto pl-2 sm:w-3xs"
              >
                <Icon
                  icon="fluent-color:calendar-28"
                  class="block sm:inline-block text-6xl sm:text-3xl"
                />
                2017
              </h3>
            </div>
            <div class="flex flex-row justify-between items-start gap-2 mb-8">
              <h2
                class="text-lg sm:text-xl md:text-2xl lg:text-3xl ubuntu-titling h-40 sm:h-auto sm:w-sm"
              >
                <Icon
                  icon="fluent-emoji:school"
                  class="block sm:inline-block text-6xl sm:text-3xl"
                />
                Seneca Polytechnic
              </h2>
              <h3
                class="text-lg sm:text-xl md:text-2xl atkinson-hyperlegible-next-bold border-l-2 border-primary h-40 sm:h-auto pl-2 sm:w-xl"
              >
                <Icon
                  icon="fluent-emoji:man-technologist-light"
                  class="block sm:inline-block text-6xl sm:text-3xl"
                />
                IT Accelerator<br />
                (Web Programming)
              </h3>
              <h3
                class="text-lg sm:text-xl md:text-2xl atkinson-hyperlegible-next-bold border-l-2 border-primary h-40 sm:h-auto pl-2 sm:w-3xs"
              >
                <Icon
                  icon="fluent-color:calendar-28"
                  class="block sm:inline-block text-6xl sm:text-3xl"
                />
                2016 to 2017
              </h3>
            </div>
            <div class="mb-8">
              <Suspense>
                <SkillsUsed :skills="educationSkills.it" v-once />
              </Suspense>
            </div>
            <div class="flex flex-row justify-between items-start gap-2 mb-8">
              <h2
                class="text-lg sm:text-xl md:text-2xl lg:text-3xl ubuntu-titling h-40 sm:h-auto sm:w-sm"
              >
                <Icon
                  icon="fluent-emoji:school"
                  class="block sm:inline-block text-6xl sm:text-3xl"
                />
                Seneca Polytechnic
              </h2>
              <h3
                class="text-lg sm:text-xl md:text-2xl atkinson-hyperlegible-next-bold border-l-2 border-primary h-40 sm:h-auto pl-2 sm:w-xl"
              >
                <Icon
                  icon="fluent-emoji:man-technologist-light"
                  class="block sm:inline-block text-6xl sm:text-3xl"
                />
                Certificate &mdash; Webmaster<br />
                (Web Design and Development)
              </h3>
              <h3
                class="text-lg sm:text-xl md:text-2xl atkinson-hyperlegible-next-bold border-l-2 border-primary h-40 sm:h-auto pl-2 sm:w-3xs"
              >
                <Icon
                  icon="fluent-color:calendar-28"
                  class="block sm:inline-block text-6xl sm:text-3xl"
                />
                2016
              </h3>
            </div>
            <div class="mb-8">
              <Suspense>
                <SkillsUsed :skills="educationSkills.web" v-once />
              </Suspense>
            </div>
            <div class="flex flex-row justify-between items-start gap-2 mb-8">
              <h2
                class="text-lg sm:text-xl md:text-2xl lg:text-3xl ubuntu-titling h-40 sm:h-auto sm:w-sm"
              >
                <Icon
                  icon="fluent-emoji:school"
                  class="block sm:inline-block text-6xl sm:text-3xl"
                />
                Seneca Polytechnic
              </h2>
              <h3
                class="text-lg sm:text-xl md:text-2xl atkinson-hyperlegible-next-bold border-l-2 border-primary h-40 sm:h-auto pl-2 sm:w-xl"
              >
                <Icon
                  icon="fluent-emoji:artist-light"
                  class="block sm:inline-block text-6xl sm:text-3xl"
                />
                Diploma &mdash; Independent Illustration
              </h3>
              <h3
                class="text-lg sm:text-xl md:text-2xl atkinson-hyperlegible-next-bold border-l-2 border-primary h-40 sm:h-auto pl-2 sm:w-3xs"
              >
                <Icon
                  icon="fluent-color:calendar-28"
                  class="block sm:inline-block text-6xl sm:text-3xl"
                />
                2013 to 2015
              </h3>
            </div>
            <div class="mb-8">
              <Suspense>
                <SkillsUsed :skills="educationSkills.ilu" v-once />
              </Suspense>
            </div>
            <div class="flex flex-row justify-between items-start gap-2 mb-8">
              <h2
                class="text-lg sm:text-xl md:text-2xl lg:text-3xl ubuntu-titling h-40 sm:h-auto sm:w-sm"
              >
                <Icon
                  icon="fluent-emoji:school"
                  class="block sm:inline-block text-6xl sm:text-3xl"
                />
                Seneca Polytechnic
              </h2>
              <h3
                class="text-lg sm:text-xl md:text-2xl atkinson-hyperlegible-next-bold border-l-2 border-primary h-40 sm:h-auto pl-2 sm:w-xl"
              >
                <Icon
                  icon="fluent-emoji:artist-light"
                  class="block sm:inline-block text-6xl sm:text-3xl"
                />
                Certificate &mdash; Art Fundamentals
              </h3>
              <h3
                class="text-lg sm:text-xl md:text-2xl atkinson-hyperlegible-next-bold border-l-2 border-primary h-40 sm:h-auto pl-2 sm:w-3xs"
              >
                <Icon
                  icon="fluent-color:calendar-28"
                  class="block sm:inline-block text-6xl sm:text-3xl"
                />
                2012
              </h3>
            </div>
            <div class="mb-8">
              <Suspense>
                <SkillsUsed :skills="educationSkills.afd" v-once />
              </Suspense>
            </div>
          </div>
          <div class="w-full sm:w-1/4 pl-4 sm:-mt-50">
            <Suspense>
              <LottiePlayer
                :src="AVATAR_EDUCATION_LOTTIE_PATH"
                autoPlay
                v-once
              />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
