import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"; // імпортували метод provider з бібліотеки редакс

import App from './App';
import store from "./store/store.conf"; // Імпортували storе з файлу, де ми його створили


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}> // Використали метод Provider з посиланням на наш store
            <App/> // горнули App  в тег Provider, всі інші бібліотеки будемо вставляти поміж провайдера і апп
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
