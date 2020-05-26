<template>
  <div class="rencontre">
    <h2 class="titre-h2">Le programme</h2>

 <!--- Menu jour --->
<v-tabs
      v-model="tab"
      background-color="deep-purple accent-4"
      centered
      dark
      icons-and-text
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
        <span>MAR</span>
        <span>21 Juil</span>
      </v-tab>

      <v-tab href="#tab-2">
        <span>MER</span>
        <span>22 Juil</span>
      </v-tab>

      <v-tab href="#tab-3">
        <span>JEU</span>
        <span>23 Juil</span>
      </v-tab>
    </v-tabs>
 <!--- fin Menu jour --->

 <!--- menu style evenement --->
 <v-row
        align="center"
        justify="center"
        class="mt-4"
      >
        <v-btn-toggle
          v-model="toggle_exclusive"
          rounded
        >
          <v-btn to="/programmes" >
            <span>Concert</span>
          </v-btn>
          <v-btn to="/rencontres" class="v-item--active v-btn--active v-btn--active--prog">
            <span>Rencontre</span>
          </v-btn>

        </v-btn-toggle>
      </v-row>
<!--- fin style evenement --->

<!--- chargement page --->
    <div v-if="loading1 && loading2 && loading3 " class="load">
      <div class="text-center">
        <v-progress-circular
        :size="70"
        :width="7"
        color="purple"
        indeterminate
      ></v-progress-circular>
      </div>
    </div>
<!--- fin chargement page --->

<!----- tableau ---->
    <v-tabs-items v-model="tab">
      <!--- Jour 1 ---->
      <v-tab-item
        :value="'tab-1'"
      >
        <v-list two-line>
      <v-list-item-group
        v-model="selected"
        multiple
        active-class="pink--text"
      >
        <template v-for="(item, index) in jour1">
          <v-list-item :key="item.id" class="no-padding">
            <template v-slot:default="{ active, toggle }">
       
       <v-col cols="4" sm="4" class="no-padding">
   
<v-img :src="img + item.chanteur[0].image" aspect-ratio="1.1"></v-img>
      </v-col>
      <v-col cols="8" sm="8">
        <v-list-item-content>
       <v-list-item-title  class="text-left font-weight-black" v-text="item.chanteur.nom"></v-list-item-title>
                <v-list-item-subtitle class=" text-left">{{ formatDate(item.dateDebut) }}-{{ formatDate(item.dateFin) }}</v-list-item-subtitle>
                <v-list-item-title class="text-left" v-text="item.information"></v-list-item-title>
              </v-list-item-content>
      </v-col>
            </template>
          </v-list-item>

          <v-divider
            v-if="index + 1 < jour1.length"
            :key="index"
          ></v-divider>
        </template>
      </v-list-item-group>
    </v-list>


      </v-tab-item>
      <!-- fin jour 1 -->
      <!-- jour 2 -->

       <v-tab-item
        :value="'tab-2'"
      >
        <v-list two-line>
      <v-list-item-group
        v-model="selected"
        multiple
        active-class="pink--text"
      >
        <template v-for="(item, index) in jour2">
          <v-list-item :key="item.id" class="no-padding">
            <template v-slot:default="{ active, toggle }">
       
       <v-col cols="4" sm="4" class="no-padding">
   
<v-img :src="img + item.chanteur[0].image" aspect-ratio="1.1"></v-img>
      </v-col>
      <v-col cols="8" sm="8">
        <v-list-item-content>
       <v-list-item-title  class="text-left font-weight-black" v-text="item.chanteur.nom"></v-list-item-title>
                <v-list-item-subtitle class=" text-left">{{ formatDate(item.dateDebut) }}-{{ formatDate(item.dateFin) }}</v-list-item-subtitle>
                <v-list-item-title class="text-left" v-text="item.information"></v-list-item-title>
              </v-list-item-content>
      </v-col>
            </template>
          </v-list-item>

          <v-divider
            v-if="index + 1 < jour2.length"
            :key="index"
          ></v-divider>
        </template>
      </v-list-item-group>
    </v-list>


      </v-tab-item>
<!-- fin jour 2 -->
<!-- jour 3 -->
  <v-tab-item
        :value="'tab-3'"
      >
        <v-list two-line>
      <v-list-item-group
        v-model="selected"
        multiple
        active-class="pink--text"
      >
        <template v-for="(item, index) in jour3">
          <v-list-item :key="item.id" class="no-padding">
            <template v-slot:default="{ active, toggle }">
       
       <v-col cols="4" sm="4" class="no-padding">
   
<v-img :src="img + item.chanteur[0].image" aspect-ratio="1.1"></v-img>
      </v-col>
      <v-col cols="8" sm="8">
        <v-list-item-content>
       <v-list-item-title  class="text-left font-weight-black" v-text="item.chanteur.nom"></v-list-item-title>
                <v-list-item-subtitle class=" text-left">{{ formatDate(item.dateDebut) }}-{{ formatDate(item.dateFin) }}</v-list-item-subtitle>
                <v-list-item-title class="text-left" v-text="item.information"></v-list-item-title>
              </v-list-item-content>
      </v-col>
            </template>
          </v-list-item>

          <v-divider
            v-if="index + 1 < jour3.length"
            :key="index"
          ></v-divider>
        </template>
      </v-list-item-group>
    </v-list>


      </v-tab-item>
</v-tabs-items>
    </div>

</template>

<script>
import moment from 'moment'
export default {
   data () {
    return {
      jour1: null,
      jour2: null,
      jour3: null,
      loading1: true,
      loading2: true,
      loading3: true,
      toggle_exclusive: undefined,
      selected: [2],
      img: 'http://jimmy-gout.com/uploads/images/chanteur_images/',
      tab: null,
    }
  },
  mounted () {
    // jour 1
    this.$axios
      .get(this.$api+'/evenements?dateDebut[before]=2020-07-22&dateDebut[after]=2020-07-21')
      .then(response => {
        this.jour1 = response.data
        console.log(this.jour1)
      })
      .finally(() => this.loading1 = false)
    // jour 2
    this.$axios
      .get(this.$api+'/evenements?dateDebut[before]=2020-07-23&dateDebut[after]=2020-07-22')
      .then(response => {
        this.jour2 = response.data
      })
      .finally(() => this.loading2 = false)
    // jour 3
      this.$axios
      .get(this.$api+'/evenements?dateDebut[before]=2020-07-24&dateDebut[after]=2020-07-23')
      .then(response => {
        this.jour3 = response.data
      })
      .finally(() => this.loading3 = false)

  },
  methods: {
    redirect: function (event) {
      if (event) {
        window.open(event , '_blank');
      }
    },
    formatDate: function(value){
    //return moment(String(value)).lang('fr').format('dddd Do MMMM YYYY [à] hh:mm')
    return moment(String(value)).format('HH[h]mm')
    // you dont have to use fromNow() it's just an example
  }
  }
}


</script>
<style>
.v-tabs-bar{
  height: 58px !important;
}
</style>