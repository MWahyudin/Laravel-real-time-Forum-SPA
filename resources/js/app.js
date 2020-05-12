window.Vue = require('vue');
import Vue from 'vue'
//Axioss
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
const JWT_token = `Bearer ${localStorage.getItem('token')}`
window.axios.defaults.headers.common['Authorization'] = JWT_token;

//vvuetify
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
window.EventBus = new Vue();
// const JWT_token = `Bearer ${localStorage.getItem('token')}`
// console.log(JWT_token);


//vue simplede
import VueSimplemde from 'vue-simplemde'
import 'simplemde/dist/simplemde.min.css'

Vue.component('vue-simplemde', VueSimplemde)


new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    router
})
