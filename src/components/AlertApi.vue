<template>
    <div v-if="alerts">
        <h1> Les Nouvelles Importantes</h1>
    <div v-for="(alert, i) in alerts" :key="i">
        <v-col cols="12">
       <v-card color="blue-grey darken-1" dark width="100%" style="display: table" align="center">

            <v-card-title class="headline d-block" >{{ alert.titre }}</v-card-title>
              <v-card-subtitle>{{ alert.designation }}</v-card-subtitle> 
            </v-card>
            </v-col>   
      </div>
    </div>
</template>

<script>
export default {
  name: 'AlertApi',
    data () {
    return {
      alerts: null,
      loading: true,
      errored: false
    }
  },
  mounted () {
    this.$axios
      .get(this.$api+'/information_urgentes?Publier=true')
      .then(response => {
        this.alerts = response.data
      })
      .finally(() => this.loading = false)
  }
};
</script>
