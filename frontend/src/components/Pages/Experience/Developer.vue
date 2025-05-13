<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { Icon } from "@iconify/vue";

import {
  lottieConstants,
  futuretalkSkills,
  freelanceSkills,
} from "../../../../lib/constants";

const headSvgPath = await import(
  "../../../assets/img/icons/timrlai_head_trans_bg.svg"
);

const LottiePlayer = defineAsyncComponent(
  () => import("../../Common/LottiePlayer.vue"),
);
const SkillsUsed = defineAsyncComponent(
  () => import("../../Common/SkillsUsed.vue"),
);
const VimeoVideo = defineAsyncComponent(
  () => import("../../Common/VimeoVideo.vue"),
);

const { AVATAR_SKILLS_DESK_LOTTIE_PATH, AVATAR_VR_LOTTIE_PATH } =
  lottieConstants;
</script>

<template>
  <section id="developer">
    <div
      class="mockup-window bg-secondary text-secondary-content border-4 border-primary shadow-lg shadow-primary"
    >
      <div class="px-5 pb-5">
        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase ubuntu-titling border-b-4 border-primary mb-8"
        >
          <Icon icon="mingcute:code-fill" class="inline-block h-[1em]" />
          Developer
        </h1>
        <div class="flex flex-wrap justify-between gap-y-8">
          <div class="w-full sm:w-3/4">
            <div class="flex justify-between gap-2 mb-8">
              <h2
                class="text-lg sm:text-xl md:text-2xl lg:text-3xl ubuntu-titling h-40 sm:h-auto"
              >
                <Icon
                  icon="fluent-emoji:robot"
                  class="block sm:inline-block text-6xl sm:text-3xl"
                />
                Futuretalk Inc.
              </h2>
              <h3
                class="text-lg sm:text-xl md:text-2xl atkinson-hyperlegible-next-bold border-l-2 border-primary h-40 sm:h-auto pl-2"
              >
                <Icon
                  icon="fluent-emoji:goggles"
                  class="block sm:inline-block text-6xl sm:text-3xl"
                />
                Web & VR/AR Software Developer
              </h3>
              <h3
                class="text-lg sm:text-xl md:text-2xl atkinson-hyperlegible-next-bold border-l-2 border-primary h-40 sm:h-auto pl-2"
              >
                <Icon
                  icon="fluent-color:calendar-28"
                  class="block sm:inline-block text-6xl sm:text-3xl"
                />
                2022 to 2025
              </h3>
            </div>
            <p
              class="text-lg sm:text-xl my-4 atkinson-hyperlegible-next-medium"
            >
              At
              <a
                href="https://futuretalk.ca/"
                target="_blank"
                class="link link-accent link-hover"
                >Futuretalk Inc.</a
              >
              I developed cutting edge web applications
              <Icon
                icon="fluent-color:phone-laptop-24"
                class="inline-block h-[1em]"
              />
              such as
              <a
                href="https://learnwithtrek.com/"
                target="_blank"
                class="link link-accent link-hover"
                >Thealogue and Trek AI</a
              >
              using JavaScript/TypeScript,
              <Icon
                icon="skill-icons:javascript"
                class="inline-block h-[1em]"
              />
              <Icon
                icon="skill-icons:typescript"
                class="inline-block h-[1em]"
              />
              React,
              <Icon
                icon="skill-icons:react-dark"
                class="inline-block h-[1em]"
              />
              Next.js
              <Icon
                icon="skill-icons:nextjs-light"
                class="inline-block h-[1em]"
              />
              and Three.js
              <Icon
                icon="skill-icons:threejs-dark"
                class="inline-block h-[1em]"
              />
              to create immersive, 3D,
              <Icon icon="fluent-color:globe-20" class="inline-block h-[1em]" />
              virtual and augmented reality experiences for educational
              <Icon
                icon="fluent-emoji:man-teacher-light"
                class="inline-block h-[1em]"
              />
              content and used Python
              <Icon
                icon="skill-icons:python-light"
                class="inline-block h-[1em]"
              />
              to create AI
              <Icon icon="fluent-emoji:robot" class="inline-block h-[1em]" />
              powered tools to automate processes.
            </p>
            <ul
              class="list text-base sm:text-lg my-4 atkinson-hyperlegible-next-medium"
            >
              <li class="list-row">
                <div class="text-3xl sm:text-4xl">
                  <Icon icon="skill-icons:react-dark" />
                </div>
                <div>
                  Developed, updated and debugged front-end UI/UX using
                  JavaScript/TypeScript, React, Next.js, Tailwind CSS, the
                  Carbon Design System and React Spring
                </div>
              </li>
              <li class="list-row">
                <div class="text-3xl sm:text-4xl">
                  <Icon icon="skill-icons:threejs-dark" />
                </div>
                <div>
                  Contributed to, updated and debugged software for building 3D
                  worlds using JavaScript/TypeScript, Three.js, React Three
                  Fiber, Drei, uikit and Theatre.js
                </div>
              </li>
              <li class="list-row">
                <div class="text-3xl sm:text-4xl">
                  <Icon icon="fluent-emoji:goggles" />
                </div>
                <div>
                  Adapted 3D worlds for VR experiences using React XR, the Meta
                  Quest VR headset and the Meta Quest Developer Hub
                </div>
              </li>
              <li class="list-row">
                <div class="text-3xl sm:text-4xl">
                  <Icon icon="fluent-emoji:mobile-phone-with-arrow" />
                </div>
                <div>
                  Created AR experiences using 8th Wall, A-Frame, JavaScript and
                  Three.js
                </div>
              </li>
              <li class="list-row">
                <div class="text-3xl sm:text-4xl">
                  <Icon icon="fluent-emoji:robot" />
                </div>
                <div>
                  Created automated AI tools with Python, Langchain, and the
                  Google Docs and YouTube APIs
                </div>
              </li>
              <li class="list-row">
                <div class="text-3xl sm:text-4xl">
                  <Icon icon="logos:github-octocat" />
                </div>
                <div>
                  Documented software and development process using Clickup,
                  GitHub issues and pull requests
                </div>
              </li>
            </ul>
          </div>
          <div class="w-full sm:w-1/4">
            <Suspense>
              <LottiePlayer :src="AVATAR_VR_LOTTIE_PATH" autoPlay v-once />
            </Suspense>
          </div>
          <div class="w-full">
            <h4 class="text-xl lg:text-2xl xl:text-3xl mb-4 ubuntu-titling">
              <Icon icon="fluent-color:video-28" class="inline-block h-[1em]" />
              Thealogue and Trek AI Demo Video
            </h4>
            <p
              class="text-lg sm:text-xl my-4 atkinson-hyperlegible-next-medium"
            >
              Watch the below video to see a demonstration of
              <a
                href="https://learnwithtrek.com/"
                target="_blank"
                class="link link-accent link-hover"
                >Thealogue and Trek AI</a
              >, some of the main projects which I worked on at
              <a
                href="https://futuretalk.ca/"
                target="_blank"
                class="link link-accent link-hover"
                >Futuretalk Inc.</a
              >
            </p>
            <Suspense>
              <VimeoVideo
                :videoId="1022236072"
                :appId="58479"
                title="Learn With Trek"
                v-once
              />
            </Suspense>
          </div>
          <Suspense>
            <SkillsUsed :skills="futuretalkSkills" v-once />
          </Suspense>
          <div class="w-full sm:w-3/4">
            <div class="flex justify-between gap-2 my-8">
              <h2
                class="text-lg sm:text-xl md:text-2xl lg:text-3xl ubuntu-titling h-40 sm:h-auto"
              >
                <Suspense>
                  <img
                    :src="headSvgPath.default"
                    alt=""
                    class="block sm:inline-block h-[3em] sm:h-[1em]"
                  />
                </Suspense>
                Tim R. Lai Design & Development
              </h2>
              <h3
                class="text-lg sm:text-xl md:text-2xl atkinson-hyperlegible-next-bold border-l-2 border-primary h-40 sm:h-auto pl-2"
              >
                <Icon
                  icon="fluent-emoji:man-technologist-light"
                  class="block sm:inline-block text-6xl sm:text-3xl"
                />
                Freelance Software Developer
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
              I have over five years of experience working as a freelance
              full-stack developer,
              <Icon
                icon="fluent-emoji:man-technologist-light"
                class="inline-block h-[1em]"
              />
              working with technologies such as JavaScript,
              <Icon
                icon="skill-icons:javascript"
                class="inline-block h-[1em]"
              />
              jQuery,
              <Icon icon="skill-icons:jquery" class="inline-block h-[1em]" />
              PHP,
              <Icon icon="skill-icons:php-dark" class="inline-block h-[1em]" />
              Wordpress,
              <Icon icon="skill-icons:wordpress" class="inline-block h-[1em]" />
              MySQL,
              <Icon
                icon="skill-icons:mysql-light"
                class="inline-block h-[1em]"
              />
              HTML,
              <Icon icon="skill-icons:html" class="inline-block h-[1em]" />
              CSS,
              <Icon icon="skill-icons:css" class="inline-block h-[1em]" />
              Sass/SCSS,
              <Icon icon="skill-icons:sass" class="inline-block h-[1em]" />
              Less,
              <Icon icon="skill-icons:less-dark" class="inline-block h-[1em]" />
              Gulp,
              <Icon icon="skill-icons:gulp" class="inline-block h-[1em]" />
              Bootstrap,
              <Icon icon="skill-icons:bootstrap" class="inline-block h-[1em]" />
              and more.
            </p>
            <ul
              class="list text-base sm:text-lg my-4 atkinson-hyperlegible-next-medium"
            >
              <li class="list-row">
                <div class="text-3xl sm:text-4xl">
                  <Icon icon="fluent-color:design-ideas-24" />
                </div>
                <div>
                  Developed and designed custom websites and Wordpress themes
                  using PHP, Wordpress, JavaScript, HTML, CSS and Sass/SCSS
                </div>
              </li>
              <li class="list-row">
                <div class="text-3xl sm:text-4xl">
                  <Icon icon="fluent-color:content-view-24" />
                </div>
                <div>
                  Updated layout, styles and content of sites using PHP,
                  Wordpress, JavaScript, HTML, CSS and Sass/SCSS/Less on a
                  regular basis to make design and content changes
                </div>
              </li>
              <li class="list-row">
                <div class="text-3xl sm:text-4xl">
                  <Icon icon="skill-icons:wordpress" />
                </div>
                <div>
                  Tested, debugged and performed troubleshooting on Wordpress
                  themes and plugins
                </div>
              </li>
              <li class="list-row">
                <div class="text-3xl sm:text-4xl">
                  <Icon icon="skill-icons:gulp" />
                </div>
                <div>
                  Compiled and minified Sass and JavaScript using the Gulp.js
                  task-runner and Node.js
                </div>
              </li>
              <li class="list-row">
                <div class="text-3xl sm:text-4xl">
                  <Icon icon="skill-icons:instagram" />
                </div>
                <div>
                  Accessed the Instagram API using JavaScript, jQuery and AJAX
                  to display Instagram posts
                </div>
              </li>
              <li class="list-row">
                <div class="text-3xl sm:text-4xl">
                  <Icon icon="openmoji:youtube" />
                </div>
                <div>
                  Used JavaScript, jQuery and AJAX to access the YouTube API
                </div>
              </li>
            </ul>
          </div>
          <div class="w-full sm:w-1/4 pl-4">
            <Suspense>
              <LottiePlayer
                :src="AVATAR_SKILLS_DESK_LOTTIE_PATH"
                autoPlay
                v-once
              />
            </Suspense>
          </div>
          <Suspense>
            <SkillsUsed :skills="freelanceSkills" v-once />
          </Suspense>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
