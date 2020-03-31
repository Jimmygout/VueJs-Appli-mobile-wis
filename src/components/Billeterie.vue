<template>
 <v-card style=" display:inline;">
            <v-img
              :src="img_billeterie"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
           <v-col class="text-center btn-billeterie" cols="12" sm="4">
      <div class="my-2">
        <v-btn class="btn_billeterie" v-bind:href="url_billeterie" depressed large>Billetrie</v-btn>
      </div>
           </v-col>
            </v-img>

          </v-card>
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
      url_billeterie: "https://billetto.fr/e/nation-sounds-festival-2020-billets-395081",
      img_billeterie: "https://images.pexels.com/photos/96380/pexels-photo-96380.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      titre_billeterie: "Billeterie"   
    }
  },
};
</script>
