console.log("Manasseh");

// This is a single-line comment

/* 
- this is a multi-line comment
- This is another line

*/

// let - this variable be reused 
// const - this is a permanent variable and cannot be reused
// var - this was deprecated (Not used in modern javascript but used legacy code)


let score = 96;
console.log(score);

score = 69;
console.log(score);

// let can be reused


const pi = 3.142;
console.log(pi);

// pi = 3.1416; // this will throw an error in console.
// console.log(pi); //TypeError: Assignment to constant variable.


// Data Types in Js
/* 
Number = 1, 2, 103434, 3.142
strings = "Manasseh",  "123132", "Banana"
Boolean =  true, false 
Null = empty value 
let price; //Null
undefined = declared but no value;
*/

let num = 23;
console.log(typeof(num));
console.log(typeof(pi));

let name =  "Manasseh";
console.log(typeof(name));

let phone = "07234242346";
console.log(typeof(phone));
console.log(phone);

let isActive = false; // true also works the same
console.log(typeof(isActive));


// let price;
console.log(typeof(price));

console.log(typeof(null));


// BODMAS = Brackets, of, Division, Multiplation, Addition, Subtraction
let pricePerNight = 6000;
let nights = 4;

let totalPrice = pricePerNight * nights;
console.log(totalPrice);


let num1 = 10;
let num2 = 4;

let addition = num1 + num2;
console.log(addition);

let subtraction =  num1 - num2;
console.log(subtraction);

let negSubtraction = num2 - num1;
console.log(negSubtraction);

let division = num1 / num2;
console.log(division);

let reminderOfDivision = num1 % num2; // modulo - ger reminder after division
console.log(reminderOfDivision);

// 10 /4  = (4*2) = 8 = 10 - 8 = 2

let num3 = num2 + 1;
console.log(num3);

// This is the long way of doing the arthimetic operations


// Below is a shorter way of doing things
console.log(num2 += 1);

console.log(num1 -= 3);

console.log(num1 *= 3);

console.log(num1 /= 7);

let roomTemp = 20;

if (roomTemp <= 20){
    console.log("The temperature is cold");
}

// comparison operations
// < - less than sign
// > - greater than sign
// <= - less than or equal to that number
// >= - greater than or equal to
// how to check for equality (2 ways)
// 1. == - (not strict equality)
// 2. === - (strict equality)
// != (not equal to) - can be strict or not

console.log(3 < 4);
console.log(6 < 3);
console.log(6 <= 6);

console.log(6 > 3);
console.log(7 > 10);
console.log(10 >= 10);

//equality
console.log(10 == 10);
console.log(10 == 9);

// problem
console.log("10" == 10); // Does not do a typecheck (typeof())
console.log("10" === 10);  // It does typecheck (typeof())

console.log(10 === 10);
console.log("10" === "10");

/* 
- is "10" string or Number
- is 10 string or Number

- if pass then checks equality
- if fail then returns false
*/

// not equal (equality does not work) !=
console.log(10 != 10);

console.log(10 != 9);

console.log("10" != 9);


// add strictness (typecheck - typeof())
console.log("10" !== 9);