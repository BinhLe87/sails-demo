import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './App';
import { Network, Settings } from './states/index';
import registerServiceWorker from './registerServiceWorker';

let network = new Network();
let settings = new Settings();
let stores = {
    network,
    settings
}

ReactDOM.render(<Provider stores={stores}><App stores={stores}/></Provider>, document.getElementById('root'));
registerServiceWorker();
