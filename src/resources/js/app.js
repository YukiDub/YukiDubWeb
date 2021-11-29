/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from "vue";

require('./bootstrap');
require('../css/app.css');
import i18n from "./helpers/i18n.js"
import router from "./vueRouter";
import store from './store';

window.Vue = require('vue').default;
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('nav-bar', require('./components/NavigationBarComponent.vue').default);
Vue.component('footer-component', require('./components/FooterComponent').default);
Vue.component('page-header', require('./components/PageHeaderComponent').default);
Vue.component('catalog-entry', require('./components/CatalogEntryComponent').default);
Vue.component('loading', require('./components/LoadingComponent').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

/**
 * 404 not found redirect
 */
axios.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response.status === 404) {
            router.push({name: '404'})
        } else {
            return Promise.reject(error)
        }
    }
)

const app = new Vue({
    store,
    el: '#app',
    router: router,
    i18n,
});
