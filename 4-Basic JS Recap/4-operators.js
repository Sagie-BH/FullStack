// JavaScript - שיעור על אופרטורים

// אופרטורי השמה - Assignment Operators

/* אופרטור השמה פשוט מכניס את הערך 5 למשתנה x */
let x = 5; 

/* אופרטור השמה עם חיבור, מקצה את ערך המשתנה x 
ב-5 ומחזיר את הערך המעודכן 
(x = x + 5) */
x += 5; 

/* אופרטור השמה עם חיסור, מקצה את ערך המשתנה x
 ב-5 ומחזיר את הערך המעודכן 
 (x = x - 5) */
x -= 5; 

/* אופרטור השמה עם כפל, מקצה את ערך המשתנה x
 ב-5 ומחזיר את הערך המעודכן 
 (x = x * 5) */
x *= 5; 

/* אופרטור השמה עם חילוק, מקצה את ערך המשתנה x
 ב-5 ומחזיר את הערך המעודכן 
 (x = x / 5) */
x /= 5; 

 /* אופרטור השמה עם מודולו (שארית החילוק), מקצה את ערך המשתנה x
 ב-5 ומחזיר את הערך המעודכן 
 (x = x % 5)*/
x %= 5;


// אופרטורי השוואה - Comparison Operators
let a = 5;
let b = 10;

console.log(a == b); // האם a שווה ל-b? (false)
console.log(a != b); // האם a לא שווה ל-b? (true)
console.log(a > b); // האם a גדול מ-b? (false)
console.log(a < b); // האם a קטן מ-b? (true)
console.log(a >= b); // האם a גדול או שווה ל-b? (false)
console.log(a <= b); // האם a קטן או שווה ל-b? (true)


// אופרטורי אינקרמנט ודיקרמנט - Increment/Decrement Operators

let c = 5;

console.log(c++); // הדפס ערך המשתנה c ואז הגדר את הערך ל-6 (הדפס: 5)
console.log(++c); // הגדר את הערך של המשתנה c ל-7 ואז הדפס אותו (הדפס: 7)

console.log(c--); // הדפס ערך המשתנה c ואז הגדר את הערך ל-6 (הדפס: 7)
console.log(--c); // הגדר את הערך של המשתנה c ל-5 ואז הדפס אותו (הדפס: 5)


// אופרטורי לוגי - Logical Operators

let x1 = 5;
let y = 10;

console.log(x1 > 0 && y < 20); // האם x גדול מ-0 וגם y קטן מ-20? (true)
console.log(x1 > 0 || y > 20); // האם x גדול מ-0 או y גדול מ-20? (true)
console.log(!(x1 > 0)); // האם x לא גדול מ-0? (false)


// אופרטור תנאי - Conditional (Ternary) Operator

let age = 20;
let message = (age >= 18) ? "גיל מבוגר" : "גיל צעיר"; // אם הגיל גדול או שווה ל-18, ההודעה תהיה "גיל מבוגר", אחרת תהיה "גיל צעיר"
console.log(message); // "גיל מבוגר"


// אופרטור של חדירה (Member Access) - Dot Operator

let person = {
  name: "John",
  age: 30,
  address: {
    city: "Tel Aviv",
    street: "Main Street"
  }
};

console.log(person.name); // גישה לתכונה 'name' של אובייקט person
console.log(person.address.city); // גישה לתכונה 'city' של אובייקט address שבתוך אובייקט person


// אופרטור של חדירה (Computed Member Access) - Bracket Operator

let person1 = {
  name: "John",
  age: 30
};

let propertyName = "name";

console.log(person1[propertyName]); // גישה לתכונה באמצעות שם התכונה שמתקבל ממשתנה propertyName


// אופרטור של חדירה (Function Invocation) - Function Call Operator

function sayHello(name) {
  console.log("Hello " + name);
}

sayHello("John"); // קריאה לפונקציה sayHello ומעביר לה את הפרמטר "John"
