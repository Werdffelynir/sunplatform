import Vue from 'vue';
import {URL_GET_DOMAINS, URL_POST_PROFILE_UPDATE} from '../api';
import {SET_USER} from '../store/Profile/mutations';
import {commitWith} from '../store/commitWith';
import {SET_DOMAINS_LIST} from '../store/Domains/mutations';

export const loadUserDomains = function () {
    Vue.requesterGET(URL_GET_DOMAINS).then((response)=>{
        console.log('Service loadUserDomains response::', response);
        // commitWith('domains/' + SET_DOMAINS_LIST, response);
    }).catch((err)=>{
        console.log('Service loadUserDomains "domains.service.js" throw error: ', err.message);
    })
};
