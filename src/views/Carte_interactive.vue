<template>
  <div class="map">
    <br>
    <Map :localVue="localVue"/>
  </div>
</template>

<script>

import Map from '@/components/Map.vue'
export default {
  name: 'home',
  components: {
  Map
  },
  data: function() {
    return {
      localSf:"http://localhost:8000",
      localVue:"http://localhost:8001"
    };
  }
}
</script>