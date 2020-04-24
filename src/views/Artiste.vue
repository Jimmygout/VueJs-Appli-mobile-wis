<template>
  <div class="artiste">
    
    <InfoArtiste :localSf="localSf" :artisteID="$route.params.artisteID"/>
  </div>
</template>

<script>
import InfoArtiste from '@/components/InfoArtiste.vue'
export default {
  name: 'artiste',
  components: {
  InfoArtiste
  },
    props:{
    artisteID:String
  },
  data: function() {
    return {
      localSf:"http://localhost:8000",
      localVue:"http://localhost:8001",
    };
  }
}
</script>