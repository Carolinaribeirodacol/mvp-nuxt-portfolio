<script lang="ts" setup>
const cards = ref([
  {
    title: 'MVP Vuetify',
    description: 'MVP desenvolvido durante o curso de Vue.js Expert, utilizando vuetify.',
    icon: 'i-lucide-swatch-book',
    class: 'hover:bg-secondary-100 cursor-pointer',
    to: 'https://mvp-vuetify-carolina.netlify.app/',
    target: '_blank',
    image: {
      path: '/mvp-vuetify.png'
    },
    orientation: 'vertical' as const
  },
  {
    title: 'MVP daisyUI',
    description: 'MVP desenvolvido durante o curso de Vue.js Expert, utilizando daisyUI e API Rick and Morty.',
    icon: 'i-lucide-swatch-book',
    class: 'hover:bg-secondary-100 cursor-pointer',
    to: 'https://mvp-daisyui-rickandmorty.netlify.app/',
    target: '_blank',
    image: {
      path: '/mvp-daisy-ui.png'
    },
    orientation: 'vertical' as const
  },
  {
    title: 'Portfólio principal',
    description: 'Portfólio com meus projetos, formações e experiência.',
    icon: 'i-lucide-swatch-book',
    class: 'hover:bg-secondary-100 cursor-pointer',
    target: '_blank',
    to: 'https://carolina.playgrindelia.com/',
    image: {
      path: '/portfolio.png'
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
      description="Conheça os meus projetos!"
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
