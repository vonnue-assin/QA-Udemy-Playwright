let data: number = 42;

// data = "Hello, World!"; // Reassigning the variable data to a string compile time error in TypeScript because data was initially declared as a number
console.log(data); // Output: Hello, World!

let num1: string = "5";
let num2: number = 10;

let sums = num1 + num2; // TypeScript will throw an error here because num1 is a string and num2 is a number
console.log(sums); // Output: 510 (string concatenation)

let myAge: number = 25;
let price = 19.99;
let big = 3456785678;
console.log("myAge:", myAge); // Output: 25
console.log("price:", price); // Output: 19.99
console.log("big:", big); // Output: 3456785678

console.log("Type of myAge:", typeof myAge); // Output: number
console.log(typeof myAge);
console.log(typeof myAge); // Output: number

let firstName: string = "John";
let lastName: string = "Kennedy";

console.log("Hello " + firstName + " " + lastName); // Output: John Kennedy
console.log(`Hello ${firstName} ${lastName}`); // Output: Hello John Kennedy
console.log("Hello", firstName, lastName); // Output: Hello John Kennedy

let isStudent: boolean = true;
let hasJob: boolean = false;

console.log("Is student:", isStudent);
console.log("Has job:", hasJob);

let emptyValue: null = null;
let notDefined: undefined = undefined;

console.log("Empty value:", emptyValue); // Output: null
console.log("Not defined:", notDefined); // Output: undefined

let rate: number;
console.log(rate); // Output: undefined

let value: any = "Welcome to TypeScript!";
console.log(value); // Output: Welcome to TypeScript!
value = 42; // Reassigning value to a number
console.log(value); // Output: 42
value = true; // Reassigning value to a boolean
console.log(value); // Output: true
