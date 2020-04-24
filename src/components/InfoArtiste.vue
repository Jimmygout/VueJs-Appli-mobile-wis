<template>
         
    
  
                

   <div>
     
      <v-img class="white--text  align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" width="100%" :src="url_img + info.picture">
        <v-card-title class="headline text-center"  v-text="info.chanteur"></v-card-title>
        <v-card-subtitle class="text-left" v-text="info.designation"></v-card-subtitle>
      </v-img>
      <v-card style="height:3rem!important">    
            <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>mdi-star-outline </v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn>
                </v-card-actions>
            </v-card>
                <v-subheader v-text="formatDate(info.dateConcert)"></v-subheader>
                <v-subheader v-text="info.designation"></v-subheader>
                <v-btn small color="primary">Localiser</v-btn>
            <v-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At auctor urna nunc id cursus metus aliquam eleifend mi. Urna et pharetra pharetra massa massa ultricies mi quis. Scelerisque fermentum dui faucibus in ornare quam viverra. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. In nibh mauris cursus mattis molestie a iaculis.
            </v-content>
            
   </div>

   
        
</template>

<style lang="scss">

</style>

<script>
import moment from 'moment'
   
export default {
  name: 'InfoArtiste',
  props:{
    localSf:String,
    artisteID:String
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
    return moment(String(value)).lang('fr').format('dddd Do MMM YYYY [à] hh:mm')
    // you dont have to use fromNow() it's just an example

  }

},
  mounted () {
    this.$axios
      .get(this.localSf+'/api/concerts/'+this.artisteID+'.json')
      .then(response => {
        this.info = response.data
      })
      .finally(() => this.loading = false)
  }
};
</script>
