console.log('#3. JavaScript homework example file')


// #1 та #2

const userObj = {
  firstName: 'Vlada',
  lastName: 'Zoloto',
  age: 30,
  fullName() {
    return this.firstName + ' ' + this.lastName;
  }
};
  
console.log(userObj); 
console.log(userObj.fullName());


// #3

function defUpperStr(str) {
  return (str || 'DEFAULT TEXT').toUpperCase();
}
  
console.log(defUpperStr('My text')); // MY TEXT
console.log(defUpperStr()); // DEFAULT TEXT
  
// #4

function evenFn(n) {
  const res = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) res.push(i);
  }
  return res;
}
  
console.log(evenFn(10));
console.log(evenFn(15));
console.log(evenFn(20));
  
// #5

function weekFn(n) {
  switch (n) {
    case 1: return 'Понеділок';
    case 2: return 'Вівторок';
    case 3: return 'Середа';
    case 4: return 'Четвер';
    case 5: return "П'ятниця";
    case 6: return 'Субота';
    case 7: return 'Неділя';
    default: return null;
  }
}
  
console.log(weekFn(1));
console.log(weekFn(3));
console.log(weekFn(7));
console.log(weekFn(9));
console.log(weekFn(1.5));
console.log(weekFn('2'));
  
// #6

function ageClassification(n) {
  return n < 1 || n > 122 ? null :
  n <= 24 ? 'Дитинство' :
  n <= 44 ? 'Молодість' :
  n <= 65 ? 'Зрілість' :
  n <= 75 ? 'Старість' :
  n <= 90 ? 'Довголіття' :
  n <= 122 ? 'Рекорд' : null;
}
  
console.log('-1 :', ageClassification(-1)); // -1 : null
console.log('0 :', ageClassification(0)); // 0 : null
console.log('1 :', ageClassification(1)); // 1 : Дитинство
console.log('24 :', ageClassification(24)); // 24 : Дитинство
console.log('24.01 :', ageClassification(24.01)); // 24.01 : Молодість
console.log('44 :', ageClassification(44)); // 44 : Молодість
console.log('44.01 :', ageClassification(44.01)); // 44.01 : Зрілість
console.log('65 :', ageClassification(65)); // 65 : Зрілість
console.log('65.1 :', ageClassification(65.1)); // 65.1 : Старість
console.log('75 :', ageClassification(75)); // 75 : Старість
console.log('75.01 :', ageClassification(75.01)); // 75.01 : Довголіття
console.log('90 :', ageClassification(90)); // 90 : Довголіття
console.log('90.01 :', ageClassification(90.01)); // 90.01 : Рекорд
console.log('122 :', ageClassification(122)); // 122 : Рекорд
console.log('122.01 :', ageClassification(122.01)); // 122.01 : null
console.log('150 :', ageClassification(150)); // 150 : null


// #7

  
function oddFn(n) {
  const res = [];
  let i = 1;
  while (i <= n) {
    if (i % 2 !== 0) res.push(i);
    i++;
  }

  return res;
}
  
console.log(oddFn(10));
console.log(oddFn(15));
console.log(oddFn(20));
  
// #8

function mainFunc(a, b, cb) {
  return typeof cb === 'function' ? cb(a, b) : false;
}
  
function cbRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
function cbPow(num, pow) {
  return Math.pow(num, pow);
}
  
function cbAdd(a, b) {
  return a + b;
}
  
console.log(mainFunc(2, 5, cbRandom));
console.log(mainFunc(2, 5, cbPow));
console.log(mainFunc(2, 5, cbAdd));
console.log(mainFunc(2, 5, 'not a func'));