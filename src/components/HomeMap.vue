<template>
   <GmapMap
  :center="{lat:48.8306379,lng:2.4354634}" 
  :zoom="12"
  map-type-id="terrain"
  style="width: 100%; height: 300px"
>
  <gmap-marker :position="{lat:48.8306379,lng:2.4354634}">
      </gmap-marker>
       <gmap-info-window :position="{lat:48.8306379,lng:2.4354634}">
        Nation Sounds
      </gmap-info-window>
</GmapMap>
</template>

<style lang="scss">


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
      url_img: this.localVue+"/uploads/"
    }
  },
};
</script>
