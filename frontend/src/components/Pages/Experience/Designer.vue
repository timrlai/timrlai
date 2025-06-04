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

const { AVATAR_DESIGNER_DESK_LOTTIE_PATH, AVATAR_VR_LOTTIE_PATH } =
  lottieConstants;
</script>

<template>
  <section id="designer">
    <Lazy :min-height="2000">
      <div
        class="mockup-window bg-secondary/80 text-secondary-content border-4 border-primary shadow-lg shadow-primary"
      >
        <div class="px-5 pb-5">
          <h1
            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase ubuntu-titling border-b-4 border-primary mb-8"
          >
            <Icon icon="mingcute:palette-fill" class="inline-block h-[1em]" />
            Designer
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
                  id="designer-futuretalk-heading"
                  class="text-lg sm:text-xl md:text-2xl ahn-bold border-l-2 border-primary h-40 sm:h-auto pl-2"
                >
                  <Icon
                    icon="fluent-color:phone-laptop-24"
                    class="block sm:inline-block text-6xl sm:text-3xl"
                  />
                  UI/UX & VR/AR Designer
                </h3>
                <h3
                  class="text-lg sm:text-xl md:text-2xl ahn-bold border-l-2 border-primary h-40 sm:h-auto pl-2"
                >
                  <Icon
                    icon="fluent-color:calendar-28"
                    class="block sm:inline-block text-6xl sm:text-3xl"
                  />
                  2022 to 2025
                </h3>
              </div>
              <p class="text-lg sm:text-xl my-4 ahn-medium">
                At
                <a
                  href="https://futuretalk.ca/"
                  target="_blank"
                  class="link link-accent link-hover"
                  >Futuretalk Inc.</a
                >
                I created UI/UX designs for web applications
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
                using Adobe XD,
                <Icon icon="skill-icons:xd" class="inline-block h-[1em]" />
                the Carbon Design System,
                <Icon icon="carbon:carbon" class="inline-block h-[1em]" />
                Tailwind CSS. I also crafted UI/UX designs for immersive, 3D,
                <Icon
                  icon="fluent-color:globe-20"
                  class="inline-block h-[1em]"
                />
                virtual and augmented reality experiences for educational
                <Icon
                  icon="fluent-emoji:man-teacher-light"
                  class="inline-block h-[1em]"
                />
                content using
                <Icon
                  icon="skill-icons:tailwindcss-dark"
                  class="inline-block h-[1em]"
                />
                Three.js
                <Icon
                  icon="skill-icons:threejs-dark"
                  class="inline-block h-[1em]"
                />
                and uikit.
              </p>
              <ul class="list text-base sm:text-lg my-4 ahn-medium">
                <li class="list-row">
                  <div class="text-3xl sm:text-4xl">
                    <Icon icon="skill-icons:xd" />
                  </div>
                  <div>
                    Designed UI/UX wireframes and concepts using Adobe XD and
                    the Carbon Design System
                  </div>
                </li>
                <li class="list-row">
                  <div class="text-3xl sm:text-4xl">
                    <Icon icon="skill-icons:tailwindcss-dark" />
                  </div>
                  <div>
                    Implemented UI/UX using JavaScript/TypeScript, React,
                    Next.js, Tailwind CSS, the Carbon Design System and React
                    Spring
                  </div>
                </li>
                <li class="list-row">
                  <div class="text-3xl sm:text-4xl">
                    <Icon icon="skill-icons:threejs-dark" />
                  </div>
                  <div>
                    Designed 3D worlds and UI/UX using JavaScript/TypeScript,
                    Three.js, React Three Fiber, Drei, uikit and Theatre.js
                  </div>
                </li>
                <li class="list-row">
                  <div class="text-3xl sm:text-4xl">
                    <Icon icon="fluent-emoji:goggles" />
                  </div>
                  <div>
                    Ensured that 3D worlds and UI/UX designs translated well for
                    VR experiences using React XR, the Meta Quest VR headset and
                    the Meta Quest Developer Hub
                  </div>
                </li>
                <li class="list-row">
                  <div class="text-3xl sm:text-4xl">
                    <Icon icon="fluent-emoji:mobile-phone-with-arrow" />
                  </div>
                  <div>
                    Designed AR experiences using 8th Wall, A-Frame, JavaScript
                    and Three.js
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
                <Icon
                  icon="fluent-color:video-28"
                  class="inline-block h-[1em]"
                />
                Thealogue and Trek AI Demo Video
              </h4>
              <p class="text-lg sm:text-xl my-4 ahn-medium">
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
              <Lazy :min-height="200">
                <Suspense>
                  <VimeoVideo
                    :videoId="1022236072"
                    :appId="58479"
                    title="Learn With Trek"
                    v-once
                  />
                </Suspense>
              </Lazy>
            </div>
            <Lazy :min-height="200">
              <Suspense>
                <SkillsUsed
                  labelledby="designer-futuretalk-heading"
                  :skills="futuretalkSkills"
                  v-once
                />
              </Suspense>
            </Lazy>
            <div class="w-full sm:w-2/3">
              <div class="flex justify-between gap-2 my-8">
                <h2
                  class="text-lg sm:text-xl md:text-2xl lg:text-3xl ubuntu-titling h-40 sm:h-auto"
                >
                  <Suspense>
                    <img
                      :src="headSvgPath.default"
                      fetchpriority="low"
                      loading="lazy"
                      aria-hidden
                      alt=""
                      width="45"
                      height="45"
                      class="block sm:inline-block h-[3em] sm:h-[1em]"
                    />
                  </Suspense>
                  Tim R. Lai Design & Development
                </h2>
                <h3
                  id="designer-timrlai-heading"
                  class="text-lg sm:text-xl md:text-2xl ahn-bold border-l-2 border-primary h-40 sm:h-auto pl-2"
                >
                  <Icon
                    icon="fluent-color:design-ideas-28"
                    class="block sm:inline-block text-6xl sm:text-3xl"
                  />
                  Freelance Designer
                </h3>
                <h3
                  class="text-lg sm:text-xl md:text-2xl ahn-bold border-l-2 border-primary h-40 sm:h-auto pl-2"
                >
                  <Icon
                    icon="fluent-color:calendar-28"
                    class="block sm:inline-block text-6xl sm:text-3xl"
                  />
                  2010 to Present
                </h3>
              </div>
              <p class="text-lg sm:text-xl my-4 ahn-medium">
                I have over five years of experience working as a freelance
                graphic designer for both web
                <Icon icon="fluent-emoji:laptop" class="inline-block h-[1em]" />
                and print,
                <Icon
                  icon="fluent-emoji:open-book"
                  class="inline-block h-[1em]"
                />
                working with software such as Adobe InDesign,
                <Icon
                  icon="logos:adobe-indesign"
                  class="inline-block h-[1em]"
                />
                Adobe Illustrator,
                <Icon
                  icon="logos:adobe-illustrator"
                  class="inline-block h-[1em]"
                />
                Adobe Photoshop,
                <Icon
                  icon="logos:adobe-photoshop"
                  class="inline-block h-[1em]"
                />
                Adobe XD,
                <Icon icon="logos:adobe-xd" class="inline-block h-[1em]" />
                CorelDRAW,
                <Icon
                  icon="simple-icons:coreldraw"
                  class="inline-block h-[1em]"
                />
                HTML,
                <Icon icon="skill-icons:html" class="inline-block h-[1em]" />
                CSS,
                <Icon icon="skill-icons:css" class="inline-block h-[1em]" />
                Sass/SCSS,
                <Icon icon="skill-icons:sass" class="inline-block h-[1em]" />
                Less,
                <Icon
                  icon="skill-icons:less-dark"
                  class="inline-block h-[1em]"
                />
                Bootstrap,
                <Icon
                  icon="skill-icons:bootstrap"
                  class="inline-block h-[1em]"
                />
                and more.
              </p>
              <ul class="list text-base sm:text-lg my-4 ahn-medium">
                <li class="list-row">
                  <div class="text-3xl sm:text-4xl">
                    <Icon icon="logos:adobe-indesign" />
                  </div>
                  <div>
                    Designed and laid out interiors and exteriors of books such
                    as the
                    <a
                      href="https://joeshusterawards.com/2018/05/29/the-2018-joe-shuster-award-nominations-les-nomines-pour-le-prix-joe-shuster-2018/"
                      target="_blank"
                      class="link link-accent link-hover"
                      >Shuster Award</a
                    >
                    nominated
                    <a
                      href="https://canadiancomicbooks.fandom.com/wiki/Hogtown_Horror_Volume_1"
                      target="_blank"
                      class="link link-accent link-hover"
                      ><em class="italic">Hogtown Horror</em></a
                    >
                    comics anthology, the
                    <em class="italic">TAAFI 2016 Art Book</em> and my comic
                    strip collection, <em class="italic">Lemon Inc.</em>, for
                    print in InDesign
                  </div>
                </li>
                <li class="list-row">
                  <div class="text-3xl sm:text-4xl">
                    <Icon icon="logos:adobe-illustrator" />
                  </div>
                  <div>
                    Designed logos and graphics using Adobe Illustrator and
                    CorelDRAW
                  </div>
                </li>
                <li class="list-row">
                  <div class="text-3xl sm:text-4xl">
                    <Icon icon="skill-icons:photoshop" />
                  </div>
                  <div>
                    Edited, cropped and combined photos in Adobe Photoshop
                  </div>
                </li>
                <li class="list-row">
                  <div class="text-3xl sm:text-4xl">
                    <Icon icon="fluent-color:design-ideas-24" />
                  </div>
                  <div>
                    Designed and developed custom websites and Wordpress themes
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
              </ul>
            </div>
            <div class="w-full sm:w-1/3 pl-4">
              <Suspense>
                <LottiePlayer
                  :src="AVATAR_DESIGNER_DESK_LOTTIE_PATH"
                  autoPlay
                  v-once
                />
              </Suspense>
            </div>
            <Lazy :min-height="200">
              <Suspense>
                <SkillsUsed
                  labelledby="designer-timrlai-heading"
                  :skills="freelanceSkills"
                  v-once
                />
              </Suspense>
            </Lazy>
          </div>
        </div>
      </div>
    </Lazy>
  </section>
</template>

<style scoped lang="scss"></style>
