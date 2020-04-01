import React from 'react';

import { shallow } from 'enzyme';

import { ExpensesSummary } from '../../components/ExpensesSummary';
import { expenses } from '../fixtures/expenses';

import { getExpensesTotal } from '../../selectors/expenses-total';
import { expensesCount } from '../../selectors/expenses-count';

test('should render ExpensesSummary with summary', () => {
    const wrapper = shallow(<ExpensesSummary
        expensesTotal={getExpensesTotal([expenses[1].amount]) / 100}
        expensesCount={expensesCount([expenses[1]])}
    />)

    expect(wrapper).toMatchSnapshot();
});