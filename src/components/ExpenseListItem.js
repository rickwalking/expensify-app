import React from 'react';

import { Link } from 'react-router-dom';

import moment from 'moment';
import numeral from 'numeral';

import { connect } from 'react-redux';
import { startRemoveExpense } from '../actions/expenses';

export const ExpenseListItem = (props) => (
    <div>
        <h3>
            <Link to={`/edit/${props.expense.id}`}>{props.expense.description}</Link>
        </h3>
        <p>
            {numeral(props.expense.amount / 100).format('$0,0.00')}
            -
            {moment(props.expense.createdAt).format('MMM Do, YYYY')}
        </p>
        <button onClick={() => {
            props.dispatch(startRemoveExpense({ id: props.expense.id }));
        }}>Remove</button>
    </div>
);

export default connect()(ExpenseListItem);