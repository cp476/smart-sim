import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VTooltip from 'v-tooltip';
import GlobalComponents from './components/global';
import firebase from 'firebase';
import 'firebase/firestore'
import VueFire from 'vuefire'



import '../public/api';
import './scss/index.scss';

Vue.use(VTooltip);
Vue.use(GlobalComponents);
Vue.use(VueFire)
Vue.config.productionTip = false;

var config = {
    apiKey: "AIzaSyBYSoc_s9i8lopmEhfhxQqHUf_4OovAARo",
    authDomain: "cp476smart-sim.firebaseapp.com",
    databaseURL: "https://cp476smart-sim.firebaseio.com",
    projectId: "cp476smart-sim",
    storageBucket: "cp476smart-sim.appspot.com",
    messagingSenderId: "21155837719"
  };

firebase.initializeApp(config);

export const db = firebase.firestore();


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
