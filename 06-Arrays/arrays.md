# JavaScript Arrays 

An **array** is a data structure used to store multiple values in a single variable.

Instead of creating separate variables:

```javascript
let fruit1 = "Apple";
let fruit2 = "Mango";
let fruit3 = "Banana";
```

We can use an array:

```javascript
let fruits = ["Apple", "Mango", "Banana"];
```

---

# 1. Creating an Array

### Empty Array

```javascript
let fruits = [];
```

### Array with Values

```javascript
let fruits = ["Apple", "Mango", "Banana"];
```

---

# 2. Array Index

Array indexes start from **0**.

```javascript
let fruits = ["Apple", "Mango", "Banana"];
```

| Index | Value  |
| ----: | ------ |
|     0 | Apple  |
|     1 | Mango  |
|     2 | Banana |

### Accessing Elements

```javascript
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
```

Output:

```text
Apple
Mango
Banana
```

---

# 3. Changing an Array Element

We can change an element using its index.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

fruits[1] = "Orange";

console.log(fruits);
```

Output:

```text
["Apple", "Orange", "Banana"]
```

---

# 4. Array Length

The `.length` property tells us how many elements are in an array.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits.length);
```

Output:

```text
3
```

---

# 5. `push()`

`push()` adds an element to the **end** of an array.

```javascript
let fruits = ["Apple", "Mango"];

fruits.push("Banana");

console.log(fruits);
```

Output:

```text
["Apple", "Mango", "Banana"]
```

---

# 6. `pop()`

`pop()` removes the **last** element.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

fruits.pop();

console.log(fruits);
```

Output:

```text
["Apple", "Mango"]
```

---

# 7. `unshift()`

`unshift()` adds an element to the **beginning**.

```javascript
let fruits = ["Mango", "Banana"];

fruits.unshift("Apple");

console.log(fruits);
```

Output:

```text
["Apple", "Mango", "Banana"]
```

---

# 8. `shift()`

`shift()` removes the **first** element.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

fruits.shift();

console.log(fruits);
```

Output:

```text
["Mango", "Banana"]
```

---

# 9. `indexOf()`

`indexOf()` returns the index of an element.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits.indexOf("Mango"));
```

Output:

```text
1
```

If the element doesn't exist:

```javascript
console.log(fruits.indexOf("Orange"));
```

Output:

```text
-1
```

---

# 10. `includes()`

`includes()` checks whether an array contains a specific value.

```javascript
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits.includes("Mango"));
```

Output:

```text
true
```

```javascript
console.log(fruits.includes("Orange"));
```

Output:

```text
false
```

---

# 11. Loop Through an Array

We can use a `for` loop:

```javascript
let fruits = ["Apple", "Mango", "Banana"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

Output:

```text
Apple
Mango
Banana
```

We can also use `for...of`:

```javascript
for (let fruit of fruits) {
    console.log(fruit);
}
```

---

# 12. `const` Arrays

A `const` array can still be modified.

```javascript
const fruits = ["Apple", "Mango"];

fruits.push("Banana");

console.log(fruits);
```

Output:

```text
["Apple", "Mango", "Banana"]
```

But the entire array cannot be reassigned:

```javascript
fruits = ["Orange"]; // ❌ Error
```

---

# 13. Array with Different Data Types

JavaScript arrays can contain different types of values.

```javascript
let data = [
    "Farzana",
    20,
    true,
    null
];

console.log(data);
```

However, in most programs, arrays are usually used to store related types of data.

---

# 14. Multidimensional Arrays

An array can contain other arrays.

```javascript
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[0][0]);
```

Output:

```text
1
```

Here:

```text
matrix[0][0]
   ↓   ↓
  row column
```

---

# 🧪 Practice

### Practice 1

Create an array of five programming languages.

```javascript
let languages = [
    "JavaScript",
    "Python",
    "C",
    "C++",
    "Java"
];

console.log(languages);
```

### Practice 2

Print every language.

```javascript
for (let language of languages) {
    console.log(language);
}
```

### Practice 3

Add a new language.

```javascript
languages.push("PHP");

console.log(languages);
```

### Practice 4

Find the length.

```javascript
console.log(languages.length);
```

### Practice 5

Check whether JavaScript exists.

```javascript
console.log(languages.includes("JavaScript"));
```

---

# 🧠 Quick Summary

| Method / Property | Purpose                     |
| ----------------- | --------------------------- |
| `.length`         | Gets array length           |
| `push()`          | Adds to the end             |
| `pop()`           | Removes from the end        |
| `unshift()`       | Adds to the beginning       |
| `shift()`         | Removes from the beginning  |
| `indexOf()`       | Finds an element's index    |
| `includes()`      | Checks if an element exists |

---

## 🎯 Key Takeaways

* Arrays store multiple values.
* Array indexes start from `0`.
* `.length` gives the number of elements.
* `push()` adds to the end.
* `pop()` removes from the end.
* `unshift()` adds to the beginning.
* `shift()` removes from the beginning.
* `indexOf()` finds an element's position.
* `includes()` checks whether an element exists.
* Arrays can be modified even when declared with `const`.

---

**Next Topic:** `Functions` 🚀
