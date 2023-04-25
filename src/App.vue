<script setup>
//import { RouterLink, RouterView } from 'vue-router'
import AppBar from './components/AppBar.vue'
</script>

<template>
  <v-app >
    <app-bar />
    <v-main>
      <!-- <h4 class="px-2 py-1 bg-yellow">ImageSlider XS</h4>
      <h4 class="px-2 py-1 bg-yellow">Karta hover</h4>
      <h4 class="px-2 py-1 bg-yellow">Scisnij app-bar przy przewijaniu</h4> -->
      <router-view :key="$route.path"/>
    </v-main>
  </v-app>

  <!-- <header>

    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->

</template>

<style scoped>
/*
header {
  line-height: 1.5;
  max-height: 100vh;
}

.red {
  background-color: red;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
