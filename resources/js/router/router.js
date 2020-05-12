import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


//Import Component
import Applogin from '../components/login/AppLogin'
import Applogout from '../components/login/AppLogout'
import Appforum from '../components/menu/AppForum'
import BuatPertanyaan from '../Components/menu/AppBuatPertanyaan'
import Appkategori from '../components/menu/Appkategori'
import read from '../components/menu/AppRead'
import appsignup from '../components/login/AppSignup.vue'
import beranda from '../components/menu/Beranda.vue'

const routes = [
    { path: '/login', component: Applogin, name: 'login'},
    { path: '/logout', component: Applogout },
    { path: '/forum', component: Appforum, name:'forum'},
    { path: '/pertanyaan', component: BuatPertanyaan },
    { path: '/kategori', component: Appkategori },
    { path: '/daftar', component: appsignup, name: 'signup'},
    { path: '/question/:slug', component: read, name: 'read'},
    { path: '/beranda', component: beranda, name: 'beranda'}
]


const router = new VueRouter({
    routes,// short for `routes: routes`
    hasbang: false,
    mode: 'history'
})

export default router
