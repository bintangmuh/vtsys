<template>
  <div id="app">
      <ui-toolbar brand="VT-Sys" raised  type="colored" text-color="white" removeNavIcon>
         <div slot="actions">
             <ui-icon-button
                 color="white"
                 icon="refresh"
                 size="large"
                 type="secondary"
             ></ui-icon-button>

             <ui-icon-button
                 color="white"
                 icon="search"
                 size="large"
                 type="secondary"
             ></ui-icon-button>
         </div>
     </ui-toolbar>
     <ui-tabs
        background-color="primary"
        fullwidth
        indicator-color="white"
        text-color-active="white"
        text-color="white"
        type="text"
    >
        <ui-tab title="Kondisi Terbaru" icon="book">
            <index></index>
        </ui-tab>

        <ui-tab title="Riwayat" icon="people">
            <history></history>
        </ui-tab>
    </ui-tabs>



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
      ]
    }
  },
  firebase: {
    vtsys: db.ref('cars').limitToLast(5)
  }
}
</script>

<style>

</style>
