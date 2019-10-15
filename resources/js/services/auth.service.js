// import $store from '../store'
// import state from '../store/Profile/state';
import $router from '../router/index'
import Vue from 'vue';
import {URL_GET_USER, URL_POST_LOGIN} from '../api';
import {commitWith, commitWithModule} from '../store/commitWith';
import {subscribersStart} from './auth.subscribers.service';
import {GET_CREDENTIALS, GET_USER} from '../store/Profile/getters';
import {SET_CREDENTIALS, SET_USER} from '../store/Profile/mutations';
import {getterWithModule} from '../store/getterWith';
import {localCredentials} from '../util/localStoreHandler';


subscribersStart();


export const getCredentials = () => {
    return getterWithModule('profile', GET_CREDENTIALS);
};

export const getUser = () => {
    return getterWithModule('profile', GET_USER);
};

export const isAuthorized = () => {
    return getterWithModule('profile', GET_CREDENTIALS).token && getterWithModule('profile', GET_USER).id ;
};

export const init = () => {
    if (!getCredentials().token && !getUser().id && location.pathname.lastIndexOf('/login') === -1) {
        $router.push('/login');
    }
};

export const makeLogin = (data) => {

    Vue.requesterPOST(URL_POST_LOGIN, data).then((response)=>{
        if (response.error) {
            // TODO: ErrorWrapper
            console.log('makeLogin response error',response);
        } else {
            const credentials = localCredentials.validate(response);
            if (credentials) {
                localCredentials.set(credentials);
                $router.push('/');
            } else {
                // TODO: ErrorWrapper
                console.log('makeLogin credentials error',response);
            }
        }

    }).catch((err)=>{
        // TODO: ErrorWrapper
        console.log('requesterPOST error', err)
    });

};

export const makeLogout = () => {
    Vue.requesterCredentialsRemove();
    localCredentials.remove();
    commitWithModule('profile', SET_USER, false);
    commitWithModule('profile', SET_CREDENTIALS, false);
    $router.push('/login');
};
