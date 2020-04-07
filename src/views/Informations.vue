<template>
  <div class="informations">
    <br>
    <AlertApi :localSf="localSf"/> <br>
   <NouvellesGenerales :localSf="localSf"/> <br>
  </div>
</template>

<script>
import AlertApi from '@/components/AlertApi.vue'
import NouvellesGenerales from '@/components/NouvellesGenerales.vue'
export default {
  name: 'informations',
  components: {
    AlertApi,
    NouvellesGenerales
  },
  data: function() {
    return {
      localSf:"http://localhost:8000",
      localVue:"http://localhost:8001"
    };
  }
}
</script>