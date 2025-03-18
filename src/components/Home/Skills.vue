<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { VueWriter } from "vue-writer";

import {
  languageSkills,
  frameworkSkills,
  cmsSkills,
  editorSkills,
  designSkills,
  generalSkills,
  primarySkills,
  madeWithSkills,
} from "../../../lib/constants";

const skillIcon = ref(primarySkills[0].icon);
const onSkillTyped = (currentTitle: string) => {
  skillIcon.value =
    primarySkills.find(({ title }) => title === currentTitle)?.icon ||
    primarySkills[0].icon;
};

const randomizedSkills = [...primarySkills]
  .sort(() => Math.random() - 0.5)
  .slice(-6);
</script>

<template>
  <section id="skills" class="flex flex-col">
    <div
      class="mockup-window bg-secondary text-secondary-content border-4 border-primary rounded-b-none shadow-lg shadow-primary"
    >
      <h1 class="text-5xl text-center ubuntu-titling mb-4 px-5">
        Skills
        <Icon icon="fluent-color:code-20" class="inline-block" /><Icon
          icon="fluent-color:design-ideas-20"
          class="inline-block"
        /><Icon icon="fluent-emoji:handshake" class="inline-block" />
      </h1>
    </div>
    <div
      class="mockup-code bg-slate-800 text-slate-300 border-x-4 border-primary rounded-none shadow-lg shadow-primary fira-code"
    >
      <div class="px-5">
        <h2 class="text-3xl mb-4 code-comment-inline">
          Technical Skills
          <Icon icon="fluent-color:code-20" class="inline-block" /><Icon
            icon="fluent-color:design-ideas-20"
            class="inline-block"
          />
        </h2>
        <div class="text-2xl/12">
          <p class="code-comment-block">
            My skills include developing, designing, testing, debugging and
            troubleshooting websites and applications in a wide variety of
            programming languages, frameworks and software. I am also
            experienced with designing intuitive, dynamic and accessible user
            interfaces for web applications using those skills.
          </p>
          <p class="code-comment-block my-4">
            Specifically, I have experience working with...
            <strong class="bg-slate-600">
              <VueWriter
                :array="primarySkills.map(({ title }) => title)"
                @typed="onSkillTyped"
                class="inline" /></strong
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
          <p class="code-comment-block">
            Expand the below table to see all of my technical skills.
          </p>
        </div>
        <div class="collapse collapse-plus mt-5">
          <input type="checkbox" />
          <h3 class="collapse-title text-2xl ubuntu-bold bg-neutral">
            Click to View All Technical Skills
          </h3>
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
          <h2 class="text-3xl mb-4 code-comment-inline">
            This Site Was Made With...
            <Icon icon="fluent-color:code-20" class="inline-block" /><Icon
              icon="fluent-color:design-ideas-20"
              class="inline-block"
            />
          </h2>
          <div class="flex flex-wrap gap-2 text-7xl sm:text-9xl">
            <div
              v-for="skills in madeWithSkills"
              v-bind:key="skills.title"
              class="tooltip tooltip-secondary tooltip-secondary-content opacity-70 hover:opacity-100"
              :data-tip="`${skills.title}`"
            >
              <div class="tooltip-content">
                <div class="animate-bounce text-2xl gluten">
                  {{ skills.title }}
                </div>
              </div>
              <Icon :icon="`${skills.icon}`" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="mockup-window bg-secondary text-secondary-content border-4 rounded-t-none border-primary shadow-lg shadow-primary"
    >
      <div class="p-5">
        <h2 class="text-3xl ubuntu-bold mb-4">
          Soft Skills
          <Icon icon="fluent-emoji:handshake" class="inline-block" />
        </h2>
        <p class="text-2xl">
          Having worked with large, fast-paced organizations such as Futuretalk
          Inc.,
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
          <Icon icon="fluent-emoji:hundred-points" class="inline-block" /> and
          adaptable.
          <Icon icon="fluent-emoji:flexed-biceps-light" class="inline-block" />
        </p>
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
