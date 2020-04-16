<template>
         
     
         <!-- <v-timeline>

            <v-timeline-item v-for="(item, i) in info" :key="i">
              
              <h2 slot="opposite">{{ formatDate(item.dateConcert) }}</h2>

               <v-card  color="rgb(56, 95, 115)" dark class="elevation-3">
                <div class="d-flex flex-no-wrap justify-space-between">
                 <div>
                    <v-card-title class="headline" v-text="item.chanteur"></v-card-title>
                    <v-card-subtitle v-text="item.designation"></v-card-subtitle>
                 </div>

              <v-avatar class="ma-0" size="120" tile>
                <v-img :src="url_img + item.picture"></v-img>
              </v-avatar>
                </div>
          </v-card>
            </v-timeline-item>
          </v-timeline>-->
     
      <v-timeline >
        <v-timeline-item v-for="(item, i) in info" :key="i">

          <span slot="opposite">{{ formatDate(item.dateConcert) }}</span>

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
    </v-card>
        </v-timeline-item>
      </v-timeline>
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
