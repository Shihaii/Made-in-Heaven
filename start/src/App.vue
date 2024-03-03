<script setup lang="ts">
import { ref } from "vue";
import "@/assets/base.css";
import Navigation from "./components/Navigation.vue";
import Loading from "./components/TimeAccelerationAnimation.vue";
import type { NavigationLink } from "./types";
import MadeInHeaven from "./components/MadeInHeaven.vue";
import Parallax from "./components/Parallax.vue";


const navLinks: NavigationLink[] = [
  { name: "Home", url: "/" },
  { name: "Design", url: "/design" },
];
</script>

<template>
  <main class="space-static">
    <Navigation :links="navLinks"></Navigation>
    <RouterView></RouterView>
  </main>
</template>
