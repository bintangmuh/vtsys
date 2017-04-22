<template>
  <div id="app">
    <v-toolbar class="green">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>VT-Sys</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <index></index>
  </div>
  
</template>

<script>
import Index from './Index.vue';

export default {
  components: {
    Index
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

</style>
