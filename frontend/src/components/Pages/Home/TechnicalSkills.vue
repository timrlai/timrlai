<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";
import { Icon } from "@iconify/vue";
import { VueWriter } from "vue-writer";

import {
  lottieConstants,
  primarySkills,
  madeWithSkills,
} from "../../../../lib/constants";

const Lazy = defineAsyncComponent(() => import("../../Common/Lazy.vue"));
const LottiePlayer = defineAsyncComponent(
  () => import("../../Common/LottiePlayer.vue"),
);
const SkillsTable = defineAsyncComponent(
  () => import("../../Common/SkillsTable.vue"),
);

const { AVATAR_SKILLS_DESK_LOTTIE_PATH } = lottieConstants;

const currentSkill = ref(primarySkills[0].icon);
const skillIcon = ref(primarySkills[0].icon);

const onSkillTyped = (currentTitle: string) => {
  currentSkill.value = currentTitle;
  skillIcon.value =
    primarySkills.find(({ title }) => title === currentTitle)?.icon ||
    primarySkills[0].icon;
};

const randomizedSkills = [...primarySkills]
  .sort(() => Math.random() - 0.5)
  .slice(-6);
</script>

<template>
  <div
    class="mockup-code bg-slate-900 text-neutral-content border-x-4 border-primary rounded-none shadow-lg shadow-primary fira-code overflow-x-hidden"
  >
    <div class="px-5">
      <div class="flex flex-wrap justify-between items-center">
        <div class="w-full sm:w-3/4">
          <h2
            class="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 code-comment-inline"
          >
            <Icon icon="fluent-color:code-24" class="inline-block h-[1em]" />
            Technical Skills
          </h2>
          <div class="text-lg/8 sm:text-xl/10">
            <p class="code-comment-block">
              My skills include developing, designing, testing, debugging and
              troubleshooting websites and applications in a wide variety of
              programming languages, frameworks and software. I am also
              experienced with designing intuitive, dynamic and accessible user
              interfaces for web applications using those skills.
            </p>
            <p class="code-comment-block my-4">
              Specifically, I have experience working with...
              <strong class="bg-neutral motion-reduce:hidden">
                <VueWriter
                  :array="primarySkills.map(({ title }) => title)"
                  @typed="onSkillTyped"
                  class="inline" /></strong
              ><strong class="bg-neutral motion-safe:hidden">{{
                currentSkill
              }}</strong
              >.
            </p>
            <div class="text-9xl text-center mt-10">
              <Icon
                v-if="skillIcon !== null"
                :icon="`${skillIcon}`"
                class="inline-block"
              />
            </div>
            <p class="code-comment-block my-4">
              I also have many additional skills such as
              <span
                v-for="(skill, index) in randomizedSkills"
                v-bind:key="skill.title"
              >
                {{ skill.title
                }}<span v-if="index < randomizedSkills.length - 1">, </span
                ><span v-else>.</span
                ><span v-if="index === randomizedSkills.length - 2"> and </span>
              </span>
            </p>
            <div class="text-7xl smtext-8xl text-center my-6">
              <Icon
                v-for="skill in randomizedSkills.filter(
                  ({ icon }) => icon && icon,
                )"
                v-bind:key="skill.title"
                :icon="`${skill.icon}`"
                class="inline-block mx-4"
              />
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/4">
          <Suspense
            ><LottiePlayer
              :src="AVATAR_SKILLS_DESK_LOTTIE_PATH"
              autoPlay
              v-once
          /></Suspense>
        </div>
      </div>
      <p class="code-comment-block text-lg/8 sm:text-xl/10">
        Expand the below table to see all of my technical skills.
      </p>
      <Lazy>
        <SkillsTable />
      </Lazy>
      <div class="mt-8">
        <h2
          class="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 code-comment-inline"
        >
          <Icon icon="fluent-color:code-24" class="inline-block h-[1em]" />
          This Site Was Made With...
        </h2>
        <p class="code-comment-block text-lg/8 sm:text-xl/10 my-4">
          <span
            v-for="(skill, index) in madeWithSkills"
            v-bind:key="skill.title"
          >
            {{ skill.title
            }}<span v-if="index < madeWithSkills.length - 1">, </span>
          </span>
        </p>
        <div
          class="flex flex-wrap justify-center gap-4 text-6xl sm:text-7xl md:text-8xl lg:text-9xl print:hidden"
        >
          <div
            v-for="skills in madeWithSkills.filter(
              (skill) => skill.icon !== null,
            )"
            v-bind:key="skills.title"
            class="tooltip tooltip-secondary tooltip-secondary-content w-1/5 md:w-auto text-center opacity-70 hover:opacity-100"
            :data-tip="`${skills.title}`"
          >
            <div class="tooltip-content">
              <div
                class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl gluten"
              >
                {{ skills.title }}
              </div>
            </div>
            <Icon
              :icon="`${skills.icon}`"
              :aria-label="`${skills.title} logo`"
              class="inline-block"
            />
          </div>
        </div>
        <div class="text-center mt-8">
          <a
            href="https://github.com/timrlai/timrlai"
            target="_blank"
            class="btn btn-block btn-md sm:btn-lg md:btn-xl btn-neutral ubuntu-titling"
            ><Icon
              icon="mingcute:github-fill"
              class="inline-block h-[1.5em]"
            />View the Code for This Site on GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
h2,
p {
  &.code-comment-inline {
    &::before {
      content: "// ";
      opacity: 0.5;
    }
  }

  &.code-comment-block {
    &::before {
      content: "/* ";
      opacity: 0.5;
    }
    &::after {
      content: " */";
      opacity: 0.5;
    }
  }
}
</style>
