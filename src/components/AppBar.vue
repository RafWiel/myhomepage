<template>
  <v-app-bar fixed height="100"  flat >
    <div class="w-100 d-flex flex-row">
      <img
        @click="navigate('home')"
        alt="demo logo"
        class="logo ml-6 me-auto"
        src="../assets/demo logo.svg"
        style="cursor: pointer;"
        width="130"
        height="30" />
      <v-btn-menu
        v-for="(item, index) in links"
        :class="index == links.length - 1 ? 'me-auto' : ''"
        variant="plain"
        @click="navigate(item.route)">
        {{ item.title }}
        <v-icon
          v-if="item.items"
          icon="mdi-chevron-down" />
        <v-menu
          v-if="item.items"
          activator="parent">
          <v-list data-testid="companyItems">
            <v-list-item
              v-for="(subItem, subIndex) in item.items"
              :key="subIndex"
              :value="subIndex"
              @click="navigate(subItem.route)">
              <v-list-item-title>{{ subItem.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn-menu>
      <v-btn
        class="mr-6 text-white"
        variant="flat" >
        Napisz do nas
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
  export default {
    data: () => ({
      links: [
        {
          title: 'Firma',
          items: [
            {
              title: 'O nas',
              route: 'about'
            },
            {
              title: 'Praca',
              route: 'jobs'
            },
            {
              title: 'Kontakt',
              route: 'contact'
            },
          ],
        },
        {
          title: 'Oferta',
          items: [
            {
              title: 'Usługi',
              route: 'services'
            },
            {
              title: 'Oprogramowanie',
              route: 'software'
            },
            {
              title: 'Serwis',
              route: 'maintenance'
            },
          ]
        },
        {
          title: 'Rozwiązania',
          route: 'solutions'
        },
        {
          title: 'Realizacje',
          route: 'implementations'
        },
      ],
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
    methods: {
      navigate(route) {
        this.$router.push({ name: route });
      }
    }
  }
</script>

