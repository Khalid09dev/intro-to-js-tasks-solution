//variable defined with const cannot be redeclared.
//variable defined with const cannot be reassigned.
//variable defined with const have block scope.

// example:
// const PI = 3.141090998;
// PI = 3.14;
// PI = PI + 10;
// console.log(PI);

// when to use javascript const?
// Always declare a variable with const when you know that the value should not be changed.
// Use const when you declare:
// 1. A new array.
// 2. A new object. 
// 3. A new funciton.
// 4. A new RegExp.

// Constant objects and arrays:
// the keyword const is a little misleading.
// It does not define a constant value. It defines a constant reference to a value. 

// Because of this you can NOT:
// 1. reassigned a constant value 
// 2. reassigned a constant array
// 3. reassigned a constant object

// But you CAN:
// 1. change the elements of constants array 
// 2. change the properties of constant object

// Constant array:
// you can change the elements of a constants array.

// examples:
// you can create a constant array:
// const cars = ['audi', 'toyota', 'tesla'];
//you can change an element
// cars[0] = 'mercidies';
// console.log(cars);

// you can add an element 
// cars.push('nano');
// console.log(cars);


// Constant Objects
// you can change the properties of a constant objects:
//you can create a const object:
const car = {type:'mobile', model:'sm0934', color:'black'};
// console.log(car);

// you can change a object property:
// car.color = 'gray';
// console.log(car);

// you can add a property:
// car.country = 'korea';
// console.log(car);

// difference between var let and const:
//             scope       redeclare       reassign        hoisted         binds this
// var         no          yes             yes             yes             yes
// let         yes         no              yes             no              no
// const       yes         no              no              no              no


// what is good?
// let and const have a block scope
// let and const cannot be redeclared 
// let and const must be redeclared before use 
// let and const does not bind to this 
// let and const are not hoisted 


// what is not good?
// var does not have to be declared 
// var is hoisted 
// var is binds to this 



// block scope
// declaring a variable with const is similar to let when  it comes to Block Scope. The x declared in the block, in this example, is not the same as the x declared outside the block :

// Redeclaring 
// redeclaring a javascript var variable is allowed anywhere in a program: 

// redeclaring an existing var or let variable to const, in the same scope is not allowed. 
// reassigning an existing const variable in the same scope is not allowed 
// redeclaring a variable with const, in another scope, or in another block, is allowed 

// Hoisting
// variable defined with var are hoisted to the top and can be initialized at any time. 
// meaning: you can use the variable before it was declared 


// variable defined with const are also hoisted to the top but not initialized.
// meaning: using a const variable before it is declared will result in a referenceError 









// Javascript isNaN 
// In javascript NaN is short for "Not a Number". 
// The isNaN() method returns true if a value is NaN. 
// The isNaN() methods converts the value to a number before testing it. 

// Difference between is nan and isNumber 
// isNaN() method returns true if a value is not a number 
// Number.isNaN() returns true if a number is not a number. 

// in another words:
// isNaN() converts the value to a number before tesing it. 