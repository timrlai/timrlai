<script setup lang="ts">
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";
import type { TopTopButtonProps } from "../../../lib/types";
import {
  buttonColors,
  tooltipColors,
  tooltipPositions,
} from "../../../lib/constants";

const {
  buttonColor = "primary",
  tooltipColor = "primary",
  tooltipPosition = "left",
} = defineProps<TopTopButtonProps>();
</script>

<template>
  <nav
    :class="`fixed right-4 bottom-4 tooltip ${tooltipColors[tooltipColor]} ${tooltipPositions[tooltipPosition]}`"
    data-tip="To Top"
  >
    <div class="tooltip-content">
      <div :id="`to-top-tooltip`" role="tooltip" class="text-lg gluten">
        To Top
      </div>
    </div>
    <RouterLink
      to=""
      hash="#"
      tabindex="0"
      role="button"
      aria-roledescription="button"
      aria-labelledby="to-top-tooltip"
      :class="`btn btn-xl ${buttonColors[buttonColor]} text-2xl ubuntu-titling shadow-2xl`"
      ><Icon icon="mingcute:arrow-to-up-fill" class="inline-block"
    /></RouterLink>
  </nav>
</template>

<style scoped></style>
