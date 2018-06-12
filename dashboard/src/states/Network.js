import { observable, action } from 'mobx';
import BaseState from './BaseState';
import register from '../registerServiceWorker';

// sha256('blockpass_developer_page_network')
// const NETWORK_KEY_NAME = 'E958D0D8378CE26EEB16BD5D33A79F596F9C11AB70B759BAB357384E9E66A050';
const NETWORK_KEY_NAME = 'bp_dev_portal_network';

/**
 * Class for managing user login session, api calls 
 * @author toanhn-ibl
 */
export default class Network extends BaseState  {
    @observable access_token = '';
    @observable expire_time = 0;
    @observable user_email = '';
    @observable user_name = '';
    @observable user_permission = [];
    @observable user_info = {};
    @observable state = 1; // placeholder

    // baseUrl = 'http://localhost:1337';
    baseUrl = '';
    loginUrl = `${this.baseUrl}/api/user/login`;

    /**
     * @constructor
     */
    constructor() {
        let fields = [
            { 'id': 'access_token', 'default_val': ''},
            { 'id': 'expire_time', 'default_val': 0},
            { 'id': 'user_email', 'default_val': ''},
            { 'id': 'user_name', 'default_val': ''},
            { 'id': 'user_permission', 'default_val': []},
            { 'id': 'user_info', 'default_val': {}},
        ];
        super(NETWORK_KEY_NAME, fields);
    }

    @observable isLoggedIn() {
        let _now = new Date().getTime();
        return this.access_token != '' && this.expire_time > (_now / 1000);
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
            if (responseJSON.status == "success" && 
                responseJSON.data && 
                responseJSON.data.accessToken &&
                responseJSON.data.expiry) 
            {
                let _now = new Date().getTime();
                this.user_name = _username;
                this.access_token = responseJSON.data.accessToken;
                this.expire_time = _now / 1000 + responseJSON.data.expiry;
                callback && callback.success && callback.success(responseJSON);
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
        this.clearState();
    }

    @action register() {
        this.state = 1;
    }
}