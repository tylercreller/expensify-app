import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import { removeExpense } from '../actions/expenses';

const EditExpense = props => {
	return (
		<React.Fragment>
			<ExpenseForm
				expense={props.expense}
				onSubmit={expense => {
					// Dispatch the action to edit expense
					props.dispatch(editExpense(props.expense.id, expense));
					// Redirect to dashboard
					props.history.push('/');
				}}
			/>
			<button
				onClick={() => {
					props.dispatch(removeExpense({ id: props.expense.id }));
					props.history.push('/');
				}}
			>
				Remove
			</button>
		</React.Fragment>
	);
};

const mapStateToProps = (state, props) => {
	return {
		expense: state.expenses.find(
			expense => expense.id === props.match.params.id
		)
	};
};

export default connect(mapStateToProps)(EditExpense);
