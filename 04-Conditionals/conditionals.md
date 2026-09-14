# JavaScript Conditional Statements

Conditional statements allow a program to make decisions based on conditions.

For example:

```javascript
let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
}
```

Output:

```text
You are an adult.
```

---

# 1. `if` Statement

The `if` statement runs a block of code when a condition is `true`.

### Syntax

```javascript
if (condition) {
    // code
}
```

### Example

```javascript
let age = 20;

if (age >= 18) {
    console.log("Adult");
}
```

Output:

```text
Adult
```

---

# 2. `if...else`

`else` runs when the `if` condition is false.

```javascript
let age = 16;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

Output:

```text
Minor
```

---

# 3. `if...else if...else`

Used when we have multiple conditions.

```javascript
let marks = 75;

if (marks >= 80) {
    console.log("A+");
} else if (marks >= 70) {
    console.log("A");
} else if (marks >= 60) {
    console.log("A-");
} else {
    console.log("Needs Improvement");
}
```

Output:

```text
A
```

JavaScript checks the conditions from top to bottom.

---

# 4. Nested `if`

An `if` statement can be placed inside another `if`.

```javascript
let age = 20;
let hasID = true;

if (age >= 18) {
    if (hasID) {
        console.log("Entry allowed");
    }
}
```

Output:

```text
Entry allowed
```

---

# 5. `switch` Statement

`switch` is useful when comparing one value against several possible values.

### Example

```javascript
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
```

Output:

```text
Tuesday
```

The `break` statement prevents JavaScript from continuing to the next case.

---

# 6. `default`

The `default` block runs when none of the cases match.

```javascript
let day = 10;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid day");
}
```

Output:

```text
Invalid day
```

---

# 7. Conditions with Logical Operators

We can combine conditions using `&&`, `||`, and `!`.

### AND

```javascript
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
    console.log("Allowed");
}
```

### OR

```javascript
let day = "Friday";

if (day === "Friday" || day === "Saturday") {
    console.log("Weekend");
}
```

---

# 8. Ternary Operator

For a simple condition, we can use the ternary operator.

```javascript
let age = 20;

let status = age >= 18 ? "Adult" : "Minor";

console.log(status);
```

Output:

```text
Adult
```

---

# 🧪 Practice

### Practice 1

Check whether a number is positive or negative.

```javascript
let number = 10;

if (number >= 0) {
    console.log("Positive");
} else {
    console.log("Negative");
}
```

### Practice 2

Create a grading system.

```javascript
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
```

---

# 🧠 Quick Summary

| Statement | Purpose                                |
| --------- | -------------------------------------- |
| `if`      | Checks one condition                   |
| `else`    | Runs when condition is false           |
| `else if` | Checks additional conditions           |
| `switch`  | Compares one value with multiple cases |
| `default` | Runs when no case matches              |
| `? :`     | Short conditional expression           |

---

## 🎯 Key Takeaways

* Conditional statements allow programs to make decisions.
* `if` runs code when a condition is true.
* `else` handles the false case.
* `else if` allows multiple conditions.
* `switch` is useful for multiple fixed choices.
* Logical operators can combine conditions.
* Ternary operators are useful for simple conditions.

---

**Next Topic:** `Loops` 🔁
