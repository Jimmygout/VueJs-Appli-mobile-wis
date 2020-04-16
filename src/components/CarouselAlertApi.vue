<template>
       <div>
        <v-carousel cycle height="150"  hide-delimiter-background show-arrows-on-hover > 

        <v-carousel-item v-for="(alert, i) in info" :key="i">
          
          <v-sheet  v-if="alert.publier" color="deep-orange darken-2" height="100%" tile>

            <v-row class="fill-height" align="center" justify="center">

              <div class="display-2">
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
  name: 'CarouselAlertApi',
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
