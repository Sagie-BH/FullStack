// התנהגות מוזרה עם אופרטורים ב-JavaScript

// חיבור של מספר ומחרוזת
let num1 = 5;
let str1 = "10";

let result = num1 + str1;
console.log(result); // "510"

// חיבור מספרים באמצעות האופרטור +
console.log(5 + 5); // 10
console.log(5 + "5"); // "55"
console.log("5" + 5); // "55"
console.log(5 + 5 + "5"); // "105"
console.log("5" + 5 + 5); // "555"

// כפל מחרוזת עם NaN
let str2 = "abc";
let result2 = str2 * 5;
console.log(result2); // NaN

// שימוש באופרטורי השוואה עם מספרים עשרוניים
console.log(0.1 + 0.2 == 0.3); // false

// שימוש באופרטורי השוואה עם מחרוזות
console.log("10" == 10); // true
console.log("10" === 10); // false

// שימוש באופרטורים הגדרתיים
console.log(undefined == null); // true
console.log(undefined === null); // false

// שימוש באופרטורי השוואה לערכים מיותרים
console.log(NaN == NaN); // false
console.log(Infinity == Infinity); // true
console.log(-Infinity == -Infinity); // true
console.log(Infinity + 1 == Infinity); // true
console.log(Infinity + 1 == Infinity + 2); // true
