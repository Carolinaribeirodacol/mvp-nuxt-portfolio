<template>
  <UContainer class="pb-20">
    <UPageCTA
      title="Stacks utilizados"
      variant="naked"
      :ui="{container: 'pb-10!'}"
    />

    <UPageLogos
      marquee
      :items="[
        'material-icon-theme:nuxt',
        'material-icon-theme:laravel',
        'vscode-icons:file-type-tailwind',
        'skill-icons:javascript',
        'devicon-plain:vuetify',
        'logos:pinia',
        'logos:daisyui-icon',
        'bi:typescript'
      ]"
    />
  </UContainer>
</template>
