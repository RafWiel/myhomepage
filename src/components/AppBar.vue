<script>
  export default {
    data: () => ({
      companyItems: [
        { title: 'O nas' },
        { title: 'Praca' },
        { title: 'Kontakt' },
      ],
      offerItems: [
        { title: 'Usługi' },
        { title: 'Oprogramowanie' },
        { title: 'Serwis' },
      ],
    }),
  }
</script>

<template>
  <v-app-bar fixed height="100"  flat >
    <div class="w-100 d-flex flex-row">
      <img
        alt="demo logo"
        class="logo ml-6 me-auto"
        src="../assets/demo logo.svg"
        width="130"
        height="30" />
      <v-btn-menu data-testid="company" variant="plain">
        Firma
        <v-icon icon="mdi-chevron-down"></v-icon>
        <v-menu activator="parent">
          <v-list data-testid="companyItems">
            <v-list-item
              v-for="(item, index) in companyItems"
              :key="index"
              :value="index"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn-menu>
      <v-btn-menu variant="plain">
        Oferta
        <v-icon icon="mdi-chevron-down"></v-icon>
        <v-menu activator="parent">
          <v-list>
            <v-list-item
              v-for="(item, index) in offerItems"
              :key="index"
              :value="index"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn-menu>
      <v-btn-menu variant="plain">
        Rozwiązania
      </v-btn-menu>
      <v-btn-menu class="me-auto" variant="plain">
        Realizacje
      </v-btn-menu>
      <v-btn
        class="mr-6 text-white"
        variant="flat" >
        Napisz do nas
      </v-btn>
    </div>
  </v-app-bar>
</template>

