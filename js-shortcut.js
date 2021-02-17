const money = 150;
let food;
if (money > 100) {
    food = 'biriyani';
} else {
    food = 'alu vorta';
}

//ternary shortcut method
// condition ? true value: false value
let food2 = money > 100 ? 'biriyani' : 'alu vorta';
let active = true;
let cssClass;
const cssClass = active ? 'active' : 'inactive';
//function call shortcut
active ? displayUser() : hideUser();
// without else statement
//if true than execute after &&
active && diaplayUser();
// if true execute before || else execute after ||
active || diaplayUser();


//string to number
const number = +'45';
//number to string  
const string = 45 + '';