<script setup lang="ts">
import { lottieConstants, svgConstants } from "../../../lib/constants";
import LottiePlayer from "../Common/LottiePlayer.vue";
import SocialButtons from "../Common/SocialButtons.vue";

const { CLOUDS_LOTTIE_PATH } = lottieConstants;
const { LOGO_LIGHT_SVG_PATH } = svgConstants;

const year = new Date().getFullYear();
</script>

<template>
  <div class="mb-10 lg:mb-0">
    <LottiePlayer
      :src="CLOUDS_LOTTIE_PATH"
      :autoPlay="false"
      :playOnHover="true"
    />
  </div>
  <footer
    class="footer footer-horizontal lg:footer-vertical footer-center bg-accent text-accent-content p-10 relative text-center atkinson-hyperlegible-next-bold text-2xl"
  >
    <div class="footer-tile lg:w-1/3">
      <img
        :src="LOGO_LIGHT_SVG_PATH"
        alt="Tim RL dot AI"
        title="Tim RL .ai"
        class="inline-block w-full h-full"
      />
      <p>
        <small>Copyright &copy; {{ year }} Tim R. Lai</small>
      </p>
    </div>
    <div class="footer-tile lg:w-2/3">
      <SocialButtons
        buttonColor="secondary"
        tooltipColor="secondary"
        tooltipPosition="top"
        :showAll="true"
      />
    </div>
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
    oklch(45% 0.08 220) 25%,
    oklch(45% 0.08 220) 27%,
    oklch(76% 0.17 130) 28%,
    oklch(76% 0.17 130) 40%
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
