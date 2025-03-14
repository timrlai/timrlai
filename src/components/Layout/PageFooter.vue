<script setup lang="ts">
import LottiePlayer from "../Common/LottiePlayer.vue";
import SocialButtons from "../Common/SocialButtons.vue";

const year = new Date().getFullYear();
</script>

<template>
  <LottiePlayer
    src="/lottie/clouds_lottie.json"
    :autoPlay="false"
    :playOnHover="true"
  />
  <footer
    class="footer footer-center bg-accent text-accent-content p-10 relative text-center atkinson-hyperlegible-next-bold text-2xl"
  >
    <div class="w-1/3">
      <img
        src="../../assets/img/logos/timrlai_logo_light.svg"
        alt="Tim RL dot AI"
        title="Tim RL .ai"
        class="inline-block w-full h-full"
      />
    </div>
    <p>
      <small>Copyright &copy; {{ year }} Tim R. Lai</small>
    </p>
    <SocialButtons
      buttonColor="secondary"
      tooltipColor="secondary"
      tooltipPosition="top"
      :showAll="true"
    />
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
