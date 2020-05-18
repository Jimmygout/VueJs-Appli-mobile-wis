<template>
    <div>
        <h1> Les Nouvelles Générales</h1>
    <div v-for="(alert, i) in info" :key="i">
        <v-col cols="12">
       <v-card v-if="alert.publier" color="blue-grey darken-1" dark width="100%" style="display: contents" align="center">
          <v-img
              :src="img + alert.image"
              class="white--text align-center"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
            <v-card-title class="headline d-block" >{{ alert.titre }}</v-card-title>
              <v-card-subtitle>{{ alert.designation }}</v-card-subtitle>
            </v-img>
              
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
      errored: false,
      img: 'http://jimmy-gout.com/uploads/images/information_generale/',
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
