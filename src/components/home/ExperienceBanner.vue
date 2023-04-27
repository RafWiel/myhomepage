<template>
  <div class="eb-container">
    <v-container >
      <v-row no-gutters v-intersect="intersect">
        <v-col
          cols="12"
          sm="4">
          <div class="eb-text-header">{{ counter.projects.displayValue }}</div>
          <div class="eb-text">ZREALIZOWANYCH PROJEKTÓW</div>
        </v-col>
        <v-col
          cols="12"
          sm="4">
          <div class="eb-text-header">{{ counter.years.displayValue }}</div>
          <div class="eb-text">LAT DOŚWIADCZENIA</div>
        </v-col>
        <v-col
          cols="12"
          sm="4">
          <div class="eb-text-header">{{ counter.clients.displayValue }}</div>
          <div class="eb-text">ZADOWOLONYCH KLIENTÓW</div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
  import {ref} from 'vue'

  const counter = {
    isTriggered: false,
    steps: 100,
    projects: {
      targetValue: 1000,
      currentValue: 0,
      displayValue: ref(0)
    },
    years: {
      targetValue: 15,
      currentValue: 0,
      displayValue: ref(0)
    },
    clients: {
      targetValue: 100,
      currentValue: 0,
      displayValue: ref(0)
    },
  }

  function intersect(isIntersecting) {
    if (isIntersecting && counter.isTriggered === false) {
      counter.isTriggered = true;
      increaseValues(1, 1)
    }
  }

  function increaseValues(step, factor) {
    increaseValue(counter.projects)
    increaseValue(counter.years)
    increaseValue(counter.clients)

    if (counter.projects.currentValue >= counter.projects.targetValue) {
      return
    }

    //ease out
    if (step > 75) {
      factor += factor / 20
    } else step++

    //call next iteration
    setTimeout(() => {increaseValues(step, factor)}, step * factor)
  }

  function increaseValue(object) {
    if (object.currentValue >= object.targetValue) {
      return
    }

    object.currentValue += object.targetValue / counter.steps
    object.displayValue.value = Math.round(object.currentValue) //show int value
  }

</script>
<style lang="scss" scoped>
  @import '@/assets/fonts.css';

  .eb-container {
    display: flex;
    width: 100%;
    height: 250px;
    justify-content: center;
    align-items: center;
    background-color: #102030;
    background: url('@/assets/home/experience_banner.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .eb-text-header {
    font-family: 'Roboto', Arial;
    font-size: 60px;
    font-weight: 700;
    line-height: 1em;
    color: #f0f0f0;
    text-align: center;
  }

  .eb-text {
    font-family: 'Montserrat', Arial;
    font-size: 18px;
    font-weight: 600;
    color: #f0f0f0;
    text-align: center;
  }

</style>
