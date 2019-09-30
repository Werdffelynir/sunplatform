import {serialize} from './utils/utils';

const method = {
    get: 'GET',
    post: 'POST',
    put: 'PUT',
    delete: 'DELETE',
    option: 'OPTION',
};

const configuration = {
    method: method.get,
    // no-cors, cors, *same-origin
    mode: 'cors',
    // *default, no-cache, reload, force-cache, only-if-cached
    cache: 'no-cache',
    // include, *same-origin, omit
    credentials: 'same-origin',
    // 'Content-Type': 'application/x-www-form-urlencoded',
    headers: {'Content-Type': 'application/json'},
    // manual, *follow, error
    redirect: 'follow',
    // no-referrer, *client
    referrer: 'no-referrer',
    // data query string
    body: null,
};

const request = async function (url, _config) {
    const config = {...configuration, ..._config};
    if (_config.headers) {
        config.headers =  {...configuration.headers, ..._config.headers};
    }
    return await fetch(url, config).then(async response => {
        return await response.json()
    });
};


export const requestPost = function (url = '', data = null, headers = {}) {
    return request(url, {
        method: method.post,
        body: data ? JSON.stringify(data) : data,
        headers,
    });
};

export const requestGet = function (url = '', data = null, headers = {}) {
    data = data ? '?' + serialize(data) : '';
    return request(url + data, {
        method: method.get,
        headers,
    });
};

class Requester {

    credentials(_credentials) {
        this._credentials = _credentials;
        this.headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this._credentials.token,
        };
    }
    get(url, data = {}) {
        return requestGet(url, data, this.headers);
    }

    post(url, data = {}) {
        return requestPost(url, data, this.headers);
    }
}

export default new Requester();
