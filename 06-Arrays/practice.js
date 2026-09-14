// JavaScript Arrays Practice

// 1. Create an array

let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits);


// 2. Access elements

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);


// 3. Change an element

fruits[1] = "Orange";

console.log(fruits);


// 4. Array length

console.log("Length:", fruits.length);


// 5. push()

fruits.push("Grapes");

console.log(fruits);


// 6. pop()

fruits.pop();

console.log(fruits);


// 7. unshift()

fruits.unshift("Watermelon");

console.log(fruits);


// 8. shift()

fruits.shift();

console.log(fruits);


// 9. indexOf()

console.log(fruits.indexOf("Apple"));


// 10. includes()

console.log(fruits.includes("Mango"));


// 11. Loop through array

for (let fruit of fruits) {
    console.log(fruit);
}


// 12. Traditional for loop

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// 13. const array

const languages = ["JavaScript", "Python", "C++"];

languages.push("Java");

console.log(languages);
