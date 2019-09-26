import Vue from 'vue'
import Vuex from 'vuex'
import UIModule from './UIModule'
import DomainModule from './DomainModule'
import ProfileModule from './ProfileModule'


Vue.use(Vuex);

const store = new Vuex.Store({
    strict: true,
    modules: {
        ui: UIModule,
        domains: DomainModule,
        profile: ProfileModule,
    },
});

export default store;
