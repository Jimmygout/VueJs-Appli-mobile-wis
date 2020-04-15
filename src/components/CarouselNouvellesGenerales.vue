<template>
   <div>
        <v-carousel cycle height="120" hide-delimiter-background show-arrows-on-hover > 

        <v-carousel-item v-for="(alert, i) in info" :key="i">
          
          <v-sheet  v-if="alert.publier" color="blue-grey darken-1" height="100%" tile>

            <v-row class="fill-height" align="center" justify="center">

              <div class="display-1">
                {{ alert.titre }}
              </div>

            </v-row>

          </v-sheet>

        </v-carousel-item>

      </v-carousel>
    </div>
</template>

<script>
export default {
  name: 'CarouselNouvellesGenerales',
  props:{
    localSf:String
  },
    data () {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  mounted () {
    this.$axios
      .get(this.localSf+'/api/actualites.json')
      .then(response => {
        this.info = response.data
      })
      .finally(() => this.loading = false)
  }
};
</script>
