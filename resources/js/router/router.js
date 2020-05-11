import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


//Import Component
import Applogin from '../components/login/AppLogin'
import Applogout from '../components/login/AppLogout'
import Appforum from '../components/menu/AppForum'
import Apppertanyaan from '../components/menu/Apppertanyaan'
import Appkategori from '../components/menu/Appkategori'
import appsignup from '../components/login/AppSignup.vue'

const routes = [
    { path: '/login', component: Applogin, name: 'login'},
    { path: '/logout', component: Applogout },
    { path: '/forum', component: Appforum, name:'forum'},
    { path: '/pertanyaan', component: Apppertanyaan },
    { path: '/kategori', component: Appkategori },
    { path: '/daftar', component: appsignup, name: 'signup'}
]


const router = new VueRouter({
    routes,// short for `routes: routes`
    hasbang: false,
    mode: 'history'
})

export default router
