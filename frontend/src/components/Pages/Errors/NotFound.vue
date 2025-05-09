<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";
import { lottieConstants } from "../../../../lib/constants";

const NotFoundCanvas = defineAsyncComponent(
  () => import("../../3D/NotFoundCanvas.vue"),
);
const LottiePlayer = defineAsyncComponent(
  () => import("../../Common/LottiePlayer.vue"),
);

const { NOT_FOUND_LOTTIE_FOLDER, NOT_FOUND_LOTTIES } = lottieConstants;

const randomNotFoundLottie = `${NOT_FOUND_LOTTIE_FOLDER}${NOT_FOUND_LOTTIES[Math.floor(Math.random() * NOT_FOUND_LOTTIES.length)]}`;
</script>

<template>
  <div class="min-h-[90vh] motion-reduce:hidden print:hidden">
    <Suspense>
      <NotFoundCanvas v-once />
    </Suspense>
  </div>
  <main
    id="main"
    class="flex flex-col justify-center gap-4 max-w-[95vw] mx-auto mb-10 motion-reduce:pt-30"
  >
    <section
      id="summary"
      class="mockup-window bg-secondary text-secondary-content border-4 border-primary shadow-lg shadow-primary"
    >
      <h1
        class="text-3xl sm:text-5xl md:text-8xl text-center ubuntu-titling mb-4 px-5"
      >
        404 Error: Page Not Found
        <Icon icon="fluent-emoji:weary-cat" class="inline-block" />
      </h1>
      <div class="flex flex-row flex-wrap lg:flex-nowrap gap-4">
        <div class="lg:w-1/2">
          <p class="text-xl sm:text-2xl mb-4 px-5">
            Sorry, but a page with the provided address of
            <strong>"{{ $route.path }}"</strong> does not seem to exist. Did
            your cat
            <Icon icon="fluent-emoji:cat-with-wry-smile" class="inline-block" />
            step on your keyboard? Please try the following:
          </p>
          <ul class="list text-xl sm:text-2xl atkinson-hyperlegible-next-bold">
            <li class="list-row">
              <div class="text-7xl sm:text-8xl">
                <Icon icon="fluent-color:text-edit-style-24" />
              </div>
              <div>
                Check the spelling in the address
                <strong>"{{ $route.path }}"</strong> to ensure that you (or your
                cat) did not make a typo.
              </div>
            </li>
            <li class="list-row">
              <div class="text-7xl sm:text-8xl">
                <Icon icon="fluent-color:history-24" />
              </div>
              <div>
                Clear your browser's cache, especially if you are looking for a
                recently added page.
              </div>
            </li>
            <li class="list-row">
              <div class="text-7xl sm:text-8xl">
                <Icon icon="fluent-color:home-24" />
              </div>
              <div>
                Go back to the
                <RouterLink to="/" class="link link-accent link-hover"
                  >Home</RouterLink
                >
                page to
                <RouterLink
                  to="/#hi"
                  hash="hi"
                  class="link link-accent link-hover"
                  >say hi</RouterLink
                >, read a
                <RouterLink
                  to="/#summary"
                  hash="summary"
                  class="link link-accent link-hover"
                  >summary</RouterLink
                >
                about me, or review my
                <RouterLink
                  to="/#skills"
                  hash="skills"
                  class="link link-accent link-hover"
                  >skills</RouterLink
                >.
              </div>
            </li>
            <li class="list-row">
              <div class="text-7xl sm:text-8xl">
                <Icon icon="fluent-color:code-24" />
              </div>
              <div>
                Check out my projects on the
                <RouterLink to="/projects" class="link link-accent link-hover"
                  >Projects</RouterLink
                >
                page.
              </div>
            </li>
            <li class="list-row">
              <div class="text-7xl sm:text-8xl">
                <Icon icon="logos:github-octocat" />
              </div>
              <div>
                View the source code of my projects on my
                <a
                  href="https://github.com/timrlai"
                  target="_blank"
                  class="link link-accent link-hover"
                  >GitHub</a
                >
                profile.
              </div>
            </li>
            <li class="list-row">
              <div class="text-7xl sm:text-8xl">
                <Icon icon="logos:linkedin-icon" />
              </div>
              <div>
                View my work experience on my
                <a
                  href="https://www.linkedin.com/in/timrlai/"
                  target="_blank"
                  class="link link-accent link-hover"
                  >LinkedIn</a
                >
                profile.
              </div>
            </li>
            <li class="list-row">
              <div class="text-7xl sm:text-8xl">
                <Icon icon="logos:twitter" />
              </div>
              <div>
                Read my thoughts and contact me on my
                <a
                  href="https://twitter.com/timrlai/"
                  target="_blank"
                  class="link link-accent link-hover"
                  >Twitter</a
                >
                account. What is "X?" Like the Letter? Why would I call Twitter
                "X?" No, I will not call it that, Elon.
              </div>
            </li>
          </ul>
        </div>
        <div class="lg:w-1/2 mx-auto">
          <Suspense>
            <LottiePlayer :src="randomNotFoundLottie" autoPlay v-once />
          </Suspense>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss"></style>
