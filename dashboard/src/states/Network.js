import { observable, action } from 'mobx';
import BaseState from './BaseState';
import register from '../registerServiceWorker';

// sha256('blockpass_developer_page_network')
const NETWORK_KEY_NAME = 'E958D0D8378CE26EEB16BD5D33A79F596F9C11AB70B759BAB357384E9E66A050';

/**
 * Class for managing user login session, api calls 
 * @author toanhn-ibl
 */
export default class Network extends BaseState  {
    @observable access_token = '';
    @observable expire_time = '';
    @observable user_email = '';
    @observable user_name = '';
    @observable user_permission = [];
    @observable user_info = {};
    @observable state = 1; // placeholder

    baseUrl = 'http://localhost:1337';
    loginUrl = `${this.baseUrl}/api/user/login`;

    /**
     * @constructor
     */
    constructor() {
        let fields = [
            { 'id': 'access_token', 'default_val': ''},
            { 'id': 'expire_time', 'default_val': ''},
            { 'id': 'user_email', 'default_val': ''},
            { 'id': 'user_name', 'default_val': ''},
            { 'id': 'user_permission', 'default_val': []},
            { 'id': 'user_info', 'default_val': {}},
        ];
        super(NETWORK_KEY_NAME, fields);
    }

    @observable isLoggedIn() {
        return this.state === 2;
    }

    @observable hasPermission(permissions) {
        return true;
    }

    @action register(_username, _password) {
        //
    }

    @action login(_username, _password, callback) {
        console.log(_username, _password)
        fetch(`${this.loginUrl}?user_name=${_username}&password=${_password}`, {
            method: 'PUT'
        })
        .then((response) => response.json())
        .then((responseJSON) => {
            console.log(responseJSON);
            if (responseJSON.status == "success") {
                callback && callback.success && callback.success(responseJSON);
                // HNToan TODO: replace state
                this.state = 2;
            } else {
                callback && callback.err && callback.err(responseJSON);
            }
        })
        .catch((err) => {
            console.error(err);
            callback && callback.err && callback.err({
                code: 500,
                data: {},
                status: 'error',
                message: err
            });
        })
    }

    @action logout() {
        this.state = 0;
    }

    @action register() {
        this.state = 1;
    }
}