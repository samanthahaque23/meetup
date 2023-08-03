<template>
    <v-app>
        <v-card>
            <v-app-bar color="primary" dark>
                <v-app-bar-nav-icon
                    @click="sideNav = !sideNav"
                    class="d-lg-none"
                ></v-app-bar-nav-icon>
                <v-toolbar-title>
                    <router-link
                        to="/"
                        tag="span"
                        style="
                            cursor: pointer;
                            display: block;
                            width: 200px !important;
                        "
                        >Meetup</router-link
                    >
                </v-toolbar-title>

                <v-spacer></v-spacer>
                <v-tabs
                    align-with-title
                    class="d-none d-sm-flex float-right"
                >
                    <v-tabs-slider color="yellow"></v-tabs-slider>

                    <v-tab
                        v-for="item in menuItems"
                        :key="item.text"
                        router
                        :to="item.link"
                    >
                        <v-icon>{{ item.icon }}</v-icon>
                        <span>{{ item.text }}</span>
                    </v-tab>
                </v-tabs>
              <div class="pa-5 mt-4">
                  <v-switch
                    v-model="switch1"
                    inset
                    @click="$vuetify.theme.dark = !$vuetify.theme.dark"
                ></v-switch>
              </div>
              <v-btn color="primary" v-if="userIsAuthenticated" @click="onLogout">
                <v-icon>mdi-exit-to-app</v-icon>
                <div>logout</div>
              </v-btn>
            </v-app-bar>
            <v-navigation-drawer
                v-model="sideNav"
                absolute
                temporary
                color="primary"
                class="d-lg-none d-xl-flex"
            >
                <v-list nav dense>
                    <v-list-item
                        v-for="item in menuItems"
                        :key="item.text"
                        router
                        :to="item.link"
                    >
                        <v-icon>{{ item.icon }}</v-icon>
                        <span>{{ item.text }}</span>
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
    name: "App",

    components: {},

    data: () => ({
        sideNav: false,
        selectedItem: 1,
        menuItemks: [],
         switch1: true,
    }),
    methods:{
        onLogout(){
this.$store.dispatch('logout')
        }
    },
    computed: {
        menuItems() {
            let menuItems = [
                { link: "/signUp", text: "SIGN UP", icon: "mdi-face-man" },
                { link: "/signIn", text: "SIGN IN", icon: "mdi-lock-open" },
            ];

            if (this.userIsAuthenticated) {
                menuItems = [
                    {
                        link: "/meetups",
                        text: "VIEW MEETUPS",
                        icon: "mdi-account-supervisor",
                    },
                    {
                        link: "/meetup/new",
                        text: "ORGANIZE MEETUPS",
                        icon: "mdi-map-marker",
                    },
                    { link: "/profile", text: "PROFILE", icon: "mdi-account" },
                ];
            }
            return menuItems;
        },
        userIsAuthenticated() {
            return (
                this.$store.getters.user !== null &&
                this.$store.getters.user !== undefined
            );
        },
    },
};
</script>
<style>
.centralized {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}
</style>