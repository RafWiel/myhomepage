<template>
  <v-sheet class="card-container">
    <div class="image-container">
      <img class="image" :src="getImageUrl()" alt="">
    </div>
    <div class="title pt-4">{{ title }}</div>
    <div class="text px-8 py-4">{{ limitedText }}</div>
    <v-btn>Czytaj dalej</v-btn>
  </v-sheet>
</template>

<script setup>
  const props = defineProps ({
    imagePath: String,
    title: String,
    text: String,
  })

  const limitedText = props.text.length > 500 ? `${props.text.substring(0, 500)}...` : props.text

  function getImageUrl() {
    //unit test fails with INVALID_URL
    try {
      return new URL(`/src/assets/${props.imagePath}`, import.meta.url)
    }
    catch {
      return ''
    }
  }
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:330,400,600,800');
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600&display=swap');

  $font-family: 'Montserrat';
  //$font-family: 'Nunito';
  .card-container {

  }




  .title {
    font-family: $font-family, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 28px;
    font-weight: 600;
    line-height: 1.2em;
    color: #203040;
    text-align: center;
  }

  .text {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 18px;
    line-height: 1.2em;
    color: #808080;
  }

  .image-container {
    height: 100px;
    overflow: hidden;
  }

  .image {
    width: 100%;
    height: 100px;
    object-fit: cover;
    object-position: center center;
    // animation: fadeIn 2s ease-in-out;
    // animation-delay: 1s;
    // animation-fill-mode: forwards;
    // opacity: 0;
    transition: transform .5s, filter .5s ease-in-out;
    filter: saturate(30%) opacity(.8);
  }

  .card-container:hover img {
    filter: saturate(100%) opacity(1);
    transform: scale(1.1);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes saturate {
    from {
      filter: saturate(30%) opacity(.8);
    }
    to {
      filter: saturate(100%) opacity(1);
    }
  }
</style>
