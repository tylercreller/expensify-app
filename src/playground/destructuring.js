// const person = {
// 	name: 'Tyler',
// 	age: 25,
// 	location: {
// 		city: 'Rochester',
// 		temp: 44
// 	}
// };

// const { name = 'anon', age } = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
// 	console.log(`It is ${temperature} in ${city}`);
// }

// const book = {
// 	title: 'Taco Burrito',
// 	author: 'Tyler Creller',
// 	publisher: {
// 		name: 'Penguin'
// 	}
// };

// const { name: publisherName = 'Self Published' } = book.publisher;

// console.log(publisherName);

const address = ['34666 Edmonds Street', 'Rochester', 'New York', '14607'];
const [street, city, state, zip] = address;
console.log(`You are in ${city} ${address[2]}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A ${itemName} costs ${mediumPrice}`);
