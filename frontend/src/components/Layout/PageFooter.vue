<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";

const logoSvgPath = await import(
  "../../assets/img/logos/timrlai_logo_light.svg"
);
const headSvgPath = await import(
  "../../assets/img/icons/timrlai_head_trans_bg.svg"
);

const SocialButtons = defineAsyncComponent(
  () => import("../Common/SocialButtons.vue"),
);

const year = new Date().getFullYear();
</script>

<template>
  <hr class="border-b-4 border-primary m-0" />
  <footer
    class="footer footer-vertical md:footer-horizontal place-content-between bg-primary text-primary-content border-t-[10rem] border-success p-10 relative text-center atkinson-hyperlegible-next-bold text-2xl"
  >
    <section class="footer-tile w-full md:w-2xs print:hidden">
      <Suspense>
        <img
          :src="logoSvgPath.default"
          alt="Tim R. Lai"
          title="Tim R. Lai"
          class="inline-block w-full"
        />
      </Suspense>
    </section>
    <section class="footer-tile">
      <h2 class="text-3xl w-full mb-4 ubuntu-titling">
        <Icon icon="fluent-color:mail-32" class="inline-block text-5xl" />
        <Suspense>
          <img
            :src="headSvgPath.default"
            aria-hidden
            alt=""
            class="inline-block h-[1.5em]"
          />
        </Suspense>
        Email Tim
      </h2>
      <p class="w-full mb-4">
        <a href="mailto:hi@timrl.ai" class="link link-success link-hover"
          >hi@timrl.ai</a
        >
      </p>
      <h2 class="text-3xl w-full mb-4 ubuntu-titling">
        <Icon
          icon="fluent-emoji:mobile-phone-with-arrow"
          class="inline-block text-5xl"
        />
        <Suspense>
          <img
            :src="headSvgPath.default"
            aria-hidden
            alt=""
            class="inline-block h-[1.5em]"
          />
        </Suspense>
        Follow Tim on Social Media
      </h2>
      <Suspense>
        <SocialButtons
          location="footer"
          button-color="secondary"
          tooltip-color="secondary"
          tooltip-position="top"
          :show-all="true"
        />
      </Suspense>
    </section>
    <section class="footer-tile md:w-2xs">
      <RouterLink
        to=""
        hash="#"
        tabindex="0"
        role="button"
        class="w-full my-4 btn btn-xl btn-secondary text-2xl ubuntu-titling"
        ><Icon icon="mingcute:arrow-to-up-fill" class="inline-block" /> To
        Top</RouterLink
      >
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
        <Suspense>
          <img
            :src="headSvgPath.default"
            aria-hidden
            alt=""
            class="inline-block h-[1.5em]"
          />
        </Suspense>
      </p>
    </section>
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
    var(--color-secondary) 25%,
    var(--color-secondary) 27%,
    var(--color-primary) 28%,
    var(--color-primary) 40%
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
