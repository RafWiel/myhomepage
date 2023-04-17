<template>
  <div class="mpc-container">
    <div class="mpc-intersection" />
    <div class="mpc-left-section">
      <div class="mpc-title">Stawiamy na jakość,<br> profesjonalizm i troskę o klienta</div>
      <div class="mpc-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim feugiat eros a eleifend. Praesent tincidunt lacus ornare, efficitur sem sed, fringilla odio. <b>Ut sed euismod nunc</b>. Mauris dictum imperdiet nunc, nec sagittis felis rutrum sit amet. </div>
      <ul class="mpc-list">
        <li><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></li>
        <li><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></li>
        <li><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></li>
      </ul>
    </div>
    <img class="mpc-image" src="../../assets/home/home_main_1.jpg" alt=""/>
  </div>

</template>
<script setup>
  import { onMounted } from 'vue'

  onMounted(() => {
    //

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const title = document.querySelector('.mpc-title')
        const text = document.querySelector('.mpc-text')
        const list = document.querySelector('.mpc-list')
        const image = document.querySelector('.mpc-image')

        if (entry.isIntersecting) {
          title.classList.add('mpc-title-animation')
          text.classList.add('mpc-text-animation')
          list.classList.add('mpc-list-animation')
          image.classList.add('mpc-image-animation')
        } else {
          title.classList.remove('mpc-title-animation')
          text.classList.remove('mpc-text-animation')
          list.classList.remove('mpc-list-animation')
          image.classList.remove('mpc-image-animation')
        }
      })
    })

    observer.observe(document.querySelector('.mpc-intersection'))
  })
</script>
<style lang="scss" scoped>
  @import '../../assets/keyframes.css';

  .mpc-container {
    width: 80%;
    display: flex;
    margin: auto;
  }

  .mpc-left-section {
    width: 60%;
    margin-right: 5%;
    overflow: hidden;
  }

  .mpc-title {
    font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 36px;
    font-weight: 700;
    color: #203040;
    text-align: center;
    margin-top: 7%;
    width: 100%;
  }

  .mpc-text {
    position: absolute;
    font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 18px;
    color: #405050;
    margin: 5% 10% 0 10%;
    width: 80%;
  }

  .mpc-list {
    position: absolute;
    font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 14px;
    list-style-position: inside;
    color: #405050;
    margin: 25% 10% 0 10%;
    width: 80%;
    list-style-image: url("../../assets/circle.svg");
  }

  .mpc-list li span {
    position: relative;
    left: 10px;
  }

  .mpc-image {
    width: 40%;
    height: 500px;
    object-fit: cover;
    object-position: center center;
    opacity: 0;
  }

  @media (prefers-reduced-motion: no-preference) {
    .mpc-title-animation {
      animation: slideRight 3s ease-out, fadeIn 3s ease-in;
    }

    .mpc-text-animation {
      animation: slideUp 3s ease-out, fadeIn 3s ease-in;
    }

    .mpc-list-animation {
      animation: listSlideUp 4s ease-out, fadeIn 3s ease-in;
    }

    .mpc-image-animation {
      animation: fadeIn 1s ease-in;
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
      margin-top: 25%;
    }
  }

  @keyframes wipe-enter {
	0% {
		transform: scale(0, .025);
	}
	50% {
		transform: scale(1, .025);
	}
}

</style>
