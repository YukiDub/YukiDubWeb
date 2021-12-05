/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 *
 * 23.7.2021
 */

import VueRouter from 'vue-router';
import Vue from 'vue';
import friends from "./views/user/friends";
import userTitlesList from "./views/user/userTitlesList";

Vue.use(VueRouter)

const indexView = () => import("./views/index")
const notFound = () => import("./views/notFound")
const animes = () => import("./views/animes")
const anime = () => import("./views/anime")
const userProfile = () => import("./views/user/userProfile")


const routes = [
    {
        path: '/',
        component: indexView,
        name: 'home',
        meta: {'title': 'Главная', 'headerName': 'home'}
    },
    {
        path: '/animes',
        component: animes,
        name: 'animes',
        meta: {'title': "Аниме", 'headerName': 'anime'}
    },
    {
        path: '/animes/:id',
        component: anime,
        name: 'anime',
        meta: {'title': "Аниме", 'headerName': 'anime'}
    },
    {
        path: '/:name',
        component: userProfile,
        name: 'user.profile',
        meta: {'title': "Пользователи", 'headerName': 'users'}
    },
    {
        path: '/:name/friends',
        component: friends,
        name: 'user.friends',
        meta: {'title': "Пользователи", 'headerName': 'users'}
    },
    {
        path: '/:name/:category',
        component: userTitlesList,
        name: 'user.titles',
        meta: {'title': "Пользователи", 'headerName': 'users'}
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
