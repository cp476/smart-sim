import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VTooltip from 'v-tooltip';
import GlobalComponents from './components/global';

import '../public/api';
import './scss/index.scss';

Vue.use(VTooltip);
Vue.use(GlobalComponents);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
