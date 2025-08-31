//! 1
// String.prototype.trm = function () {
//   return this.replace(/^\s+|\s+$/g, "");
// };
// String.prototype.upperCase = function () {
//   return this.toUpperCase();
// };
// String.prototype.has = function (str) {
//   return this.indexOf(str) !== -1;
// };
// String.prototype.cut = function (start, end) {
//   return this.substring(start, end);
// };
// String.prototype.rpt = function (n) {
//   return new Array(n + 1).join(this);
// };

//! 2
// Number.prototype.fixed = function (n) {
//   return Number(this.toFixed(n));
// };
// Number.prototype.round = function () {
//   return Math.round(this);
// };
// Number.prototype.isSquare = function () {
//   return Number.isInteger(Math.sqrt(this));
// };
// Number.prototype.count = function () {
//   return Math.abs(this).toString().length;
// };
// Number.prototype.sum = function () {
//   return Math.abs(this).toString().split("").reduce((a, b) => a + +b, 0);
// };

//! 3.
// Array.prototype.customMap = function (cb) {
//   let res = [];
//   for (let i = 0; i < this.length; i++) {
//     res.push(cb(this[i], i, this));
//   }
//   return res;
// };
// Array.prototype.customEvery = function (cb) {
//   for (let i = 0; i < this.length; i++) {
//     if (!cb(this[i], i, this)) return false;
//   }
//   return true;
// };
// Array.prototype.customReduce = function (cb, initial) {
//   let acc = initial;
//   let start = 0;
//   if (acc === undefined) {
//     acc = this[0];
//     start = 1;
//   }
//   for (let i = start; i < this.length; i++) {
//     acc = cb(acc, this[i], i, this);
//   }
//   return acc;
// };
// Array.prototype.customFindIndex = function (cb) {
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) return i;
//   }
//   return -1;
// };
// Array.prototype.customSplice = function (start, deleteCount, ...items) {
//   let removed = this.slice(start, start + deleteCount);
//   let before = this.slice(0, start);
//   let after = this.slice(start + deleteCount);
//   let newArr = [...before, ...items, ...after];
//   this.length = 0;
//   for (let i = 0; i < newArr.length; i++) this.push(newArr[i]);
//   return removed;
// };

//! 4
// function Animal(name, speed, limitAge) {
//   this.name = name;
//   this.speed = speed;
//   this.limitAge = limitAge;
// }
// Animal.prototype.info = function () {
//   return `${this.name}, ${this.speed}, ${this.limitAge}`;
// };

//! 5
// function Student(name, course, years, university) {
//   this.name = name;
//   this.course = course;
//   this.years = years;
//   this.university = university;
// }
// Student.prototype.leftYears = function () {
//   return this.course - this.years;
// };

//! 6
// function Person(name, age, currentYear) {
//   this.name = name;
//   this.age = age;
//   this.currentYear = currentYear;
// }
// Person.prototype.getBirthYear = function () {
//   return this.currentYear - this.age;
// };

//! 7 
// function Employee(name, salary, workName) {
//   this.name = name;
//   this.salary = salary;
//   this.workName = workName;
// }
// Employee.prototype.increaseSalary = function (p) {
//   return this.salary + (this.salary * p) / 100;
// };

//! 8
// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
// }
// Rectangle.prototype.getArea = function () {
//   return this.width * this.height;
// };
// Rectangle.prototype.getPerimetr = function () {
//   return 2 * (this.width + this.height);
// };
