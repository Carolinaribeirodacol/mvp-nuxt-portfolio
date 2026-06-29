<script setup lang="ts">
import type { PageFeatureProps, ButtonProps } from '@nuxt/ui'

interface GithubUser {
  name: string
  avatar_url: string
  bio: string | null
  company: string | null
  login: string
  htm_url: string
  [key: string]: unknown
}

const config = useRuntimeConfig()

const { data } = await useFetch<GithubUser>('https://api.github.com/users/Carolinaribeirodacol', {
  headers: config.public.githubToken ? { Authorization: `Bearer ${config.public.githubToken}` } : {}
})

const avatar = computed(() => data.value?.avatar_url)
const bio = computed(() => data.value?.bio || '')
const name = computed(() => data.value?.name || 'Carolina Ribeiro da Col Silva')
const githubUrl = computed(() => data.value?.htm_url || '')

const features = ref<PageFeatureProps[]>([
  {
    title: 'Experiência',
    description: 'Mais de 5 anos de experiência em desenvolvimento de software.',
    icon: 'mdi:work-outline'
  },
  {
    title: 'Formação',
    description: 'Tecnóloga em Análise e Desenvolvimento de Sistemas.',
    icon: 'mdi:university-outline'
  },
  {
    title: 'Certificações',
    description: 'Pós graduação em Jogos Digitais.',
    icon: 'mdi:google-gamepad'
  }
])
const links = ref<ButtonProps[]>([
  {
    label: 'Linkedin',
    to: 'https://www.linkedin.com/in/carolina-ribeiro-28852910b/',
    target: '_blank',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'mdi:linkedin'
  },
  {
    label: 'Github',
    to: githubUrl.value,
    target: '_blank',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'mdi:github'
  }
])
</script>

<template>
  <UPageSection
    :title="name"
    :description="bio"
    icon="i-lucide-rocket"
    orientation="horizontal"
    reverse
    :features="features"
    :links="links"
  >
    <NuxtImg
      v-if="avatar"
      :src="avatar" 
      alt="Avatar" 
      width="352"
      height="647"
      class="w-full max-w-sm md:max-w-sm lg:max-w-md rounded-lg shadow-2xl ring ring-default" 
    />
  </UPageSection>
</template>
