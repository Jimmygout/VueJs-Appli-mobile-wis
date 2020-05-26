<template>
  <div>
    <h2>Informations pratiques et FAQ</h2>
    <br />

    <v-tabs v-model="tab" background-color="primary" dark show-arrows>
      <v-tab v-for="item in themes" :key="item.id" :href="'#tab-'+item.id">
        {{ item.theme }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">

      <v-tab-item :value="'tab-1'">
        <v-expansion-panels focusable>
          <v-expansion-panel v-for="item in application" :key="item.id">
            <v-expansion-panel-header>
              {{ item.question }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ item.reponse }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-tab-item>

       <v-tab-item :value="'tab-2'">
        <v-expansion-panels focusable>
          <v-expansion-panel v-for="item in carte" :key="item.id">
            <v-expansion-panel-header>
              {{ item.question }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ item.reponse }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-tab-item>

       <v-tab-item :value="'tab-3'">
        <v-expansion-panels focusable>
          <v-expansion-panel v-for="item in concert" :key="item.id">
            <v-expansion-panel-header>
              {{ item.question }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ item.reponse }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-tab-item>

       <v-tab-item :value="'tab-4'">
        <v-expansion-panels focusable>
          <v-expansion-panel v-for="item in evenement" :key="item.id">
            <v-expansion-panel-header>
              {{ item.question }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ item.reponse }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-tab-item>

    </v-tabs-items>

    <br />
  </div>
</template>

<script>
export default {
  name: "InfoFAQ",
  props: {
    localSf: String,
  },
  data() {
    return {
      evenement: null,
      application: null,
      concert: null,
      carte: null,
      loading: true,
      errored: false,
      tab: null,
      themes: [
        { id: 1, theme: "application" },
        { id: 2, theme: "carte" },
        { id: 3, theme: "concert" },
        { id: 4, theme: "evenement" },
      ],
    };
  },
  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    },
  },
  mounted() {
    // theme evenement
    this.$axios
      .get(this.localSf + "/api/faqs?theme=evenement&publier=true")
      .then((response) => {
        this.evenement = response.data;
      })
      .finally(() => (this.loading = false));

    // theme application
    this.$axios
      .get(this.localSf + "/api/faqs?theme=application&publier=true")
      .then((response) => {
        this.application = response.data;
      })
      .finally(() => (this.loading = false));

    // theme carte
    this.$axios
      .get(this.localSf + "/api/faqs?theme=carte&publier=true")
      .then((response) => {
        this.carte = response.data;
      })
      .finally(() => (this.loading = false));

    // theme concert
    this.$axios
      .get(this.localSf + "/api/faqs?theme=concert&publier=true")
      .then((response) => {
        this.concert = response.data;
      })
      .finally(() => (this.loading = false));
  },
};
</script>
