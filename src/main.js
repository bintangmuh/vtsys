import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import Vuefire from 'vuefire'
import Firebase from 'firebase'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps';

// Declare package
Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(Vuefire);
Vue.use(Firebase);


Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBlOdC_3RJEpOFxxPEaTD1a0dCQiEnTfeg',
    // libraries: 'places', //// If you need to use place input
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
