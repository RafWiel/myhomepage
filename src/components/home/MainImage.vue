<template>
  <div class="mi-container">
      <image-slider class="mi-image" :images="images" message="unit" />
      <div class="mi-text-1">Nowoczesne systemy<br>i kompleksowe usługi</div>
      <div class="mi-text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim feugiat eros a eleifend. Praesent tincidunt lacus ornare, efficitur sem sed, fringilla odio. Ut sed euismod nunc. </div>
      <div class="mi-button">
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
</template>
<script setup>
  import ImageSlider from '@/components/home/ImageSlider.vue'

  const images = new Array(
    'home/home_1.jpg',
    'home/home_2.jpg',
    'home/home_3.jpg',
    'home/home_4.jpg',
    'home/home_5.jpg',
    'home/home_6.jpg',
  )
</script>
<style scoped>
  @import '@/assets/fonts.css';
  @import '@/assets/keyframes.css';

  .mi-container {
    position: relative;
    width: 100%;
    height: 700px;
    z-index: 0;
  }

  .mi-image {
    position: absolute;
    width: 100%;
    height: 700px;
    z-index: 0;
  }

  .mi-text-1 {
    position: absolute;
    z-index: 1;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 50px;
    line-height: 1.2em;
    color: #f0f0f0;
    margin: 150px 0 0 250px;
    animation: slideRight 3s ease-out, fadeIn 3s ease-in;
    width: 600px;
  }

  .mi-text-2 {
    position: absolute;
    z-index: 1;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    line-height: 1.2em;
    color: #d0d0d0;
    margin: 300px 0 0 250px;
    animation: slideLeft 3s ease-out, fadeIn 3s ease-in;
    width: 600px;
  }

  .mi-button {
    position: absolute;
    z-index: 1;
    margin: 450px 0 0 250px;
    animation: fadeIn 2s ease-in-out;
    animation-delay: 3s;
    animation-fill-mode: forwards;
    opacity: 0;
  }

  @keyframes slideLeft {
    from {
      margin-left: 100%;
    }
    to {
      margin-left: 250px;
    }
  }

  @keyframes slideRight {
    from {
      margin-left: -600px;
    }
    to {
      margin-left: 250px;
    }
  }

</style>
