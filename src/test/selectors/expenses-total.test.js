import { getExpensesTotal } from '../../selectors/expenses-total';

import { expenses } from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const result = getExpensesTotal([]);
    expect(result).toBe(0);
});

test('should correcly add up a single expense', () => {
    const result = getExpensesTotal([expenses[1]]);
    expect(result).toBe(expenses[1].amount);
});

test('should correcly add multiple expenses', () => {
    const result = getExpensesTotal(expenses);
    expect(result).toBe(114195);
});