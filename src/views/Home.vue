<template>
  <div class="home">
    <br>
    <CarouselAlertApi :localSf="localSf"/> <br>
    <h1> Concert à venir </h1>
    <ProgramesVenir :localSf="localSf"/> 
    <h1> Billeterie </h1>
    <Billeterie/> <br>
    <h1> Nouvelles générales </h1>
    <CarouselNouvellesGenerales :localSf="localSf"/> <br>
    <h1> Carte Interactive </h1>
    <HomeMap :localVue="localVue"/>
  </div>
</template>

<script>
import CarouselAlertApi from '@/components/CarouselAlertApi.vue'
import ProgramesVenir from '@/components/ProgramesVenir.vue'
import Billeterie from '@/components/Billeterie.vue'
import CarouselNouvellesGenerales from '@/components/CarouselNouvellesGenerales.vue'
import HomeMap from '@/components/HomeMap.vue'
export default {
  name: 'home',
  components: {
  CarouselAlertApi,
  Billeterie,
  CarouselNouvellesGenerales,
  HomeMap,
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
