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
