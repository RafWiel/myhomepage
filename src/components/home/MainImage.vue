<template>
  <div class="mi-container">
      <image-slider class="mi-image" :images="images" message="unit" />
      <div class="mi-text-1">{{ displaySize }} Nowoczesne systemy<br>i kompleksowe usługi</div>
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
  import { computed } from 'vue'
  import { useDisplay } from 'vuetify'

  const { name } = useDisplay();

  const images = computed(() => {
    if (name.value == 'xs'
    || name.value == 'sm'
    || name.value == 'md') {
      return new Array(
        'home/home_xs_1.jpg',
        'home/home_xs_2.jpg',
        'home/home_xs_3.jpg',
        'home/home_xs_4.jpg',
        'home/home_xs_5.jpg',
        'home/home_xs_6.jpg',
      )
    }

    return new Array(
      'home/home_1.jpg',
      'home/home_2.jpg',
      'home/home_3.jpg',
      'home/home_4.jpg',
      'home/home_5.jpg',
      'home/home_6.jpg',
    )
  })

  const displaySize = computed(() => name.value)
</script>
<style lang="scss" scoped>
  @import '@/assets/fonts.css';
  @import '@/assets/keyframes.css';

  :root {
    --slide-stop: 15%;
  }

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
    font-size: 3.5em;
    font-weight: 600;
    line-height: 1.2em;
    color: #f0f0f0;
    margin: 150px 0 0 15%;
    width: 70%;
    height: 2.5em;
    overflow: hidden;
    animation: slideRight 3s ease-out, fadeIn 3s ease-in;
  }

  .mi-text-2 {
    position: absolute;
    z-index: 1;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.4em;
    line-height: 1.2em;
    color: #d0d0d0;
    margin: 300px 0 0 15%;
    width: 70%;
    height: 5em;
    overflow: hidden;
    animation: slideLeft 3s ease-out, fadeIn 3s ease-in;
  }

  .mi-button {
    position: absolute;
    z-index: 1;
    margin: 450px 0 0 15%;
    animation: fadeIn 2s ease-in-out;
    animation-delay: 3s;
    animation-fill-mode: forwards;
    opacity: 0;
  }

  @media (min-width: 1800px) {
    .mi-text-2 {
      width: 30%;
    }
  }

  @media (min-width: 1024px) and (max-width: 1800px) {
    .mi-text-2 {
      width: 50%;
    }
  }

  @media (max-width: 960px) {
    .mi-text-1 {
      font-size: 2.5em;
    }
    .mi-text-2 {
      width: 75%;
    }
  }

  @media (max-width: 600px) {
    :root {
      --slide-stop: 5%;
    }

    .mi-container, .mi-image {
      height: 400px;
    }

    .mi-text-1 {
      font-size: 1.8em;
      margin: 40px 0 0 5%;
      width: 90%;
    }

    .mi-text-2 {
      font-size: 18px;
      line-height: 1.2em;
      margin: 130px 0 0 5%;
      width: 90%;
      height: 7.2em;
    }

    .mi-button {
      margin: 280px 0 0 5%;
    }
  }

  @keyframes slideLeft {
    from {
      margin-left: 100%;
    }
    to {
      margin-left: --slide-stop;
    }
  }

  @keyframes slideRight {
    from {
      margin-left: -600px;
    }
    to {
      margin-left: --slide-stop;
    }
  }

</style>
