<template>
    <main-image />
    <div class="cards-main-container">
      <v-container class="cards-container">
        <v-row no-gutters>
          <v-col
            cols="12"
            sm="4">
            <bullet-card
              imagePath="cards/projects.jpg"
              title="Projekty"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim feugiat eros a eleifend. Praesent tincidunt lacus ornare, efficitur sem sed, fringilla odio. Ut sed euismod nunc. Mauris dictum imperdiet nunc, nec sagittis felis rutrum sit amet. Nunc rhoncus quam volutpat neque gravida, consequat pulvinar felis blandit. In nulla turpis, laoreet non auctor eget, congue non mi. Morbi id dapibus massa, eu venenatis est. Quisque porta sem sed turpis euismod, eu scelerisque diam ultrices. Aenean et arcu ut erat mollis blandit id non magna. Quisque id congue risus, vel cursus orci.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim feugiat eros a eleifend. Praesent tincidunt lacus ornare, efficitur sem sed, fringilla odio. Ut sed euismod nunc. Mauris dictum imperdiet nunc, nec sagittis felis rutrum sit amet. Nunc rhoncus quam volutpat neque gravida, consequat pulvinar felis blandit. In nulla turpis, laoreet non auctor eget, congue non mi. Morbi id dapibus massa, eu venenatis est. Quisque porta sem sed turpis euismod, eu scelerisque diam ultrices. Aenean et arcu ut erat mollis blandit id non magna. Quisque id congue risus, vel cursus orci."
              route="solutions"
              class="ma-3"/>
          </v-col>
          <v-col
            cols="12"
            sm="4">
            <bullet-card
              imagePath="cards/services.jpg"
              title="Usługi"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim feugiat eros a eleifend. Praesent tincidunt lacus ornare, efficitur sem sed, fringilla odio. Ut sed euismod nunc. Mauris dictum imperdiet nunc, nec sagittis felis rutrum sit amet. Nunc rhoncus quam volutpat neque gravida, consequat pulvinar felis blandit. In nulla turpis, laoreet non auctor eget, congue non mi. Morbi id dapibus massa, eu venenatis est. Quisque porta sem sed turpis euismod, eu scelerisque diam ultrices. Aenean et arcu ut erat mollis blandit id non magna. Quisque id congue risus, vel cursus orci."
              route="services"
              class="ma-3"/>
          </v-col>
          <v-col
            cols="12"
            sm="4">
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

    <main-panel class="mt-16"/>
    <social-proof class="mt-16"/>

    <h3 class="container">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim feugiat eros a eleifend. Praesent tincidunt lacus ornare, efficitur sem sed, fringilla odio. Ut sed euismod nunc. Mauris dictum imperdiet nunc, nec sagittis felis rutrum sit amet. Nunc rhoncus quam volutpat neque gravida, consequat pulvinar felis blandit. In nulla turpis, laoreet non auctor eget, congue non mi. Morbi id dapibus massa, eu venenatis est. Quisque porta sem sed turpis euismod, eu scelerisque diam ultrices. Aenean et arcu ut erat mollis blandit id non magna. Quisque id congue risus, vel cursus orci.
    </h3>
    <h3>
      Donec condimentum sapien dui, a vulputate orci vestibulum a. Sed pharetra in tellus quis sollicitudin. Aliquam feugiat diam sit amet ligula maximus porta. Proin vel sagittis mauris. Ut finibus dolor non mattis elementum. Fusce eget consectetur enim. Duis elementum mauris quis rhoncus malesuada. Etiam dignissim libero et ligula posuere pharetra. Vivamus a metus vitae purus porttitor volutpat. Cras eu accumsan nisl, nec pharetra lacus. Nulla et quam sed magna volutpat gravida.
    </h3>
    <h3>
      Suspendisse molestie tincidunt ligula, id fringilla lorem accumsan ac. Sed ex risus, venenatis ac eleifend vel, fringilla a libero. Nullam ut nibh rhoncus, dignissim dui vel, elementum orci. Phasellus at nisi sed turpis elementum varius. Mauris ullamcorper diam in diam sagittis pharetra. Etiam vel vulputate nunc. Fusce dictum condimentum bibendum. Sed dapibus nisi elit, nec congue ex condimentum eget. Vestibulum vitae tincidunt risus. Aenean tristique, purus sit amet dignissim vestibulum, metus arcu aliquet arcu, quis semper magna turpis ut arcu.
    </h3>

</template>

<script setup>
  import MainImage from '../components/home/MainImage.vue'
  import BulletCard from '../components/BulletCard.vue'
  import MainPanel from '../components/home/MainPanel.vue'
  import SocialProof from '../components/home/SocialProof.vue'


</script>

<style lang="scss" scoped>
  @import '../assets/fonts.css';
  @import '../assets/keyframes.css';

  .container {
    animation: fadeIn 5s;
  }


  .cards-main-container {
    width: 100%;
    height: 650px;
    overflow: hidden;
    margin-top: -100px;
    z-index: 1;
  }

  .cards-container {
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

</style>


