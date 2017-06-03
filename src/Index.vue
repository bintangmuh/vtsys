<template>
  <div class="">
    <gmap-map
            :center="{lat:-7.7956, lng:110.3695}"
            :zoom="13"
            map-type-id="roadmap"
            style="width: 100%; height: 400px"
    >
        <gmap-marker :position="{lat:-7.7956, lng:110.3695}">
        </gmap-marker>
    </gmap-map>
    <v-container>
      <v-card>
        <v-list two-line subheader>
          <v-list-item>
            <v-list-tile avatar>
              <v-list-tile-action>
                <v-icon x-large dark>date_range</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Sunday, May 15 19:00 </v-list-tile-title>
                <v-list-tile-sub-title>Waktu Terakhir Dikirim</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
          <v-list-item>
            <v-list-tile avatar>
              <v-list-tile-action>
                <v-icon x-large dark>gps_fixed</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Show your status</v-list-tile-title>
                <v-list-tile-sub-title>Posisi</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
          <v-list-item>
            <v-list-tile avatar>
              <v-list-tile-action>
                <v-icon x-large dark>pause</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>98 KM/h</v-list-tile-title>
                <v-list-tile-sub-title>Kecepatan</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
          <v-list-item>
            <v-list-tile avatar>
              <v-list-tile-action>
                <v-icon x-large dark>pause</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>10 Meter</v-list-tile-title>
                <v-list-tile-sub-title>Posisi X</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>

          <v-list-item>
            <v-list-tile avatar>
              <v-list-tile-action>
                <v-icon x-large dark>pause</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>10 Meter</v-list-tile-title>
                <v-list-tile-sub-title>Posisi Y</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>

          <v-list-item>
            <v-list-tile avatar>
              <v-list-tile-action>
                <v-icon x-large dark>pause</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>10 Meter</v-list-tile-title>
                <v-list-tile-sub-title>Posisi Z</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
          <v-list-item>
            <v-list-tile avatar>
              <v-list-tile-action>
                <v-icon x-large dark>flash_on</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>10 ampere</v-list-tile-title>
                <v-list-tile-sub-title>Arus</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
        </v-list>
      </v-card>
    </v-container>

  </div>


</template>

<script>
    import {db} from './config/configfire.js'

    export default {
        name: 'index',
        data () {
            return {
                latitude: -7.7956,
                longitude: 110.3695,
                waktu: 'Sunday, May 15 19:00',
                kecepatan: 17 ,
                tangki: 12 ,
                arus: true,

            }
        },
        firebase: {
          cars: db.ref('cars')
        }
    }
</script>

<style media="screen">
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 100%;
}
</style>
