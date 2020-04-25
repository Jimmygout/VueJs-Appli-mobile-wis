<template>
  <div class="partenaires">
    <h2 class="titre-h2">Le programme</h2>

<v-tabs
      v-model="tab"
      background-color="deep-purple accent-4"
      centered
      dark
      icons-and-text
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
        <span>Jour 1</span>
      </v-tab>

      <v-tab href="#tab-2">
        <span>Jour 2</span>
      </v-tab>

      <v-tab href="#tab-3">
        <span>Jour 3</span>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        :value="'tab-3'"
      >
        <v-card flat>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>

 <v-row
        align="center"
        justify="center"
        class="mt-4"
      >
        <v-btn-toggle
          v-model="toggle_exclusive"
          rounded
        >
          <v-btn>
            <span>Par heure</span>
          </v-btn>
          <v-btn>
            <span>Par lieu</span>
          </v-btn>
        </v-btn-toggle>
      </v-row>

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
              v-on:click="redirect(partenaire.url)"
              ripple
            >
              <v-list-item-avatar style="width: 80px;">
                <v-icon> mdi-{{partenaire.type}} </v-icon>
                <!--<img style="height: auto;" v-bind:src ="img + partenaire.logo">-->
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="partenaire.titre"></v-list-item-title>
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
       tab: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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