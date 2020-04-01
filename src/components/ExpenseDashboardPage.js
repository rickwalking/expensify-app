import React from 'react';

import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

export const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters></ExpenseListFilters>
        <ExpenseList></ExpenseList>
        <ExpensesSummary></ExpensesSummary>
    </div>
);