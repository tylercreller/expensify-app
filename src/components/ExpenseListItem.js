import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => (
	<React.Fragment>
		<h3>{description}</h3>
		<p>
			{amount} - {createdAt}
		</p>
		<button
			onClick={() => {
				dispatch(removeExpense({ id }));
			}}
		>
			Remove
		</button>
	</React.Fragment>
);

export default connect()(ExpenseListItem);
