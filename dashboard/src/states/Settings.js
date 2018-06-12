import { observable, action } from 'mobx';
import BaseState from './BaseState';
import register from '../registerServiceWorker';

const SETTINGS_KEY_NAME = 'bp_dev_portal_settings';

/**
 * Class for managing user login session, api calls 
 * @author toanhn-ibl
 */
export default class Settings extends BaseState  {
    @observable sidebar_open = true;

    /**
     * @constructor
     */
    constructor() {
        let fields = [
            { 'id': 'sidebar_open', 'default_val': true},
        ];
        super(SETTINGS_KEY_NAME, fields);
    }

    @action toggleSidebar() {
        this.sidebar_open = !this.sidebar_open;
    }
}