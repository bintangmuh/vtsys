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

        <h3>Keadaan Mobil Saat Ini</h3>
        <h5>Posisi:</h5>
        <p>
            {{ latitude }}, {{ longitude }}
            <br>
            waktu : {{ waktu }} <br>
            kecepatan : {{ kecepatan }} km/h <br>
            tangki : {{ kecepatan }} Liter <br>
            arus: {{ arus ? 'nyala' : 'tidak' }}
        </p>
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
                arus: true
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
