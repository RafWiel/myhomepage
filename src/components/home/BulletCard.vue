<template>
  <v-sheet class="bc-container">
    <div class="bc-image-container">
      <img class="bc-image" :src="getImageUrl()" alt="">
    </div>
    <div class="bc-title pt-4">{{ title }}</div>
    <div class="bc-text px-8 py-4">{{ limitedText }}</div>
    <div class="bc-button-container">
      <v-btn
        @click="navigate(props.route)"
        variant="plain"
        style="width:100%">Czytaj dalej ></v-btn>
    </div>
  </v-sheet>
</template>

<script setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const props = defineProps ({
    imagePath: String,
    title: String,
    text: String,
    route: String,
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

  function navigate(route) {
    router.push({ name: route })
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/fonts.css';
  @import '@/assets/keyframes.css';

  .bc-container {
    height: 600px;
    transition: border .5s, background-color .25s;
    border: 1px solid white;
    background-color: white;
  }

  .bc-container:hover {
    border: 1px solid #4388c4;
    background-color: #fafaff;
  }

  .bc-container:hover img {
    filter: saturate(100%) opacity(1);
    transform: scale(1.1);
  }

  .bc-title {
    font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 28px;
    font-weight: 600;
    line-height: 1.2em;
    color: #203040;
    text-align: center;
  }

  .bc-text {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 18px;
    line-height: 1.2em;
    color: #808080;
  }

  .bc-image-container {
    height: 100px;
    overflow: hidden;
    margin: -1px -1px 0 -1px;
  }

  .bc-image {
    width: 100%;
    height: 100px;
    object-fit: cover;
    object-position: center center;
    transition: transform .5s, filter .5s ease-in-out;
    filter: saturate(30%) opacity(.8);
  }

  .bc-button-container {
    width: 50%;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  @keyframes saturate {
    from {
      filter: saturate(30%) opacity(.8);
    }
    to {
      filter: saturate(100%) opacity(1);
    }
  }

  @media (max-width: 600px) {
    .bc-container {
      height: 500px;
    }
    .bc-title {
      font-size: 20px;
    }

    .bc-text {
      font-size: 17px;
    }
  }


</style>
