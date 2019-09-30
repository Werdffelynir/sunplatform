import { requestGet, requestPost } from '../utils/request';

const Requester = {

    install (Vue, options) {

        let credentialsList = {};
        const headers = {
            'X-Requested-With': 'application/json',
            'Accept': 'application/json',
            'Authorization': null,
        };

        Vue.requesterCredentials = (credentials) => {
            credentialsList = credentials;
            headers.Authorization = credentials.token_type + ' ' + credentials.token
        };

        Vue.requesterGET = (url, data = {}) => {
            return requestGet(url, data, headers);
        };

        Vue.requesterPOST = (url, data = {}) => {
            return requestPost(url, data, headers);
        };

        // Vue.mixin({ created() {} });

        Vue.prototype.$requester = {
            get: Vue.requesterGET,
            post: Vue.requesterPOST,
            credentials: Vue.requesterCredentials,
        }
    }
};

export default Requester;
