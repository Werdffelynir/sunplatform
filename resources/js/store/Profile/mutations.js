
export const SET_USER = 'SET_USER';
export const SET_CSRF = 'SET_CSRF';
export const SET_CREDENTIALS = 'SET_CREDENTIALS';
export const REMOVE_CREDENTIALS = 'REMOVE_CREDENTIALS';

const credentialsKeys = {
    expires_at: null,
    token: null,
    token_type: null,
};

export default {

    [SET_USER] (state, payload) {
        state.user = payload
    },

    [SET_CREDENTIALS] (state, payload) {
        const credentials = {};
        const keys = Object.keys(credentialsKeys);
        for (let i = 0; i < keys.length; i++) {
            if (payload[keys[i]]) credentials[keys[i]] = payload[keys[i]];
            else return false;
        }
        state.credentials = credentials;
    },

    [REMOVE_CREDENTIALS] (state, payload) {
        state.credentials = null
    },

    [SET_CSRF] (state, payload) {
        state.csrf = payload;
    },

}
