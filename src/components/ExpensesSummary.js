import React from 'react';

import { getExpensesTotal } from '../selectors/expenses-total';
import { expensesCount } from '../selectors/expenses-count';

import numeral from 'numeral';

import { connect } from 'react-redux';

export const ExpensesSummary = (props) => (
    <div>
        <div>
            Viewing {props.expensesCount} {props.expensesCount > 1 ? ' expenses ' : ' expense '} {numeral(props.expensesTotal).format('$0,0.00')}
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