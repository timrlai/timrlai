import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => {
    const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const prefersDark = darkMediaQuery.matches;
    return {
      darkMediaQuery,
      prefersDark,
      swapped: false,
      swapTo: prefersDark ? "timrlai-day" : "timrlai-night",
      dayTooltip: "Day Mode",
      nightTooltip: "Night Mode",
    };
  },
  getters: {
    isNight(state): boolean {
      return (
        (state.prefersDark && !state.swapped) ||
        (!state.prefersDark && state.swapped)
      );
    },
    tooltip(state): string {
      return this.isNight ? state.nightTooltip : state.dayTooltip;
    },
  },
});
