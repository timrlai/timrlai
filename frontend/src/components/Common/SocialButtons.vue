<script setup lang="ts">
import { Icon } from "@iconify/vue";
import type { SocialButtonsProps } from "../../../lib/types";
import { socialButtons } from "../../../lib/constants";

const {
  location = "header",
  buttonColor = "primary",
  tooltipColor = "primary",
  tooltipPosition = "left",
  showAll = false,
} = defineProps<SocialButtonsProps>();

const buttonColors = {
  neutral: "btn-neutral",
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  info: "btn-info",
  success: "btn-success",
  warning: "btn-warning",
  error: "btn-error",
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
</script>

<template>
  <nav
    :id="`social-nav-${location}`"
    :aria-label="`Social navigation in ${location}`"
    :class="`flex justify-center gap-1 sm:gap-2 md:gap-4 flex-shrink px-1 sm:px-2 md:px-4 ${showAll && 'flex-wrap'}`"
  >
    <div v-for="button in socialButtons" v-bind:key="button.tooltip">
      <div
        v-if="showAll || button.main"
        :class="`tooltip ${tooltipColors[tooltipColor]} ${tooltipPositions[tooltipPosition]}`"
        :data-tip="`${button.tooltip}`"
      >
        <div class="tooltip-content">
          <div
            :id="`${button.icon}-tooltip-${location}`"
            role="tooltip"
            class="text-lg gluten"
          >
            {{ button.tooltip }}
          </div>
        </div>
        <a
          :href="`${button.url}`"
          target="_blank"
          aria-roledescription="button"
          :aria-labelledby="`${button.icon}-tooltip-${location}`"
          :class="`btn ${buttonColors[buttonColor]} text-xl sm:text-2xl`"
          ><Icon :icon="`${button.icon}`" aria-roledescription="icon"
        /></a>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
