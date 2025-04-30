<script setup lang="ts">
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";
import { svgConstants } from "../../../lib/constants";
import SocialButtons from "../Common/SocialButtons.vue";

const { LOGO_LIGHT_SVG_PATH, HEAD_TRANS_SVG_PATH } = svgConstants;

const year = new Date().getFullYear();
</script>

<template>
  <hr class="border-b-4 border-primary m-0" />
  <footer
    class="footer footer-vertical md:footer-horizontal place-content-between bg-primary text-primary-content border-t-[10rem] border-success p-10 relative text-center atkinson-hyperlegible-next-bold text-2xl"
  >
    <aside class="footer-tile w-full md:w-2xs">
      <img
        :src="`../../src/${LOGO_LIGHT_SVG_PATH}`"
        alt="Tim RL dot AI"
        title="Tim RL .ai"
        class="inline-block w-full"
      />
    </aside>
    <aside class="footer-tile">
      <h2 class="text-3xl w-full mb-4 ubuntu-titling">
        Email Tim
        <Icon icon="fluent-color:mail-32" class="inline-block text-5xl" />
        <img
          :src="`../../src/${HEAD_TRANS_SVG_PATH}`"
          alt=""
          class="inline-block h-[1.5em]"
        />
      </h2>
      <p class="w-full mb-4">
        <a href="mailto:hi@timrl.ai" class="link link-success link-hover"
          >hi@timrl.ai</a
        >
      </p>
      <h2 class="text-3xl w-full mb-4 ubuntu-titling">
        Follow Tim on Social Media
        <Icon
          icon="fluent-emoji:mobile-phone-with-arrow"
          class="inline-block text-5xl"
        />
        <img
          :src="`../../src/${HEAD_TRANS_SVG_PATH}`"
          alt=""
          class="inline-block h-[1.5em]"
        />
      </h2>
      <SocialButtons
        buttonColor="secondary"
        tooltipColor="secondary"
        tooltipPosition="top"
        :showAll="true"
      />
    </aside>
    <aside class="footer-tile md:w-2xs">
      <div
        tabindex="0"
        role="button"
        class="w-full my-4 btn btn-secondary text-2xl"
      >
        <RouterLink to="/"
          ><Icon icon="mingcute:arrow-to-up-fill" class="inline-block" /> To
          Top</RouterLink
        >
      </div>
      <p class="mt-4">
        <small
          >Made with love
          <Icon
            icon="fluent-emoji:light-blue-heart"
            class="inline-block text-4xl"
          />
          and coffee
          <Icon
            icon="fluent-emoji:hot-beverage"
            class="inline-block text-4xl"
          />
          by and copyright &copy; {{ year }} Tim R. Lai
        </small>
        <img
          :src="`../../src/${HEAD_TRANS_SVG_PATH}`"
          alt=""
          class="inline-block h-[1.5em]"
        />
      </p>
    </aside>
  </footer>
</template>

<style scoped>
footer::before {
  position: absolute;
  top: -40px;
  left: 0px;
  width: 100%;
  content: " ";
  background: radial-gradient(
    circle at 50% 0%,
    transparent,
    transparent 25%,
    oklch(98% 0.05 101) 25%,
    oklch(98% 0.05 101) 27%,
    oklch(45% 0.08 220) 28%,
    oklch(45% 0.08 220) 40%
  );
  background-size: 50px 100px;
  background-repeat: repeat-x;
  height: 50px;
  transform: translateY(0) translateZ(0) rotateZ(360deg);
}
footer:hover::before {
  animation: wind 2s infinite;
}
@keyframes wind {
  0%,
  100% {
    transform: translateY(0) translateZ(0) rotateZ(360deg);
    background-position: 0 0;
  }
  50% {
    transform: translateY(-10px) translateZ(0) rotateZ(360deg);
    background-position: 10px 0;
  }
}
</style>
