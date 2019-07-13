import {
	setTextFilter,
	sortByDate,
	sortByAmount,
	setStartDate,
	setEndDate
} from '../../actions/filters';
import moment from 'moment';

test('should create actions for setStartDate', () => {
	const date = moment(),
		action = setStartDate(date);
	expect(action).toEqual({
		type: 'SET_START_DATE',
		date
	});
});

test('should create actions for setEndDate', () => {
	const date = moment(),
		action = setEndDate(date);
	expect(action).toEqual({
		type: 'SET_END_DATE',
		date
	});
});

test('should create actions for setTextFilter with default', () => {
	const action = setTextFilter();
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: ''
	});
});

test('should create actions for setTextFilter', () => {
	const filterText = 'filter',
		action = setTextFilter(filterText);
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: filterText
	});
});

test('should create actions for sortByDate', () => {
	const date = moment(),
		action = sortByDate(date);
	expect(action).toEqual({
		type: 'SORT_BY_DATE',
		date
	});
});

test('should create actions for sortByAmount', () => {
	const amount = 10000,
		action = sortByAmount(amount);
	expect(action).toEqual({
		type: 'SORT_BY_AMOUNT',
		amount
	});
});
