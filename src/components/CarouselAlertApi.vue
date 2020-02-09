<template>
   <v-carousel
      cycle
      :continuous="false"
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      height="120"
      style="padding:0px;"
    >
    <div 
    v-for="(alert, i) in info"
    :key="i"
    >
      <v-carousel-item
      v-if="alert.publier"
      >
        <v-sheet
          color="red"
          height="100%"
          tile
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-1"> 
              {{ alert.titre }} 
              </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
      </div>
    </v-carousel>
</template>

<script>
export default {
  name: 'CarouselAlertApi',
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
      .get('http://127.0.0.1:8001/api/actualites.json')
      .then(response => {
        this.info = response.data
      })
      .finally(() => this.loading = false)
  }
};
</script>
