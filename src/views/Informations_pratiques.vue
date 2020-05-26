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
      localSf:"http://jimmy-gout.com"
    };
  }
}
</script>
