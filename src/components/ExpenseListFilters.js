import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilters = props => (
	<React.Fragment>
		<input
			type="text"
			value={props.filters.text}
			onChange={e => {
				props.dispatch(setTextFilter(e.target.value));
			}}
		/>
		<select
			value={props.filters.sortBy}
			onChange={e => {
				const value = e.target.value;
				if (value === 'amount') {
					props.dispatch(sortByAmount());
				} else if (value === 'date') {
					props.dispatch(sortByDate());
				}
			}}
		>
			<option value="date">Date</option>
			<option value="amount">Amount</option>
		</select>
	</React.Fragment>
);

const mapStateToProps = state => {
	return {
		filters: state.filters
	};
};

export default connect(mapStateToProps)(ExpenseListFilters);
