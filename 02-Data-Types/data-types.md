# JavaScript Data Types 

A **data type** tells JavaScript what kind of value a variable contains.

For example:

```javascript
let name = "Farzana";
let age = 20;
let isStudent = true;
```

Here:

* `"Farzana"` → String
* `20` → Number
* `true` → Boolean

---

# 1. Primitive Data Types

JavaScript has several primitive data types:

* String
* Number
* BigInt
* Boolean
* Undefined
* Null
* Symbol

---

## 2. String

A **String** is a sequence of characters used to represent text.

```javascript
let name = "Farzana";
let university = 'Southeast University';
```

Strings can use:

```javascript
"Double quotes"
'Single quotes'
`Backticks`
```

### Example

```javascript
let message = "Hello JavaScript!";

console.log(message);
```

Output:

```text
Hello JavaScript!
```

---

# 3. Number

The `Number` type is used for integers and decimal numbers.

```javascript
let age = 20;
let price = 99.99;
let temperature = -5;
```

### Example

```javascript
let marks = 85;

console.log(marks);
```

Output:

```text
85
```

JavaScript uses the `Number` type for both integers and floating-point numbers.

---

# 4. Boolean

A Boolean has only two possible values:

```javascript
true
false
```

### Example

```javascript
let isStudent = true;
let isGraduated = false;

console.log(isStudent);
```

Output:

```text
true
```

Booleans are commonly used in conditions.

---

# 5. Undefined

A variable is `undefined` when it has been declared but no value has been assigned.

```javascript
let age;

console.log(age);
```

Output:

```text
undefined
```

---

# 6. Null

`null` represents an intentional absence of a value.

```javascript
let result = null;

console.log(result);
```

Output:

```text
null
```

Example:

```javascript
let selectedUser = null;
```

This means there is currently no selected user.

---

# 7. BigInt

`BigInt` is used to represent very large integers.

```javascript
let bigNumber = 123456789012345678901234567890n;

console.log(bigNumber);
```

The `n` at the end indicates that the value is a BigInt.

---

# 8. Symbol

A `Symbol` creates a unique value.

```javascript
let id = Symbol("id");

console.log(id);
```

Symbols are mainly useful when working with objects and unique property keys.

---

# 9. Object

Objects are used to store collections of related data.

```javascript
let student = {
    name: "Farzana",
    age: 20,
    department: "CSE"
};

console.log(student);
```

Output:

```text
{
    name: "Farzana",
    age: 20,
    department: "CSE"
}
```

Arrays and functions are also technically objects in JavaScript.

---

# 10. Checking Data Types with `typeof`

The `typeof` operator tells us the type of a value.

```javascript
let name = "Farzana";
let age = 20;
let isStudent = true;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
```

Output:

```text
string
number
boolean
```

### More Examples

```javascript
console.log(typeof undefined); // undefined
console.log(typeof 10);        // number
console.log(typeof "Hello");   // string
console.log(typeof true);      // boolean
```

One special case:

```javascript
console.log(typeof null);
```

Output:

```text
object
```

This is a historical behavior of JavaScript.

---

# 🧠 Quick Summary

| Data Type | Example             |
| --------- | ------------------- |
| String    | `"Hello"`           |
| Number    | `25`                |
| BigInt    | `123n`              |
| Boolean   | `true`              |
| Undefined | `undefined`         |
| Null      | `null`              |
| Symbol    | `Symbol("id")`      |
| Object    | `{name: "Farzana"}` |

---

# 🧪 Practice

```javascript
let name = "Farzana";
let age = 20;
let cgpa = 3.75;
let isStudent = true;
let result = null;

console.log(typeof name);
console.log(typeof age);
console.log(typeof cgpa);
console.log(typeof isStudent);
console.log(typeof result);
```

Try predicting the output before running the code.

---

## 🎯 Key Takeaways

* Data types describe the kind of value stored in a variable.
* Strings store text.
* Numbers store numerical values.
* Booleans store `true` or `false`.
* `undefined` means a value has not been assigned.
* `null` represents an intentional empty value.
* Objects store collections of data.
* `typeof` can be used to check a value's type.

---

**Next Topic:** `Operators` ⚡
