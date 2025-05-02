<script setup lang="ts">
import { defineAsyncComponent, ref, useTemplateRef } from "vue";
import { Icon } from "@iconify/vue";
import { VueWriter } from "vue-writer";

import {
  lottieConstants,
  languageSkills,
  frameworkSkills,
  cmsSkills,
  editorSkills,
  designSkills,
  generalSkills,
  primarySkills,
  madeWithSkills,
} from "../../../../lib/constants";

const LottiePlayer = defineAsyncComponent(
  () => import("../../Common/LottiePlayer.vue"),
);

const { AVATAR_SKILLS_DESK_LOTTIE_PATH, AVATAR_SKILLS_SOFT_LOTTIE_PATH } =
  lottieConstants;

const currentSkill = ref(primarySkills[0].icon);
const skillIcon = ref(primarySkills[0].icon);
const tableCheckbox = useTemplateRef("table-checkbox");

const onSkillTyped = (currentTitle: string) => {
  currentSkill.value = currentTitle;
  skillIcon.value =
    primarySkills.find(({ title }) => title === currentTitle)?.icon ||
    primarySkills[0].icon;
};

const randomizedSkills = [...primarySkills]
  .sort(() => Math.random() - 0.5)
  .slice(-6);

const checkboxKeyPress = (event: KeyboardEvent) => {
  if (event.keyCode === 13 && tableCheckbox.value) {
    tableCheckbox.value.checked = !tableCheckbox.value.checked;
  }
};
</script>

