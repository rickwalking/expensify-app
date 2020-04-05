import React from 'react';
import {
    Route,
    Switch,
    Router
} from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';

import { ExpenseDashboardPage } from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage'; 
import EditExpensePage from '../components/EditExpensePage';
import { NotFoundPage } from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const history = createHistory();

export const AppRouter = () => (
    <Router history={history}>
        <React.Fragment>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}></PublicRoute>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}></PrivateRoute>
                <PrivateRoute path="/create" component={AddExpensePage}></PrivateRoute>
                <PrivateRoute path="/edit/:id" component={EditExpensePage}></PrivateRoute>
                <PublicRoute component={NotFoundPage}></PublicRoute>
            </Switch>
        </React.Fragment>
    </Router>
);
