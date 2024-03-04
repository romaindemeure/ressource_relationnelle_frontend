import * as VueRouter from 'vue-router';
import MainPages from '../views/Main.vue'


const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Main',
            component: MainPages,
        }
    ]
})

export default router;