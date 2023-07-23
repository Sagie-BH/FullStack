// Destructuring an Array
const alphabets = ["A", "B", "C", "D", "E"];
const [firstLetter, secondLetter, ...restLetters] = alphabets;

console.log(firstLetter); // A
console.log(secondLetter); // B
console.log(restLetters); // ['C', 'D', 'E']

// Spread Operator With Arrays
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const combinedNumbers = [...numbers1, ...numbers2];

console.log(combinedNumbers); // [1, 2, 3, 4, 5, 6]

// Array Copying with Spread Operator
const alphabetsCopy = [...alphabets];
console.log(alphabetsCopy); // ['A', 'B', 'C', 'D', 'E']

// Destructuring Function Returns
function sumAndMultiply(a, b) {
  return [a + b, a * b];
}

const [sumResult, productResult] = sumAndMultiply(2, 3);

console.log(sumResult); // 5
console.log(productResult); // 6

// Destructuring Objects
const personInfo = { name: "John", age: 30 };
const { name, age } = personInfo;

console.log(name); // John
console.log(age); // 30

// Spread Operator With Objects
const { name: firstName, ...otherInfo } = personInfo;

console.log(firstName); // John
console.log(otherInfo); // { age: 30 }

// Nested Object Destructuring
const personDetails = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    state: "NY",
  },
};

const {
  name: personName,
  address: { city: personCity },
} = personDetails;

console.log(personName); // John
console.log(personCity); // New York

// Default Values
const { name: defaultName = "Anonymous", favoriteFood = "Unknown" } = personInfo;

console.log(defaultName); // John
console.log(favoriteFood); // Unknown

// Destructuring Function Parameters
function printPersonInfo({ name, age, favoriteFood = "None" }) {
  console.log(`Name: ${name}. Age: ${age}. Favorite Food: ${favoriteFood}.`);
}

const anotherPerson = { name: "Alice", age: 25 };
printPersonInfo(anotherPerson); // Name: Alice. Age: 25. Favorite Food: None.
