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

    @action login() {
        this.state = 2;
    }

    @action logout() {
        this.state = 0;
    }

    @action register() {
        this.state = 1;
    }
}