import {createRouter, createWebHistory} from 'vue-router'
import Alt from '../views/Alt.vue'
import Home from '../views/Home.vue'

const routes = [
    {
        path:'/',
        component: Home
    },
    {
        path:'/home',
        component: Home
    },
    {
        path:'/alt',
        component: Alt
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes:routes
})
export default router