// JavaScript Loops Practice

// 1. for loop

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// 2. Print 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// 3. Print even numbers

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}


// 4. Print odd numbers

for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}


// 5. while loop

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}


// 6. do...while

let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 5);


// 7. break

for (let i = 1; i <= 10; i++) {

    if (i === 6) {
        break;
    }

    console.log(i);
}


// 8. continue

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}


// 9. Sum from 1 to 10

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log("Sum:", sum);
