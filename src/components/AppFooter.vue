<template>
  <div class="ft-container ">
    <img
      @click="navigate('home')"
      style="cursor: pointer;"
      alt="demo logo"
      class="logo"
      src="@/assets/demo-logo.svg"
      width="130"
      height="30" />
    <div class="ft-mid-section">
      <div class="ft-header">KONTAKT</div>
      <ul class="mt-6">
        <li>
          <v-icon icon="mdi-map-marker" color="primary" class="mr-2"/>
          24-100 Puławy
        </li>
        <li class="ml-8">ul. Piękna 1</li>
        <li>
          <v-icon icon="mdi-phone" color="primary" class="mr-2"/>
          <a href="tel: 48%2081%20123%2012%2034">+48 81 123 12 34</a>
        </li>
        <li>
          <v-icon icon="mdi-fax" color="primary" class="mr-2"/>
          <a href="tel: 48%2081%20123%2012%2035">+48 81 123 12 35</a>
        </li>
        <li>
          <v-icon icon="mdi-email" color="primary" class="mr-2"/>
          <a href="mailto: info@demo.com.pl">info@demo.com.pl</a>
        </li>
      </ul>
    </div>
    <div class="ft-right-section">
      <v-icon icon="mdi-chevron-right" color="primary" />
      <a @click="navigate('privacyPolicy')" href="javascript: void(0)">Polityka prywatności</a>

    </div>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()

  function navigate(route) {
    router.push({ name: route })
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/fonts.css';
  @import '@/assets/keyframes.css';

  .ft-container {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 300px;
    background-color: white;
    color: #607080;
    font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 15px;
    line-height: 2em;
  }

  a {
    color: #607080;
    text-decoration: none;
  }

  a:hover {
    color: #4388c4;
  }

  ul {
    list-style-type: none;
  }

  .logo {
    margin-top: 50px;
    margin-right: 8%;
  }

  .ft-mid-section {
    margin-top: 50px;
    font-weight: 700;
  }

  .ft-right-section {
    margin-top: 50px;
    margin-left: 5%;
  }

  .ft-header {

    font-size: 20px;
    font-weight: 600;
  }
</style>
