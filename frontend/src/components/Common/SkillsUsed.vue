<script setup lang="ts">
import { Icon } from "@iconify/vue";

import type { Skill } from "../../../lib/types";

defineProps<{ labelledby: string; skills: Skill[] }>();
</script>

<template>
  <aside
    :aria-labelledby="labelledby"
    class="bg-base-200/60 text-base-content border-4 border-primary rounded-lg w-full p-5"
  >
    <h1 class="text-xl lg:text-2xl mb-4 ubuntu-titling">
      <Icon icon="mingcute:code-fill" class="inline-block h-[1em]" />
      Skills Used
    </h1>
    <p class="text-lg sm:text-xl my-4 ahn-medium">
      <span v-for="(skill, index) in skills" v-bind:key="skill.title">
        {{ skill.title }}<span v-if="index < skills.length - 1">, </span>
      </span>
    </p>
    <div class="flex flex-wrap gap-2 text-5xl print:hidden">
      <Icon
        v-for="skill in skills.filter(({ icon }) => icon && icon)"
        v-bind:key="skill.title"
        :icon="`${skill.icon}`"
        class="w-10"
      />
    </div>
  </aside>
</template>

<style scoped></style>
