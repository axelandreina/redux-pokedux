import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { rootReducer } from '../src/reducers/rootReducer'
import {Provider} from 'react-redux';
import { applyMiddleware, compose,legacy_createStore as createStore} from 'redux';
import { logger } from './middlewares';
import thunk from 'redux-thunk';


const root = ReactDOM.createRoot(document.getElementById('root'));

// Como quiero pasarle otro enhacer a parte del de la DevTool, creo una constante (ver abajo) usando una funcion de Redux que se llama 'compose
// Si solo le pasamos 'logger' como enhancer, no le van a llegar todos los parametros, entonce por eso usamos 'applyMiddleware'
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk, logger));



const store = createStore(rootReducer, composedEnhancers);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
