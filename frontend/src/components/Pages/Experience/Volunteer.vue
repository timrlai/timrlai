<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { Icon } from "@iconify/vue";

import { lottieConstants, taafiSkills } from "../../../../lib/constants";

const Lazy = defineAsyncComponent(() => import("../../Common/Lazy.vue"));
const LottiePlayer = defineAsyncComponent(
  () => import("../../Common/LottiePlayer.vue"),
);
const SkillsUsed = defineAsyncComponent(
  () => import("../../Common/SkillsUsed.vue"),
);

const { AVATAR_VOLUNTEER_LOTTIE_PATH } = lottieConstants;
</script>

<template>
  <section id="volunteer">
    <Lazy :min-height="1000">
      <div
        class="mockup-window bg-secondary/80 text-secondary-content border-4 border-primary shadow-lg shadow-primary"
      >
        <div class="px-5 pb-5">
          <h1
            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase ubuntu-titling border-b-4 border-primary mb-8"
          >
            <Icon
              icon="mingcute:hand-heart-fill"
              class="inline-block h-[1em]"
            />
            Volunteer
          </h1>
          <div class="flex flex-wrap justify-between gap-y-8">
            <div class="w-full sm:w-3/4">
              <div class="flex justify-between gap-2 mb-8">
                <h2
                  class="text-lg sm:text-xl md:text-2xl lg:text-3xl ubuntu-titling h-40 sm:h-auto"
                >
                  <Icon
                    icon="fluent-emoji:clapper-board"
                    class="block sm:inline-block text-6xl sm:text-3xl"
                  />
                  TAAFI (Toronto Animation Arts Festival International)
                </h2>
                <h3
                  id="volunteer-taafi-heading"
                  class="text-lg sm:text-xl md:text-2xl ahn-bold border-l-2 border-primary h-40 sm:h-auto pl-2"
                >
                  <Icon
                    icon="fluent-color:design-ideas-24"
                    class="block sm:inline-block text-6xl sm:text-3xl"
                  />
                  Graphic Designer/Event Planner
                </h3>
                <h3
                  class="text-lg sm:text-xl md:text-2xl ahn-bold border-l-2 border-primary h-40 sm:h-auto pl-2"
                >
                  <Icon
                    icon="fluent-color:calendar-28"
                    class="block sm:inline-block text-6xl sm:text-3xl"
                  />
                  2015 to 2016
                </h3>
              </div>
              <p class="text-lg sm:text-xl my-4 ahn-medium">
                I volunteered for
                <a
                  href="https://taafi.com/"
                  target="_blank"
                  class="link link-accent link-hover"
                  >TAAFI (the Toronto Animation Arts Festival International)</a
                >, designing the layout of their 2016 Art Book using Adobe
                InDesign,
                <Icon
                  icon="logos:adobe-indesign"
                  class="inline-block h-[1em]"
                />
                creating graphics for the website and promotional materials
                using Adobe Illustrator,
                <Icon
                  icon="logos:adobe-illustrator"
                  class="inline-block h-[1em]"
                />
                and Adobe Photoshop,
                <Icon
                  icon="logos:adobe-photoshop"
                  class="inline-block h-[1em]"
                />
                and organizing the Indie Alley portion of the TAAFI Maarket
                which provided a space for independent artists to sell their
                work.
              </p>
              <ul class="list text-base sm:text-lg my-4 ahn-medium mb-8">
                <li class="list-row">
                  <div class="text-3xl sm:text-4xl">
                    <Icon icon="fluent-emoji:handshake" />
                  </div>
                  <div>
                    Collaborated with a large team of event planners and
                    volunteers to organize an art book and independent artist
                    market for a non-profit animation festival
                  </div>
                </li>
                <li class="list-row">
                  <div class="text-3xl sm:text-4xl">
                    <Icon icon="logos:adobe-indesign" />
                  </div>
                  <div>
                    Promoted, organized, designed and compiled TAAFI 2016 Art
                    Book in Adobe InDesign
                  </div>
                </li>
                <li class="list-row">
                  <div class="text-3xl sm:text-4xl">
                    <Icon icon="logos:adobe-illustrator" />
                  </div>
                  <div>
                    Created graphics for the website and promotional materials
                    using Adobe Illustrator and Adobe Photoshop
                  </div>
                </li>
                <li class="list-row">
                  <div class="text-3xl sm:text-4xl">
                    <Icon icon="fluent-emoji:money-with-wings" />
                  </div>
                  <div>
                    Organized and promoted TAAFI 2016 Indie Alley event and
                    managed TAAFI merchandise table
                  </div>
                </li>
                <li class="list-row">
                  <div class="text-3xl sm:text-4xl">
                    <Icon icon="fluent-color:chat-bubbles-question-24" />
                  </div>
                  <div>
                    Communicated with artists, exhibitors, guests, sponsors and
                    festival attendees to ensure that they had a positive
                    festival experience
                  </div>
                </li>
                <li class="list-row">
                  <div class="text-3xl sm:text-4xl">
                    <Icon icon="fluent-color:document-text-24" />
                  </div>
                  <div>
                    Prepared regular, detailed reports to a Board of Directors
                    to keep them informed
                  </div>
                </li>
              </ul>
              <Lazy :min-height="200">
                <Suspense>
                  <SkillsUsed
                    labelledby="volunteer-taafi-heading"
                    :skills="taafiSkills"
                    v-once
                  />
                </Suspense>
              </Lazy>
            </div>
            <div class="w-full sm:w-1/4">
              <Suspense>
                <LottiePlayer
                  :src="AVATAR_VOLUNTEER_LOTTIE_PATH"
                  autoPlay
                  v-once
                />
              </Suspense>
            </div>

            <div class="w-full sm:w-3/4">
              <div class="flex justify-between gap-2 my-8">
                <h2
                  class="text-lg sm:text-xl md:text-2xl lg:text-3xl ubuntu-titling h-40 sm:h-auto"
                >
                  <Suspense>
                    <Icon
                      icon="fluent-emoji:eye"
                      class="block sm:inline-block text-6xl sm:text-3xl"
                    />
                  </Suspense>
                  CNIB (Canadian National Institue for the Blind)
                </h2>
                <h3
                  id="volunteer-cnib-heading"
                  class="text-lg sm:text-xl md:text-2xl ahn-bold border-l-2 border-primary h-40 sm:h-auto pl-2"
                >
                  <Icon
                    icon="fluent-emoji:camping"
                    class="block sm:inline-block text-6xl sm:text-3xl"
                  />
                  Summer Camp Volunteer
                </h3>
                <h3
                  class="text-lg sm:text-xl md:text-2xl ahn-bold border-l-2 border-primary h-40 sm:h-auto pl-2"
                >
                  <Icon
                    icon="fluent-color:calendar-28"
                    class="block sm:inline-block text-6xl sm:text-3xl"
                  />
                  2013
                </h3>
              </div>
              <ul class="list text-base sm:text-lg my-4 ahn-medium">
                <li class="list-row">
                  <div class="text-3xl sm:text-4xl">
                    <Icon icon="fluent-emoji:playground-slide" />
                  </div>
                  <div>
                    Assisted blind and visually impaired children with various
                    recreational activities
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Lazy>
  </section>
</template>

<style scoped lang="scss"></style>
