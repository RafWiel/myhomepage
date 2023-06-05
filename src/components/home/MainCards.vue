<template>
  <div class="mc-main-container">
    <v-container
      :fluid = "mdAndDown"
      class="mc-container">
      <v-row no-gutters>
        <v-col
          cols="12"
          md="4">
          <bullet-card
            imagePath="cards/projects.jpg"
            title="Projekty"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim feugiat eros a eleifend. Praesent tincidunt lacus ornare, efficitur sem sed, fringilla odio. Ut sed euismod nunc. Mauris dictum imperdiet nunc, nec sagittis felis rutrum sit amet. Nunc rhoncus quam volutpat neque gravida, consequat pulvinar felis blandit. In nulla turpis, laoreet non auctor eget, congue non mi. Morbi id dapibus massa, eu venenatis est. Quisque porta sem sed turpis euismod, eu scelerisque diam ultrices. Aenean et arcu ut erat mollis blandit id non magna. Quisque id congue risus, vel cursus orci.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim feugiat eros a eleifend. Praesent tincidunt lacus ornare, efficitur sem sed, fringilla odio. Ut sed euismod nunc. Mauris dictum imperdiet nunc, nec sagittis felis rutrum sit amet. Nunc rhoncus quam volutpat neque gravida, consequat pulvinar felis blandit. In nulla turpis, laoreet non auctor eget, congue non mi. Morbi id dapibus massa, eu venenatis est. Quisque porta sem sed turpis euismod, eu scelerisque diam ultrices. Aenean et arcu ut erat mollis blandit id non magna. Quisque id congue risus, vel cursus orci."
            route="solutions"
            class="ma-3"/>
        </v-col>
        <v-col
          cols="12"
          md="4">
          <bullet-card
            imagePath="cards/services.jpg"
            title="Usługi"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim feugiat eros a eleifend. Praesent tincidunt lacus ornare, efficitur sem sed, fringilla odio. Ut sed euismod nunc. Mauris dictum imperdiet nunc, nec sagittis felis rutrum sit amet. Nunc rhoncus quam volutpat neque gravida, consequat pulvinar felis blandit. In nulla turpis, laoreet non auctor eget, congue non mi. Morbi id dapibus massa, eu venenatis est. Quisque porta sem sed turpis euismod, eu scelerisque diam ultrices. Aenean et arcu ut erat mollis blandit id non magna. Quisque id congue risus, vel cursus orci."
            route="services"
            class="ma-3"/>
        </v-col>
        <v-col
          cols="12"
          md="4">
          <bullet-card
            imagePath="cards/service.jpg"
            title="Serwis"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim feugiat eros a eleifend. Praesent tincidunt lacus ornare, efficitur sem sed, fringilla odio. Ut sed euismod nunc. Mauris dictum imperdiet nunc, nec sagittis felis rutrum sit amet. Nunc rhoncus quam volutpat neque gravida, consequat pulvinar felis blandit. In nulla turpis, laoreet non auctor eget, congue non mi. Morbi id dapibus massa, eu venenatis est. Quisque porta sem sed turpis euismod, eu scelerisque diam ultrices. Aenean et arcu ut erat mollis blandit id non magna. Quisque id congue risus, vel cursus orci."
            route="service"
            class="ma-3"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
  import BulletCard from '@/components/home/BulletCard.vue'

  import { useDisplay } from 'vuetify'

  const { mdAndDown } = useDisplay()
</script>
<style lang="scss" scoped>
  @import '@/assets/keyframes.css';
  .mc-main-container {
    width: 100%;
    overflow: hidden;
    margin-top: -100px;
    z-index: 1;
  }

  .mc-container {
    animation: slideUp 4s ease-out, fadeIn 3s ease-in;
  }

  @keyframes slideUp {
    from {
      margin-top: 500px;
    }
    to {
      margin-top: 0px;
    }
  }

  @media (max-width: 600px) {
    .mc-main-container {
      margin-top: -80px;
    }
  }
</style>
