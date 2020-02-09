<template>
  <v-card
    elevation="5"
    max-width="444"
    class="mx-auto"
  >
    <v-carousel
      cycle
      :continuous="false"
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      height="120"
      style="padding:0px;"
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
      >
        <v-sheet
          :color="colors[i]"
          height="100%"
          tile
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-1">{{ slide }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

  </v-card>

</template>

<script>
export default {
  name: 'CarouselAlert',
   data () {
      return {
        info : null,
        colors: [
          'green',
          'secondary',
          'yellow darken-4',
          'red lighten-2',
          'orange darken-1',
        ],
        cycle: false,
        slides: [
          'Alert 1',
          'Alert 2',
          'Alert 3',
          'Alert 4',
          'Alert 5',
        ],
      }
    },
    mounted () {
    this.$axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.test = response))
  }
};
</script>
