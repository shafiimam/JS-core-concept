// variable: let, const

let money = 20;
money = 12;

const name = 'Abul';

const person = {
    name: 'kuddus',
    age: '55',
    city: 'dhaka'
}
const statement = `This person name is ${[person.name]}.His age is ${person.age} & he,lives in ${person.city}`;

// condition more
if (money > 20 && age >= 45) {
    // some code here
} else {
    // some code here
}


// array

const numbers = [24, 23, 26, 45];
const friends = ['Motiur', 'Jahangir', 'Kamal'];
const products = [{ name: 'laptop', price: '1000' }, { name: 'mobile', price: '500' }, { name: 'ipad', price: '2000' }]

// loop: for loop

for (let i = 0; i < array.length; i++) {
    const element = array[i];

}

// function:regular and arrow

function add(num1, num2) {
    return num1 + num2;
}

const result = add(2, 3);

const add2 = (num1, num2) => num1 + num2;

const fiveTimes = num => num * 5;

const doMath = (num1, num2) => {
    const result = num1 + num2
    return result;
}