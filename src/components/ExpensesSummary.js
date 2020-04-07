import React from 'react';

import { Link } from 'react-router-dom';

import { getExpensesTotal } from '../selectors/expenses-total';
import { expensesCount } from '../selectors/expenses-count';

import numeral from 'numeral';

import { connect } from 'react-redux';

export const ExpensesSummary = (props) => (
    <div className="page-header">
        <div className="content-container">
            {props.expensesCount > 0 ? (
            <h1 className="page-header__title">
                Viewing <span>{props.expensesCount}</span> {props.expensesCount > 1 ? ' expenses ' : ' expense '} totalling <span>{numeral(props.expensesTotal).format('$0,0.00')}</span>
            </h1>
            ): (
                <h1>You have no expenses yet.</h1>
            )}
            <div className="page-header__actions">
                <Link className="button" to="/create">Add Expense</Link>
            </div>
        </div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        expensesTotal: getExpensesTotal(state.expenses) / 100,
        expensesCount: expensesCount(state.expenses),
    };
}

export default connect(mapStateToProps)(ExpensesSummary);