<template>
    <div>
        <h1> Les Nouvelles Générales</h1>
    <div v-for="(alert, i) in info" :key="i">
        <v-col cols="12">
       <v-card v-if="alert.publier" color="blue-grey darken-1" dark>
              <v-card-title class="headline">{{ alert.titre }}</v-card-title>
              <v-card-subtitle>{{ alert.designation }}</v-card-subtitle>
            </v-card>
            </v-col>   
      </div>
    </div>
</template>

<script>
export default {
  name: 'NouvellesGenerales',
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
