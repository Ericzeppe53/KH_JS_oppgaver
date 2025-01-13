const myArray = ["apple", "banana", "cherry", "date", "eggplant"];

//1.--------------------------------------------------------------------------------------
// Print the numbers 1-10 using a "for-loop"

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 , 10]

for (let numbers = 1; numbers <= 10; numbers++)


console.log(numbers);


  


//2.--------------------------------------------------------------------------------------
// Print the numbers 1-10 using a "while loop"

let numbers = 1;

while (numbers <= 10)

  
console.log(numbers);
  

//3.--------------------------------------------------------------------------------------
// Print each item in myArray using a "for loop".

for (let myArray = 0; myArray < myArray.length; myArray++)





//4.--------------------------------------------------------------------------------------
// Using the myArray.push() method, add "mango" to the end of myArray.
//print myArray using a for... of loop.

myArray.push("mango");
for (const "mango" of myArray)

  console.log("mango");

//5.--------------------------------------------------------------------------------------
//Using the myArray.splice() method, remove "cherry" from myArray
// print the result using myArray.foreach()

const index = myArray.indexOf("cherry");
if (index myArray== -1) 

myArray.splice(index, 1);

myArray.forEach(item => {
  console.log(item);
});


//6.--------------------------------------------------------------------------------------
// Using the .shift() and .pop() method, remove the first and last item from myArray.
//print the result

let myArray = [1, 2, 3, 4, 5, 6, 7];

myArray.shift();
myArray.pop();

console.log(myArray);

// 7.--------------------------------------------------------------------------------------
// create a variable and assign it the content of myArray as a string using .join().
// print your variable.
//BONUS - See if you can make the items be seperated by a space

let myArray = [1, 2, 3, 4, 5];

let arrayAsString = myArray.join(", ");
console.log(arrayAsString);

//8--------------------------------------------------------------------------------------
//Create a function that takes a number as an argument and returns that number squared.
// call your function by using a valid argument
function numberSquared(number) {
  return number * number;
}

let result = numberSquared(4);

//9.--------------------------------------------------------------------------------------
//Using the "%" (modulo) operator complete the function,
// it should take "number" as an argument and return "even" if its even and "odd" if its odd.
function oddOrEven(number) {}
//call your function by using one of the options below.
// oddOrEven(prompt());
// oddOrEven()

function oddOrEven(number) {
  if (number % 2 === 0) { 
    return "even";
  } else {  
    return "odd";
  }
}

console.log(oddOrEven(6)); 
console.log(oddOrEven(3));
//10.--------------------------------------------------------------------------------------
//write a function that prints the fibbonacci sequence for the number passed into it
// HINT! fibbonacchi =
//  c = a + b;
//  a = b;
//  b = c;
function Fibonacci(number) {
  let a = 0, b = 1; 
  let sequence = [];  

  for (let myArray = 0; myArray < number; myArray++) {
    sequence.push(a);  
    let c = a + b;     
    a = b;             
    b = c;             
  }

  console.log(sequence.join(", "));
  Fibonacci(10);

//11.--------------------------------------------------------------------------------------
//BONUS!Implement fizzbuzz, if a number is divisible by 3: Fizz, if a number is divisible by 5: Buzz, if the number is divisible by both 3 and 5, FizzBuzz
// https://www.geeksforgeeks.org/fizz-buzz-implementation/
function fizzbuzz(number) {}

fizzbuzz();

//12.--------------------------------------------------------------------------------------
//SUPERBONUS - we have not talked about recursion yet, but here is a fun one to try.
//recursion is when a function calls itself.
//Complete the function so that it returns the factorial of a number. Factorial (n!) is the product of all whole numbers between 1 and n
//example: factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
function factorial(n) {
  if (n === 0) return 1;
  return; /// din kode her
}
console.log(factorial(5));
