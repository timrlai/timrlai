<script setup lang="ts">
import { nextTick, ref } from "vue";
import { Icon } from "@iconify/vue";
import ConfettiExplosion from "vue-confetti-explosion";
import { VueWriter } from "vue-writer";

import { intros } from "../../../lib/constants";

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
    class="mockup-browser min-h-[70vh] bg-secondary text-secondary-content border-4 border-primary shadow-lg shadow-primary cursor-pointer"
    @click="explode"
  >
    <div class="mockup-browser-toolbar">
      <div class="input">https://timrlai.com</div>
    </div>
    <div
      class="grid place-content-center min-h-[65vh] p-5 bg-primary text-primary-content text-center"
    >
      <div class="flex justify-center items-start">
        <ConfettiExplosion :particleCount="200" :force="0.3" v-if="visible" />
      </div>
      <h1 class="text-5xl sm:text-6xl md:text-8xl ubuntu-bold mb-5">
        Hi, I'm Tim Lai!
        <span id="hand" class="inline-block pb-5">
          <Icon icon="fluent-emoji:waving-hand" />
        </span>
      </h1>
      <p class="text-2xl sm:text-3xl md:text-5xl my-5">
        I am
        <strong class="bg-blue-600 atkinson-hyperlegible-next-bold">
          <VueWriter
            :array="intros.map(({ title }) => title)"
            @typed="onIntroTyped"
            class="inline"
          />
        </strong>
      </p>
      <div class="text-9xl text-center mt-8 animate-bounce">
        <Icon :icon="`${introIcon}`" class="inline-block" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
#hi {
  h1,
  p {
    text-shadow: 0 0 30px oklch(98% 0.05 101);
  }
}

#hand {
  animation: wave 2s infinite;
}

@keyframes wave {
  0%,
  100% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(70deg);
  }
}
</style>
