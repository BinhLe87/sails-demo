import { autorun, action } from 'mobx';

/**
 * Class for managing user login session, api calls 
 * @author toanhn-ibl
 */
export default class BaseState {
    STORAGE_KEY = '';
    fields = [];

    /**
     * @constructor
     */
    constructor(_STORAGE_KEY, _fields) {
        this.STORAGE_KEY = _STORAGE_KEY;
        this.fields = _fields;
        
        this.loadState();
        autorun(() => this.saveState());
    }

    /**
     * Initialize blank state
     */
    @action initState() {
        this.fields.map((field) => {
            this[field.id] = field.default_val;
        })
    }

    /**
     * Load previous state from browser local storage
     * If there're any misconfiguration or errors while loading, a blank state will be presented instead
     */
    @action loadState() {
        let _store_object = {};
        try {
            _store_object = JSON.parse(window.localStorage[this.STORAGE_KEY]);
        } catch (err) {
            _store_object = undefined;
        }

        if (_store_object === undefined) {
            this.initState();
        } else {
            this.fields.map((field) => {
                this[field.id] = _store_object[field.id];
            })
        }
    }

    /**
     * Save current state to browser local storage
     */
    saveState() {
        let _store_object = {};
        this.fields.map((field) => {
            _store_object[field.id] = this[field.id];
        })
        window.localStorage.setItem(this.STORAGE_KEY, JSON.stringify(_store_object));
    }

    /**
     * Clear current state
     * @param {boolean} _clearStorage also clear previous state from local storage or not
     */
    @action clearState(_clearStorage) {
        if (_clearStorage) {
            window.localStorage.clear();
        }
        this.initState();
    }
}