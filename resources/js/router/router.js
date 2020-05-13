import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//Question Component
import createQuestion from '../Components/menu/Question/Create'
import QuestionRead from '../components/menu/Question/ReadQuestion'


//Import Component
import Applogin from '../components/login/AppLogin'
import Applogout from '../components/login/AppLogout'
import Appforum from '../components/menu/AppForum'

// import EditQuestion from '../Components/menu/AppEditQuestion'
import Appkategori from '../components/menu/Appkategori'
import appsignup from '../components/login/AppSignup.vue'
import beranda from '../components/menu/Beranda.vue'

const routes = [
    //Question Path
    { path: '/create-question', component: createQuestion },


    { path: '/login', component: Applogin, name: 'login'},
    { path: '/logout', component: Applogout },
    { path: '/forum', component: Appforum, name:'forum'},

    { path: '/kategori', component: Appkategori },
    { path: '/daftar', component: appsignup, name: 'signup'},
    { path: '/question/:slug', component: QuestionRead, name: 'QuestionRead'},
    { path: '/beranda', component: beranda, name: 'beranda'}
]


const router = new VueRouter({
    routes,// short for `routes: routes`
    hasbang: false,
    mode: 'history'
})

export default router
