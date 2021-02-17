// array destructuring
const numbers = [54, 197, 200, 211];
//const x = numbers[0];
//const y = numbers[1];
//const [x, y] = [54, 97];
const [x, y] = numbers;
console.log(x, y);

function boxify(num1) {
    return [num1, num1 + 5];
}

const [box1, box2] = boxify(5);
console.log('box1:', box1, 'box2:', box2);

//object destructuring


const person = {
    id: 1,
    money: 3222,
    name: 'rahim',
    age: 24
}
const { name, age, money } = person;
console.log(name, age);

// crate object shortcut

const one = 25;
const two = 35;
const obj1 = { x: one, y: two };
const obj2 = { one, two };
console.log(obj1);
console.log(obj2);

//spread operator

const newNumbers = [...numbers, 56];
console.log(newNumbers);