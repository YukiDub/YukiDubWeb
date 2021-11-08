import Vue from 'vue'
import Vuex from 'vuex'
import anime from '../store/modules/anime'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        anime,
    }
});