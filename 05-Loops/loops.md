# JavaScript Loops

A **loop** allows us to execute the same block of code multiple times.

Instead of writing:

```javascript
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

We can use a loop:

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Output:

```text
1
2
3
4
5
```

---

# 1. `for` Loop

A `for` loop is commonly used when we know how many times we want to repeat something.

### Syntax

```javascript
for (initialization; condition; update) {
    // code
}
```

### Example

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Here:

* `let i = 1` → initialization
* `i <= 5` → condition
* `i++` → update

---

# 2. `while` Loop

A `while` loop continues running as long as the condition is true.

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

Output:

```text
1
2
3
4
5
```

⚠️ Make sure the condition eventually becomes false, otherwise you may create an infinite loop.

---

# 3. `do...while` Loop

A `do...while` loop executes the code **at least once**, even if the condition is false.

```javascript
let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);
```

Output:

```text
1
2
3
4
5
```

### Important Difference

```javascript
let i = 10;

while (i < 5) {
    console.log(i);
}
```

Nothing runs.

But:

```javascript
let i = 10;

do {
    console.log(i);
} while (i < 5);
```

Output:

```text
10
```

The `do` block runs once before checking the condition.

---

# 4. `for...of`

`for...of` is useful for iterating over the values of an iterable, such as an array.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

for (let fruit of fruits) {
    console.log(fruit);
}
```

Output:

```text
Apple
Mango
Banana
```

---

# 5. `for...in`

`for...in` is commonly used to iterate over the keys of an object.

```javascript
let student = {
    name: "Farzana",
    age: 20,
    department: "CSE"
};

for (let key in student) {
    console.log(key);
}
```

Output:

```text
name
age
department
```

To get the values:

```javascript
for (let key in student) {
    console.log(student[key]);
}
```

Output:

```text
Farzana
20
CSE
```

---

# 6. `break`

`break` stops a loop immediately.

```javascript
for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}
```

Output:

```text
1
2
3
4
```

---

# 7. `continue`

`continue` skips the current iteration and moves to the next one.

```javascript
for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

Output:

```text
1
2
4
5
```

---

# 8. Nested Loops

A loop can be placed inside another loop.

```javascript
for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {
        console.log(i, j);
    }

}
```

Nested loops are commonly used for patterns, matrices, and multidimensional data.

---

# 🧪 Practice

### Practice 1 — Print numbers 1 to 10

```javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

### Practice 2 — Print even numbers

```javascript
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}
```

### Practice 3 — Calculate a sum

```javascript
let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum += i;
}

console.log(sum);
```

Output:

```text
15
```

---

# 🧠 Quick Summary

| Loop         | Common Use                     |
| ------------ | ------------------------------ |
| `for`        | Known number of iterations     |
| `while`      | Repeat while condition is true |
| `do...while` | Execute at least once          |
| `for...of`   | Iterate over values            |
| `for...in`   | Iterate over object keys       |

---

## 🎯 Key Takeaways

* Loops repeat code.
* `for` is useful when the number of iterations is known.
* `while` checks the condition before each iteration.
* `do...while` runs at least once.
* `for...of` is useful for array values.
* `for...in` is commonly used for object keys.
* `break` stops a loop.
* `continue` skips the current iteration.

---

**Next Topic:** `Arrays` 📚
