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
    body: '',
};

const request = async function (url, _config) {

    const config = {...configuration, ..._config};
    if (_config.headers) {
        config.headers =  {...configuration.headers, ..._config.headers};
    }
    // async await
    // console.log('config', config);
    // console.log('response', response);
    return await fetch(url, config).then(async response => {
        // console.log(await response.json());
        return await response.json()
    });
};


export const requestPost = function (url = '', data = {}, headers = {}) {
    return request(url, {
        method: method.post,
        body: JSON.stringify(data),
        headers,
    });
};

export const requestGet = function (url = '', data = {}, headers = {}) {
    return request(url, {
        method: method.get,
        body: JSON.stringify(data),
    });
};

export const csrfToken = () => document.querySelector('[name="csrf-token"]').getAttribute('content');


