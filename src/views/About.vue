<template>
  <div class="about">
    <section>
    <div v-if="loading" class="load">
      <div class="text-center">
        <v-progress-circular
        :size="70"
        :width="7"
        color="purple"
        indeterminate
      ></v-progress-circular>
      </div>
    </div>

    <div
      v-else
      v-for="apropos in info"
      v-bind:key = apropos.id
    >
    <h2 class="titre-h2">{{ apropos.titre }}</h2>
     <p>
       {{ apropos.designation }}
     </p>
      
    </div>

  </section>
  </div>
</template>

<script>
export default {
   data () {
    return {
      info: null,
      loading: true,
    }
  },
  mounted () {
    this.$axios
      .get(this.$api+'/apropos.json')
      .then(response => {
        this.info = response.data
      })
      .finally(() => this.loading = false)
  },
}
</script>
