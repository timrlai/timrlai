<script setup lang="ts">
import { defineAsyncComponent, ref, nextTick } from "vue";
import { Icon } from "@iconify/vue";
import ConfettiExplosion from "vue-confetti-explosion";
import { VueWriter } from "vue-writer";

import { lottieConstants, intros } from "../../../../lib/constants";

const Lazy = defineAsyncComponent(() => import("../../Common/Lazy.vue"));
const LottiePlayer = defineAsyncComponent(
  () => import("../../Common/LottiePlayer.vue"),
);

const { AVATAR_WAVE_LOTTIE_PATH } = lottieConstants;

const visible = ref(false);

const explode = async () => {
  visible.value = false;
  await nextTick();
  visible.value = true;
};

const introIcon = ref(intros[0].icon);
const onIntroTyped = (currentTitle: string) => {
  introIcon.value =
    intros.find(({ title }) => title === currentTitle)?.icon || intros[0].icon;
  explode();
};
</script>

<template>
  <section
    id="hi"
    class="mockup-browser min-h-[60vh] md:min-h-[70vh] border-4 border-primary shadow-lg shadow-primary overflow-hidden"
  >
    <Lazy :min-height="700">
      <div
        class="mockup-browser-toolbar bg-secondary text-secondary-content border-b-4 border-primary py-4"
      >
        <div class="input">https://timrl.ai</div>
      </div>
      <div
        class="glass grid place-content-center min-h-[55vh] md:min-h-[65vh] p-2 bg-primary/85 text-primary-content text-center"
      >
        <div class="flex justify-center motion-reduce:hidden print:hidden">
          <ConfettiExplosion :particleCount="200" :force="0.3" v-if="visible" />
        </div>
        <div class="flex flex-wrap items-center">
          <div class="place-content-center w-full sm:w-3/4 md:w-2/3">
            <h1
              class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl ubuntu-titling mb-2"
            >
              Hi, I'm Tim Lai!
            </h1>
            <h2 class="text-3xl sm:text-4xl md:text-5xl ubuntu-titling mb-4">
              <small>(he/him)</small>
              <Icon icon="mingcute:male-line" class="inline-block ml-2" />
            </h2>
            <p
              class="text-xl sm:text-2xl md:text-4xl my-4 motion-reduce:hidden print:hidden"
            >
              I am
              <strong class="bg-blue-600 atkinson-hyperlegible-next-bold">
                <VueWriter
                  :array="intros.map(({ title }) => title)"
                  :typeSpeed="50"
                  :eraseSpeed="25"
                  @typed="onIntroTyped"
                  class="inline"
                />
              </strong>
            </p>
            <p
              class="text-lg sm:text-xl md:text-2xl m-4 atkinson-hyperlegible-next-medium motion-safe:not-print:hidden"
            >
              I am
              {{
                intros
                  .map(({ title }, i) =>
                    i === intros.length - 1 ? `and ${title}` : title,
                  )
                  .join(", ")
              }}.
            </p>
            <div
              class="text-9xl lg:text-[12rem] xl:text-[16rem] text-center mb-8 sm:mb-0 mt-8"
            >
              <Icon :icon="`${introIcon}`" class="inline-block" />
            </div>
          </div>
          <div class="w-full sm:w-1/4 md:w-1/3">
            <Suspense>
              <LottiePlayer :src="AVATAR_WAVE_LOTTIE_PATH" autoPlay v-once />
            </Suspense>
          </div>
        </div>
      </div>
    </Lazy>
  </section>
</template>

<style scoped lang="scss">
h1,
h2,
p {
  text-shadow: 0 0 30px var(--color-primary-content);
}

.mockup-browser-toolbar {
  margin-block: 0;
}
</style>
