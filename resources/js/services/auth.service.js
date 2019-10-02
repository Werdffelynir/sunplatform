import $store from '../store'
import state from '../store/Profile/state';
import $router from '../router/index'
import Vue from 'vue';
import {URL_GET_USER, URL_POST_LOGIN} from '../api';
import {SET_CREDENTIALS, SET_USER} from '../store/Profile/mutations';
import {commitWith, commitWithModule} from '../store/commitWith';
import {subscribersStart} from './auth.subscribers.service';
import {GET_CREDENTIALS} from '../store/Profile/getters';
import {getterWithModule} from '../store/getterWith';


export const LocalStoreCredentials = {
    session: 'credentials',
    set: (crs) => localStorage.setItem(LocalStoreCredentials.session, JSON.stringify(crs)),
    get: () => JSON.parse(localStorage.getItem(LocalStoreCredentials.session)),
    remove: () => localStorage.removeItem(LocalStoreCredentials.session),
    credentials: (crs) => LocalStoreCredentials.validate(crs || LocalStoreCredentials.get()),
    validate: (crs) => {
        const {token, token_type, expires_at} = crs;
        if (!crs || !token || !token_type || !expires_at )
            throw new Error('Credentials not valid');
        if (token.length < 1000)
            throw new Error('Token not valid');
        if (token_type !== 'Bearer')
            throw new Error('Token type is not equal "Bearer"');
        if ((new Date(expires_at)).getTime() <= (new Date()).getTime()) {
            LocalStoreCredentials.remove();
            throw new Error('Token access time is expired');
        }
        return {token, token_type, expires_at};
    }
};

const initializeStack = {
    credentials: (credentials) => {
        Vue.requesterCredentials(credentials);
        commitWith(['profile', SET_CREDENTIALS].join('/'), credentials);
        LocalStoreCredentials.set(credentials);
    }
};

export const init = () => {
    subscribersStart();
    try {
        let credentials = LocalStoreCredentials.credentials();
        if (credentials) {
            initializeStack.credentials(credentials);
        }
    } catch (e) {
        if (location.pathname.lastIndexOf('/login') === -1)
            $router.push('/login');
    }
};


export const makeLogin = (data) => {
    Vue.requesterPOST(URL_POST_LOGIN, data).then((response)=>{
        if (response.error) {
            // TODO: ErrorWrapper
            console.log('response error', response)
        } else {
            if (LocalStoreCredentials.validate(response)) {
                initializeStack.credentials(response);
                $router.push('/');
            }
        }
    }).catch((err)=>{
        // TODO: ErrorWrapper
        console.log('requesterPOST error', err)
    });
};


export const makeLogout = () => {
    Vue.requesterCredentialsRemove();
    LocalStoreCredentials.remove();
    commitWithModule('profile', SET_USER, state.user);
    commitWithModule('profile', SET_CREDENTIALS, null);
    $router.push('/login');
};

export const getCredentials = () => {
    return getterWithModule('profile', GET_CREDENTIALS);
};

export const refreshCredentials = () => {};
