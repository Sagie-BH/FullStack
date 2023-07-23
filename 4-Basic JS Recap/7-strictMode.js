/* Strict Mode */
// המצב נקי (Strict Mode) ב-JavaScript הוא יכולת שהוכנסה לגרסאות האחרונות של השפה.
// המטרה העיקרית של מצב נקי היא לקבוע סטנדרט מחמיר לכתיבת הקוד ולמנוע שימוש בארגומנטים שגויים.
// כאשר המצב הנקי מופעל, מבנה הקוד משתנה בכמה דרכים:

// 1. מוריד את הסף האפשריות לטעויות במידה והקוד כתוב באופן לא תקני, מה שיוביל לשגיאות בזמן ריצה.

// 2. אספקטים מסוימים של השפה שהם במצב חריג, יגרמו כעת לשגיאה בזמן ריצה.

// 3. יש בפעולות שאם מופעל מצב נקי, הן לא יתבצעו או ייתנו תוצאה שונה ממה שקורה במצב הרגיל.

// CONVERTING MISTAKES INTO ERRORS
/* בעתידת טעויות לשגיאות */

// המצב נקי יגרום לשגיאה במקרים הבאים:

// 1. ניסיון למחוק משתנה המוגדר בצורה רגילה.
var x = 3.14;
delete x;   

// 2. ניסיון לשנות את ערך התכונה "x" באובייקט לאחר שהוגדרה כתכונה שאי אפשר לשנות את ערכה.
var obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});
obj.x = 3.14;

// 3. ניסיון למחוק את התכונה prototype של אובייקט Object.
delete Object.prototype;

// 4. קיום פרמטר בפונקציה עם אותו שם כפל פעמים.
function sum(a, a, c) { 
  'use strict';
  return a + b + c; 
}

// WITH AND EVAL CHANGES
/* שינויים בפקודות with ו-eval */

// 1. שימוש ב-with עם קוד בתוך הבלוק, שיכול לגרום לבלבול בין טווח המשתנים בבלוק לבין טווח המשתנים בקוד החיצוני.
var x = 17;
with (obj) {
  x; // במצב נקי, המשתנה x הוא של האובייקט obj ולא של הקוד החיצוני.
}

// 2. שימוש ב-eval עם מטרה ליצירת משתנה בטווח הפונקציה, במצב נקי לא ניתן ליצור משתנה בטווח הפונקציה על ידי eval.
eval("8*8*99+12")

// 3. שימוש ב-eval כשבתוך הקוד שבו מופעל ה-eval מופיע "use strict", המשתנה שנוצר על ידי ה-eval לא ישתנה את הערך של המשתנה בקוד החיצוני.
var x = 17;

var evalX = eval("'use strict'; var x = 42; x;");

console.assert(x === 17); // הטענה תתבצע בהצלחה במצב נקי.
console.assert(evalX === 42); // הטענה תכשל במצב נקי.

// SECURING JAVASCRIPT
/* מאבטחת את JavaScript */

// המצב נקי ב-JavaScript מקנה מנגד יתרון של קוד נקי יותר וללא תלות באפשרויות הרגילות של השפה.
// כמו כן, הגדרת מצב נקי יכולה למנוע שימוש לא בטוח ולמנוע בעיות בזמן ריצה.
// יש להשתמש במצב נקי במקרים בהם רוצים לקבוע ס



/**
 Explanation and Example of eval() 

// The eval() function in JavaScript allows you to execute code dynamically by taking a string as an argument and interpreting it as code.
// However, using eval() is generally considered a bad practice and should be avoided for several reasons:

// 1. Security Risk: Evaluated code has full access to the scope where it is executed, potentially allowing attackers to inject malicious code and compromise the application's security.

// 2. Readability and Debugging: Code that uses eval() can be harder to read and maintain. It makes the code more complex and can lead to confusing behavior, which complicates debugging.

// 3. Performance: The use of eval() can negatively impact performance since JavaScript engines cannot optimize the code during compilation.

// Example of eval():

// Suppose you have an input that receives a mathematical expression as a string:
let userInput = "2 + 3";
let result = eval(userInput);

// In this example, the eval() function will interpret the string "2 + 3" as code and calculate the result, which will be stored in the 'result' variable.
// The above example might seem harmless, but consider the following input:

let maliciousInput = "alert('Danger! Your data has been compromised!');";
eval(maliciousInput);

// In this malicious example, the eval() function will execute the 'alert' function with a dangerous message, potentially causing harm to the user or the application.

// To avoid these risks, it is recommended to use alternative methods, such as parsing or validating user input before executing it as code, or utilizing built-in JavaScript functions to achieve the desired functionality without the need for eval().

 */