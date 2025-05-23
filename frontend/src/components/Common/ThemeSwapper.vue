<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import type { ThemeSwapperProps } from "../../../lib/types";

const {
  location = "header",
  tooltipColor = "primary",
  tooltipPosition = "left",
} = defineProps<ThemeSwapperProps>();

const tooltipColors = {
  neutral: "tooltip-neutral",
  primary: "tooltip-primary",
  secondary: "tooltip-secondary",
  accent: "tooltip-accent",
  info: "tooltip-info",
  success: "tooltip-success",
  warning: "tooltip-warning",
  error: "tooltip-error",
};
const tooltipPositions = {
  left: "tooltip-left",
  right: "tooltip-right",
  top: "tooltip-top",
  bottom: "tooltip-bottom",
};

const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
let themeSwapped = false;
let themeName = darkModeMediaQuery.matches ? "timrlai-day" : "timrlai-night";
const tooltip = ref(darkModeMediaQuery.matches ? "Night Mode" : "Day Mode");

const setNightMode = () => {
  console.log("Switched to dark mode");
  tooltip.value = "Night Mode";
};

const setDayMode = () => {
  console.log("Switched to light mode or no preference");
  tooltip.value = "Day Mode";
};

const checkSwapTheme = (event: InputEvent) => {
  const target = event.target as HTMLInputElement;
  console.log(target?.checked);
  themeSwapped = target?.checked;
  if (
    (!darkModeMediaQuery.matches && !themeSwapped) ||
    (darkModeMediaQuery.matches && themeSwapped)
  ) {
    // User switched to light mode or no preference
    setDayMode();
  } else {
    // User switched to dark mode
    setNightMode();
  }
};

const changeDarkMode = (event: MediaQueryListEvent) => {
  if (event.matches && darkModeMediaQuery.matches) {
    // User switched to dark mode
    setNightMode();
    themeName = "timrlai-day";
  } else {
    // User switched to light mode or no preference
    setDayMode();
    themeName = "timrlai-night";
  }
};

// Listen for changes in the user's preference
darkModeMediaQuery.addEventListener("change", changeDarkMode);
</script>

<template>
  <div
    :class="`tooltip ${tooltipColors[tooltipColor]} ${tooltipPositions[tooltipPosition]}`"
    :data-tip="tooltip"
  >
    <div class="tooltip-content">
      <div
        :id="`theme-tooltip-${location}`"
        role="tooltip"
        class="text-lg gluten"
      >
        {{ tooltip }}
      </div>
    </div>
    <label
      for="swap-theme-checkbox"
      class="swap swap-rotate text-5xl pr-2 text-secondary-content"
      :aria-labelledby="`theme-tooltip-${location}`"
    >
      <!-- this hidden checkbox controls the state -->
      <input
        id="swap-theme-checkbox"
        type="checkbox"
        class="theme-controller"
        :value="themeName"
        :checked="themeSwapped"
        :onchange="checkSwapTheme"
      />

      <!-- sun icon -->
      <Icon
        icon="line-md:moon-filled-to-sunny-filled-loop-transition"
        :class="darkModeMediaQuery.matches ? 'swap-on' : 'swap-off'"
      />

      <!-- moon icon -->
      <Icon
        icon="line-md:sunny-filled-loop-to-moon-filled-loop-transition"
        :class="darkModeMediaQuery.matches ? 'swap-off' : 'swap-on'"
      />
    </label>
  </div>
</template>

<style scoped></style>
