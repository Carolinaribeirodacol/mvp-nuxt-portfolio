<script setup lang="ts">
import { useSeoMeta } from 'nuxt/app';

useSeoMeta({
  title: 'MVP Nuxt Portfolio',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: '/project-image.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
