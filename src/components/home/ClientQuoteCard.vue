<template>
  <div class="cqc-container">
    <div class="cqc-left-section">”</div>
    <div class="cqc-right-section">
      <div class="cqc-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
      <div class="cqc-signature-container">
        <div class="cqc-signature">
          <div class="bold">Podpis</div>
          Firma
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  @import '@/assets/fonts.css';
  @import '@/assets/keyframes.css';

  .cqc-container {
    display: flex;
    height: 100%;
    background-color: #ffffff80;
    color: #203040;
  }

  .cqc-left-section {
    width: 20%;
    font-family: sans-serif;
    font-weight: 600;
    font-size: 100px;
    text-align: center;
  }

  .cqc-right-section {
    width: 80%;
    height: 100%;
  }

  .cqc-text {
    display: flex;
    height: 70%;
    padding-right: 10%;
    align-items: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
  }

  .cqc-signature-container {
    height: 30%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    line-height: 1.2em;

  }

  .cqc-signature {
    width: 50%;
    margin-left: 35%;
    text-align: center;
  }

  .bold {
    font-weight: 600;
  }

</style>
