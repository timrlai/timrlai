<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { Icon } from "@iconify/vue";

import {
  lottieConstants,
  instructorSkills,
  technologistSeniorSkills,
} from "../../../../lib/constants";

const senecaChalkboardSvgPath = await import(
  "../../../assets/img/props/seneca_chalkboard.svg"
);

const LottiePlayer = defineAsyncComponent(
  () => import("../../Common/LottiePlayer.vue"),
);
const SkillsUsed = defineAsyncComponent(
  () => import("../../Common/SkillsUsed.vue"),
);

const { AVATAR_TEACHER_DESK_LOTTIE_PATH } = lottieConstants;
</script>

<template>
  <section id="teacher">
    <div
      class="mockup-window bg-secondary text-secondary-content border-4 border-primary shadow-lg shadow-primary"
    >
      <div class="px-5 pb-5">
        <h1
          class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase ubuntu-titling border-b-4 border-primary mb-8"
        >
          <Icon icon="mingcute:school-fill" class="inline-block h-[1em]" />
          Teacher
        </h1>
        <div class="flex flex-wrap justify-between gap-y-8">
          <div class="w-full sm:w-1/2">
            <div class="flex justify-between gap-2 mb-8">
              <h2
                class="text-lg sm:text-xl md:text-2xl lg:text-3xl ubuntu-titling h-40 sm:h-auto"
              >
                <Icon
                  icon="fluent-emoji:school"
                  class="block sm:inline-block text-6xl sm:text-3xl"
                />
                Seneca Polytechnic
              </h2>
              <h3
                class="text-lg sm:text-xl md:text-2xl atkinson-hyperlegible-next-bold border-l-2 border-primary h-40 sm:h-auto pl-2"
              >
                <Icon
                  icon="fluent-emoji:man-teacher-light"
                  class="block sm:inline-block text-6xl sm:text-3xl"
                />
                Instructor
              </h3>
              <h3
                class="text-lg sm:text-xl md:text-2xl atkinson-hyperlegible-next-bold border-l-2 border-primary h-40 sm:h-auto pl-2"
              >
                <Icon
                  icon="fluent-color:calendar-28"
                  class="block sm:inline-block text-6xl sm:text-3xl"
                />
                2017 to Present
              </h3>
            </div>
            <p
              class="text-lg sm:text-xl my-4 atkinson-hyperlegible-next-medium"
            >
              I have experience teaching
              <Icon
                icon="fluent-emoji:man-teacher-light"
                class="inline-block h-[1em]"
              />
              web development skills at Seneca Polytechnic
              <Icon icon="fluent-emoji:school" class="inline-block h-[1em]" />
              in the
              <a
                href="https://www.senecapolytechnic.ca/ce/creative/graphics-web-design/web-programming-development.html"
                target="_blank"
                class="link link-accent link-hover"
                >Web Programming</a
              >
              and
              <a
                href="https://web-design-development.senecapolytechnic.ca/"
                target="_blank"
                class="link link-accent link-hover"
                >Webmaster (Web Design and Development)</a
              >
              programs since 2017.
            </p>
            <ul
              class="list text-base sm:text-lg my-4 atkinson-hyperlegible-next-medium"
            >
              <li class="list-row">
                <div class="text-3xl sm:text-4xl">
                  <Icon icon="fluent-color:apps-list-24" />
                </div>
                <div>
                  Planned lessons to teach web development in the Web
                  Programming and Webmaster programs
                </div>
              </li>
              <li class="list-row">
                <div class="text-3xl sm:text-4xl">
                  <Icon icon="fluent-color:code-24" />
                </div>
                <div>
                  Instructed students in languages such as Python, PHP,
                  JavaScript, HTML, CSS, Sass and SQL
                </div>
              </li>
              <li class="list-row">
                <div class="text-3xl sm:text-4xl">
                  <Icon icon="fluent-color:library-24" />
                </div>
                <div>
                  Taught students to use frameworks and technologies such as
                  Django, Laravel, Angular, jQuery, Electron, Gulp.js,
                  Bootstrap, VS Code and GitHub
                </div>
              </li>
              <li class="list-row">
                <div class="text-3xl sm:text-4xl">
                  <Icon icon="fluent-color:clipboard-text-edit-24" />
                </div>
                <div>
                  Wrote extensive and detailed technical notes to provide to
                  students
                </div>
              </li>
              <li class="list-row">
                <div class="text-3xl sm:text-4xl">
                  <Icon icon="fluent-color:game-chat-20" />
                </div>
                <div>
                  Facilitated interactive learning activities to engage students
                  in concepts
                </div>
              </li>
              <li class="list-row">
                <div class="text-3xl sm:text-4xl">
                  <Icon icon="fluent-color:design-ideas-24" />
                </div>
                <div>
                  Ran workshops on design software such as Adobe Illustrator and
                  InDesign
                </div>
              </li>
            </ul>
          </div>
          <div class="w-full sm:w-1/2 pl-4">
            <div class="stack">
              <div class="flex justify-end">
                <div class="w-2/3">
                  <Suspense>
                    <LottiePlayer
                      :src="AVATAR_TEACHER_DESK_LOTTIE_PATH"
                      autoPlay
                      v-once
                    />
                  </Suspense>
                </div>
              </div>
              <div class="flex justify-start">
                <div class="w-3/4">
                  <Suspense>
                    <img
                      :src="senecaChalkboardSvgPath.default"
                      alt="A chalkboard with the Seneca Polytechnic logo on it."
                      title="Seneca Polytechnic"
                      class="inline-block"
                    />
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
          <Suspense>
            <SkillsUsed :skills="instructorSkills" v-once />
          </Suspense>
          <div class="w-full sm:w-2/3">
            <div class="flex justify-between gap-2 my-8">
              <h2
                class="text-lg sm:text-xl md:text-2xl lg:text-3xl ubuntu-titling h-40 sm:h-auto"
              >
                <Icon
                  icon="fluent-emoji:school"
                  class="block sm:inline-block text-6xl sm:text-3xl"
                />
                Seneca Polytechnic
              </h2>
              <h3
                class="text-lg sm:text-xl md:text-2xl atkinson-hyperlegible-next-bold border-l-2 border-primary h-40 sm:h-auto pl-2"
              >
                <Icon
                  icon="fluent-emoji:man-technologist-light"
                  class="block sm:inline-block text-6xl sm:text-3xl"
                />
                Technologist Senior
              </h3>
              <h3
                class="text-lg sm:text-xl md:text-2xl atkinson-hyperlegible-next-bold border-l-2 border-primary h-40 sm:h-auto pl-2"
              >
                <Icon
                  icon="fluent-color:calendar-28"
                  class="block sm:inline-block text-6xl sm:text-3xl"
                />
                2017 to 2018
              </h3>
            </div>
            <p
              class="text-lg sm:text-xl my-4 atkinson-hyperlegible-next-medium"
            >
              I also worked as a Technologist Senior, helping students with
              course content and assignments at Seneca Polytechnic
              <Icon icon="fluent-emoji:school" class="inline-block h-[1em]" />
              in the
              <a
                href="https://web-design-development.senecapolytechnic.ca/"
                target="_blank"
                class="link link-accent link-hover"
                >Webmaster (Web Design and Development)</a
              >
              program.
            </p>
            <ul
              class="list text-base sm:text-lg my-4 atkinson-hyperlegible-next-medium"
            >
              <li class="list-row">
                <div class="text-3xl sm:text-4xl">
                  <Icon icon="fluent-color:laptop-24" />
                </div>
                <div>
                  Helped students with assignments and exercises in Seneca
                  College's Webmaster Program
                </div>
              </li>
              <li class="list-row">
                <div class="text-3xl sm:text-4xl">
                  <Icon icon="fluent-color:chat-bubbles-question-24" />
                </div>
                <div>
                  Explained concepts and broke down class examples into
                  manageable chunks
                </div>
              </li>
              <li class="list-row">
                <div class="text-3xl sm:text-4xl">
                  <Icon icon="fluent-emoji:bug" />
                </div>
                <div>
                  Assisted students in troubleshooting and debugging coding
                  problems
                </div>
              </li>
            </ul>
          </div>
          <Suspense>
            <SkillsUsed :skills="technologistSeniorSkills" v-once />
          </Suspense>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
