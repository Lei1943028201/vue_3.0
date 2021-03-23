import {createRouter, createWebHistory} from 'vue-router'
const routes = [
    {
        path: '/',
        meta: {
            transaction: 'fade'
        },
        redirect: '/login',
    },
    {
        path: '/login',
        name: '登陆',
        meta: {
            transaction: 'fade'
        },
        component: () => import('../pages/AppLogin.vue'),
    },
    {
        path: '/home',
        name: '首页',
        meta: {
            transaction: 'fade'
        },
        component: () => import('../pages/AppHome.vue'),
    },
    {
        path: '/news',
        name: '新闻',
        meta: {
            transaction: 'fade'
        },
        component: () => import('../pages/AppHome.vue'),
    },
    {
        path: '/games',
        name: '游戏',
        meta: {
            transaction: 'fade'
        },
        component: () => import('../pages/AppHome.vue'),
    },
    {
        path: '/music',
        name: '音乐',
        meta: {
            transaction: 'fade'
        },
        component: () => import('../pages/AppHome.vue'),
    },
    {
        path: '/movie',
        name: '电影',
        meta: {
            transaction: 'fade'
        },
        component: () => import('../pages/AppHome.vue'),
    },
    {
        path: '/note',
        name: '笔记',
        meta: {
            transaction: 'fade'
        },
        component: () => import('../pages/AppHome.vue'),
    },
    {
        path: '/message',
        name: '留言板',
        meta: {
            transaction: 'fade'
        },
        component: () => import('../pages/AppHome.vue'),
    },
    {
        path: '/search',
        name: 'search',
        meta: {
            transaction: 'fade'
        },
        component: () => import('../pages/AppHome.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
