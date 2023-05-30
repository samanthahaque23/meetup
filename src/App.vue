<template>

  <v-app>
     <v-card
  >
    <v-app-bar
      color="primary"
      dark
    >
       <v-app-bar-nav-icon @click="sideNav = !sideNav"></v-app-bar-nav-icon>
      <v-toolbar-title>Meetup</v-toolbar-title>
      <v-spacer></v-spacer>
     
    </v-app-bar>
        <v-navigation-drawer v-model="sideNav" absolute temporary color="primary">
      <v-system-bar></v-system-bar>
      <v-list>
        <v-list-item v-for="item in menuItems" :key="item.text">
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              John Leider
            </v-list-item-title>
            <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item v-for="item in menuItems" :key="item.text">
              <v-icon>{{ item.icon}}</v-icon>
              <v-text>{{ item.text }}</v-text>
        </v-list-item>
       </v-list>
    </v-navigation-drawer>
    <v-main>
   
      <router-view></router-view>
    </v-main>
     </v-card>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    sideNav:false,
    selectedItem: 1,
      menuItems: [
        { text: 'VIEW MEETUPS', icon: 'mdi-account-supervisor' },
        { text: 'ORGANIZE MEETUPS', icon: 'mdi-map-marker' },
        { text: 'PROFILE', icon: 'mdi-account' },
        { text: 'SIGN UP', icon: 'mdi-face-man' },
        { text: 'SIGN IN', icon: 'mdi-lock-open' },
       
      ],
  }),
};
</script>
