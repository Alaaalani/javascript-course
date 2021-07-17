/*
  Important Knowledge
  For Promises
    call stack
      Mechanism To Make Interpreter Track Your Calls
      When You call A Function Its Added To The Stack
      When Function Executed Its Removed From The Stack 
      The Interpreter continue Calling From The Last Point Reached
      call stack Detect web API Leave It To The Browser To Handle It
  web API
  Event Loop 
      Wait The call Stack To Finish 
      Get Callback From Callback Queue 
      Add Callback To call stack
  callback Queue
  */

let i = 10;
let j =20;
console.log(i+j);

function first() {
    console.log("Hello First");
}

function second(){
    first();
    console.log("Hello second");
}

second();

console.log("one")
window.setTimeout(()=> console.log("Two"), 0);
console.log("Three");






  /