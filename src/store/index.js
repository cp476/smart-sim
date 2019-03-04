import Vue from 'vue';
import Vuex from 'vuex';
import filters from './modules/filters';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        filters,
        user
    }
});
