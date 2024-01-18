//functions

const add = (a:number ,b:number):number =>{
  return a+b;
}

const logMsg = (message:any):void =>{
  console.log(message);
  
}

logMsg("hello");
logMsg(add(5,3));

let sub = function(c:number , d:number) :number 
{
  return  c-d;
}

type mathFunction  =(a:number,b:number) =>number;

// interface mathFunction  {
//   (a:number,b:number):number;
// }


let   mul : mathFunction =function(c,d){
  return c*d;
}

logMsg(mul(2,2))

--------------------------------------------------------------------------------------------------------

// Function with optional parameter
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}

// Calling the function
console.log(greet("Alice"));               // Output: "Hello, Alice!"
console.log(greet("Bob", "Good morning")); // Output: "Good morning, Bob!"
