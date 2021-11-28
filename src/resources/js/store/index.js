import Vue from 'vue'
import Vuex from 'vuex'
import anime from '../store/modules/anime'
import user from '../store/modules/user'
import locale from '../store/modules/locale'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        anime,
        user,
        locale
    }
});