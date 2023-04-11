<template>
  <v-sheet>
    <div>IMAGE</div>
    <div class="title pt-4">{{ title }}</div>
    <div class="text px-8 py-4">{{ limitedText }}</div>
    <v-btn>Czytaj dalej</v-btn>
  </v-sheet>
</template>

<script setup>
  const props = defineProps ({
    imagePath: String,
    title: String,
    text: String,
  })

  const limitedText = props.text.length > 500 ? `${props.text.substring(0, 500)}...` : props.text

</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:330,400,600,800');
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600&display=swap');

  $font-family: 'Montserrat';
  //$font-family: 'Nunito';
  .title {
    font-family: $font-family, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 28px;
    font-weight: 600;
    line-height: 1.2em;
    color: #203040;
    text-align: center;
  }

  .text {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 18px;
    line-height: 1.2em;
    color: #808080;
  }



</style>
