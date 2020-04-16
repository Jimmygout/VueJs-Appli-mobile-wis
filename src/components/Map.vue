<template>
<div>
  
    <v-radio-group row wrap label="Afficher sur la carte :"  class="test">
      
      <v-switch v-model="buvettes" class="mx-4" label="Buvettes"></v-switch>
      <v-switch v-model="parkings" class="mx-4" label="Parkings"></v-switch>
      <v-switch v-model="boutiques" class="mx-4" label="Boutiques"></v-switch>
      <v-switch v-model="concerts" class="mx-4" label="Concerts"></v-switch>
      <v-switch v-model="standsInfos" class="mx-4" label="Stands d'informations"></v-switch>
      <v-switch v-model="toilettes" class="mx-4" label="Toilettes"></v-switch>
    </v-radio-group>

   <GmapMap :center="{lat:48.8411233,lng:2.4552507}" :zoom="12" map-type-id="terrain" style="width: 100%; height: 550px">

  <gmap-marker :position="{lat:48.8411233,lng:2.4552507}">
      </gmap-marker>
       <gmap-info-window :position="{lat:48.8411233,lng:2.4552507}">
        Nation Sounds
      </gmap-info-window>
</GmapMap>
</div>
</template>

<style lang="scss">
.test {
  background-color: #f1f1f1;
  margin-bottom: 37px;
}

</style>

<script>
export default {
  name: 'Map',
  props:{
    localVue:String
  },
    data () {
    return {
      info: null,
      loading: true,
      errored: false,
      url_img: this.localVue+"/uploads/",
      // données carte
      buvettes: true,
      parkings: true,
      boutiques: true,
      concerts: true,
      standsInfos: true,
      toilettes: true,
    }
  },
};
</script>
