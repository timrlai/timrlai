<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";

import { lottieConstants } from "../../../../lib/constants";

const LottiePlayer = defineAsyncComponent(
  () => import("../../Common/LottiePlayer.vue"),
);

const {
  AVATAR_SKILLS_DESK_LOTTIE_PATH,
  AVATAR_TEACHER_DESK_LOTTIE_PATH,
  AVATAR_DESIGNER_DESK_LOTTIE_PATH,
  AVATAR_ILLUSTRATOR_LOTTIE_PATH,
  AVATAR_EDUCATION_LOTTIE_PATH,
  AVATAR_VOLUNTEER_LOTTIE_PATH,
} = lottieConstants;
</script>

<template>
  <section
    id="experience"
    class="mockup-window bg-secondary text-secondary-content border-4 border-primary shadow-lg shadow-primary"
  >
    <div class="px-5">
      <h1
        class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase ubuntu-titling border-b-4 border-primary mb-4"
      >
        <Icon icon="mingcute:document-2-fill" class="inline-block h-[1em]" />
        Experience
      </h1>
      <div class="flex flex-wrap justify-between items-center gap-4">
        <div class="flex flex-col items-center w-full md:w-1/4">
          <RouterLink
            to="/experience#developer"
            hash="developer"
            class="experience-link"
          >
            <div
              class="lottie-box mask mask-squircle glass w-2xs h-2xs bg-primary -mb-10"
            >
              <div class="-mb-30">
                <Suspense>
                  <LottiePlayer
                    :src="AVATAR_SKILLS_DESK_LOTTIE_PATH"
                    autoPlay
                    v-once
                  />
                </Suspense>
              </div>
            </div>
            <h2 class="text-3xl text-center ubuntu-titling">
              <Icon icon="mingcute:code-fill" class="inline-block h-[1em]" />
              Developer
            </h2>
          </RouterLink>
        </div>
        <div class="flex flex-col items-center w-full md:w-1/4">
          <RouterLink
            to="/experience#teacher"
            hash="teacher"
            class="experience-link"
          >
            <div
              class="lottie-box mask mask-squircle glass w-2xs h-2xs bg-primary -mb-3"
            >
              <div class="-ml-30 -mb-30">
                <Suspense>
                  <LottiePlayer
                    :src="AVATAR_TEACHER_DESK_LOTTIE_PATH"
                    autoPlay
                    v-once
                  />
                </Suspense>
              </div>
            </div>
            <h2 class="text-3xl text-center ubuntu-titling">
              <Icon icon="mingcute:school-fill" class="inline-block h-[1em]" />
              Teacher
            </h2>
          </RouterLink>
        </div>
        <div class="flex flex-col items-center w-full md:w-1/4">
          <RouterLink
            to="/experience#designer"
            hash="designer"
            class="experience-link"
          >
            <div
              class="lottie-box mask mask-squircle glass w-2xs h-2xs bg-primary mt-10 mb-5"
            >
              <div class="-mb-30">
                <Suspense>
                  <LottiePlayer
                    :src="AVATAR_DESIGNER_DESK_LOTTIE_PATH"
                    autoPlay
                    v-once
                  />
                </Suspense>
              </div>
            </div>
            <h2 class="text-3xl text-center ubuntu-titling">
              <Icon icon="mingcute:palette-fill" class="inline-block h-[1em]" />
              Designer
            </h2>
          </RouterLink>
        </div>
        <div class="flex flex-col items-center w-full md:w-1/4">
          <RouterLink
            to="/experience#illustrator"
            hash="illustrator"
            class="experience-link"
          >
            <div
              class="lottie-box mask mask-squircle glass w-2xs h-2xs bg-primary mt-10 mb-5"
            >
              <div class="-mb-30">
                <Suspense>
                  <LottiePlayer
                    :src="AVATAR_ILLUSTRATOR_LOTTIE_PATH"
                    autoPlay
                    v-once
                  />
                </Suspense>
              </div>
            </div>
            <h2 class="text-3xl text-center ubuntu-titling">
              <Icon
                icon="mingcute:paint-brush-fill"
                class="inline-block h-[1em]"
              />
              Illustrator
            </h2>
          </RouterLink>
        </div>
        <div class="flex flex-col items-center w-full md:w-1/4">
          <RouterLink
            to="/experience#education"
            hash="education"
            class="experience-link"
          >
            <div
              class="lottie-box mask mask-squircle glass w-2xs h-2xs bg-primary -mt-20 -mb-25"
            >
              <div class="-mb-30">
                <Suspense>
                  <LottiePlayer
                    :src="AVATAR_EDUCATION_LOTTIE_PATH"
                    autoPlay
                    v-once
                  />
                </Suspense>
              </div>
            </div>
            <h2 class="text-3xl text-center ubuntu-titling">
              <Icon
                icon="mingcute:mortarboard-fill"
                class="inline-block h-[1em]"
              />
              Education
            </h2>
          </RouterLink>
        </div>
        <div class="flex flex-col items-center w-full md:w-1/4">
          <RouterLink
            to="/experience#volunteer"
            hash="volunteer"
            class="experience-link"
          >
            <div
              class="lottie-box mask mask-squircle glass w-2xs h-2xs bg-primary -mb-5"
            >
              <div class="-mb-30">
                <Suspense>
                  <LottiePlayer
                    :src="AVATAR_VOLUNTEER_LOTTIE_PATH"
                    autoPlay
                    v-once
                  />
                </Suspense>
              </div>
            </div>
            <h2 class="text-3xl text-center ubuntu-titling">
              <Icon
                icon="mingcute:hand-heart-fill"
                class="inline-block h-[1em]"
              />
              Volunteer
            </h2>
          </RouterLink>
        </div>
      </div>
      <div class="pt-20 pb-5">
        <RouterLink
          to="/experience"
          hash="#"
          class="btn btn-block btn-xl btn-primary ubuntu-titling"
          ><Icon icon="mingcute:document-2-fill" class="inline-block h-[1em]" />
          View My Experience</RouterLink
        >
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
$hover-color: oklch(44% 0.14 42);
$transition: all 0.7s;

.experience-link {
  &:hover {
    .lottie-box {
      background: $hover-color;
      transition: $transition;
    }
    h2 {
      color: $hover-color;
      transition: $transition;
    }
  }
}
</style>
