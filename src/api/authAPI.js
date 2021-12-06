import BaseAPI from './APIUtils';

export default class AuthAPI extends BaseAPI {
    path = 'auth/';

    async getHeader() {
        let headers = await BaseAPI.prototype.getHeader();
        if(sessionStorage.hasOwnProperty('auth_token')) {
            headers['Authorization'] = `Token ${sessionStorage['auth_token']}`
        }
        console.log(headers)
        return headers;
    }

    async login({login, password}) {
        const body = {
            username: login,
            password: password,
        }
        const data = await this.post({body: body, suffix: 'token/login'});
        return data;
    }

    async me(auth_token) {
        const data = await this.get({suffix: 'users/me'});
        return data;
    }
}