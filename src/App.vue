<template>
  <div id="app">
 <template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
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

<!-- BITCOIN -->
        <router-link to="/bitcoin">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-contact-mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Bitcoin
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


      </v-list>
    </v-navigation-drawer>

<!-- NAVBAR -->
    <v-app-bar
      app
      color="dark"
      dark
    >
      <v-app-bar-nav-icon class="btnNavbar" @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
          <v-col class="text-center no-padding">

<!-- Affichage des page -->
    <router-view/>

          </v-col>
    </v-content>

    <!-- Pied de page -->
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy;Jimmy Gout 2020</span>
    </v-footer>
  </v-app>
</template>

<!--
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/test">Test</router-link>
    </div>
    -->
    
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
</style>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
  }
</script>
