# JavaScript Operators 

Operators are symbols that are used to perform operations on values and variables.

For example:

```javascript
let a = 10;
let b = 5;

console.log(a + b);
```

Output:

```text
15
```

---

# 1. Arithmetic Operators

Arithmetic operators are used for mathematical calculations.

| Operator | Meaning        | Example  |
| -------- | -------------- | -------- |
| `+`      | Addition       | `10 + 5` |
| `-`      | Subtraction    | `10 - 5` |
| `*`      | Multiplication | `10 * 5` |
| `/`      | Division       | `10 / 5` |
| `%`      | Remainder      | `10 % 3` |
| `**`     | Exponentiation | `2 ** 3` |

### Example

```javascript
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000
```

---

# 2. Assignment Operators

Assignment operators are used to assign values.

### Basic Assignment

```javascript
let x = 10;
```

Here, `=` assigns `10` to `x`.

### Compound Assignment

```javascript
let x = 10;

x += 5;
console.log(x); // 15
```

Other examples:

```javascript
x -= 2;
x *= 3;
x /= 2;
x %= 2;
```

---

# 3. Comparison Operators

Comparison operators compare two values and return `true` or `false`.

| Operator | Meaning                 |
| -------- | ----------------------- |
| `==`     | Equal value             |
| `===`    | Equal value and type    |
| `!=`     | Not equal value         |
| `!==`    | Not equal value or type |
| `>`      | Greater than            |
| `<`      | Less than               |
| `>=`     | Greater than or equal   |
| `<=`     | Less than or equal      |

### Example

```javascript
let a = 10;
let b = 5;

console.log(a > b);  // true
console.log(a < b);  // false
console.log(a === b); // false
```

---

# 4. `==` vs `===`

This is very important.

### `==`

Checks value after possible type conversion.

```javascript
console.log(5 == "5");
```

Output:

```text
true
```

### `===`

Checks both value and data type.

```javascript
console.log(5 === "5");
```

Output:

```text
false
```

Why?

```text
5     → number
"5"   → string
```

Therefore:

> Prefer `===` over `==` in most modern JavaScript code.

---

# 5. Logical Operators

Logical operators are used to combine conditions.

### AND `&&`

Returns `true` when both conditions are true.

```javascript
let age = 20;

console.log(age >= 18 && age <= 30);
```

Output:

```text
true
```

### OR `||`

Returns `true` when at least one condition is true.

```javascript
let age = 16;

console.log(age < 18 || age > 60);
```

Output:

```text
true
```

### NOT `!`

Reverses a Boolean value.

```javascript
let isStudent = true;

console.log(!isStudent);
```

Output:

```text
false
```

---

# 6. Increment and Decrement

### Increment `++`

Increases a value by 1.

```javascript
let count = 5;

count++;

console.log(count);
```

Output:

```text
6
```

### Decrement `--`

Decreases a value by 1.

```javascript
let count = 5;

count--;

console.log(count);
```

Output:

```text
4
```

---

# 7. String Concatenation

The `+` operator can also join strings.

```javascript
let firstName = "Farzana";
let lastName = "Akter";

let fullName = firstName + " " + lastName;

console.log(fullName);
```

Output:

```text
Farzana Akter
```

---

# 8. Ternary Operator

The ternary operator is a short way to write a simple condition.

Syntax:

```javascript
condition ? valueIfTrue : valueIfFalse;
```

### Example

```javascript
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);
```

Output:

```text
Adult
```

---

# 🧠 Quick Summary

| Category   | Operators                 |   |    |
| ---------- | ------------------------- | - | -- |
| Arithmetic | `+ - * / % **`            |   |    |
| Assignment | `= += -= *= /= %=`        |   |    |
| Comparison | `== === != !== > < >= <=` |   |    |
| Logical    | `&&                       |   | !` |
| Increment  | `++`                      |   |    |
| Decrement  | `--`                      |   |    |
| Ternary    | `? :`                     |   |    |

---

# 🧪 Practice

Try to predict the output:

```javascript
let a = 10;
let b = 3;

console.log(a + b);
console.log(a % b);
console.log(a > b);
console.log(a === 10);
console.log(a > 5 && b < 5);
```

---

## 🎯 Key Takeaways

* Operators perform operations on values.
* Arithmetic operators perform calculations.
* Comparison operators return `true` or `false`.
* Logical operators combine conditions.
* `===` checks both value and type.
* `++` increases a value by one.
* `--` decreases a value by one.
* The ternary operator is useful for simple conditions.

---

**Next Topic:** `Conditional Statements` 🔀
