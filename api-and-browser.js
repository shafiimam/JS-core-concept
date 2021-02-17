//API
fetch('url')
    .then(response => response.json())
    .then(data => console.log(data));

//JSON

const person = {
        name: 'abdul',
        age: 23,
        salary: 30000,
        address: 'dhaka'
    }
    //convert back and forth
const json = JSON.stringify(person);
console.log(json);
const data = JSON.parse(json);
console.log(data);
console.log(data.name);

//local storage

localStorage.setItem('userID', 1245);

const userID = localStorage.getItem('userID');
//console.log(userID);
localStorage.setItem('person', JSON.stringify(person));
const storedPerson = localStorage.getItem('person');
const parsedPerson = JSON.parse(storedPerson);
console.log(parsedPerson);

const keys = Object.keys(parsedPerson);
console.log(keys);

const values = Object.values(parsedPerson);
console.log(values);