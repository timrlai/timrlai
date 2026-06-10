<script setup lang="ts">
import {
  defineAsyncComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
} from "vue";
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { lottieConstants } from "../../../../lib/constants";
import useScrollTriggers from "../../../../lib/gsap/useScrollTriggers.ts";

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

const sectionId = "experience";
let scrollTriggers: ScrollTrigger[] = [];
const {
  belowSmall,
  motionReduce,
  addScrollTrigger,
  refreshScrollTriggers,
  killAllScrollTriggers,
  dynamicEndScrollTrigger,
} = useScrollTriggers();

onMounted(async () => {
  // 1. Vue DOM updates
  await nextTick();

  if (belowSmall || motionReduce) return;

  // 2. Two paints
  await new Promise((r) =>
    requestAnimationFrame(() => requestAnimationFrame(r)),
  );

  // 3. Fonts
  await document.fonts.ready;

  // 4. Images, Lottie, async components, Suspense
  await new Promise((resolve) => {
    if (document.readyState === "complete") resolve(null);
    else window.addEventListener("load", resolve, { once: true });
  });

  requestIdleCallback(() => {
    const from = {
      rotation: -180,
      scale: 0,
      opacity: 0,
    };
    const timelineSettings = {
      scrollTrigger: dynamicEndScrollTrigger(sectionId, "top+=80 top", 1500),
      rotation: 0,
      scale: 1,
      opacity: 1,
    };

    const timeline = gsap.timeline(timelineSettings);

    if (timeline) {
      addScrollTrigger(timeline, scrollTriggers);

      timeline
        .from(".experience1", from)
        .from(".experience2", from)
        .from(".experience3", from)
        .from(".experience4", from)
        .from(".experience5", from)
        .from(".experience6", from)
        .from(".experience7", from)
        .from(".experience8", from);
    }

    refreshScrollTriggers();
  });
});

onBeforeUnmount(() => killAllScrollTriggers(scrollTriggers));
</script>

<template>
  <section
    :id="sectionId"
    class="mockup-window bg-secondary/80 text-secondary-content border-4 border-primary shadow-lg shadow-primary"
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
          <div class="experience-link experience1">
            <RouterLink to="/experience#developer" hash="developer">
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
        </div>
        <div class="flex flex-col items-center w-full md:w-1/4">
          <div class="experience-link experience2">
            <RouterLink to="/experience#teacher" hash="teacher">
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
                <Icon
                  icon="mingcute:school-fill"
                  class="inline-block h-[1em]"
                />
                Teacher
              </h2>
            </RouterLink>
          </div>
        </div>
        <div class="flex flex-col items-center w-full md:w-1/4">
          <div class="experience-link experience3">
            <RouterLink to="/experience#designer" hash="designer">
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
                <Icon
                  icon="mingcute:palette-fill"
                  class="inline-block h-[1em]"
                />
                Designer
              </h2>
            </RouterLink>
          </div>
        </div>
        <div class="flex flex-col items-center w-full md:w-1/4">
          <div class="experience-link experience4">
            <RouterLink to="/experience#illustrator" hash="illustrator">
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
        </div>
        <div class="flex flex-col items-center w-full md:w-1/4">
          <div class="experience-link experience5">
            <RouterLink to="/experience#education" hash="education">
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
        </div>
        <div class="flex flex-col items-center w-full md:w-1/4">
          <div class="experience-link experience6">
            <RouterLink to="/experience#volunteer" hash="volunteer">
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
$hover-color: var(--color-accent);
$transition: all 0.7s;

.experience-link {
  contain: paint;
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
