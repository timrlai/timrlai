<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { RouterLink } from "vue-router";
import { subItems } from "../../../lib/constants";
import SocialButtons from "../Common/SocialButtons.vue";
</script>

<template>
  <header class="ubuntu-titling uppercase relative">
    <nav id="main-nav" class="navbar bg-secondary text-secondary-content">
      <div class="navbar-start">
        <div class="dropdown z-[9999]">
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost lg:hidden text-3xl"
          >
            <Icon icon="mingcute:hamburger-fill" />
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content rounded-box bg-secondary z-1 mt-3 w-52 p-2 border-4 border-primary shadow-lg shadow-primary"
          >
            <li>
              <RouterLink to="/"
                ><Icon icon="mingcute:home-7-fill" /> Home</RouterLink
              >
            </li>
            <li>
              <a><Icon icon="mingcute:emoji-fill" /> Meet Tim</a>
              <ul class="p-2">
                <li v-for="item in subItems" v-bind:key="item.label">
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
                ><Icon icon="mingcute:code-fill" /> Projects</RouterLink
              >
            </li>
          </ul>
        </div>
        <RouterLink to="/" class="btn btn-ghost btn-lg rounded-box py-1 text-xl"
          ><img
            src="../../assets/img/logos/timrlai_logo.svg"
            alt="Tim RL dot AI"
            title="Tim RL .ai"
            class="w-full h-full"
        /></RouterLink>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 text-lg">
          <li>
            <RouterLink to="/"
              ><Icon icon="mingcute:home-7-fill" /> Home</RouterLink
            >
          </li>
          <li>
            <details class="z-[9999]">
              <summary><Icon icon="mingcute:emoji-fill" /> Meet Tim</summary>
              <ul
                class="p-2 bg-secondary border-4 border-primary shadow-lg shadow-primary"
              >
                <li v-for="item in subItems" v-bind:key="item.label">
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
              ><Icon icon="mingcute:code-fill" /> Projects</RouterLink
            >
          </li>
        </ul>
      </div>
      <div class="navbar-end flex gap-4">
        <SocialButtons
          buttonColor="primary"
          tooltipColor="primary"
          tooltipPosition="left"
          :showAll="false"
        />
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
nav#main-nav::after {
  position: absolute;
  bottom: -20px;
  left: 0px;
  width: 100%;
  content: " ";
  background: radial-gradient(
    circle at 50% 0%,
    oklch(98% 0.05 101) 25%,
    oklch(45% 0.08 220) 26%,
    transparent 40%
  );
  background-size: 20px 40px;
  height: 20px;
  background-repeat: repeat-x;
  z-index: 1;
}

@media screen and (min-height: 500px) {
  nav#main-nav {
    position: fixed;
    z-index: 99999;
  }
}
</style>
