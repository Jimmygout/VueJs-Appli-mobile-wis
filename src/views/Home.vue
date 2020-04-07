<template>
  <div class="home">
    <br>
    <h1> Nouvelles importantes </h1>
    <CarouselAlertApi :localSf="localSf"/> <br>
    <h1> Concert à venir </h1>
    <ProgramesVenir :localSf="localSf"/> 
    <h1> Billeterie </h1>
    <Billeterie/> <br>
    <h1> Nouvelles générales </h1>
    <CarouselNouvellesGenerales :localSf="localSf"/> <br>
    <h1> Carte Interactive </h1>
    <Map :localVue="localVue"/>
  </div>
</template>

<script>
import CarouselAlertApi from '@/components/CarouselAlertApi.vue'
import ProgramesVenir from '@/components/ProgramesVenir.vue'
import Billeterie from '@/components/Billeterie.vue'
import CarouselNouvellesGenerales from '@/components/CarouselNouvellesGenerales.vue'
import Map from '@/components/Map.vue'
export default {
  name: 'home',
  components: {
  CarouselAlertApi,
  Billeterie,
  CarouselNouvellesGenerales,
  Map,
  ProgramesVenir
  },
  data: function() {
    return {
      localSf:"http://localhost:8000",
      localVue:"http://localhost:8001"
    };
  }
}
</script>
