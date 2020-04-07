<template>
  <div class="programmes">
    <br>
    <Programes :localSf="localSf"/> <br>
  </div>
</template>

<script>

import Programes from '@/components/Programes.vue'
export default {
  name: 'programmes',
  components: {
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