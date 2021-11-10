/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 *
 * 23.7.2021
 */

import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter)

const indexView = () => import("./views/index")
const notFound = () => import("./views/notFound")
const animes = () => import("./views/animes")
const anime = () => import("./views/anime")


const routes = [
    {
        path: '/',
        component: indexView,
        name: 'home',
        meta: {'title': "Главная", 'headerName': 'Главная'}
    },
    {
        path: '/animes',
        component: animes,
        name: 'animes',
        meta: {'title': "Аниме", 'headerName': 'Аниме'}
    },
    {
        path: '/animes/:id',
        component: anime,
        name: 'anime',
        meta: {'title': "Аниме", 'headerName': 'Аниме'}
    },
    {
        path: '/404',
        name: '404',
        component: notFound,
        meta: {'title': "Страница не найдена", 'headerName': '404'},
    },
    {
        path: '*',
        redirect: '/404'
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    document.title = "YukiDub.FUN | " + to.meta.title
    next()
})

export default router;
