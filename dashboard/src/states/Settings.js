import { observable, action } from 'mobx';
import BaseState from './BaseState';
import register from '../registerServiceWorker';

// sha256('blockpass_developer_page_settings')
const SETTINGS_KEY_NAME = '040A6DA779648EEAADE2713CC1B21345FE876FC55FF51870205AF07C3E296F9D';

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