<template>
    <div>
      <v-container>
        <h4>Riwayat</h4>
        <v-card>
          <v-list two-line>
            <template v-for="car in cars">
              <v-list-item>
                <v-list-tile>
                  <v-list-tile-content>
                    {{ car.waktu }}
                  </v-list-tile-content>
                </v-list-tile>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-container>
    </div>
</template>

<script>
    import {db} from './config/configfire.js'

    export default {
        name: 'history',
        data () {
            return {
                newCars: {
                  lat: 0,
                  lng: 0
                }
            }
        },
        firebase: {
            cars: db.ref('cars')
        },
    }
</script>
