import Vue from 'vue';
import {URL_GET_USER, URL_POST_PROFILE_UPDATE} from '../api';
import {SET_CREDENTIALS, SET_USER} from '../store/Profile/mutations';
import {commitWith} from '../store/commitWith';
import {subscribeTo} from '../store/subscribeTo';

export const saveUser = function (data) {
    Vue.requesterPOST(URL_POST_PROFILE_UPDATE, data).then((response)=>{
        console.log('Service saveUser response::', response);
        commitWith('profile/' + SET_USER, data);
    }).catch((err)=>{
        console.log('Service saveUser "profile.service.js" throw error: ', err.message());
    })
};
