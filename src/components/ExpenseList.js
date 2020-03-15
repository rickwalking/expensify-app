import React from 'react';

import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import { getVisibleExpenses } from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {
            props.expenses.length === 0 ? (
                <h2>No expenses</h2>
            ) : (
                props.expenses.map((expense) => (
                <ExpenseListItem
                    expense={expense}
                    key={expense.id}>
                </ExpenseListItem>
            )))
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters),
        filters: state.filters,
    };
}

export default connect(mapStateToProps)(ExpenseList);