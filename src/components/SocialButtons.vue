<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ColorKind, TooltipPosition } from "../../lib/types";
import { socialButtons } from "../../lib/constants";

defineProps<{ buttonColor: ColorKind; tooltipPosition: TooltipPosition }>();

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
const tooltipPositions = {
  left: "tooltip-left",
  right: "tooltip-right",
  top: "tooltip-top",
  bottom: "tooltip-bottom",
};
</script>

<template>
  <nav class="flex flex-row justify-center gap-4 flex-shrink px-4">
    <div
      v-for="button in socialButtons"
      v-bind:key="button.tooltip"
      :class="`tooltip tooltip-secondary ${tooltipPositions[tooltipPosition]}`"
      :data-tip="`${button.tooltip}`"
    >
      <div class="tooltip-content">
        <div class="animate-bounce text-lg gluten">
          {{ button.tooltip }}
        </div>
      </div>
      <a
        :href="`${button.url}`"
        target="_blank"
        :class="`btn ${buttonColors[buttonColor]} text-2xl`"
        ><Icon :icon="`${button.icon}`"
      /></a>
    </div>
  </nav>
</template>

<style scoped></style>
