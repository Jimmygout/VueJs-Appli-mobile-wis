<template>
  <div class="home">
    <CarouselAlertApi :localSf="localSf"/>
    <Programes :localSf="localSf"/>
    <Billeterie/>
    <NouvellesGenerales :localSf="localSf"/>
    <Map :localVue="localVue"/>
  </div>
</template>

<script>
import CarouselAlertApi from '@/components/CarouselAlertApi.vue'
import Programes from '@/components/Programes.vue'
import Billeterie from '@/components/Billeterie.vue'
import NouvellesGenerales from '@/components/NouvellesGenerales.vue'
import Map from '@/components/Map.vue'
export default {
  name: 'home',
  components: {
  CarouselAlertApi,
  Billeterie,
  NouvellesGenerales,
  Map,
  Programes
  },
  data: function() {
    return {
      localSf:"http://localhost:8000",
      localVue:"http://localhost:8001"
    };
  }
}
</script>
