import { PI, add } from "../utils/mathUtils.js";

console.log(PI);
console.log(add(3, 2));

// console.log(2 + 3);
// console.log(4 + 5);
// console.log(213 + 32);

// // ... 30 summations The above won't work.

//Function Keyword  NameOfFunction  Params
function addNumbers(num1, num2){
    // code to be implmented comes there
    console.log(num1 + num2);
}


// //function call
// addNumbers(2, 3); // 2 and 3 are arguments
// addNumbers(4, 5);
// addNumbers(213, 32);

function multiplyNumbers(num1, num2){
    console.log(num1 * num2);
}


// multiplyNumbers(3, 5); //15
// multiplyNumbers(11, 11); //121


// function student(name, isActive){ //name = string, isActive =  boolean
//     if(isActive){
//         console.log(`Hello, ${name}`);
//     } else{
//         console.log(`Hello, visitor: ${name}`);
//     }
// }

// student("Manasseh", false);
// student("Jane", true);

function greet(name =  'friend'){
    console.log("I  am here");
    return `Hello, ${name}`;
    console.log("Finish");
}

// greet("Manasseh");
// console.log(greet("Manasseh"));
// console.log(greet());


// arrow Functions
const square = (num) =>{
    return num * num;
}


// console.log(square(10));

// Tembea Kenya (get the total amount of the nights spent)

const totalNightsSpent = (nights, pricePerNight) => {
    return nights * pricePerNight;
}

// console.log(`The total price for Diani Beach is KES ${totalNightsSpent(5, 6000)}.`);

const timeTaken = () => {
    console.log(`This runs after 5 seconds.`);
}

// setTimeout(timeTaken, 5000);

const delay = () => {
    console.log('This will have delayed for 10 seconds before displaying.');
}

// setTimeout(delay, 10000);

// setInterval(timeTaken, 3000);

let country = "Kenya";
// 10 countries ....
// arrays are a list of ordered value are in a single variable

const countries = ['Kenya', 'Tanzania', 'Uganda', 'South Sudan', 'Somalia'];
                    //0         1           2       3
// console.log(countries[0]);
// console.log(countries[1]);
// console.log(countries[2]);
// console.log(countries[3]);


// console.log(countries.length); // total no of items in the array

// // Intro array methods
// countries.push("Ethiopia"); // adding last item 
// console.log(countries);
// countries.push("Congo");
// console.log(countries);

// // remove the last item
// countries.pop(); //removing last item
// console.log(countries);

// countries.unshift("Malawi"); // adds at the start
// console.log(countries);

// countries.shift();
// console.log(countries);

// console.log(countries.indexOf("Uganda"));

// console.log(countries.includes("Malawi"));
// console.log(countries.includes("Kenya"));

// console.log(countries.slice(2, 5));


// problem each user -> name, phone number, location, email address
// how to store all of these


// const user = {
//     name: "Manasseh Gitau",
//     phone: "0796921547",
//     age: 23,
//     isActive: true,
//     countriesVisited: ["Kenya", "Uganda", "Tanzania"],
// }
// // console.log(0796921547); // error: decimal not allowed start with 0
// console.log(+25479921547);
// console.log("0796921547");
// console.log("+254796921547");

// objects -> Key and value pairs
// keys -> name, phone, age, isActive
// values -> "Manasseh Gitau", "0796921547", 23, true

// console.log(user.name);
// console.log(user.age);
// console.log(user.isActive);

// user.age = 18;
// console.log(user);

// user.isActive = false;
// console.log(user);
// user.countriesVisited.push("Ethiopia");
// console.log(user);

// user.location = "Nairobi, Kenya"; // Add a New Property
// // Property is a combination of the key and value
// console.log(user);

// user.name = "John Doe";
// console.log(user);

// console.log(user.name);

// let colors = ['brown', 'pink', 'purple', 'red', 'green']; // colors arrayz

// // shortcut -> array destructuring
// const [first, second] =  colors; // from colors array we want to get the first and seconds items first -> brown, second -> purple
// console.log(first);
// console.log(second);

// problem at hand
// const first = colors[0];
// const second = colors[1];
// console.log(first);
// console.log(second);

// object destructuring
 const student = {
    name: "Jane Doe",
    age: 16,
    isEnrolled: true
 }

// const {name, age} = student;
// console.log(name);
// console.log(age);

// problem how do we add arrays together to become one
// const nums1 = [1, 2, 3, 4];
// const nums2 = [10, 9, 8, 7];
// console.log(nums1 + nums2); // output: 1,2,3,410,9,8,7

// spread operator -> array combinations
const nums1 = [1, 2, 3, 4];
const nums2 = [10, 9, 8, 7];

const combinedNums = [...nums1, ...nums2];
// console.log(combinedNums)

/* 
output: 
[
   1, 2, 3, 4,
  10, 9, 8, 7
]
*/

// spread operator in arrays
const studentScores = [97, 23, 56, 87, 85, 31];
const allScores = [...studentScores, 43, 67, 92, 100];
// console.log(studentScores);
// console.log(allScores);

// spread operator in objects
const user = {
    name: "Manasseh Gitau",
    phone: "0796921547",
    age: 23,
    isActive: true,
    countriesVisited: ["Kenya", "Uganda", "Tanzania"],
};

const extendedUser = {...user, address: "JKUAT Towers, Kenyatta Avenue", email: "gitaumanasseh1@gmail.com"};

// console.log(user);
// console.log(extendedUser);

function sumOfNumbers(...numbers){
    return numbers.reduce((total, n) => total + n, 0);
}


let total = sumOfNumbers(1, 2, 3, 4, 5, 6);
// console.log(total);