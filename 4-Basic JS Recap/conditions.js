
// הצהרה פשוטה if/else
const x2 = 30;

if (x2 === 10) {
  console.log('x2 is 10');
} else if (x2 > 10) {
  console.log('x2 is greater than 10');
} else {
  console.log('x2 is less than 10');
}

// הצהרת Switch
color1 = 'blue';

switch (color1) {
  case 'red':
    console.log('color1 is red');
    break;
  case 'blue':
    console.log('color1 is blue');
    break;
  default:
    console.log('color1 is not red or blue');
}

// מפעיל תרנארי / קצרה אם
const z1 = color1 === 'red' ? 10 : 20; // מקצה 10 ל-'z1' אם 'color1' הוא 'red', אחרת מקצה 20
// בקובץ js הראשון יש כבר משתנה עם השם הזה. 
// בגלל מקרים כאלה חשוב להבין Closures