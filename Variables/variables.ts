console.log("Hello, TypeScript!");

function varScopeExample() {
  if (true) {
    var message = "Hello from inside the block!";
  }
  console.log(message);
}
varScopeExample();

function BlockScopeExample() {
  if (true) {
    let blockMessage = "Hello from inside the block with let!";
    const blockConstant = "Hello from inside the block with const!";
    console.log(blockMessage);
    console.log(blockConstant);
  }
  // Uncommenting the next line will cause an error because blockMessage is not accessible outside the block
  // console.log(blockMessage);
}
BlockScopeExample();

function scopeDifferenceExample() {
  if (true) {
    var functionScoped = "I am function scoped!";
    let blockScoped = "I am block scoped!";
    const blockConstantScoped = "I am also block scoped!";
    // console.log(functionScoped); // This will work
    console.log(blockScoped); // This will work
    console.log(blockConstantScoped); // This will work
  }
  //   console.log(functionScoped); // This will work
  // Uncommenting the next line will cause an error because blockScoped is not accessible outside the block
  console.log(functionScoped); // This will work
}
scopeDifferenceExample();

let y; // Declare a variable y without initializing it
console.log(y); // Output: undefined
y = 10; // Initialize the variable y
console.log(y); // Output: 10

// Const must be initialized at the time of declaration
const z = 20; // Declare and initialize a constant z
console.log(z); // Output: 20

var city = "New York"; // Declare a variable city using var
var city = "Los Angeles"; // Redeclare the variable city using var
console.log(city); // Output: Los Angeles

let country = "USA"; // Declare a variable country using let
// let country = "Canada"; // Uncommenting this line will cause an error because country has already been declared
console.log(country); // Output: USA

const pi = 3.14; // Declare a constant pi
// pi = 3.14159; // Uncommenting this line will cause an error because pi is a constant and cannot be reassigned
console.log(pi); // Output: 3.14

var ages = 27;
ages = 30; // Reassigning the variable age
console.log(ages); // Output: 30

let address = "123 Main St";
address = "456 Oak Ave"; // Reassigning the variable address
console.log(address); // Output: 456 Oak Ave

const birthYear = 1990;
// birthYear = 1991; // Uncommenting this line will cause an error because birthYear is a constant and cannot be reassigned
console.log(birthYear); // Output: 1990

// console.log(a);
let a = 5; // This will cause a ReferenceError because 'a' is not hoisted like 'var'
console.log(a); // This line will not be executed due to the error above

// console.log(b); //undefined
var b = 10; // This will work because 'b' is hoisted and initialized with undefined
console.log(b); // Output: 10

// console.log(c);
const c = 15; // Declare a constant c
// console.log(c); // Uncommenting this line will cause a ReferenceError because 'c' is not hoisted like 'var'
