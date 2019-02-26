import { createStore } from 'redux';

// Action Generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: 'INCREMENT',
	incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	decrementBy
});

const resetCount = () => ({
	type: 'RESET'
});

const setCount = ({ count = 0 } = {}) => ({
	type: 'SET',
	count
});

const store = createStore((state = { count: 0 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return { count: state.count + action.incrementBy };
		case 'DECREMENT':
			return { count: state.count - (action.decrementBy || 1) };
		case 'SET':
			return { count: action.count };
		case 'RESET':
			return { count: 0 };
		default:
			return state;
	}
});

const unsub = store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(setCount({ count: 101 }));

unsub();
