<template>
  <div class="image-container">
      <img class="image top" :src="getImageUrl(0)" alt="">
      <img class="image bottom hidden" :src="getImageUrl(1)" alt="">
    </div>
</template>

<script setup>
  import { onMounted, onUnmounted } from 'vue'
  //import {defineProps} from "vue";

  // const props = defineProps(['images'])
  const props = defineProps({
     images: Array,
     text: String
  })

  let imageIndex = 1
  let topImageIndex = false
  let slideTimer = null

  onMounted(() => {
    animate(document.querySelector('.image'))
    setTimeout(() => { slide() }, 5000)

    //remove hidden from bottom image
    setTimeout(() => {
      document.querySelector('.hidden').classList.remove('hidden')
    }, 1000)
  })

  onUnmounted(() => {
    clearTimeout(slideTimer)
  })

  function slide() {
    const slides = document.querySelectorAll('.image')

    topImageIndex = !topImageIndex;

    //set z-order
    slides[+!topImageIndex].classList.remove('top')
    slides[+!topImageIndex].classList.add('bottom')
    slides[+topImageIndex].classList.add('top')
    slides[+topImageIndex].classList.remove('bottom')

    //start animations
    animate(slides[+topImageIndex])

    //load next image
    setTimeout(() => {
      slides[+!topImageIndex].src = `../src/assets/${props.images[imageIndex]}`
    }, 1000)

    imageIndex++
    if (imageIndex > props.images.length - 1) imageIndex = 0

    slideTimer = setTimeout(() => { slide() }, 5000)
  }

  function animate(image) {
    if (!image) return;

    const fadeIn = [
      { opacity: 0 },
      { opacity: 1 },
    ]

    const zoomIn = [
      { transform: "scale(1)" },
      { transform: "scale(1.15)" },
    ]

    image.animate(fadeIn, {
      duration: 500,
      iterations: 1,
    })

    image.animate(zoomIn, {
      duration: 15000,
      iterations: 1,
    })
  }

  function getImageUrl(index) {
    if (!props.images) return
    return new URL(`../assets/${props.images[index]}`, import.meta.url)
  }
</script>

<style scoped>
  .image-container {
    height: 700px;
    background: #e0e0e0;
    overflow: hidden;
  }

  .image {
    position: absolute;
    width: 100%;
    height: 700px;
    object-fit: cover;
    object-position: center center;
  }

  .bottom {
    z-index: 0;
  }

  .top {
    z-index: 1;
  }

  .hidden {
    opacity: 0;
  }
</style>
