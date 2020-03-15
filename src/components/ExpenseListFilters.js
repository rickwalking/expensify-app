import React from 'react';

import { DateRangePicker }  from 'react-dates';

import { connect } from 'react-redux';

import {
    setTextFilter,
    sortByAmount,
    sortByDate,
    setStartDate,
    setEndDate,
} from '../actions/filters';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null,
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    }

    onTextChange = (event) => {
        this.props.setTextFilter(event.target.value);
    }

    onSortChange = (event) => {
        const optionValue = event.target.value;

        if (optionValue === 'amount') {
            this.props.sortByAmount();
            return;
        }

        this.props.sortByDate();
    }

    render() {
        return (
            <div>
                <input type='text' value={this.props.filters.text} onChange={this.onTextChange}/>
                <select
                    value={this.props.filters.sortBy}
                    onChange={this.onSortChange}>
                    <option value="date">Date</option>
                    <option value="amount">amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    showClearDates={true}
                    isOutsideRange={() => false}>
                </DateRangePicker>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
});

const mapStateToProps = (state) => {
    return {
        filters: state.filters,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);