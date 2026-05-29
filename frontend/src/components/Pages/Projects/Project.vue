<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { Icon } from "@iconify/vue";

import type { ProjectProps } from "../../../../lib/types/index.ts";
import { lottieConstants } from "../../../../lib/constants";

const Lazy = defineAsyncComponent(() => import("../../Common/Lazy.vue"));
const LottiePlayer = defineAsyncComponent(
  () => import("../../Common/LottiePlayer.vue"),
);
const SkillsUsed = defineAsyncComponent(
  () => import("../../Common/SkillsUsed.vue"),
);
const VimeoVideo = defineAsyncComponent(
  () => import("../../Common/VimeoVideo.vue"),
);

const {
  AVATAR_SKILLS_DESK_LOTTIE_PATH,
  AVATAR_VR_LOTTIE_PATH,
  AVATAR_DESIGNER_DESK_LOTTIE_PATH,
} = lottieConstants;

const {
  slug,
  icon,
  title,
  videoId,
  description,
  process,
  outcome,
  demoLink,
  gitHubLink,
  lottieType,
  skills,
} = defineProps<ProjectProps>();
</script>

<template>
  <section :id="slug">
    <div
      class="mockup-window bg-secondary/80 text-secondary-content border-4 border-primary shadow-lg shadow-primary"
    >
      <div class="px-5 pb-5">
        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase ubuntu-titling border-b-4 border-primary mb-8"
        >
          <Icon :icon="icon" class="inline-block h-[1em]" />
          {{ title }}
        </h1>
        <div class="flex flex-wrap justify-between gap-y-8">
          <div class="w-full">
            <Lazy :min-height="200">
              <Suspense>
                <VimeoVideo
                  :videoId="videoId"
                  :appId="58479"
                  :title="title"
                  v-once
                />
              </Suspense>
            </Lazy>
          </div>
          <div class="w-full sm:w-3/4">
            <ul class="list text-base sm:text-lg my-4">
              <li class="list-row">
                <div>
                  <h2
                    class="text-lg sm:text-xl md:text-2xl lg:text-3xl ubuntu-titling h-40 sm:h-auto mb-4"
                  >
                    Description:
                  </h2>
                  {{ description }}
                </div>
              </li>
              <li class="list-row">
                <div>
                  <h2
                    class="text-lg sm:text-xl md:text-2xl lg:text-3xl ubuntu-titling h-40 sm:h-auto mb-4"
                  >
                    Process:
                  </h2>
                  {{ process }}
                </div>
              </li>
              <li class="list-row">
                <div>
                  <h2
                    class="text-lg sm:text-xl md:text-2xl lg:text-3xl ubuntu-titling h-40 sm:h-auto mb-4"
                  >
                    Outcome:
                  </h2>
                  {{ outcome }}
                </div>
              </li>
              <li class="list-row" v-if="demoLink">
                <div>
                  <h2
                    class="text-lg sm:text-xl md:text-2xl lg:text-3xl ubuntu-titling h-40 sm:h-auto mb-4"
                  >
                    Demo Link:
                  </h2>
                  {{ " " }}
                  <a
                    :href="demoLink"
                    target="_blank"
                    class="link link-accent link-hover text-lg sm:text-xl md:text-2xl lg:text-3xl h-40 sm:h-auto mb-4"
                    >{{ demoLink }}</a
                  >
                </div>
              </li>
              <li class="list-row" v-if="gitHubLink">
                <div>
                  <h2
                    class="text-lg sm:text-xl md:text-2xl lg:text-3xl ubuntu-titling h-40 sm:h-auto mb-4"
                  >
                    GitHub Repository Link:
                  </h2>
                  {{ " " }}
                  <a
                    :href="gitHubLink"
                    target="_blank"
                    class="link link-accent link-hover text-lg sm:text-xl md:text-2xl lg:text-3xl h-40 sm:h-auto mb-4"
                    >{{ gitHubLink }}</a
                  >
                </div>
              </li>
            </ul>
          </div>
          <div class="w-full sm:w-1/4">
            <Suspense>
              <LottiePlayer
                :src="
                  lottieType === 'vr'
                    ? AVATAR_VR_LOTTIE_PATH
                    : lottieType === 'designer'
                      ? AVATAR_DESIGNER_DESK_LOTTIE_PATH
                      : AVATAR_SKILLS_DESK_LOTTIE_PATH
                "
                autoPlay
                v-once
              />
            </Suspense>
          </div>
          <Lazy :min-height="200">
            <Suspense>
              <SkillsUsed
                :labelledby="`projects-${slug}-heading`"
                :skills="skills"
                v-once
              />
            </Suspense>
          </Lazy>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
