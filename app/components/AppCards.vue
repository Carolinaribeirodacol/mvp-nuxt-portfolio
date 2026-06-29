<script lang="ts" setup>
const cards = ref([
  {
    title: 'Site curso Vuejs',
    description: 'Curso de Vuejs Expert.',
    icon: 'i-lucide-swatch-book',
    class: 'hover:bg-secondary-100 cursor-pointer',
    to: 'https://cursovuejs.com.br/',
    target: '_blank',
    image: {
      path: '/vue-expert.png'
    },
    orientation: 'vertical' as const
  },
  {
    title: 'Site AbaeteFest',
    description: 'Site do maior app de Abaetetuba.',
    icon: 'i-lucide-swatch-book',
    class: 'hover:bg-secondary-100 cursor-pointer',
    to: 'https://abaetefest.com.br/',
    target: '_blank',
    image: {
      path: '/abaetefest.png'
    },
    orientation: 'vertical' as const
  },
  {
    title: 'App AbaeteFest',
    description: 'Aplicativo PWA publicado nas lojas.',
    icon: 'i-lucide-swatch-book',
    class: 'hover:bg-secondary-100 cursor-pointer',
    target: '_blank',
    to: 'https://play.google.com/store/apps/details?id=br.com.abaetefest.app.twa',
    image: {
      path: '/app-abaetetuba.png'
    },
    orientation: 'vertical' as const
  }
])
</script>

<template>
  <UContainer>
    <UPageCTA 
      title="Cases de sucesso" 
      variant="naked"
      description="Conheça os cases de sucesso da nossa empresa!"
    />

    <UPageGrid>
      <UPageCard
        v-for="(card, index) in cards"
        :key="index"
        v-bind="card"
      >
        <NuxtImg
          v-if="card.image"
          loading="lazy"
          :src="card.image.path" 
          alt="Tailwind CSS" 
          class="w-full" 
        />
      </UPageCard>
    </UPageGrid>
  </UContainer>
</template>
