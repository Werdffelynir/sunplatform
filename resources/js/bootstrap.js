import lodash from 'lodash';
import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';

import AppComponent from './components/App.vue';
import vuetify from './plugins/vuetify'
import store from './store';
import routes from './routes';
import requester from './requester';


/*window._ = lodash;*/
window.requester = requester;
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.Vue = Vue;

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({
    mode: 'history',
    routes,
});

Vue.config.productionTip = false;

new Vue({
    store,
    router,
    vuetify,
    el: '#app',
    components: {
        'app-component': AppComponent,
    },

    computed: {
        username () {
            return this.$route.params.username
        }
    },
    methods: {
        historyBack () {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        }
    }
});
