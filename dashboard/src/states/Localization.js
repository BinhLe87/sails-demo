import { observable, action } from 'mobx';
import BaseState from './BaseState';
import languages from '../languages';

const LOCALIZATION_KEY_NAME = 'bp_dev_localization';

/**
 * Class for managing user login session, api calls 
 * @author toanhn-ibl
 */
export default class Localization extends BaseState  {
    @observable current_language = 'en';
    language_object = {};

    /**
     * @constructor
     */
    constructor() {
        let fields = [
            { 'id': 'current_language', 'default_val': 'en'},
        ];
        super(LOCALIZATION_KEY_NAME, fields);
        this.language_object = languages.en;
    }

    @action changeLanguage(langID) {
        if (langID in ['en', 'fr', 'cn', 'jp', 'ru']) {
            this.current_language = langID;
            this.language_object = languages[langID];
        }
    }

    @action getText(textID) {
        console.log(textID, JSON.stringify(this.language_object), this.language_object[textID])
        if (this.language_object[textID] != null && this.language_object[textID] != undefined)
            return this.language_object[textID];
        return textID;
    }
}