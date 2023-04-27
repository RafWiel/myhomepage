<template>
  <div class="cs-container">
    <div class="cs-card top hidden-top">
      <client-quote-card />
    </div>
    <div class="cs-card bottom hidden">
      <client-quote-card />
    </div>
  </div>
</template>

<script setup>
  import { onUnmounted } from 'vue'
  import ClientQuoteCard from '@/components/home/ClientQuoteCard.vue'

  let currentCardIndex = false
  let slideTimer = null
  let isAnimationStarted = false

  defineExpose({
    startAnimation,
  })

  onUnmounted(() => {
    clearTimeout(slideTimer)
  })

  function startAnimation() {
    //run once
    if (isAnimationStarted) return
    isAnimationStarted = true

    //show top card
    document.querySelector('.hidden-top').classList.remove('hidden-top')

    //run animation
    animateIn(document.querySelector('.cs-card'))
    setTimeout(() => { slide() }, 7000)

    //remove hidden from bottom card
    setTimeout(() => {
      document.querySelector('.hidden').classList.remove('hidden')
    }, 7000)
  }

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
    animateOut(cards[+!currentCardIndex])
    animateIn(cards[+currentCardIndex])

    slideTimer = setTimeout(() => { slide() }, 7000)
  }

  function animateIn(card) {
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
      fill: 'forwards'
    })

    card.animate(slideLeft, {
      duration: 3000,
      iterations: 1,
      easing: 'ease-out',
    })
  }

  function animateOut(card) {
    if (!card) return;

    const fadeOut = [
      { opacity: 1 },
      { opacity: 0 },
    ]

    card.animate(fadeOut, {
      duration: 2000,
      iterations: 1,
      fill: 'forwards'
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
    width: 70%;
    height: 80%;
  }

  .bottom {
    z-index: 0;
  }

  .top {
    z-index: 1;
  }

  .hidden, .hidden-top {
    opacity: 0;
  }
</style>
