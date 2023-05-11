<template>
  <div class="is-container">
    <img class="is-image top" :src="getImageUrl(0)" alt="">
    <img class="is-image bottom hidden" :src="getImageUrl(1)" alt="">
  </div>
</template>

<script setup>
  import { onMounted, onUnmounted } from 'vue'

  // const props = defineProps(['images'])
  const props = defineProps({
    images: Array
  })

  let imageIndex = 1
  let currentImageIndex = false
  let slideTimer = null

  onMounted(() => {
    animate(document.querySelector('.is-image'))
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
    const slides = document.querySelectorAll('.is-image')

    //switch current image
    currentImageIndex = !currentImageIndex;

    //set z-order
    slides[+!currentImageIndex].classList.remove('top')
    slides[+!currentImageIndex].classList.add('bottom')
    slides[+currentImageIndex].classList.add('top')
    slides[+currentImageIndex].classList.remove('bottom')

    //start animations
    animate(slides[+currentImageIndex])

    //load next image
    setTimeout(() => {
      slides[+!currentImageIndex].src = `../src/assets/${props.images[imageIndex]}`
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
    //unit test fails with INVALID_URL
    try {
      return new URL(`/src/assets/${props.images[index]}`, import.meta.url)
    }
    catch {
      return ''
    }
  }
</script>

<style scoped>
  .is-container {
    height: 700px;
    background: #e0e0e0;
    overflow: hidden;
  }

  .is-image {
    position: absolute;
    width: 100%;
    height: 700px;
    object-fit: cover;
    object-position: center center;
    filter: brightness(50%);
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

  @media (max-width: 600px) {
    .is-container, .is-image {
      height: 400px;
    }
  }
</style>
