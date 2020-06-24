import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//Question Component
import createQuestion from '../Components/menu/Question/Create'
import QuestionRead from '../components/menu/Question/ReadQuestion'

//Category Component
import createCategory from '../components/menu/Category/Create'

//Auth Component
import Applogin from '../components/login/AppLogin'
import Applogout from '../components/login/AppLogout'
import appsignup from '../components/login/AppSignup.vue'



import Appforum from '../components/menu/AppForum'

// import EditQuestion from '../Components/menu/AppEditQuestion'

import beranda from '../components/Beranda.vue'

const routes = [
    //Question Path
	{
		path: '/',
		redirect:'/beranda'
	},
    { path: '/create-question', component: createQuestion },

    //Category Path
    { path: '/create-category', component: createCategory },

    //Auth Path
    { path: '/login', component: Applogin, name: 'login'},
    { path: '/logout', component: Applogout },
    { path: '/daftar', component: appsignup, name: 'signup'},
    
    
    
    { path: '/forum', component: Appforum, name:'forum'},

    
    { path: '/question/:slug', component: QuestionRead, name: 'QuestionRead'},
    { path: '/beranda', component: beranda, name: 'beranda'}
]


const router = new VueRouter({
    routes,// short for `routes: routes`
    hasbang: false,
    mode: 'history'
})

export default router
