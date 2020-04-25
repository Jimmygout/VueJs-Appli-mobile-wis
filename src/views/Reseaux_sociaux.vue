<template>
  <div class="partenaires">
    <h2 class="titre-h2">La communauté</h2>
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


            <v-list-item
              v-else
              v-for="reseaux in info"
              v-bind:key = reseaux.id
              v-on:click="redirect(reseaux.url)"
              ripple
            >
              <v-list-item-avatar style="width: 80px;">
                <v-icon> mdi-{{reseaux.type}} </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="reseaux.titre"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
    
    </div>

</template>

<script>
export default {
   data () {
    return {
      info: null,
      loading: true,
      img: 'http://jimmy-gout.com/uploads/images/partenaire/',
    }
  },
  mounted () {
    this.$axios
      .get(this.$api+'/reseaux_sociauxes?publier=true')
      .then(response => {
        this.info = response.data
      })
      .finally(() => this.loading = false)
  },
  methods: {
    redirect: function (event) {
      if (event) {
        window.open(event , '_blank');
      }
    }
  }
}


</script>