<template>
  <section id="skills" class="flex flex-col">
    <div
      class="mockup-window bg-secondary text-secondary-content border-4 border-primary rounded-b-none shadow-lg shadow-primary"
    >
      <h1 class="text-4xl sm:text-5xl text-center ubuntu-titling mb-4 px-5">
        Skills
        <Icon icon="fluent-color:code-20" class="inline-block" /><Icon
          icon="fluent-color:design-ideas-20"
          class="inline-block"
        /><Icon icon="fluent-emoji:handshake" class="inline-block" />
      </h1>
    </div>
    <div
      class="mockup-code bg-slate-800 text-neutral-content border-x-4 border-primary rounded-none shadow-lg shadow-primary fira-code overflow-x-hidden"
    >
      <div class="px-5">
        <div class="flex flex-wrap justify-between items-center">
          <div class="w-full sm:w-3/4">
            <h2 class="text-xl sm:text-2xl mb-4 code-comment-inline">
              Technical Skills
              <Icon icon="fluent-color:code-20" class="inline-block" /><Icon
                icon="fluent-color:design-ideas-20"
                class="inline-block"
              />
            </h2>
            <div class="text-lg/8 sm:text-xl/10">
              <p class="code-comment-block">
                My skills include developing, designing, testing, debugging and
                troubleshooting websites and applications in a wide variety of
                programming languages, frameworks and software. I am also
                experienced with designing intuitive, dynamic and accessible
                user interfaces for web applications using those skills.
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
                  ><span v-if="index === randomizedSkills.length - 2">
                    and
                  </span>
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
            <LottiePlayer :src="AVATAR_SKILLS_DESK_LOTTIE_PATH" autoPlay />
          </div>
        </div>
        <p class="code-comment-block text-lg/8 sm:text-xl/10">
          Expand the below table to see all of my technical skills.
        </p>
        <div class="collapse collapse-plus mt-5">
          <input
            ref="table-checkbox"
            id="table-checkbox"
            type="checkbox"
            :onkeypress="checkboxKeyPress"
          />
          <label
            for="table-checkbox"
            class="collapse-title text-lg sm:text-xl ubuntu-titling bg-neutral text-neutral-content"
          >
            <Icon icon="mingcute:table-2-line" class="inline-block h-[1.5em]" />
            Click to View All Technical Skills
          </label>
          <div class="overflow-x-auto">
            <table
              class="table table-zebra text-lg bg-base-100 text-base-content atkinson-hyperlegible-next-medium"
            >
              <!-- head -->
              <thead
                class="text-center text-xl ubuntu-bold bg-base-200 text-base-content atkinson-hyperlegible-next-bold"
              >
                <tr>
                  <th>Category</th>
                  <th>Skills</th>
                </tr>
              </thead>
              <tbody>
                <!-- row 1 -->
                <tr>
                  <td class="atkinson-hyperlegible-next-bold">Languages:</td>
                  <td class="flex flex-col gap-2">
                    <p>
                      <span
                        v-for="(skill, index) in languageSkills"
                        v-bind:key="skill.title"
                      >
                        {{ skill.title
                        }}<span v-if="index < languageSkills.length - 1"
                          >,
                        </span>
                      </span>
                    </p>
                    <div class="flex gap-2 text-5xl">
                      <Icon
                        v-for="skill in languageSkills.filter(
                          ({ icon }) => icon && icon,
                        )"
                        v-bind:key="skill.title"
                        :icon="`${skill.icon}`"
                      />
                    </div>
                  </td>
                </tr>
                <!-- row 2 -->
                <tr>
                  <td class="font-bold">Frameworks/Libraries:</td>
                  <td class="flex flex-col gap-2">
                    <p>
                      <span
                        v-for="(skill, index) in frameworkSkills"
                        v-bind:key="skill.title"
                      >
                        {{ skill.title
                        }}<span v-if="index < frameworkSkills.length - 1"
                          >,
                        </span>
                      </span>
                    </p>
                    <div class="flex gap-2 text-5xl">
                      <Icon
                        v-for="skill in frameworkSkills.filter(
                          ({ icon }) => icon && icon,
                        )"
                        v-bind:key="skill.title"
                        :icon="`${skill.icon}`"
                      />
                    </div>
                  </td>
                </tr>
                <!-- row 3 -->
                <tr>
                  <td class="font-bold">Content Management Systems:</td>
                  <td class="flex flex-col gap-2">
                    <p>
                      <span
                        v-for="(skill, index) in cmsSkills"
                        v-bind:key="skill.title"
                      >
                        {{ skill.title
                        }}<span v-if="index < cmsSkills.length - 1">, </span>
                      </span>
                    </p>
                    <div class="flex gap-2 text-5xl">
                      <Icon
                        v-for="skill in cmsSkills.filter(
                          ({ icon }) => icon && icon,
                        )"
                        v-bind:key="skill.title"
                        :icon="`${skill.icon}`"
                      />
                    </div>
                  </td>
                </tr>
                <!-- row 4 -->
                <tr>
                  <td class="font-bold">Text Editors/IDEs/FTP:</td>
                  <td class="flex flex-col gap-2">
                    <p>
                      <span
                        v-for="(skill, index) in editorSkills"
                        v-bind:key="skill.title"
                      >
                        {{ skill.title
                        }}<span v-if="index < editorSkills.length - 1">, </span>
                      </span>
                    </p>
                    <div class="flex gap-2 text-5xl">
                      <Icon
                        v-for="skill in editorSkills.filter(
                          ({ icon }) => icon && icon,
                        )"
                        v-bind:key="skill.title"
                        :icon="`${skill.icon}`"
                      />
                    </div>
                  </td>
                </tr>
                <!-- row 5 -->
                <tr>
                  <td class="font-bold">Design/Illustration Software:</td>
                  <td class="flex flex-col gap-2">
                    <p>
                      <span
                        v-for="(skill, index) in designSkills"
                        v-bind:key="skill.title"
                      >
                        {{ skill.title
                        }}<span v-if="index < designSkills.length - 1">, </span>
                      </span>
                    </p>
                    <div class="flex gap-2 text-5xl">
                      <Icon
                        v-for="skill in designSkills.filter(
                          ({ icon }) => icon && icon,
                        )"
                        v-bind:key="skill.title"
                        :icon="`${skill.icon}`"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="font-bold">General Software:</td>
                  <td class="flex flex-col gap-2">
                    <p>
                      <span
                        v-for="(skill, index) in generalSkills"
                        v-bind:key="skill.title"
                      >
                        {{ skill.title
                        }}<span v-if="index < generalSkills.length - 1"
                          >,
                        </span>
                      </span>
                    </p>
                    <div class="flex gap-2 text-5xl">
                      <Icon
                        v-for="skill in generalSkills.filter(
                          ({ icon }) => icon && icon,
                        )"
                        v-bind:key="skill.title"
                        :icon="`${skill.icon}`"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="mt-8">
          <h2 class="text-xl sm:text-2xl mb-4 code-comment-inline">
            This Site Was Made With...
            <Icon icon="fluent-color:code-20" class="inline-block" /><Icon
              icon="fluent-color:design-ideas-20"
              class="inline-block"
            />
          </h2>
          <div
            class="flex flex-wrap gap-2 text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
          >
            <div
              v-for="skills in madeWithSkills"
              v-bind:key="skills.title"
              class="tooltip tooltip-secondary tooltip-secondary-content opacity-70 hover:opacity-100"
              :data-tip="`${skills.title}`"
            >
              <div class="tooltip-content">
                <div class="text-2xl gluten">
                  {{ skills.title }}
                </div>
              </div>
              <Icon
                :icon="`${skills.icon}`"
                :aria-label="`${skills.title} logo`"
              />
            </div>
          </div>
          <div class="text-center mt-8">
            <a
              href="https://github.com/timrlai/timrlai"
              target="_blank"
              class="btn btn-lg md:btn-xl btn-neutral ubuntu-titling"
              ><Icon
                icon="mingcute:github-fill"
                class="inline-block h-[1.5em]"
              />View the Code for This Site on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="mockup-window bg-secondary text-secondary-content border-4 rounded-t-none border-primary shadow-lg shadow-primary"
    >
      <div class="p-5">
        <div class="flex flex-wrap justify-between items-center">
          <div class="w-full sm:w-4/5 sm:pr-14">
            <h2 class="text-2xl sm:text-3xl ubuntu-titling mb-4">
              Soft Skills
              <Icon icon="fluent-emoji:handshake" class="inline-block" />
            </h2>
            <p class="text-xl sm:text-2xl">
              Having worked with large, fast-paced organizations such as
              Futuretalk Inc.,
              <Icon icon="fluent-emoji:robot" class="inline-block" /> Seneca
              Polytechnic
              <Icon
                icon="fluent-emoji:man-teacher-light"
                class="inline-block"
              />
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
          <div class="w-full sm:w-1/5">
            <LottiePlayer :src="AVATAR_SKILLS_SOFT_LOTTIE_PATH" autoPlay />
          </div>
        </div>
      </div>
    </div>
  </section>
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
