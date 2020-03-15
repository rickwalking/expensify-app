import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import { AppRouter } from './routers/AppRouter';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import { addExpense } from './actions/expenses';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', createdAt: -1000 }));
store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent' , amount: 109500, createdAt: -2000 }));

ReactDOM.render(
    <Provider store={store}>
        <AppRouter></AppRouter>
    </Provider>,
    document.getElementById('root')
);