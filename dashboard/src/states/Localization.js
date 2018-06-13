import { observable, action, computed } from 'mobx';
import BaseState from './BaseState';
import languages from '../languages';

const LOCALIZATION_KEY_NAME = 'bp_dev_localization';

/**
 * Class for managing user login session, api calls 
 * @author toanhn-ibl
 */
export default class Localization extends BaseState  {
    @observable current_language = 'en';

    /**
     * @constructor
     */
    constructor() {
        let fields = [
            { 'id': 'current_language', 'default_val': 'en'},
        ];
        super(LOCALIZATION_KEY_NAME, fields);
    }

    @action changeLanguage(langID) {
        console.log('changeLanguage', langID)
        let languageList = ['en', 'fr', 'cn', 'jp', 'ru'];
        if (languageList.indexOf(langID) != -1) {
            console.log('new language', langID)
            this.current_language = langID;
            this.language_object = languages[langID];
        }
    }

    @computed get currentLangObject() {
        return languages[this.current_language];
    }

    getText(textID) {
        let langObj = this.currentLangObject;
        if (langObj[textID] != null && langObj[textID] != undefined) {
            console.log(langObj[textID]);
            return langObj[textID];
        }
        return textID;
    }
}