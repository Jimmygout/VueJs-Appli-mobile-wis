<template>
  <div class="partenaires">

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
              v-for="partenaire in info"
              v-bind:key = partenaire.id
              v-on:click="redirect(partenaire.site)"
              ripple
            >
              <v-list-item-avatar style="width: 80px;">
                <img style="height: auto;" v-bind:src ="img + partenaire.logo">
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="partenaire.titre"></v-list-item-title>
                <v-list-item-subtitle v-html="partenaire.site"></v-list-item-subtitle>
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
      .get(this.$api+'/partenaires.json')
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
