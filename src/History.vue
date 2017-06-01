<template>
    <div>
      <h4>Riwayat</h4>
       {{cars }}
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
