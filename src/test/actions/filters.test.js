import {
    sortByDate,
    setStartDate,
    setEndDate,
    setTextFilter,
    sortByAmount,
} from '../../actions/filters';

import moment from 'moment';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0),
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment());
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(),
    });
});

test('should generate set text filter action object with default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: '',
    });
});

test('should generate set text filter action object with defined value', () => {
    const action = setTextFilter('gas bill');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'gas bill',
    });
});

test('should generate sort by amount filter action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
    });
});

test('should generate sort by date filter action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
    });
});