<template>
  <v-app-bar fixed height="100"  flat >
    <div class="w-100 d-flex flex-row">
      <img
        alt="demo logo"
        class="logo ml-6 me-auto"
        src="@/assets/demo logo.svg"
        width="130"
        height="30" />
      <v-btn-menu variant="plain">
        Firma
      </v-btn-menu>
      <v-btn-menu variant="plain">
        Oferta
      </v-btn-menu>
      <v-btn-menu variant="plain">
        Rozwiązania
      </v-btn-menu>
      <v-btn-menu variant="plain">
        Kontakt
      </v-btn-menu>
      <v-btn-menu class="me-auto" variant="plain">
        Praca
      </v-btn-menu>
      <v-btn
        class="mr-6 text-white"
        variant="flat" >
        Napisz do nas
      </v-btn>
    </div>
  </v-app-bar>
</template>
