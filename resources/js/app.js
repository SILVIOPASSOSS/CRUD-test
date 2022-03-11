require('./bootstrap');
import vue from 'vue';
window.Vue = vue;

import App from './components/App.vue';

//import axios
import VueAxios from 'vue-axios';
import axios from 'axios';


// Vue-router = import e config
import VueRouter from 'vue-router';
import {routes} from './routes';
import Vue from 'vue';
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

export const eventBus = new Vue();

const app = new Vue({
    el: '#app',
    router:router,
    render: h => h(App)
});
