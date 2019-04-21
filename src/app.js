import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

console.log(store.getState());

const expenseOne = store.dispatch(
	addExpense({ description: 'Water Bill', amount: 1000, createdAt: 1000 })
);

const expenseTwo = store.dispatch(
	addExpense({ description: 'Gas Bill', amount: 10000, createdAt: 1000 })
);

store.dispatch(setTextFilter('water'));

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

ReactDOM.render(<AppRouter />, document.getElementById('app'));
