import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Network, Settings } from './states/index';
import registerServiceWorker from './registerServiceWorker';

let network = new Network();
let settings = new Settings();
let stores = {
    network,
    settings
}

ReactDOM.render(<App stores={stores}/>, document.getElementById('root'));
registerServiceWorker();
