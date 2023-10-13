
```markdown
# MCQ TEST

## 1. 
**Write the correct answer from the following options and give an explanation (2-5 lines).**

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `ReferenceError: greetign is not defined`

<i>The code attempts to create a variable named `greeting`, but there is a typo in the assignment (`greetign` instead of `greeting`). This result is a ReferenceError because `greetign` is not defined.</i>

</p>
</details>

## 2.
**Write the correct answer from the following options and give an explanation (2-5 lines).**

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: `"12"`

<i>The function `sum` takes two parameters, `a` and `b`, and attempts to add them together. In the function call `sum(1, "2")`, JavaScript implicitly converts the number `1` to a string and concatenates it with the string `"2"`and give the result in the string `"12"`. Therefore, the correct answer is C.</i>

</p>
</details>

## 3.
**Write the correct answer from the following options and give an explanation (2-5 lines).**

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`

<i>The constant `info` holds a reference to the first element of the `food` array. However, changing the value of `info.favoriteFood` does not affect the original array `food`. So, the array `food` remains `['🍕', '🍫', '🥑', '🍔']`. That's why, A is the correct answer.</i>

</p>
</details>

## 4.
**Write the correct answer from the following options and give an explanation (2-5 lines).**

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

<i>The function `sayHi` expects a `name` parameter, but the function is called without providing an argument. That's why, `name` is `undefined`, so the function returns `"Hi there, undefined"`.</i>

</p>
</details>

## 5.
**Write the correct answer from the following options and give an explanation (2-5 lines).**

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: `3`

<i>The `forEach` method iterates over the elements of the `nums` array, and the conditional statement checks if each element is truthy. The elements `1`, `2`, and `3` are truthy, so the `count` variable is incremented three times and it gives the final value `3`.</i>

</p>
</details>
```