import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Main from '../views/Main.vue'
import NProgress from 'vue-nprogress'
import 'nprogress/nprogress.css';
import store from '@/store'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            showProgressBar: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            showProgressBar: true
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {
            showProgressBar: true
        }
    },
    {
        path: '/reset',
        name: 'Reset',
        component: () =>
            import ('../views/Reset.vue'),
        meta: {
            showProgressBar: true
        }
    },
    {
        path: '/withdraw',
        name: 'Withdraw',
        component: () =>
            import ('../views/Withdraw.vue'),
        meta: {
            showProgressBar: true
        }
    },
    {
        path: '/forgot',
        name: 'Forgot',
        component: () =>
            import ("../views/Forgot.vue"),
        meta: {
            showProgressBar: true
        }
    },
    {
        path: '/edit',
        name: 'Settings',
        component: () =>
            import ("../views/Settings.vue"),
        meta: {
            showProgressBar: true
        }
    },
    {
        path: '/game_history',
        name: 'GameHistory',
        component: () =>
            import ("../views/GameHistory.vue"),
        meta: {
            showProgressBar: true
        }
    },
    {
        path: '/home',
        name: 'Main',
        component: Main,
        meta: {
            showProgressBar: true
        },
        beforeEnter: (to, from, next) => {
            if (!store.getters['auth/authenticated']) {
                return next({
                    name: 'Login'
                })
            }
            next()
        }
    },
    {
        path: '/admin',
        name: 'Admin',
        component: () =>
            import ("../views/Admin.vue"),
        beforeEnter: (to, from, next) => {
            if (!store.getters['auth/authenticated']) {
                return next({
                    name: 'Login'
                })
            } else {
                if (!store.getters['auth/authenticated'].admin) {
                    return next({
                        name: 'Login'
                    })
                }
            }
            next()
        }
    },
    {
        path: '/profile',
        name: 'Profile',
        meta: {
            showProgressBar: true
        },
        component: () =>
            import ("../views/Profile.vue"),
        beforeEnter: (to, from, next) => {
            if (!store.getters['auth/authenticated']) {
                return next({
                    name: 'Login'
                })
            }
            next()
        }
    },
    {
        path: '*',
        name: 'Not Found',
        component: () =>
            import ("../views/404.vue")
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});


router.beforeResolve((to, from, next) => {
    if (to.path) {
        NProgress.start()
    } else if (from.path()) {
        NProgress.start();
    }
    next()
});

// router.afterEach(() => {
//   NProgress.done()
// });


export default router