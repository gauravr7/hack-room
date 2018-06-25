import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

//reducers
import rootReducer from './js/reducers';

let store = createStore(rootReducer, window.STATE_FROM_SERVER)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
