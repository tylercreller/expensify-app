import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpense = props => (
	<React.Fragment>
		<h1>Add Expense</h1>
		<ExpenseForm
			onSubmit={expense => {
				props.dispatch(addExpense(expense));
				props.history.push('/');
			}}
		/>
	</React.Fragment>
);
export default connect()(AddExpense);
