<template>
  <div class="cs-container bg-yellow-lighten-2">
    <div class="cs-card top bg-red">AAA</div>
    <div class="cs-card bottom hidden bg-blue">BBB</div>
  </div>
</template>

<script setup>
  import { onMounted, onUnmounted } from 'vue'

  let currentCardIndex = false
  let slideTimer = null

  onMounted(() => {
    animate(document.querySelector('.cs-card'))
    setTimeout(() => { slide() }, 5000)

    //remove hidden from bottom card
    setTimeout(() => {
      document.querySelector('.hidden').classList.remove('hidden')
      console.log('remove-hidden')
    }, 5000)
  })

  onUnmounted(() => {
    clearTimeout(slideTimer)
  })

  function slide() {
    const cards = document.querySelectorAll('.cs-card')

    //switch current card
    currentCardIndex = !currentCardIndex;

    //set z-order
    cards[+!currentCardIndex].classList.remove('top')
    cards[+!currentCardIndex].classList.add('bottom')
    cards[+currentCardIndex].classList.add('top')
    cards[+currentCardIndex].classList.remove('bottom')

    //start animations
    animate(cards[+currentCardIndex])

    slideTimer = setTimeout(() => { slide() }, 5000)
  }

  function animate(card) {
    if (!card) return;

    const fadeIn = [
      { opacity: 0 },
      { opacity: 1 },
    ]

    const slideLeft = [
      { transform: "translateX(100%)" },
      { transform: "translateX(0)" },
    ]

    card.animate(fadeIn, {
      duration: 1000,
      iterations: 1,

    })

    card.animate(slideLeft, {
      duration: 3000,
      iterations: 1,
      easing: 'ease-out'
    })
  }
</script>

<style lang="scss" scoped>
  .cs-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .cs-card {
    position: absolute;
    width: 50%;
    height: 80%;
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
