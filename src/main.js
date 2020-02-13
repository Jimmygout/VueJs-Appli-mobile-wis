import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from 'axios'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueRecaptcha from 'vue-recaptcha';
import store from './store'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAPi_IbzFZ34FY2XBKw7sOXNqKhMzp8u_o',
    libraries: 'places',
  },
})

Vue.use(VueRecaptcha)

Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  vuetify,
  VueRecaptcha,
  axios,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
