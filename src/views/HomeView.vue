<template>

    <div class="img-container">
      <img id="imgSlider" class="img-animation" src="../assets/home/home_1.jpg" alt="">
    </div>

    <h3 class="container">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim feugiat eros a eleifend. Praesent tincidunt lacus ornare, efficitur sem sed, fringilla odio. Ut sed euismod nunc. Mauris dictum imperdiet nunc, nec sagittis felis rutrum sit amet. Nunc rhoncus quam volutpat neque gravida, consequat pulvinar felis blandit. In nulla turpis, laoreet non auctor eget, congue non mi. Morbi id dapibus massa, eu venenatis est. Quisque porta sem sed turpis euismod, eu scelerisque diam ultrices. Aenean et arcu ut erat mollis blandit id non magna. Quisque id congue risus, vel cursus orci.
    </h3>
    <h3>
      Donec condimentum sapien dui, a vulputate orci vestibulum a. Sed pharetra in tellus quis sollicitudin. Aliquam feugiat diam sit amet ligula maximus porta. Proin vel sagittis mauris. Ut finibus dolor non mattis elementum. Fusce eget consectetur enim. Duis elementum mauris quis rhoncus malesuada. Etiam dignissim libero et ligula posuere pharetra. Vivamus a metus vitae purus porttitor volutpat. Cras eu accumsan nisl, nec pharetra lacus. Nulla et quam sed magna volutpat gravida.
    </h3>
    <h3>
      Suspendisse molestie tincidunt ligula, id fringilla lorem accumsan ac. Sed ex risus, venenatis ac eleifend vel, fringilla a libero. Nullam ut nibh rhoncus, dignissim dui vel, elementum orci. Phasellus at nisi sed turpis elementum varius. Mauris ullamcorper diam in diam sagittis pharetra. Etiam vel vulputate nunc. Fusce dictum condimentum bibendum. Sed dapibus nisi elit, nec congue ex condimentum eget. Vestibulum vitae tincidunt risus. Aenean tristique, purus sit amet dignissim vestibulum, metus arcu aliquet arcu, quis semper magna turpis ut arcu.
    </h3>

</template>

<script setup>
  import { onMounted } from 'vue'

  onMounted(() => {
    slide();
  })

  const images = new Array(
    '../src/assets/home/home_1.jpg',
    '../src/assets/home/home_2.jpg',
    '../src/assets/home/home_3.jpg',
  )

  let i = 0

  function slide() {
    if (i > images.length - 1) {
      i = 0
    }

    const imgSlider = document.getElementById('imgSlider')
    imgSlider.src = images[i]
    i++

    setTimeout(() => {
      imgSlider.getAnimations().forEach((animation) => {
        animation.cancel();
        animation.play();
      })

      slide()
    }, 3000)
  }
</script>


<style>
  .img-container {
    height: 700px;
    background: #e0e0e0;
    overflow: hidden;
  }

  .img-animation {
    animation: zoomIn 5s linear;
    transform: scale(1.15);
  }

  @keyframes zoomIn {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.15);
    }
  }

  .container {
    animation: transitionIn 5s;
  }

  @keyframes transitionIn {
    from {
      opacity: 0;
      /* transform: rotateX(-90deg); */
    }

    to {
      opacity: 1;
      /* transform: rotateX(0); */
    }
  }



/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>


<!-- <script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template> -->
