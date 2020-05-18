<template>
<div>
 <v-card v-for="(billet, i) in info" :key="i" style=" display:inline;" >
            <v-img
              :src="img + billet.image"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
           <v-col class="text-center btn-billeterie" cols="12" sm="4">
      <div class="my-2">
        <v-btn class="btn_billeterie" v-bind:href="billet.urlSite" v-bind:target="'_blank'" depressed large>{{ billet.Titre }}</v-btn>
      </div>
           </v-col>
            </v-img>

          </v-card>
          </div>
</template>

<style lang="scss">

.btn-billeterie{
      padding: 70px ;
}
.btn_billeterie
{
  width: 15rem !important;
  box-shadow: 1px 3px 12px 4px rgb(0, 0, 0) !important;
  background-color: #f5f5f59c !important;
}
.style_none{
  text-decoration: none;
}


</style>

<script>
export default {
  name: 'Billeterie',
    data () {
    return {
      info: null,
      loading: true,
      errored: false,
      img: 'http://jimmy-gout.com/uploads/images/billetterie/',
    }
  },
   mounted () {
    this.$axios
      .get(this.$api+'/billetteries')
      .then(response => {
        this.info = response.data
      })
      .finally(() => this.loading = false)
  }
};
</script>
