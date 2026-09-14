// JavaScript Conditional Statements Practice

// 1. if

let age = 20;

if (age >= 18) {
    console.log("Adult");
}


// 2. if...else

let number = 10;

if (number > 0) {
    console.log("Positive");
} else {
    console.log("Negative");
}


// 3. Even or Odd

let num = 7;

if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}


// 4. if...else if...else

let marks = 85;

if (marks >= 80) {
    console.log("A+");
} else if (marks >= 70) {
    console.log("A");
} else if (marks >= 60) {
    console.log("A-");
} else {
    console.log("Below A-");
}


// 5. Multiple Conditions

let studentAge = 20;
let hasID = true;

if (studentAge >= 18 && hasID) {
    console.log("Entry allowed");
} else {
    console.log("Entry denied");
}


// 6. Ternary Operator

let result = marks >= 40 ? "Pass" : "Fail";

console.log(result);


// 7. Switch

let day = 2;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}
