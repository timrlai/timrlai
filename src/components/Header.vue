<script setup lang="ts">
import { Icon } from "@iconify/vue";
const subItems = [
  {
    label: "Hi!",
    path: "/hi",
  },
  {
    label: "Summary",
    path: "/summary",
  },
  {
    label: "Skills",
    path: "/skills",
  },
  {
    label: "Developer",
    path: "/developer",
  },
  {
    label: "Teacher",
    path: "/teacher",
  },
  {
    label: "Designer",
    path: "/designer",
  },
  {
    label: "Illustrator",
    path: "/illustrator",
  },
  {
    label: "Education",
    path: "/education",
  },
  {
    label: "Volunteering",
    path: "/volunteering",
  },
];
</script>

<template>
  <header class="ubuntu-bold">
    <nav class="navbar">
      <div class="navbar-start">
        <div class="dropdown">
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost lg:hidden text-2xl"
          >
            <Icon icon="mingcute:hamburger-fill" />
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
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
            <details class="z-50">
              <summary><Icon icon="mingcute:emoji-fill" /> Meet Tim</summary>
              <ul class="p-2">
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
        <div class="tooltip tooltip-secondary tooltip-left" data-tip="GitHub!">
          <div class="tooltip-content">
            <div class="animate-bounce text-lg gluten">GitHub!</div>
          </div>
          <a
            href="https://github.com/timrlai"
            target="_blank"
            class="btn btn-primary text-2xl"
            ><Icon icon="mingcute:github-fill"
          /></a>
        </div>
        <div
          class="tooltip tooltip-secondary tooltip-left"
          data-tip="LinkedIn!"
        >
          <div class="tooltip-content">
            <div class="animate-bounce text-lg gluten">LinkedIn!</div>
          </div>
          <a
            href="https://www.linkedin.com/in/timrlai/"
            target="_blank"
            class="btn btn-primary text-2xl"
            ><Icon icon="mingcute:linkedin-fill"
          /></a>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
