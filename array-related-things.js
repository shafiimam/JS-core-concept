const numbers = [1, 2, 3, 4, 5, 6, 7];

const friends = ['rafiq', 'jababr', 'salam'];

const products = [
    { id: 1, name: 'laptop', price: 500 },
    { id: 2, name: 'phone', price: 100 },
    { id: 3, name: 'tablet', price: 80 },
    { id: 4, name: 'watch', price: 50 },
    { id: 5, name: 'gadget', price: 20 }
];

// map
// when we want to find values of particular object's property we use map
const names = products.map(product => product.name);
const prices = products.map(product => product.price)
console.log(names);
console.log(prices);

// forEach
// it doesn't return anything

products.forEach(product => console.log(product.name));

// filter
// take something, drop something
const cheaper = products.filter(product => product.price < 100);
console.log(cheaper);

// remove an item using filter

const remaining = products.filter(product => product.id != 3)
console.log(remaining);

// find

const hasWatch = products.find(product => product.name = 'watch');
console.log(hasWatch);

// reduce
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log('reduced:', numbers.reduce(reducer));
console.log("reduced+5:", numbers.reduce(reducer, 5));
// includes
const include = products.includes({ id: 1, name: 'laptop', price: 500 });
console.log(include);
const include2 = friends.includes('rafiq', 0);
console.log(include2);

// indexOf
console.log(numbers.indexOf(2));
// splice
const spliced = friends.splice(1, 0, 'kalam', 'balam');
console.log(friends);
//