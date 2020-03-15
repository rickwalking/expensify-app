import React from 'react';

import moment from 'moment';

import { SingleDatePicker } from 'react-dates';

export class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: this.props.expense ? this.props.expense.description : '',
            note: this.props.expense ? this.props.expense.note : '',
            amount: this.props.expense ? (this.props.expense.amount / 100).toString() : '',
            createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: '',
        };
    }

    onDescriptionChange = (event) => {
        const description = event.target.value;
        this.setState(() => ({ description }));
    }

    onNoteChange = (event) => {
        const note = event.target.value;
        this.setState(() => ({ note }));
    }

    onAmountChange = (event) => {
        const amount = event.target.value;

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }

    onDateChange = (createdAt) => {
        if (!createdAt) {
            return;
        }

        this.setState(() => ({ createdAt }));
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    }

    onSubmit = (event) => {
        event.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({
                error: 'Please provide description and amount.',
            }));

            return;
        }

        this.setState(() => ({ error: '' }));

        this.props.onSubmit({
            description: this.state.description,
            note: this.state.note,
            amount: +this.state.amount * 100,
            createdAt: parseFloat(this.state.createdAt.valueOf()),
        });
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type='text'
                        placeholder='Description'
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}/>
                    <input
                        type='number'
                        placeholder='amount'
                        value={this.state.amount}
                        onChange={this.onAmountChange}/>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                        >
                    </SingleDatePicker>
                    <textarea
                        placeholder='Add a note for your expense (optional)'
                        value={this.state.note}
                        onChange={this.onNoteChange}>
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}