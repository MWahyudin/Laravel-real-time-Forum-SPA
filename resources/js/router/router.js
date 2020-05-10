import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


//Import Component
import Applogin from '../components/login/AppLogin'
import Appforum from '../components/menu/AppForum'
import Apppertanyaan from '../components/menu/Apppertanyaan'
import Appkategori from '../components/menu/Appkategori'

const routes = [
    { path: '/login', component: Applogin },
    { path: '/forum', component: Appforum },
    { path: '/pertanyaan', component: Apppertanyaan },
    { path: '/kategori', component: Appkategori },
]


const router = new VueRouter({
    routes,// short for `routes: routes`
    hasbang: false,
    mode: 'history'
})

export default router
