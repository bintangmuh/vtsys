<template>
  <div id="app">
    <v-toolbar fixed class="teal" dark>
      <v-toolbar-title><span style="color: white">VTSys</span></v-toolbar-title>
      <v-toolbar-items class="hidden-md-and-down">
        <v-toolbar-item ripple>Link</v-toolbar-item>
        <v-toolbar-item ripple>Link</v-toolbar-item>
        <v-toolbar-item ripple>Link</v-toolbar-item>
      </v-toolbar-items>
    </v-toolbar>

    <div style="padding-top: 56px; margin-bottom: 56px;">
      <router-view></router-view>
    </div>

    <v-bottom-nav absolute value="false" class="fixed--nav white">
      <v-btn flat dark class="teal--text" @click.native="toHome()" :value="e1 === 1">
        <span>Beranda</span>
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn flat dark class="teal--text" @click.native="toHistory()" :value="e1 === 2">
        <span>Riwayat</span>
        <v-icon>history</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>

</template>

<script>
import Index from './Index.vue';
import History from './History.vue';
import {db} from './config/configfire';


export default {
  components: {
    Index,
    History
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      sidebar2: false,
      items: [
        {
          'title': 'Home',
          'url': '/home',
          'route': true
        },
        {
          'title': 'Riwayat',
          'url': '/riwayat',
          'route': true
        }
      ],
      e1 : 1
    }
  },
  firebase: {
    vtsys: db.ref('cars').limitToLast(5)
  },
  methods: {
    toHome: function() {
      console.log("This is home");
      this.$router.push({ path: '/home' });
      this.e1 = 1;
    },
    toHistory: function() {
      this.e1 = 2;
      console.log("This is history");
      this.$router.push({ path: '/riwayat' });
    }
  }
}
</script>

<style>
  .fixed--nav {
    position: fixed;
    width: 100%;
    bottom: 0px;
  }
</style>
