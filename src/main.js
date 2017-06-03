import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import Vuefire from 'vuefire'
import Firebase from 'firebase'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import KeenUI from 'keen-ui'
import VueMaterial from 'vue-material'

import Index from './Index.vue'
import History from './History.vue'

// Declare package
Vue.use(VueMaterial)
Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(Vuefire);
Vue.use(Firebase);
Vue.use(KeenUI);


// Google Maps
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBlOdC_3RJEpOFxxPEaTD1a0dCQiEnTfeg',
    // libraries: 'places', //// If you need to use place input
  }
});
Vue.material.registerTheme('about', {
  primary: {
    color: 'teal',
    hue: 'A200'
  },
  accent: {
    color: 'grey',
    hue: 300
  }
})
//router
const routes = [
  {
    path: '/home',
    component: Index
  },
  {
    path: '/riwayat',
    component: History,
  },
];

const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
