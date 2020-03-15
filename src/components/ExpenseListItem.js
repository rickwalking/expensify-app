import React from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

export const ExpenseListItem = (props) => (
    <div>
        <h3>
            <Link to={`/edit/${props.expense.id}`}>{props.expense.description}</Link>
        </h3>
        <p>{props.expense.amount} - {props.expense.createdAt}</p>
        <button onClick={() => {
            props.dispatch(removeExpense({ id: props.expense.id }));
        }}>Remove</button>
    </div>
);

export default connect()(ExpenseListItem);