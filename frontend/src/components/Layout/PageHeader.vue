<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import { Icon } from "@iconify/vue";

import { meetSubItems, experienceSubItems } from "../../../lib/constants";
import { useThemeStore } from "../../../lib/stores/theme";

const logoDarkSvgPath = await import("../../assets/img/logos/timrlai_logo.svg");
const logoLightSvgPath = await import(
  "../../assets/img/logos/timrlai_logo_light.svg"
);

const SocialButtons = defineAsyncComponent(
  () => import("../Common/SocialButtons.vue"),
);
const ThemeSwapper = defineAsyncComponent(
  () => import("../Common/ThemeSwapper.vue"),
);

const store = useThemeStore();
const { isNight } = storeToRefs(store);
</script>

<template>
  <header class="relative">
    <nav
      id="main-nav"
      aria-label="Main navigation"
      class="navbar bg-secondary text-secondary-content"
    >
      <div class="navbar-start">
        <RouterLink
          to="#main"
          class="visually-hidden focusable btn btn-lg btn-ghost atkinson-hyperlegible-next"
          >Skip to main content
          <Icon icon="mingcute:arrow-to-down-fill" class="inline-block"
        /></RouterLink>
        <div class="dropdown z-[9999] ubuntu-titling uppercase">
          <button
            tabindex="0"
            class="btn btn-ghost lg:hidden text-3xl"
            aria-label=" Open/close menu"
          >
            <Icon icon="mingcute:menu-fill" />
          </button>
          <ul
            tabindex="0"
            class="menu menu-lg dropdown-content rounded-box bg-secondary z-1 mt-3 w-xs sm:w-sm p-2 rounded-t-none border-l-4 border-r-4 border-b-4 border-primary shadow-lg shadow-primary"
          >
            <li>
              <RouterLink to="/" hash="#"
                ><Icon icon="line-md:home-twotone" /> Home</RouterLink
              >
            </li>
            <li>
              <a><Icon icon="line-md:emoji-smile-twotone" /> Meet Tim</a>
              <ul class="p-2">
                <li v-for="item in meetSubItems" v-bind:key="item.label">
                  <RouterLink
                    :to="`${item.to}#${item.hash}`"
                    :hash="`${item.hash}`"
                    ><Icon :icon="`${item.icon}`" />
                    {{ item.label }}</RouterLink
                  >
                </li>
              </ul>
            </li>
            <li>
              <a><Icon icon="line-md:document-list-twotone" /> Experience</a>
              <ul class="p-2">
                <li v-for="item in experienceSubItems" v-bind:key="item.label">
                  <RouterLink
                    :to="`${item.to}#${item.hash}`"
                    :hash="`${item.hash}`"
                    ><Icon :icon="`${item.icon}`" />
                    {{ item.label }}</RouterLink
                  >
                </li>
              </ul>
            </li>
            <li>
              <RouterLink to="/projects"
                ><Icon icon="line-md:document-code-twotone" />
                Projects</RouterLink
              >
            </li>
          </ul>
        </div>
        <RouterLink
          to="/"
          hash="#"
          class="btn btn-ghost btn-lg rounded-box py-1 text-xl"
          ><Suspense>
            <img
              :src="
                isNight ? logoLightSvgPath.default : logoDarkSvgPath.default
              "
              alt="Tim R. Lai"
              title="Tim R. Lai"
              width="52"
              height="38"
              class="w-full h-full" /></Suspense
        ></RouterLink>
      </div>
      <div class="navbar-center hidden lg:flex ubuntu-titling uppercase">
        <ul class="menu menu-horizontal px-1 text-xl xl:text-2xl">
          <li>
            <RouterLink to="/" hash="#"
              ><Icon icon="line-md:home-twotone" /> Home</RouterLink
            >
          </li>
          <li>
            <details class="z-[9999]">
              <summary>
                <Icon icon="line-md:emoji-smile-twotone" /> Meet Tim
              </summary>
              <ul
                class="p-2 bg-secondary rounded-t-none border-l-4 border-r-4 border-b-4 border-primary shadow-lg shadow-primary"
              >
                <li v-for="item in meetSubItems" v-bind:key="item.label">
                  <RouterLink
                    :to="`${item.to}#${item.hash}`"
                    :hash="`${item.hash}`"
                    class="rounded-sm"
                    ><Icon :icon="`${item.icon}`" />
                    {{ item.label }}</RouterLink
                  >
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details class="z-[9999]">
              <summary>
                <Icon icon="line-md:document-list-twotone" /> Experience
              </summary>
              <ul
                class="p-2 bg-secondary rounded-t-none border-l-4 border-r-4 border-b-4 border-primary shadow-lg shadow-primary"
              >
                <li v-for="item in experienceSubItems" v-bind:key="item.label">
                  <RouterLink
                    :to="`${item.to}#${item.hash}`"
                    :hash="`${item.hash}`"
                    class="rounded-sm"
                    ><Icon :icon="`${item.icon}`" />
                    {{ item.label }}</RouterLink
                  >
                </li>
              </ul>
            </details>
          </li>
          <li>
            <RouterLink to="/projects"
              ><Icon icon="line-md:document-code-twotone" />
              Projects</RouterLink
            >
          </li>
        </ul>
      </div>
      <div class="navbar-end flex gap-4">
        <Suspense>
          <SocialButtons
            location="header"
            button-color="primary"
            tooltip-color="accent"
            tooltip-position="left"
            :show-all="false"
          />
        </Suspense>
        <Suspense>
          <ThemeSwapper
            location="header"
            icon-color="secondary"
            tooltip-color="accent"
            tooltip-position="left"
          />
        </Suspense>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
#main-nav::after {
  position: absolute;
  bottom: -20px;
  left: 0px;
  width: 100%;
  content: " ";
  background: radial-gradient(
    circle at 50% 0%,
    var(--color-secondary) 25%,
    var(--color-primary) 26%,
    transparent 40%
  );
  background-size: 20px 40px;
  height: 20px;
  background-repeat: repeat-x;
  z-index: 1;
}

@media screen and (min-height: 500px) {
  #main-nav {
    position: fixed;
    z-index: 99999;
  }
}
</style>
