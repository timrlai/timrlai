<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { subItems } from "../../lib/constants";
import SocialButtons from "./SocialButtons.vue";
</script>

<template>
  <header class="ubuntu-bold">
    <nav class="navbar bg-secondary text-secondary-content relative">
      <div class="navbar-start">
        <div class="dropdown z-[9999]">
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost lg:hidden text-2xl"
          >
            <Icon icon="mingcute:hamburger-fill" />
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content rounded-box bg-secondary z-1 mt-3 w-52 p-2 border-4 border-primary shadow-lg shadow-primary"
          >
            <li>
              <a><Icon icon="mingcute:home-7-fill" /> Home</a>
            </li>
            <li>
              <a><Icon icon="mingcute:emoji-fill" /> Meet Tim</a>
              <ul class="p-2">
                <li v-for="item in subItems" v-bind:key="item.label">
                  <a :href="`${item.path}`">{{ item.label }}</a>
                </li>
              </ul>
            </li>
            <li>
              <a><Icon icon="mingcute:code-fill" /> Projects</a>
            </li>
          </ul>
        </div>
        <a class="btn btn-ghost text-xl">Tim Lai</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 text-lg">
          <li>
            <a><Icon icon="mingcute:home-7-fill" /> Home</a>
          </li>
          <li>
            <details class="z-[9999]">
              <summary><Icon icon="mingcute:emoji-fill" /> Meet Tim</summary>
              <ul
                class="p-2 bg-secondary border-4 border-primary shadow-lg shadow-primary"
              >
                <li v-for="item in subItems" v-bind:key="item.label">
                  <a :href="`${item.path}`" class="rounded-sm">{{
                    item.label
                  }}</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a><Icon icon="mingcute:code-fill" /> Projects</a>
          </li>
        </ul>
      </div>
      <div class="navbar-end flex gap-4">
        <SocialButtons
          buttonColor="primary"
          tooltipColor="primary"
          tooltipPosition="left"
        />
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
nav::after {
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
</style>
