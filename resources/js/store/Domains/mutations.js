
export const SET_DOMAINS_INFO = 'SET_DOMAINS_INFO';
export const SET_DOMAINS_LIST = 'SET_DOMAINS_LIST';
export const SET_DOMAIN_CURRENT = 'SET_DOMAIN_CURRENT';

export default {

    [SET_DOMAINS_INFO] (state, payload) {
        state.info = payload;
    },

    [SET_DOMAINS_LIST] (state, payload) {
        state.list = payload;
    },

    [SET_DOMAIN_CURRENT] (state, payload) {
        state.current = payload;
    },

}
