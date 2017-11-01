import React from 'react';
import ReactDOM from 'react-dom';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';

import './style/base.scss';
import './assets/font/iconfont.css';
import './config/config.js';
import App from './App';

import authStore from './stores/authStore';
import userStore from './stores/userStore';
import commonStore from './stores/commonStore';
import billboardStore from './stores/billboardStore';

import registerServiceWorker from './registerServiceWorker';

const stores = {
    authStore,
    userStore,
    commonStore,
    billboardStore
}

useStrict(true); //开启严格模式（好处？）

ReactDOM.render((
    <Provider {...stores}>
        <App />
    </Provider>
), document.getElementById('root'));

registerServiceWorker();
