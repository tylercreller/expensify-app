import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
	const state = expensesReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual([]);
});

test('should remove expense by ID', () => {
	const action = {
			type: 'REMOVE_EXPENSE',
			id: expenses[1].id
		},
		state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if ID not found', () => {
	const action = {
			type: 'REMOVE_EXPENSE',
			id: '-1'
		},
		state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test('should add an expense', () => {
	const action = {
			type: 'ADD_EXPENSE',
			expense: {
				id: '42',
				description: 'Taco Bell',
				note: 'Yum',
				amount: 2000,
				createdAt: 0,
				endDate: moment(0)
					.add(12, 'days')
					.valueOf()
			}
		},
		state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses.concat(action.expense));
});

test('should edit an expense', () => {
	const action = {
			type: 'EDIT_EXPENSE',
			id: '1',
			updates: {
				description: 'Taco Bell',
				note: 'Yum',
				amount: 2000,
				createdAt: 0,
				endDate: moment(0)
					.add(12, 'days')
					.valueOf()
			}
		},
		state = expensesReducer(expenses, action);
	expect(state).toEqual([
		{ id: '1', ...action.updates },
		expenses[1],
		expenses[2]
	]);
});

test('should not edit expense if expense is not found', () => {
	const action = {
			type: 'EDIT_EXPENSE',
			id: '-1',
			updates: {
				description: 'Taco Bell',
				note: 'Yum',
				amount: 2000,
				createdAt: 0,
				endDate: moment(0)
					.add(12, 'days')
					.valueOf()
			}
		},
		state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});
