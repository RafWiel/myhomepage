<template>
  <div>
    <div class="mp-container mp-intersection">
      <div class="mp-left-section">
        <div class="mp-title">Stawiamy na jakość,<br> profesjonalizm i troskę o klienta</div>
        <div class="mp-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim feugiat eros a eleifend. Praesent tincidunt lacus ornare, efficitur sem sed, fringilla odio. <b>Ut sed euismod nunc</b>. Mauris dictum imperdiet nunc, nec sagittis felis rutrum sit amet. </div>
        <ul class="mp-list">
          <li><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></li>
          <li><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></li>
          <li><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></li>
        </ul>
      </div>
      <div class="mp-right-section">
        <img class="mp-image" src="@/assets/home/main_1.jpg" alt=""/>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { onMounted } from 'vue'

  onMounted(() => {
    //

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const title = document.querySelector('.mp-title')
        const text = document.querySelector('.mp-text')
        const list = document.querySelector('.mp-list')
        const image = document.querySelector('.mp-image')

        if (entry.isIntersecting) {
          title.classList.add('mp-title-animation')
          text.classList.add('mp-text-animation')
          list.classList.add('mp-list-animation')
          image.classList.add('mp-image-animation')
        } else {
          title.classList.remove('mp-title-animation')
          text.classList.remove('mp-text-animation')
          list.classList.remove('mp-list-animation')
          image.classList.remove('mp-image-animation')
        }
      })
    })

    observer.observe(document.querySelector('.mp-intersection'))
  })
</script>
<style lang="scss" scoped>
  @import '@/assets/keyframes.css';

  :root {
    --list-slide-up: 25%;
  }

  .mp-container {
    width: 80%;
    display: flex;
    flex-wrap: no-wrap;
    margin: auto;
  }

  .mp-left-section {
    width: 60%;
    height: 500px;
    overflow: hidden;
  }

  .mp-title {
    font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 36px;
    font-weight: 700;
    color: #203040;
    text-align: center;
    margin-top: 7%;
    padding-left: 5%;
    padding-right: 5%;
    width: 100%;
  }

  .mp-text {
    position: absolute;
    font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 18px;
    color: #405050;
    margin: 5% 10% 0 10%;
    width: 80%;
  }

  .mp-list {
    position: absolute;
    font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 14px;
    list-style-position: inside;
    color: #405050;
    margin: 20vh 10% 0 10%;
    width: 80%;
    list-style-image: url("@/assets/circle.svg");
    opacity: 0;
  }

  .mp-list li span {
    position: relative;
    left: 10px;
  }

  .mp-right-section {
    width: 40%;
    height: 500px;
    overflow: hidden;
  }

  .mp-image {
    height: 600px;
    object-fit: cover;
    object-position: center center;
    opacity: 0;
  }

  @media (max-width: 1280px) {
    .mp-container {
      width: 100%;
    }

    .mp-title {
      font-size: 2.1em;
    }

    .mp-list {
      margin: 25vh 10% 0 10%;
    }
  }

  @media (max-width: 960px) {
    :root {
      --list-slide-up: 55%;
    }

    .mp-container {
      width: 100%;
      flex-wrap: wrap-reverse;
    }

    .mp-left-section {
      width: 100%;
      margin-right: 0;
    }

    .mp-right-section {
      width: 100%;
      height: 500px;
    }

    .mp-image {
      width: 100%;
    }

    .mp-title {
      font-size: 2em;
    }

    .mp-text {
      font-size: 1.2em;
      margin: 5% 7% 0 7%;
    }

    .mp-list {
      font-size: 1em;
      margin: 25vh 7% 0 7%;
      width: 100%;
    }
  }

  @media (max-width: 600px) {
    .mp-right-section {
      width: 100%;
      height: 400px;
    }

    .mp-text {
      font-size: 1.05em;
    }

    .mp-list {
      font-size: 0.8em;
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    .mp-title-animation {
      animation: slideRight 3s ease-out, fadeIn 3s ease-in;
    }

    .mp-text-animation {
      animation: slideUp 3s ease-out, fadeIn 3s ease-in;
    }

    .mp-list-animation {
      animation: listSlideUp 4s ease-out, fadeIn 3s ease-in;
      animation-delay: .5s;
      animation-fill-mode: forwards;
    }

    .mp-image-animation {
      animation: fadeIn 1s ease-in, scaleDown 3s ease-out;
      animation-fill-mode: forwards;
    }
  }

  @keyframes slideRight {
    from {
      margin-left: -150%;
    }
    to {
      margin-left: 0px;
    }
  }

  @keyframes slideUp {
    from {
      margin-top: 100%;
    }
    to {
      margin-top: 5%;
    }
  }

  @keyframes listSlideUp {
    from {
      margin-top: 100%;
    }
    to {
      margin-top: --list-slide-up;
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
