import Vue from 'vue'
import Vuex from 'vuex'
import UIModule from './UIModule'
import DomainModule from './DomainModule'


Vue.use(Vuex);

const store = new Vuex.Store({
    strict: true,
    modules: {
        ui: UIModule,
        domains: DomainModule
    },
});

export default store;
