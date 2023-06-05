<template>
  <div class="spp-container">
    <div class="spp-intersection" />
    <div class="spp-left-section">
      <img class="spp-image" src="@/assets/home/social_proof.jpg" alt=""/>
    </div>
    <div class="spp-right-section">
      <div class="spp-title-container">
        <div class="spp-title">Co mówią o nas klienci?</div>
      </div>
      <card-slider ref="cardSlider" class="spp-card-slider"/>
    </div>
  </div>

</template>
<script setup>
  import { onMounted, ref } from 'vue'
  import CardSlider from '@/components/home/CardSlider.vue'

  const cardSlider = ref(null)
  const callCardSliderAnimation = () => {
    console.log(cardSlider.value)
    cardSlider.value.startAnimation()
  }

  onMounted(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const title = document.querySelector('.spp-title')
        const image = document.querySelector('.spp-image')

        if (entry.isIntersecting) {
          title.classList.add('spp-title-animation')
          image.classList.add('spp-image-animation')
          callCardSliderAnimation()
        } else {
          title.classList.remove('spp-title-animation')
          image.classList.remove('spp-image-animation')
        }
      })
    })

    observer.observe(document.querySelector('.spp-intersection'))
  })
</script>
<style lang="scss" scoped>
  @import '@/assets/keyframes.css';

  .spp-container {
    width: 80%;
    display: flex;
    flex-wrap: no-wrap;
    margin: auto;
  }

  .spp-left-section {
    width: 30%;
    height: 500px;
    margin-right: 10%;
    overflow: hidden;
  }

  .spp-image {
    height: 550px;
    object-fit: cover;
    object-position: center center;
    opacity: 0;
  }

  .spp-right-section {
    width: 60%;
    height: 500px;
    overflow: hidden;
  }

  .spp-title-container {
    overflow: hidden;
    height: 30%;
  }

  .spp-title {
    font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 36px;
    font-weight: 700;
    color: #203040;
    text-align: center;
    margin-top: 5vh;
    width: 100%;
  }

  .spp-card-slider {
    overflow: hidden;
    height: 70%;
  }

  @media (max-width: 1280px) {
    .spp-container {
      width: 100%;
    }

    .spp-left-section {
      width: 50%;
      margin-right: 0;
    }

    .spp-right-section {
      width: 50%;
    }
  }

  @media (max-width: 960px) {
    .spp-container {
      width: 100%;
      flex-wrap: wrap;
    }

    .spp-left-section {
      width: 100%;
      margin-right: 0;
    }

    .spp-right-section {
      width: 100%;
    }
    .spp-title {
      font-size: 2em;
    }

    .spp-image {
      width: 100%;
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    .spp-title-animation {
      animation: slideDown 3s ease-out, fadeIn 3s ease-in;
    }

    .spp-image-animation {
      animation: fadeIn 1s ease-in, scaleDown 3s ease-out;
      animation-fill-mode: forwards;
    }
  }

  @keyframes slideDown {
    from {
      margin-top: -10vh;
    }
    to {
      margin-top: 5vh;
    }
  }

  @keyframes scaleDown {
    from {
      transform: scale(1.2);
    }
    to {
      transform: scale(1.0);
    }
  }

</style>
