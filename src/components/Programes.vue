<template>
         
     <div  >
      <div class="d-none d-sm-inline"> 
       <v-timeline>
        <v-timeline-item v-for="(item, i) in info" :key="i">

          <span slot="opposite">{{ formatDate(item.dateConcert) }}</span>

    <v-card class="mx-auto" width="150px" style="display: table">

      <v-img class="white--text align-end" height="200px" width="300px" :src="url_img + item.picture">
        
      </v-img>
  
      <v-card-title class="headline" v-text="item.chanteur"></v-card-title>
      <v-card-subtitle v-text="item.designation"></v-card-subtitle>

  
      <v-card-actions>
        <v-btn color="orange" text> Share </v-btn>
  
       <router-link :to= "{name:'artiste', params:{artisteID: item.id}}">
                <v-btn color="orange" link text> Explore </v-btn>
          </router-link>
      </v-card-actions>
    </v-card>
        </v-timeline-item>
      </v-timeline>
      </div>



       
      <div class="d-sm-none" v-for="(item, i) in info" :key="i">

        <h3>{{ formatDate(item.dateConcert) }}</h3>
      <v-card class="mx-auto" width="150px" style="display: table">

      <v-img class="white--text align-end" height="200px" width="300px" :src="url_img + item.picture">
        
      </v-img>
  
      <v-card-title class="headline" v-text="item.chanteur"></v-card-title>
      <v-card-subtitle v-text="item.designation"></v-card-subtitle>

  
      <v-card-actions>
        <v-btn
          color="orange"
          text
        >
          Share
        </v-btn>
  
        <v-btn
          color="orange"
          text
        >
          Explore
        </v-btn>
      </v-card-actions>
    </v-card><br>
      </div>
      </div>
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
import moment from 'moment'
   
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
      url_img: this.localSf+"/uploads/",
    }
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  methods: {

  // methods area
  formatDate: function(value){
    //return moment(String(value)).lang('fr').format('dddd Do MMMM YYYY [à] hh:mm')
    return moment(String(value)).lang('fr').format('ddd Do MMMM YYYY [à] hh:mm')
    // you dont have to use fromNow() it's just an example

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
