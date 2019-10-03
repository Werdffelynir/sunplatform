import Vue from 'vue';
import {URL_GET_USER} from '../api';
import {SET_CREDENTIALS, SET_USER} from '../store/Profile/mutations';
import {commitWith} from '../store/commitWith';
import {subscribeTo} from '../store/subscribeTo';

export const saveUser = function (data) {
    Vue.requesterPOST(URL_GET_USER).then((response)=>{


        commitWith('profile/' + SET_USER, data);
    }).catch((err)=>{
        console.log('err', err)
    })
};
