<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { Icon } from "@iconify/vue";

import { lottieConstants, illustratorSkills } from "../../../../lib/constants";

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

const { AVATAR_ILLUSTRATOR_LOTTIE_PATH } = lottieConstants;
</script>

<template>
  <section id="illustrator">
    <Lazy :min-height="1000">
      <div
        class="mockup-window bg-secondary/80 text-secondary-content border-4 border-primary shadow-lg shadow-primary"
      >
        <div class="px-5 pb-5">
          <h1
            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase ubuntu-titling border-b-4 border-primary mb-8"
          >
            <Icon
              icon="mingcute:paint-brush-fill"
              class="inline-block h-[1em]"
            />
            Illustrator
          </h1>
          <div class="flex flex-wrap justify-between gap-y-8">
            <div class="w-full sm:w-2/3">
              <div class="flex justify-between gap-2 my-8">
                <h2
                  class="text-lg sm:text-xl md:text-2xl lg:text-3xl ubuntu-titling h-40 sm:h-auto"
                >
                  <Suspense>
                    <img
                      :src="headSvgPath.default"
                      alt=""
                      width="45"
                      height="45"
                      class="block sm:inline-block h-[3em] sm:h-[1em]"
                    />
                  </Suspense>
                  Tim R. Lai Illustration
                </h2>
                <h3
                  id="illustrator-timrlai-heading"
                  class="text-lg sm:text-xl md:text-2xl atkinson-hyperlegible-next-bold border-l-2 border-primary h-40 sm:h-auto pl-2"
                >
                  <Icon
                    icon="fluent-emoji:man-artist-light"
                    class="block sm:inline-block text-6xl sm:text-3xl"
                  />
                  Illustrator & Cartoonist
                </h3>
                <h3
                  class="text-lg sm:text-xl md:text-2xl atkinson-hyperlegible-next-bold border-l-2 border-primary h-40 sm:h-auto pl-2"
                >
                  <Icon
                    icon="fluent-color:calendar-28"
                    class="block sm:inline-block text-6xl sm:text-3xl"
                  />
                  2009 to Present
                </h3>
              </div>
              <p
                class="text-lg sm:text-xl my-4 atkinson-hyperlegible-next-medium"
              >
                I have been an illustrator and cartoonist since 2009. I have
                worked with traditional mediums such as pencil,
                <Icon icon="fluent-emoji:pencil" class="inline-block h-[1em]" />
                ink, acrylics, watercolour, gouache,
                <Icon
                  icon="fluent-emoji:paintbrush"
                  class="inline-block h-[1em]"
                />
                cut-paper and clay as well as created digital art with software
                such as Adobe Photoshop,
                <Icon
                  icon="logos:adobe-photoshop"
                  class="inline-block h-[1em]"
                />
                Adobe Illustrator,
                <Icon
                  icon="logos:adobe-illustrator"
                  class="inline-block h-[1em]"
                />
                Adobe InDesign,
                <Icon
                  icon="logos:adobe-indesign"
                  class="inline-block h-[1em]"
                />
                Adobe AfterEffects,
                <Icon
                  icon="logos:adobe-after-effects"
                  class="inline-block h-[1em]"
                />
                Clip Studio Paint,
                <Icon
                  icon="arcticons:clip-studio"
                  class="inline-block h-[1em]"
                />
                CorelDRAW,
                <Icon
                  icon="simple-icons:coreldraw"
                  class="inline-block h-[1em]"
                />
                and more.
              </p>
              <ul
                class="list text-base sm:text-lg my-4 atkinson-hyperlegible-next-medium"
              >
                <li class="list-row">
                  <div class="text-3xl sm:text-4xl">
                    <Icon icon="fluent-emoji:cityscape" />
                  </div>
                  <div>
                    Illustrated the story,
                    <a
                      href="https://www.tocomix.com/reader/volume_two/toronto-the-rude/1"
                      target="_blank"
                      class="link link-accent link-hover"
                      ><em class="italic">Toronto the Rude</em></a
                    >, written by J.M Frey in the comics anthology,
                    <em class="italic">Toronto Comics</em>
                    Volume 2 using Clip Studio Paint and Adobe Photoshop
                  </div>
                </li>
                <li class="list-row">
                  <div class="text-3xl sm:text-4xl">
                    <Icon icon="fluent-emoji-flat:artist-palette" />
                  </div>
                  <div>
                    Coloured the story <em class="italic">Home Sweet Home</em>,
                    written by Shane Kirshenblatt and Illustrated by Andrew Kwan
                    in the
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
                    comics anthology using Adobe Photoshop
                  </div>
                </li>
                <li class="list-row">
                  <div class="text-3xl sm:text-4xl">
                    <Icon icon="fluent-color:chat-24" />
                  </div>
                  <div>Did lettering for comics in Illustrator</div>
                </li>
                <li class="list-row">
                  <div class="text-3xl sm:text-4xl">
                    <Icon icon="fluent-emoji:lemon" />
                  </div>
                  <div>
                    Wrote, penciled, lettered, inked and used Adobe Photoshop to
                    colour the online comic strip, Lemon Inc. from 2009 to 2012,
                    designed and developed a website for it using HTML, CSS and
                    WordPress and compiled the comic strip into a book which I
                    designed using Adobe InDesign
                  </div>
                </li>
                <li class="list-row">
                  <div class="text-3xl sm:text-4xl">
                    <Icon icon="fluent-emoji:open-book" />
                  </div>
                  <div>
                    Wrote, penciled, inked and lettered the autobiographical
                    mini-comic,
                    <em class="italic">The Book of Tim</em> using Clip Studio
                    Paint and traditionally screen printed the cover
                  </div>
                </li>
                <li class="list-row">
                  <div class="text-3xl sm:text-4xl">
                    <Icon icon="material-icon-theme:lottie" />
                  </div>
                  <div>
                    Illustrated the self-portraits of myself which are
                    throughout this site using Adobe Illustrator, animated them
                    in Adobe After Effects and exported them in JSON format as
                    Lottie animations
                  </div>
                </li>
              </ul>
            </div>
            <div class="w-full sm:w-1/3 pl-4">
              <Suspense>
                <LottiePlayer
                  :src="AVATAR_ILLUSTRATOR_LOTTIE_PATH"
                  autoPlay
                  v-once
                />
              </Suspense>
            </div>
            <Lazy :min-height="200">
              <Suspense>
                <SkillsUsed
                  labelledby="illustrator-timrlai-heading"
                  :skills="illustratorSkills"
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
