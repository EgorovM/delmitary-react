const BASE_URL = 'http://195.2.70.197:8100/';


class BaseAPI {
    path = '';

    async getHeader() {
        return {
            'Content-Type': 'application/json',
        }
    }

    async _request({suffix = '', filters='', method='GET', body=null}) {
        let api_url = BASE_URL + this.path;

        if(suffix) {
            api_url += `${suffix}/`;
        }

        if(filters) {
            api_url += `?${filters}`;
        }
        
        let request_params = {
            headers: await this.getHeader(),
            method: method,
        }

        if(body) {
            request_params['body'] = JSON.stringify(body);
        }

        console.log(request_params)

        const response = await fetch(api_url, request_params);
        const data = await response.json();
        return data;
    }

    async list(filters='') {
        const data = await this._request({filters: filters});
        const results = data['results'];
        return results;
    }

    async get({suffix}) {
        const data = await this._request({suffix: suffix})
        return data;
    }

    async post({body, suffix=''}) {
        const data = await this._request({suffix: suffix, body: body, method: 'POST'});
        return data;
    }
}

export default BaseAPI;