<template>
      <v-row dense>
        <v-col
          v-for="(item, i) in info"
          :key="i"
          cols="12"
        >
          <v-card
            color="rgb(56, 95, 115)"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="item.designation"
                ></v-card-title>

                <v-card-subtitle v-text="item.chanteur"></v-card-subtitle>
              </div>

              <v-avatar
                class="ma-0"
                size="125"
                tile
              >
                <v-img :src="url_img + item.picture"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
</template>

<style lang="scss">
.v-card, .v-avatar{
      height: 5rem !important;
}
.v-avatar--tile {
    border-radius: 4px;
}

</style>

<script>
export default {
  name: 'Programes',
  props:{
    localSf:String
  },
    data () {
    return {
      info: null,
      loading: true,
      errored: false,
      url_img: this.localSf+"/uploads/"
    }
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  mounted () {
    this.$axios
      .get(this.localSf+'/api/concerts.json')
      .then(response => {
        this.info = response.data
      })
      .finally(() => this.loading = false)
  }
};
</script>
