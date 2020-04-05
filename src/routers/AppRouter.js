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
import { HelpPage } from '../components/HelpPage';
import { NotFoundPage } from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

export const AppRouter = () => (
    <Router history={history}>
        <React.Fragment>
            <Switch>
                <Route path="/" component={LoginPage} exact={true}></Route>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}></PrivateRoute>
                <PrivateRoute path="/create" component={AddExpensePage}></PrivateRoute>
                <PrivateRoute path="/edit/:id" component={EditExpensePage}></PrivateRoute>
                <Route path="/help" component={HelpPage}></Route>
                <Route component={NotFoundPage}></Route>
            </Switch>
        </React.Fragment>
    </Router>
);
