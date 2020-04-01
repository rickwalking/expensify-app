import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import { AppRouter } from './routers/AppRouter';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import '../src/firebase/firebase';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <AppRouter></AppRouter>
    </Provider>,
    document.getElementById('root')
);