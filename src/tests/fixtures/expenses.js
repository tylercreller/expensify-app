import moment from 'moment';
export default [
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
