window.Vue = require('vue');
import Vue from 'vue'
window.axios = require('axios');
import Vuetify from 'vuetify'

//Material Design icon
import '@mdi/font/css/materialdesignicons.css'



//Vue Router
import router from './Router/router.js'

Vue.use(Vuetify)


// export default new Vuetify({
//     icons: {
//         iconfont: 'mdi', // default - only for display purposes
//     },
// })


//Component Initialize
import apphome from './components/AppHome.vue';

//Register Component
Vue.component('home', apphome);


//Helpers

import User from './Helpers/User.js'
window.User = User
console.log(User.id());





new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    router
})
