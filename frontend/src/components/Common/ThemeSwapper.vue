<script setup lang="ts">
import { storeToRefs } from "pinia";
import { Icon } from "@iconify/vue";

import type { ThemeSwapperProps } from "../../../lib/types";
import { useThemeStore } from "../../../lib/stores/theme";

const {
  location = "header",
  iconColor = "secondary",
  tooltipColor = "primary",
  tooltipPosition = "left",
} = defineProps<ThemeSwapperProps>();

const iconColors = {
  neutral: "text-neutral-content",
  primary: "text-primary-content",
  secondary: "text-secondary-content",
  accent: "text-accent-content",
  info: "text-info-content",
  success: "text-success-content",
  warning: "text-warning-content",
  error: "text-error-content",
};
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

const store = useThemeStore();
const { darkMediaQuery, prefersDark, swapped, swapTo, tooltip } =
  storeToRefs(store);

const checkSwapTheme = (event: InputEvent) => {
  const target = event.target as HTMLInputElement;
  swapped.value = target?.checked;
};

const changeDarkMode = (event: MediaQueryListEvent) => {
  if (event.matches && prefersDark.value) {
    // User switched to dark mode
    swapTo.value = "timrlai-day";
  } else {
    // User switched to light mode or no preference
    swapTo.value = "timrlai-night";
  }
};

// Listen for changes in the user's preference
darkMediaQuery.value.addEventListener("change", changeDarkMode);
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
      :class="`swap swap-rotate text-5xl pr-2 ${iconColors[iconColor]}`"
      :aria-labelledby="`theme-tooltip-${location}`"
    >
      <!-- this hidden checkbox controls the state -->
      <input
        id="swap-theme-checkbox"
        type="checkbox"
        class="theme-controller"
        :value="swapTo"
        :checked="swapped"
        :onchange="checkSwapTheme"
      />

      <!-- sun icon -->
      <Icon
        icon="line-md:moon-filled-to-sunny-filled-loop-transition"
        :class="prefersDark ? 'swap-on' : 'swap-off'"
      />

      <!-- moon icon -->
      <Icon
        icon="line-md:sunny-filled-loop-to-moon-filled-loop-transition"
        :class="prefersDark ? 'swap-off' : 'swap-on'"
      />
    </label>
  </div>
</template>

<style scoped></style>
