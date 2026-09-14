# JavaScript Variables 

A **variable** is a container used to store data in JavaScript.

For example:

```javascript
let name = "Farzana";
let age = 20;
```

Here:

* `name` stores `"Farzana"`
* `age` stores `20`

---

## 1. Ways to Declare Variables

JavaScript provides three keywords for declaring variables:

```javascript
var
let
const
```

### Example

```javascript
var name = "Farzana";
let age = 20;
const country = "Bangladesh";
```

However, in modern JavaScript, **`let` and `const` are preferred** over `var`.

---

# 2. `let`

`let` is used when the value of a variable may change later.

### Example

```javascript
let age = 20;

age = 21;

console.log(age);
```

Output:

```text
21
```

The value of `age` was changed from `20` to `21`.

### Another Example

```javascript
let score = 50;

console.log(score);

score = 80;

console.log(score);
```

Output:

```text
50
80
```

So:

> **`let` → value can be changed.**

---

# 3. `const`

`const` is used when we don't want to **reassign** a variable.

### Example

```javascript
const pi = 3.1416;

console.log(pi);
```

Output:

```text
3.1416
```

Trying to change it:

```javascript
const pi = 3.1416;

pi = 3.14;
```

This produces an error because a `const` variable cannot be reassigned.

So:

> **`const` → value cannot be reassigned.**

---

# 4. `let` vs `const`

| Feature                     | `let` | `const` |
| --------------------------- | ----- | ------- |
| Declare variable            | ✅     | ✅       |
| Reassign value              | ✅     | ❌       |
| Must initialize immediately | ❌     | ✅       |
| Block scoped                | ✅     | ✅       |

### Example

```javascript
let marks = 70;

marks = 85; // ✅ Allowed
```

```javascript
const university = "Southeast University";

university = "Another University"; // ❌ Error
```

---

# 5. `var`

`var` is the older way of declaring variables in JavaScript.

### Example

```javascript
var name = "Farzana";

name = "Omi";

console.log(name);
```

Output:

```text
Omi
```

`var` allows reassignment, but it has some scoping behaviors that can cause unexpected problems in larger programs.

Therefore, in modern JavaScript:

```text
Prefer const
Use let when the value needs to change
Avoid var in most new code
```

---

# 6. Variable Declaration vs Initialization

These two concepts are slightly different.

### Declaration

Creating a variable:

```javascript
let age;
```

Here, the variable is declared but no value has been assigned.

### Initialization

Giving a value to a variable:

```javascript
let age = 20;
```

Here, `age` is declared and initialized with `20`.

With `const`, initialization is required:

```javascript
const age = 20; // ✅
```

This is not allowed:

```javascript
const age; // ❌ Error
```

---

# 7. Reassigning Variables

With `let`, we can assign a new value:

```javascript
let name = "Farzana";

name = "Omi";

console.log(name);
```

Output:

```text
Omi
```

With `const`, reassignment is not allowed:

```javascript
const name = "Farzana";

name = "Omi"; // ❌ Error
```

---

# 8. Variables Can Store Different Types of Data

A variable can store different types of values.

### String

```javascript
let name = "Farzana";
```

### Number

```javascript
let age = 20;
```

### Boolean

```javascript
let isStudent = true;
```

### Array

```javascript
let fruits = ["Apple", "Mango", "Banana"];
```

### Object

```javascript
let student = {
    name: "Farzana",
    age: 20
};
```

We will learn these data types in more detail in the next section.

---

# 9. `const` with Arrays

An important point:

A `const` array cannot be **reassigned**, but its contents can be modified.

```javascript
const fruits = ["Apple", "Mango"];

fruits.push("Banana");

console.log(fruits);
```

Output:

```text
["Apple", "Mango", "Banana"]
```

This is allowed because we are changing the contents of the array, not replacing the array itself.

But this is not allowed:

```javascript
const fruits = ["Apple", "Mango"];

fruits = ["Orange"]; // ❌ Error
```

---

# 10. Variable Naming Rules

JavaScript variable names have some rules.

### Valid names

```javascript
let name;
let age;
let studentName;
let student_name;
let $price;
let _count;
```

### Invalid names

```javascript
let 123name;      // ❌ Cannot start with a number
let student-name; // ❌ Hyphen is not allowed
let let;          // ❌ Reserved keyword
```

A variable name can contain:

* Letters
* Numbers
* `_`
* `$`

But it **cannot start with a number**.

---

# 11. JavaScript is Case-Sensitive

JavaScript treats uppercase and lowercase letters as different.

```javascript
let name = "Farzana";
let Name = "Omi";

console.log(name);
console.log(Name);
```

These are two different variables.

Output:

```text
Farzana
Omi
```

---

# 12. Best Practice

A simple rule for modern JavaScript:

```text
Use const by default.
Use let when the value needs to change.
Avoid var in modern JavaScript.
```

### Example

```javascript
const name = "Farzana";
const university = "Southeast University";

let score = 70;

score = 85;
```

Here:

* `name` → `const` because it doesn't change
* `university` → `const` because it doesn't change
* `score` → `let` because it changes

---

# 🧠 Quick Summary

| Keyword | Reassign? | Modern JavaScript      |
| ------- | --------: | ---------------------- |
| `var`   |         ✅ | Usually avoid          |
| `let`   |         ✅ | Use when value changes |
| `const` |         ❌ | Use by default         |

### Easy Memory Trick

```text
const → Constant → Cannot reassign 🔒

let → Let it change 🔄
```

---

# 🧪 Practice

Try these examples yourself:

### Practice 1

Create a variable for your name using `let`.

```javascript
let name = "Your Name";
console.log(name);
```

### Practice 2

Create a constant for your university.

```javascript
const university = "Your University";
console.log(university);
```

### Practice 3

Create a `let` variable called `score`, then change its value.

```javascript
let score = 50;

score = 90;

console.log(score);
```

### Practice 4

Try changing a `const` variable and observe the error.

```javascript
const country = "Bangladesh";

country = "India";
```

---

## 🎯 Key Takeaways

* Variables store data.
* JavaScript has `var`, `let`, and `const`.
* `let` allows reassignment.
* `const` does not allow reassignment.
* `const` must be initialized when declared.
* `var` is an older approach and is generally avoided in modern JavaScript.
* Use `const` by default and `let` when the value needs to change.

---

**Next Topic:** `Data Types` 🚀
