import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';

import { Header } from '../components/Header';
import { ExpenseDashboardPage } from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage'; 
import EditExpensePage from '../components/EditExpensePage';
import { HelpPage } from '../components/HelpPage';
import { NotFoundPage } from '../components/NotFoundPage';

export const AppRouter = () => (
    <BrowserRouter>
        <React.Fragment>
            <Header></Header>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}></Route>
                <Route path="/create" component={AddExpensePage}></Route>
                <Route path="/edit/:id" component={EditExpensePage}></Route>
                <Route path="/help" component={HelpPage}></Route>
                <Route component={NotFoundPage}></Route>
            </Switch>
        </React.Fragment>
    </BrowserRouter>
);