<template>
    <div class="home-image-container">
      <image-slider id="home-image" :images="images" message="unit" />
      <div class="image-text-1">Nowoczesne systemy<br>i kompleksowe usługi</div>
      <div class="image-text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim feugiat eros a eleifend. Praesent tincidunt lacus ornare, efficitur sem sed, fringilla odio. Ut sed euismod nunc. </div>
      <div class="image-button">
        <v-btn
          class="text-white"
          size="large"
          router
          to="solutions"
          variant="flat" >
          Rozwiązania
        </v-btn>
      </div>
    </div>
    <div class="cards-main-container">
      <v-container class="cards-container">
        <v-row no-gutters>
          <v-col
            cols="12"
            sm="4">
            <card
              imagePath="cards/projects.jpg"
              title="Projekty"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim feugiat eros a eleifend. Praesent tincidunt lacus ornare, efficitur sem sed, fringilla odio. Ut sed euismod nunc. Mauris dictum imperdiet nunc, nec sagittis felis rutrum sit amet. Nunc rhoncus quam volutpat neque gravida, consequat pulvinar felis blandit. In nulla turpis, laoreet non auctor eget, congue non mi. Morbi id dapibus massa, eu venenatis est. Quisque porta sem sed turpis euismod, eu scelerisque diam ultrices. Aenean et arcu ut erat mollis blandit id non magna. Quisque id congue risus, vel cursus orci.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim feugiat eros a eleifend. Praesent tincidunt lacus ornare, efficitur sem sed, fringilla odio. Ut sed euismod nunc. Mauris dictum imperdiet nunc, nec sagittis felis rutrum sit amet. Nunc rhoncus quam volutpat neque gravida, consequat pulvinar felis blandit. In nulla turpis, laoreet non auctor eget, congue non mi. Morbi id dapibus massa, eu venenatis est. Quisque porta sem sed turpis euismod, eu scelerisque diam ultrices. Aenean et arcu ut erat mollis blandit id non magna. Quisque id congue risus, vel cursus orci."
              route="solutions"
              class="ma-3"/>
          </v-col>
          <v-col
            cols="12"
            sm="4">
            <card
              imagePath="cards/services.jpg"
              title="Usługi"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim feugiat eros a eleifend. Praesent tincidunt lacus ornare, efficitur sem sed, fringilla odio. Ut sed euismod nunc. Mauris dictum imperdiet nunc, nec sagittis felis rutrum sit amet. Nunc rhoncus quam volutpat neque gravida, consequat pulvinar felis blandit. In nulla turpis, laoreet non auctor eget, congue non mi. Morbi id dapibus massa, eu venenatis est. Quisque porta sem sed turpis euismod, eu scelerisque diam ultrices. Aenean et arcu ut erat mollis blandit id non magna. Quisque id congue risus, vel cursus orci."
              route="services"
              class="ma-3"/>
          </v-col>
          <v-col
            cols="12"
            sm="4">
            <card
              imagePath="cards/service.jpg"
              title="Serwis"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim feugiat eros a eleifend. Praesent tincidunt lacus ornare, efficitur sem sed, fringilla odio. Ut sed euismod nunc. Mauris dictum imperdiet nunc, nec sagittis felis rutrum sit amet. Nunc rhoncus quam volutpat neque gravida, consequat pulvinar felis blandit. In nulla turpis, laoreet non auctor eget, congue non mi. Morbi id dapibus massa, eu venenatis est. Quisque porta sem sed turpis euismod, eu scelerisque diam ultrices. Aenean et arcu ut erat mollis blandit id non magna. Quisque id congue risus, vel cursus orci."
              route="service"
              class="ma-3"/>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="panel-card bg-yellow">
      <img src="../assets/home/home_panel_1.jpg" alt=""/>
      <div>TYTUL po prawej</div>
      <div>Tekst po prawej</div>
    </div>

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
  import ImageSlider from '../components/ImageSlider.vue'
  import Card from '../components/Card.vue'

  const images = new Array(
    'home/home_1.jpg',
    'home/home_2.jpg',
    'home/home_3.jpg',
    'home/home_4.jpg',
    'home/home_5.jpg',
    'home/home_6.jpg',
  )

</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:330,400,600,800');
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600&display=swap');

  $font-family: 'Montserrat';
  //$font-family: 'Nunito';
  .container {
    animation: fadeIn 5s;
  }

  .home-image-container {
    position: relative;
    width: 100%;
    height: 700px;
    z-index: 0;
  }

  #home-image {
    position: absolute;
    width: 100%;
    height: 700px;
    z-index: 0;
  }

  .image-text-1 {
    position: absolute;
    z-index: 1;
    font-family: $font-family, sans-serif;
    font-weight: 600;
    font-size: 50px;
    line-height: 1.2em;
    color: #f0f0f0;
    margin: 150px 0 0 250px;
    animation: slideRight 3s ease-out, fadeIn 3s ease-in;
    width: 600px;
  }

  .image-text-2 {
    position: absolute;
    z-index: 1;
    font-family: $font-family, sans-serif;
    font-size: 20px;
    line-height: 1.2em;
    color: #d0d0d0;
    margin: 300px 0 0 250px;
    animation: slideLeft 3s ease-out, fadeIn 3s ease-in;
    width: 600px;
  }

  .image-button {
    position: absolute;
    z-index: 1;
    margin: 450px 0 0 250px;
    animation: fadeIn 2s ease-in-out;
    animation-delay: 3s;
    animation-fill-mode: forwards;
    opacity: 0;
  }

  @keyframes slideRight {
    from {
      margin-left: -600px;
    }
    to {
      margin-left: 250px;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideLeft {
    from {
      margin-left: 100%;
    }
    to {
      margin-left: 250px;
    }
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

  .panel-card {
    width: 100%;
  }

</style>


