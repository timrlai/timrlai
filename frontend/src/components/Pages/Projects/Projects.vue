<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { projects } from "../../../../lib/constants/index.ts";

const Project = defineAsyncComponent(() => import("./Project.vue"));
</script>

<template>
  <main
    id="main"
    class="flex flex-col gap-4 not-print:max-w-[95vw] not-print:min-h-[80vh] mx-auto mb-10 not-print:pt-30"
  >
    <Project
      v-for="project in projects"
      v-bind:key="project.slug"
      :slug="project.slug"
      :icon="project.icon"
      :title="project.title"
      :video-id="project.videoId"
      :description="project.description"
      :process="project.process"
      :outcome="project.outcome"
      :demo-link="project.demoLink"
      :github-link="project.githubLink"
      :lottie-type="project.lottieType"
      :skills="project.skills"
    />
  </main>
</template>

<style scoped lang="scss"></style>
