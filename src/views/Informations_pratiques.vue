<template>
  <div class="infoFAQ">
    <InfoFAQ :localSf="localSf"/>
  </div>
</template>

<script>
import InfoFAQ from '@/components/InfoFAQ.vue'

export default {
  name: 'InfoPratique',
  components: {
    InfoFAQ
  },
  data: function() {
    return {
      localSf:"http://localhost:8000",
      localVue:"http://localhost:8001"
    };
  }
}
</script>
