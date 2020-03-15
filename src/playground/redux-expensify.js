import { createStore, combineReducers } from 'redux';

import uuid from 'uuid';

const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
};

const removeExpense = ({ id } = { }) => ({
    type: 'REMOVE_EXPENSE',
    id,
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates,
})

const addExpenseAction = ({ 
    description = '',
    note = '',
    amount = 0,
    createdAt = ''
} = { }) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt,
    },
});

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch =
            typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch =
            typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1: -1;
        }

        if (sortBy === 'amount') {
            return a.amount < b.amount ? 1: -1;
        }
    });
}

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => {
                return  id !== action.id
            });
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...state,
                        ...action.updates,
                    };
                }

                return state;
            });
        default:
            return state;
    }
};

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text,
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});

const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate,
});

const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate,
});

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text,
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount',
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date',
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate,
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate,
            };
        default:
            return state;
    }
};

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
}));

store.subscribe(() => {
    const state = store.getState();
    let visibleExpenses;
    if (state.filters.text !== undefined) {
        visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    }
    console.log('visible expenses', visibleExpenses);
});

const expense2 = store.dispatch(addExpenseAction({ description: 'Coffee', amount: 300, createdAt: -1000 }));
const expense1 = store.dispatch(addExpenseAction({ description: 'Rent', amount: 100, createdAt: -21000 }));
store.dispatch(sortByAmount());
// store.dispatch(removeExpense({ id: expense2.expense.id}));

// store.dispatch(editExpense(expense1.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('ffee'));
// store.dispatch(setStartDate(0));
// store.dispatch(setEndDate(1250));
// store.dispatch(setStartDate());
