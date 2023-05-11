<template>
  <main-image />
  <main-cards />
  <main-panel :class="smAndUp ? 'mt-16' : 'mt-4'"/>
  <experience-banner class="mt-16"/>
  <social-proof-panel class="mt-16 mb-16"/>
</template>

<script setup>
  import MainImage from '@/components/home/MainImage.vue'
  import MainCards from '@/components/home/MainCards.vue'
  import MainPanel from '@/components/home/MainPanel.vue'
  import ExperienceBanner from '@/components/home/ExperienceBanner.vue'
  import SocialProofPanel from '@/components/home/SocialProofPanel.vue'
  import { useDisplay } from 'vuetify'

  const { smAndUp } = useDisplay()

</script>

<style lang="scss" scoped>
</style>


