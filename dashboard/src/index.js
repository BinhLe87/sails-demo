import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App';
import { Localization, Network, Settings } from './states/index';
import registerServiceWorker from './registerServiceWorker';

let network = new Network();
let settings = new Settings();
let localization = new Localization();

let stores = {
    network,
    settings,
    localization
}

ReactDOM.render(<Provider stores={stores}><App stores={stores}/></Provider>, document.getElementById('root'));
registerServiceWorker();
