<template>
  <div class="hi-container">
    <img class="hi-image image-animation" :src="getImageUrl()" alt="">
    <div class="hi-title text-animation">{{ title }}</div>
  </div>

</template>

<script setup>
  const props = defineProps ({
    imagePath: String,
    title: String,
  })

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
  @import '@/assets/keyframes.css';

  .hi-container {
    display: flex;
    height: 200px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .hi-image {
    position: absolute;
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: center center;
    filter: blur(3px) saturate(50%) brightness(85%);
  }

  @media (prefers-reduced-motion: no-preference) {
    .image-animation {
      animation: fadeIn 1s ease-in, scaleDown 1s ease-out;
      animation-fill-mode: forwards;
      opacity: 0;
    }

    .text-animation {
      animation: fadeIn .5s ease-in, scaleUp .5s ease-out;
      animation-delay: 1s;
      animation-fill-mode: forwards;
      opacity: 0;
    }
  }

  @keyframes scaleDown {
    from {
      transform: scale(1.05);
    }
    to {
      transform: scale(1.0);
    }
  }

  @keyframes scaleUp {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1.0);
    }
  }

  .hi-title {
    font-family: 'Montserrat', Arial;
    font-size: 32px;
    font-weight: 600;
    color: white;
  }

</style>
