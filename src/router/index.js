import Vue from 'vue';
// import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router);
// Vue.use(BootstrapVue)

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

export default new Router({
    mode: 'history',
    routes
});
