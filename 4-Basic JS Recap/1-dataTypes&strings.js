// תצוגת הודעות
alert('Hello World'); // מציג הודעת פופאפ (לא מתאימה לניפוי שגיאות)
console.log('Hello World'); // מציג הודעה בקונסול
console.error('This is an error'); // מציג הודעת שגיאה בקונסול
console.warn('This is a warning'); // מציג הודעת אזהרה בקונסול

// משתנים - var, let, const
let age1 = 30; // מגדיר משתנה באמצעות מילת המפתח 'let'

// משתנים 'let' ניתן לשנות אותם
age1 = 31;

// סוגי נתונים - String, Number, Boolean, null, undefined
const name1 = 'Brad'; // מגדיר משתנה קבוע עם ערך מחרוזת
const age2 = 37; // מגדיר משתנה קבוע עם ערך מספר
const rating1 = 3.5; // מגדיר משתנה קבוע עם ערך מספר עשרוני
const isCool1 = true; // מגדיר משתנה קבוע עם ערך בוליאני
const x1 = null; // מגדיר משתנה קבוע עם ערך null (ריק במכוון)
const y1 = undefined; // מגדיר משתנה קבוע עם ערך לא מוגדר
let z1; // מגדיר משתנה ללא הקצאת ערך (ברירת מחדל ללא הגדרה)

// בדיקת סוג של משתנה
console.log(typeof z1); // מציג 'undefined'


// מחרוזות

// חיבור
console.log('My name is ' + name1 + ' and I am ' + age2); // מחבר מחרוזות באמצעות האופרטור '+'

// תבנית מחרוזת (אלטרנטיבה טובה יותר)
console.log(`My name is ${name1} and I am ${age2}`); // משתמש בתבנית מחרוזת (backticks) לשילוב משתנים בתוך מחרוזת

// שיטות ומאפיינים של מחרוזת
const s1 = 'Hello World'; // מגדיר משתנה עם ערך מחרוזת
let val1;

val1 = s1.length; // מקבל את אורך המחרוזת

val1 = s1.toUpperCase(); // ממיר את המחרוזת לאותיות רישיות
val1 = s1.toLowerCase(); // ממיר את המחרוזת לאותיות רפיות

// קבל תת-מחרוזת
val1 = s1.substring(0, 5); // מחלץ חלק מהמחרוזת (מהאינדקס 0 עד 4)

// חלק למערך
val1 = s1.split(''); // מחלק את המחרוזת למערך של תווים יחידים

let num1 = 5;
let str1 = "10";

let result = num1 + str1;
console.log(result); // "510" - התוכן של המחרוזת מתווסף למחרוזת מצד שמאל

result = num1 * str1;
console.log(result); // 50 - המחרוזת מתווספת כמספר מצד שמאל והכפל מתבצע

result = num1 - str1;
console.log(result); // -5 - כאשר יש מינוס לפני המחרוזת, היא מתבצעת כמספר שלילי

result = num1 / str1;
console.log(result); // 0.5 - המחרוזת מתווספת כמספר מצד שמאל והחילוק מתבצע

result = num1 % str1;
console.log(result); // 5 - מודולו (המודולוס) מחזיר את השארית מהחילוק

result = num1 + parseInt(str1);
console.log(result); // 15 - הפעולה parseInt ממירה את המחרוזת למספר שלם ואז החיבור מתבצע

result = num1 + parseFloat(str1);
console.log(result); // 15 - הפעולה parseFloat ממירה את המחרוזת למספר עשרוני ואז החיבור מתבצע

let numstr = +str1
console.log(++numstr) // 11