<template>
   <GmapMap
  :center="{lat:1.38, lng:103.8}" 
  :zoom="12"
  map-type-id="terrain"
  style="width: 100%; height: 300px"
>
  <gmap-marker :position="{lat:1.38, lng:103.8}">
      </gmap-marker>
       <gmap-info-window :position="{lat:1.38, lng:103.8}">
        Hello world!
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
