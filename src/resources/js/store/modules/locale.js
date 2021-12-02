import Vue from 'vue';
import Vuex from 'vuex';
import i18n, { selectedLocale } from '../../utils/i18n';

Vue.use(Vuex);

export default{
    state: {
        locale: selectedLocale
    },
    getters: {
        getLocale: state => state.locale
    },
    mutations: {
        updateLocale(state, newLocale) {
            i18n.locale = newLocale
            state.locale = newLocale
            localStorage.setItem('locale', newLocale);
        }
    },
}