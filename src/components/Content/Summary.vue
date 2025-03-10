<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <section
    class="mockup-window bg-secondary text-secondary-content border-4 border-primary shadow-lg shadow-primary"
  >
    <h1 class="text-5xl text-center ubuntu-titling mb-4 px-5">
      Summary
      <Icon icon="fluent-color:apps-list-detail-20" class="inline-block" />
    </h1>
    <ul class="list text-2xl atkinson-hyperlegible-next-bold">
      <li class="list-row">
        <div class="text-5xl">
          <Icon icon="fluent-emoji:robot" />
        </div>
        <div>
          Worked as a web developer at
          <a
            href="https://futuretalk.ca"
            target="_blank"
            class="link link-accent link-hover"
            >Futuretalk Inc.</a
          >
          making
          <a
            href="https://learnwithtrek.com"
            target="_blank"
            class="link link-accent link-hover"
            >VR/AR and AI applications</a
          >
          with React/Next.js and Three.js
        </div>
      </li>
      <li class="list-row">
        <div class="text-5xl">
          <Icon icon="fluent-emoji:man-teacher-light" class="inline-block" />
        </div>
        <div>
          Teacher of
          <a
            href="https://www.senecapolytechnic.ca/ce/creative/graphics-web-design/web-programming-development.html"
            target="_blank"
            class="link link-accent link-hover"
            >Web Programming</a
          >
          with Python and Django, PHP and Laravel and JavaScript and Angular at
          Seneca Polytechnic
        </div>
      </li>
      <li class="list-row">
        <div class="text-5xl">
          <Icon icon="fluent-emoji:student-light" />
        </div>
        <div>
          Graduated with an
          <a
            href="https://www.senecapolytechnic.ca/programs/fulltime/BSD.html"
            target="_blank"
            class="link link-accent link-hover"
            >Honours Bachelor of Technology - Software Development</a
          >
          degree from Seneca Polytechnic
        </div>
      </li>
      <li class="list-row">
        <div class="text-5xl">
          <Icon icon="fluent-emoji:man-technologist-light" />
        </div>
        <div>
          A passionate full stack developer/designer with 5+ years of web
          development experience
        </div>
      </li>
      <li class="list-row">
        <div class="text-5xl">
          <Icon icon="fluent-emoji:heart-on-fire" />
        </div>
        <div>
          Enthusiastic, creative, detail-oriented, resourceful, reliable, fast
          learning, dedicated and adaptable
        </div>
      </li>
      <li class="list-row">
        <div class="text-5xl">
          <Icon icon="fluent-emoji:handshake" />
        </div>
        <div>
          Experience working both independently and in team-oriented,
          collaborative environments
        </div>
      </li>
      <li class="list-row">
        <div class="text-5xl">
          <Icon icon="flag:ca-1x1" />
        </div>
        <div>Canadian citizen</div>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss"></style>
