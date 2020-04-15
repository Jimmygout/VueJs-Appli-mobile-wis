<template>
  <div id="app">
 <template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      id="menu"
    >
      <v-list dense>

<!-- MENU -->
        <router-link to="/">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Menu
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

<!-- Informations -->
        <router-link to="/informations">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-contact-mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Informations
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

<!-- Programmes -->
        <router-link to="/programmes">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-contact-mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Programmes
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>        

<!-- Billeterie -->
        <a v-bind:href="billeterie_link"> 
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-contact-mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Billeterie (autre site)
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </a>

<!-- Informations pratiques et FAQ -->
        <router-link to="/informations_pratiques">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-contact-mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Informations pratiques et FAQ
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

<!-- Carte interactive -->
        <router-link to="/carte_interactive">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-contact-mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Carte interactive 
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

<!-- Photos -->
        <router-link to="/photos">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-contact-mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Photos 
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link> 

<!-- Réseaux sociaux   -->
        <router-link to="/reseaux_sociaux">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-contact-mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Réseaux sociaux   
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link> 

<!-- Compte  -->
        <router-link to="/compte">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-contact-mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Compte   
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link> 
        
<!-- Partenaires  -->
        <router-link to="/partenaires">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-contact-mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Partenaires   
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link> 

<!-- TEST -->
        <router-link to="/about">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-contact-mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                About
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

<!-- contactez nous  -->
        <router-link to="/contact">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-contact-mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Contactez nous   
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link> 


      </v-list>
    </v-navigation-drawer>

<!-- NAVBAR -->
    <v-app-bar app color="blue-grey lighten-5">
      <v-app-bar-nav-icon class="btnNavbar" @click.stop="drawer = !drawer" />
      <v-toolbar-title>Nation Sounds</v-toolbar-title>
    </v-app-bar>

    <v-content id="content">
          <v-col class="text-center no-padding">

<!-- Affichage des page -->
    <router-view/>

          </v-col>
    </v-content>

    <!-- Pied de page -->
    <v-footer color="indigo"  app
    >
      <span class="white--text">&copy; Nation Sounds 2020</span>
    </v-footer>
  </v-app>
</template>
  
</div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.no-padding{
  padding: 0px !important;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#menu {
  background-color: snow;
}
#content {
  background-color: white;
}
</style>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      billeterie_link: "https://billetto.fr/e/nation-sounds-festival-2020-billets-395081/select"      
    }),
  }
</script>
