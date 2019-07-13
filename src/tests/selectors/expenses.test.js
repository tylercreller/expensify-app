import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses = [
	{
		id: '1',
		description: 'Rent',
		note: '',
		amount: 195,
		createdAt: 0,
		endDate: moment(0)
			.add(4, 'days')
			.valueOf()
	},
	{
		id: '2',
		description: 'Taco',
		note: 'Delicious',
		amount: 500,
		createdAt: moment(0)
			.subtract(4, 'days')
			.valueOf(),
		endDate: moment(0)
			.add(10, 'days')
			.valueOf()
	},
	{
		id: '3',
		description: 'Water Bill',
		note: 'Paid',
		amount: 1095,
		createdAt: 400,
		endDate: moment(400)
			.add(1, 'days')
			.valueOf()
	}
];

test('should filter by text value', () => {
	const filters = {
			text: 'e',
			sortBy: 'date',
			startDate: undefined,
			endDate: undefined
		},
		result = selectExpenses(expenses, filters);
	expect(result).toEqual([expenses[2], expenses[0]]);
});

test('should filter by startDate', () => {
	const filters = {
			text: '',
			sortBy: 'date',
			startDate: moment(0),
			endDate: undefined
		},
		result = selectExpenses(expenses, filters);
	expect(result).toEqual([expenses[2], expenses[0]]);
});

test('should filter by endDate', () => {
	const filters = {
			text: '',
			sortBy: 'date',
			startDate: undefined,
			endDate: moment(0).add(5, 'days')
		},
		result = selectExpenses(expenses, filters);
	expect(result).toEqual([expenses[2], expenses[0]]);
});

test('should sort by date', () => {
	const filters = {
			text: '',
			sortBy: 'date',
			startDate: undefined,
			endDate: undefined
		},
		result = selectExpenses(expenses, filters);
	expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should sort by amount', () => {
	const filters = {
			text: '',
			sortBy: 'amount',
			startDate: undefined,
			endDate: undefined
		},
		result = selectExpenses(expenses, filters);
	expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});
