<template>
      <v-row dense>

       <v-col v-for="(item, i) in info" :key="i" cols="12" md="3" lg="3" xl="3" sm="4">
          
         

        <v-card v-if="i <3" class="mx-auto" width="150px" style="display: table">

      <v-img class="white--text align-end" height="200px" width="300px" :src="img + item.chanteur.image">
        
      </v-img>
  
      <v-card-title class="headline" v-text="item.chanteur.nom"></v-card-title>
      <v-card-actions>
        <!--
        <v-btn color="orange" text> Share </v-btn>
  
        
        <router-link :to= "{name:'artiste', params:{artisteID: item.id}}">
                <v-btn color="orange" link text> Explore </v-btn>
          </router-link>
          -->
      </v-card-actions>
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
      img: 'http://jimmy-gout.com/uploads/images/chanteur_images/',
    }
  },
  mounted () {
    this.$axios
      .get(this.$api+'/concerts?publier=true')
      .then(response => {
        this.info = response.data
      })
      .finally(() => this.loading = false)
  }
};
</script>
