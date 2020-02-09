<template>
  <div class="home">
    <CarouselAlertApi/>
    <Programes/>
    <Billeterie/>
    <NouvellesGenerales/>
    <Map/>
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
}
</script>
