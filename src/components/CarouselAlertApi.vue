<template>
       <div v-if="info">
      <h1> Nouvelles importantes </h1>
        <v-carousel  cycle height="150"  hide-delimiter-background show-arrows-on-hover > 

        <v-carousel-item v-for="(urgent, i) in info" :key="i">
          
          <v-sheet color="deep-orange darken-2" height="100%" tile>

            <v-row class="fill-height" align="center" justify="center">

              <div class="display-2">
                {{ urgent.titre }}
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
  mounted () {
    
    this.$axios
      .get(this.$api+'/information_urgentes?Publier=true')
      .then(response => {
        this.info = response.data
      })
      .finally(() => this.loading = false)
  }
};
</script>
