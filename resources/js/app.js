window.Vue = require('vue');
import Vue from 'vue'
import Vuetify from 'vuetify'

//Material Design icon
import '@mdi/font/css/materialdesignicons.css'

//Vue Router
import router from './Router/router.js'

Vue.use(Vuetify)

export default new Vuetify({
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
})


//Component Initialize
import apphome from './components/AppHome.vue';


//Initialize Vuetify
Vue.use(Vuetify)

//Register Component
Vue.component('home', apphome);


new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    router
})
