import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import {store} from './store'
import DateFilter from './filters/date'
import firebase from 'firebase/app'
import AlertCmp from './components/shared/Alert.vue'

import Vuetify from 'vuetify/lib'

Vue.config.productionTip = false
Vue.filter('date',DateFilter)
Vue.use(Vuetify)
Vue.component('app-alert',AlertCmp)

new Vue({
   vuetify,
  router,
  store,
  render: h => h(App),
  created(){
    firebase.initializeApp({
      apiKey: "AIzaSyCoNu9No-ea5WwQKAg6QHf0h0xruWITyzA",
      authDomain: "meetup-23.firebaseapp.com",
      projectId: "meetup-23",
      storageBucket: "meetup-23.appspot.com",
      messagingSenderId: "384906729425",
      appId: "1:384906729425:web:8378be7cbe81568cf6b2f0",
    })
  }
}).$mount('#app')
