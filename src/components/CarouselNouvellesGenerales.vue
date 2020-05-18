<template>
   <div>
     <!--
     <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
-->
        <v-carousel cycle height="220" hide-delimiter-background show-arrows-on-hover > 

        <v-carousel-item v-for="(alert, i) in info" :key="i">
          <!-- avec image -->
           <v-sheet  v-if="alert.image" style="background-blend-mode: difference; background-position: center;background-size: contain;" v-bind:style="{ backgroundImage: 'url(' + img + alert.image + ')', }"  height="100%" tile>

            <v-row class="fill-height" align="center" justify="center">

              <div class="ma-2">
                {{ alert.designation }}
              </div>

            </v-row>

          </v-sheet>

          <!-- Sans images -->
          <v-sheet v-else color="blue-grey darken-1"  height="100%" tile>

            <v-row class="fill-height" align="center" justify="center">

              <div class="ma-2">
                {{ alert.designation }}
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
    data () {
    return {
      img: 'http://jimmy-gout.com/uploads/images/information_generale/',
      info: null,
      loading: true,
      errored: false,
      items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
    }
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  mounted () {
    this.$axios
      .get(this.$api+'/information_generales?publier=true')
      .then(response => {
        this.info = response.data
      })
      .finally(() => this.loading = false)
  }
};
</script>
