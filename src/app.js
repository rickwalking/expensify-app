import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import { startSetExpenses } from './actions/expenses';

import { AppRouter, history } from './routers/AppRouter';

import { firebase } from './firebase/firebase';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import '../src/firebase/firebase';
import { login, logout } from './actions/auth';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter></AppRouter>
    </Provider>
);

let hasRendered = false;

const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('root'));
        hasRendered = true;
    }
}

const redirectLogin = () => {
    if (!history.location.pathname === '/') {
        return;
    }

    history.push('/dashboard');
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log(user);
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            redirectLogin();
        });

        return;
    }

    console.log('log out')
    store.dispatch(logout());
    renderApp();
    history.push('/');
});