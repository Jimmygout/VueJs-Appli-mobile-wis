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
        <v-timeline-item v-for="n in 3" :key="n">

          <span slot="opposite">Tus eu perfecto</span>

          <v-card class="elevation-2">

            <v-card-title class="headline">Lorem ipsum</v-card-title>

            <v-card-subtitle>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
            </v-card-subtitle>

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
    return moment(String(value)).lang('fr').format('Do/MM/YY [à] hh:mm')
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
