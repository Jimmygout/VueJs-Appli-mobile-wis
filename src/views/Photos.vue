<template>
  <div class="partenaires">
    <h2 class="titre-h2">Mes photos</h2>
    
        <v-subheader>May</v-subheader>
        <v-container fluid>
          <v-row>
            <v-col
              v-for="i in 6"
              :key="i"
              cols="4"
            >
              <img
                :src="`https://randomuser.me/api/portraits/men/${i + 20}.jpg`"
                alt="lorem"
                class="image"
                height="100%"
                width="100%"
              >
            </v-col>
          </v-row>
        </v-container>

        <v-subheader>June</v-subheader>
        <v-container fluid>
          <v-row>
            <v-col
              v-for="i in 6"
              :key="i"
              cols="4"
            >
              <img
                :src="`https://randomuser.me/api/portraits/women/${i + 5}.jpg`"
                alt="lorem"
                class="image"
                height="100%"
                width="100%"
              >
            </v-col>
          </v-row>
        </v-container>

        <v-footer class="mt-12"></v-footer>

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
      .get(this.$api+'/partenaires?publier=true')
      .then(response => {
        this.info = response.data
      })
      .finally(() => this.loading = false)
  },
  methods: {
    redirect: function (url) {
      if (url) {
        window.open(url , '_blank');
      }
    }
  }
}


</script>

