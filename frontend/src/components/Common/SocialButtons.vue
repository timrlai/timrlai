<script setup lang="ts">
import { Icon } from "@iconify/vue";
import type { SocialButtonsProps } from "../../../lib/types";
import { socialButtons } from "../../../lib/constants";

const {
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
    id="social-nav"
    :class="`flex flex-row justify-center gap-1 sm:gap-2 md:gap-4 flex-shrink px-1 sm:px-2 md:px-4 ${showAll && 'flex-wrap'}`"
  >
    <div v-for="button in socialButtons" v-bind:key="button.tooltip">
      <div
        v-if="showAll || button.main"
        :class="`tooltip ${tooltipColors[tooltipColor]} ${tooltipPositions[tooltipPosition]}`"
        :data-tip="`${button.tooltip}`"
      >
        <div class="tooltip-content">
          <div class="animate-bounce text-lg gluten normal-case">
            {{ button.tooltip }}
          </div>
        </div>
        <a
          :href="`${button.url}`"
          target="_blank"
          aria-roledescription="button"
          :aria-labelledby="`${button.tooltip}-icon`"
          :class="`btn ${buttonColors[buttonColor]} text-xl sm:text-2xl`"
          ><Icon
            :id="`${button.tooltip}-icon`"
            :icon="`${button.icon}`"
            aria-roledescription="icon"
            :aria-label="button.tooltip"
        /></a>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
