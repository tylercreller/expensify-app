import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
	const action = removeExpense({ id: 'id' });
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: 'id'
	});
});

test('should setup edit expense action object', () => {
	const action = editExpense('id', { amount: '100' });
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: 'id',
		updates: { amount: '100' }
	});
});

test('should setup add expense action object with provided values', () => {
	const expenseData = {
		description: 'Rent',
		amount: 10955,
		createdAt: 1000,
		note: 'this was last months rent'
	};
	const action = addExpense(expenseData);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			id: expect.any(String),
			...expenseData
		}
	});
});

test('should setup add expense action object with default values', () => {
	const action = addExpense();
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			id: expect.any(String),
			description: '',
			note: '',
			amount: 0,
			createdAt: 0
		}
	});
});
