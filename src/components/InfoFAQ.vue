<template>
    <div>
        <h2> Informations pratiques et FAQ</h2>
        <br>
        <v-card>
      <v-tabs v-model="tab" background-color="primary" dark>
        <v-tab v-for="item in faq" :key="item.tab" >
          {{ item.tab }}
        </v-tab>
      </v-tabs>
  
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in faq" :key="item.tab">
          <v-card flat>
            <v-card-text>{{ item.content }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
    <br>
    <v-expansion-panels focusable>
      <v-expansion-panel v-for="(item,i) in 5" :key="i">
        <v-expansion-panel-header>Item</v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
      </div>
    
</template>

<script>
export default {
  name: 'InfoFAQ',
  props:{
    localSf:String
  },
    data () {
    return {
      info: null,
      loading: true,
      errored: false,
      tab: null,
      /*faq: [
      { titre: 'Question 1', question: 'Question 1', response: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",theme="evenement" },
      { titre: 'Question 2', question: 'Question 2', response: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",theme="evenement" },
      { titre: 'Question 3', question: 'Question 3', response: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",theme="evenement" },
      { titre: 'Question 4', question: 'Question 4', response: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",theme="concert" },
      { titre: 'Question 5', question: 'Question 5', response: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",theme="concert" },
      { titre: 'Question 6', question: 'Question 6', response: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",theme="carte" },
      { titre: 'Question 7', question: 'Question 7', response: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",theme="carte" },
      { titre: 'Question 8', question: 'Question 8', response: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",theme="application" },
      { titre: 'Question 9', question: 'Question 9', response: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",theme="application" }
      ]*/
      faq: [
        { tab: 'Evenement', content: 'Tab 1 Content' },
        { tab: 'Concert', content: 'Tab 2 Content' },
        { tab: 'Application', content: 'Tab 3 Content' },
        { tab: 'Carte', content: 'Tab 4 Content' },
      ],
    }
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  mounted () {
    this.$axios
      .get(this.localSf+'/api/actualites.json')
      .then(response => {
        this.info = response.data
      })
      .finally(() => this.loading = false)
  }
};
</script>
