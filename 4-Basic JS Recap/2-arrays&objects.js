// מערכים - אחסון ערכים מרובים במשתנה
const numbers1 = [1, 2, 3, 4, 5]; // מגדיר מערך עם ערכים מספריים
const fruits1 = ['apples', 'oranges', 'pears', 'grapes']; // מגדיר מערך עם ערכים מחרוזת

console.log(numbers1, fruits1); // מציג את המערכים

// קבל ערך אחד - מערכים מתחילים באינדקס 0
console.log(fruits1[1]); // מציג 'oranges'

// הוסף ערך
fruits1[4] = 'blueberries'; // מוסיף 'blueberries' באינדקס 4

// הוסף ערך באמצעות push()
fruits1.push('strawberries'); // מוסיף 'strawberries' לסוף המערך

/*
shift() and unshift() in JavaScript,
which add/remove elements at the beginning of an array,
can be less efficient than push() and pop(),
which operate at the end. 
This is due to the need to re-index all elements in the array with shift() and unshift(). 
Use shift() or unshift() when clarity or convenience is more important than performance,
especially for smaller arrays or non-critical code.
 */

// הוסף לתחילה
fruits1.unshift('mangos'); // מוסיף 'mangos' לתחילת המערך

// הסר את הערך האחרון
fruits1.pop(); // מסיר את האלמנט האחרון מהמערך

// בדוק אם מערך
console.log(Array.isArray(fruits1)); // בודק אם המשתנה הוא מערך

// קבל אינדקס
console.log(fruits1.indexOf('oranges')); // מקבל את האינדקס של 'oranges' במערך


// אובייקטים
const person1 = {
  firstName: 'John',
  age3: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '50 Main St',
    city: 'Boston',
    state: 'MA'
  }
};

// קבל ערך יחיד
console.log(person1.firstName); // מציג 'John'

// קבל ערך מערך
console.log(person1.hobbies[1]); // מציג 'movies'

// קבל אובייקט משובץ
console.log(person1.address.city); // מציג 'Boston'

// הוסף מאפיין
person1.email = 'jdoe@gmail.com'; // מוסיף מאפיין 'email' לאובייקט 'person1'

// מערך של אובייקטים
const todos1 = [
  {
    id: 1,
    text: 'Take out trash',
    isComplete: false
  },
  {
    id: 2,
    text: 'Dinner with wife',
    isComplete: false
  },
  {
    id: 3,
    text: 'Meeting with boss',
    isComplete: true
  }
];

// קבל ערך מסוים של אובייקט
console.log(todos1[1].text); // מציג 'Dinner with wife'

// תסדיר כ-JSON
console.log(JSON.stringify(todos1)); // ממיר את מערך 'todos1' למחרוזת JSON


/* לולאות */

// לולאת For
for (let i1 = 0; i1 <= 10; i1++) {
  console.log(`For Loop Number: ${i1}`);
}

// לולאת While
let i2 = 0;
while (i2 <= 10) {
  console.log(`While Loop Number: ${i2}`);
  i2++;
}

// לולאות דרך מערכים
// לולאת For
for (let i3 = 0; i3 < todos1.length; i3++) {
  console.log(`Todo ${i3 + 1}: ${todos1[i3].text}`);
}

// לולאת For...of
for (let todo1 of todos1) {
  console.log(todo1.text);
}

// forEach() - עוברת על מערך
todos1.forEach(function (todo1, i4, myTodos1) {
    console.log(`${i4 + 1}: ${todo1.text}`);
    console.log(myTodos1);
  });
  
  // map() - עוברת ויוצרת מערך חדש
  const todoTextArray1 = todos1.map(function (todo1) {
    return todo1.text;
  });
  
  console.log(todoTextArray1);
  
  // filter() - מחזירה מערך על פי תנאי
  const todo2 = todos1.filter(function (todo1) {
    // מחזיר רק todos שבהם ה-id הוא 1
    return todo1.id === 1;
  });