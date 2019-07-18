import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
	const state = filtersReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	});
});

test('should set sortBy to amount', () => {
	const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
	expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
	const currentState = {
			text: '',
			startDate: undefined,
			endDate: undefined,
			sortBy: 'amount'
		},
		state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
	expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
	const text = 'test',
		state = filtersReducer(undefined, {
			type: 'SET_TEXT_FILTER',
			text
		});
	expect(state.text).toBe(text);
});

test('should set startDate filter', () => {
	const date = moment(),
		state = filtersReducer(undefined, {
			type: 'SET_START_DATE',
			date: date
		});
	expect(state.startDate).toBe(date);
});

test('should set endDate filter', () => {
	const date = moment(),
		state = filtersReducer(undefined, {
			type: 'SET_END_DATE',
			date: date
		});
	expect(state.endDate).toBe(date);
});
