<template>
  <div class="card-container bg-yellow">
      <div class="left-section bg-blue-lighten-4">
        <div class="title bg-green-lighten-2">Stawiamy na jakość,<br> profesjonalizm i troskę o klienta</div>
        <div class="main-text bg-red">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim feugiat eros a eleifend. Praesent tincidunt lacus ornare, efficitur sem sed, fringilla odio. <b>Ut sed euismod nunc</b>. Mauris dictum imperdiet nunc, nec sagittis felis rutrum sit amet. </div>
        <ul class="list">
          <li><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></li>
          <li><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></li>
          <li><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></li>
        </ul>
      </div>
      <img class="image" src="../../assets/home/home_main_1.jpg" alt=""/>
    </div>
</template>
<script>

</script>
<style lang="scss" scoped>

  .card-container {
    width: 80%;
    display: flex;
    margin: auto;
  }

  .left-section {
    width: 60%;
    margin-right: 5%;
  }

  .title {
    font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 36px;
    font-weight: 700;
    color: #203040;
    text-align: center;
    margin-top: 7%;
    animation: slideRight 3s ease-out, fadeIn 3s ease-in;
  }

  .main-text {
    font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 18px;
    color: #405050;
    margin: 5% auto 0 auto;
    width: 80%;
  }

  .list {
    font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 14px;
    list-style-position: inside;
    color: #405050;
    margin: 5% auto 0 auto;
    width: 80%;
    list-style-image: url("../../assets/circle.svg");
  }

  .list li span {
    position: relative;
    left: 10px;
  }

  .image {
    width: 40%;
    height: 500px;
    object-fit: cover;
    object-position: center center;
  }

  @keyframes slideLeft {
    from {
      margin-left: 100%;
    }
    to {
      margin-left: 250px;
    }
  }

  @keyframes slideRight {
    from {
      margin-left: -600px;
    }
    to {
      margin-left: 250px;
    }
  }

</style>
