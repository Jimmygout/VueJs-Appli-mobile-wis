<template>
  <div id="api">
  <h1>Bitcoin Price Index</h1>

  <section v-if="errored">
    <p>Nous sommes désolés, nous ne sommes pas en mesure de récupérer ces informations pour le moment. Veuillez réessayer ultérieurement.</p>
  </section>

  <section v-else>
    <div v-if="loading">Chargement...</div>

    <div
      v-else
      v-for="currency in info"
      v-bind:key = "currency"
      class="currency"
    >
      {{ currency.description }}:
      <span class="lighten">
        <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
      </span>
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
      errored: false
    }
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  mounted () {
    this.$axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        this.info = response.data.bpi
        console.log(this.info);
      })
      .finally(() => this.loading = false)
  }
}
</script>