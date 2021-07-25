/*
 * Copyright (c) YukiDub. Author: M9snikFeed <m9snikfeed@gmail.com>.
 *
 * 23.7.2021
 */

import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter)

// const index = () => import("./views/index")

// import index from "./views/index"


const routes = [
    {
        path: '/',
        // component: index
    }
]


const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
