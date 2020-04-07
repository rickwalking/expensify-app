import React from 'react';

import { Link } from 'react-router-dom';

import moment from 'moment';
import numeral from 'numeral';

import { connect } from 'react-redux';
import { startRemoveExpense } from '../actions/expenses';

export const ExpenseListItem = (props) => (
    <Link className="list-item" to={`/edit/${props.expense.id}`}>
        <div>
            <h3 className="list-item--title">{props.expense.description}</h3>
            <span className="list-item--sub-title">{moment(props.expense.createdAt).format('MMM Do, YYYY')}</span>
        </div>
        <h3 className="list-item__data">{numeral(props.expense.amount / 100).format('$0,0.00')}</h3>
    </Link>
);

export default connect()(ExpenseListItem);


// <button onClick={() => {
//     props.dispatch(startRemoveExpense({ id: props.expense.id }));
// }}>Remove</button>