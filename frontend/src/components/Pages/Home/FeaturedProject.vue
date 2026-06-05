<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { projects } from "../../../../lib/constants/index.ts";

const Project = defineAsyncComponent(() => import("../Projects/Project.vue"));

const project = projects[Math.floor(Math.random() * projects.length)];
</script>

<template>
  <Project
    :slug="project.slug"
    :icon="project.icon"
    :title="`Featured Project: ${project.title}`"
    :video-id="project.videoId"
    :description="project.description"
    :process="project.process"
    :outcome="project.outcome"
    :demo-link="project.demoLink"
    :github-link="project.githubLink"
    :lottie-type="project.lottieType"
    :skills="project.skills"
  />
</template>

<style scoped lang="scss"></style>
