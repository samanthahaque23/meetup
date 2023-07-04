// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#3f51b5',
        secondary: '#b0bec5',
        anchor: '#8c9eff',
        accent:'#3f51b5',
        error: '#ff0000',
        warning: '#8bc34a',
        info: '#cddc39',
        background:'#e0e0e0'
       
      },
      dark: {
        primary: '#3f51b5',
        secondary: '#b0bec5',
        anchor: '#8c9eff',
        accent:'#3f51b5',
        error: '#ff3d3d',
        warning: '#8bc34a',
        background:'#8bc34a',
        info: '#cddc39',
      },
    },
  },
})

export default vuetify