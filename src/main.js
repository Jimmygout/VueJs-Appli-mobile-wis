import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from 'axios'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueRecaptcha from 'vue-recaptcha';
import store from './store'
import moment from 'moment'


Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAPi_IbzFZ34FY2XBKw7sOXNqKhMzp8u_o',
        libraries: 'places',
    },
})

Vue.use(VueRecaptcha, moment)

Vue.prototype.$axios = axios
Vue.prototype.$api = 'http://jimmy-gout.com/api'

Vue.config.productionTip = false

new Vue({
    vuetify,
    VueRecaptcha,
    axios,
    router,
    store,
    moment,
    render: h => h(App)
}).$mount('#app')