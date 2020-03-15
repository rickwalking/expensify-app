import {
    addExpense,
    editExpense,
    removeExpense,
} from '../../actions/expenses';

test('Should setup remove expense action object' , () => {
    const action = removeExpense({ id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc',
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { description: 'test' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'test',
        }
    });
});

test('should setup add expense action with provided values', () => {
    const expenseData = {
        description: 'test',
        note: 'haha',
        amount: 12345,
        createdAt: '',
    };

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String),
        },
    });
});

test('should setup add expense action object with default values', () => {  
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: '',
            id: expect.any(String),
        }
    });
});