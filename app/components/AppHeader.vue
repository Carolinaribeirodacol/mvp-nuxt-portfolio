<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [{
  label: 'Início',
  to: '#hero',
  icon: 'i-lucide-box',
  active: route.path.startsWith('/docs/components')
}, {
  label: 'Cases de sucesso',
  icon: 'i-simple-icons-figma',
  to: '#cases',
}, {
  label: 'Github',
  icon: 'i-lucide-rocket',
  to: 'https://github.com/nuxt/ui/releases',
},
{
  label: 'Stacks',
  icon: 'i-lucide-rocket',
  to: '#stacks',
},
{
  label: 'Sobre',
  icon: 'i-lucide-rocket',
  to: '#about',
}])
</script>

<template>
  <UHeader>
    <template #title>
      MVP Nuxt Portfolio
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>

