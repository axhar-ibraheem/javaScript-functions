"use strict";

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// }
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// }
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   orderDelivery: function ({ time, address }) {
//     console.log(time, address);
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`here is your pasta with ${ing1},${ing2} and ${ing3}`);
//   },
// };
// restaurant.orderDelivery({
//   time:'12:30',
//   address: 'kashmir',
// });
// const [main, , secondary]= restaurant.categories;
// console.log(main, secondary);
// const [first , ,last] =restaurant.mainMenu;
// console.log(first, last);
// const {name, categories, mainMenu} = restaurant;
// console.log(name, categories, mainMenu);
// let a=12;
// let b=98;
// const num={
//   a:1,
//   b:3,
//   c:8,
// };
// console.log(num.a,num.b);
// ({a,b}= num);
// console.log(a,b);

// const arr=[1,2,3];
// const n=[7,8,9,arr];
// console.log(n)
// const p=[7,8,9,...arr];
// console.log(p);
// const menu=[...restaurant.mainMenu,'Kabaab', 'Biryani']
// console.log(menu);
//copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);
//merge two arrays
// const newMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(newMenu);
// const str = 'azhar';
// const letters = [...str];
// console.log(...str);
// const ingredients = [
//   prompt('ingredient 1'),
//   prompt('ingredient 2'),
//   prompt('ingredient 3'),
// ];
// restaurant.orderPasta(...ingredients);
// class object_count {
//   static i = 0;
//   constructor() {
//     object_count.i = object_count.i + 1;
//   }
// }
// var a = new object_count();
// var b = new object_count();
// var c = new object_count();
// var d = new object_count();
// var e = new object_count();

// console.log(object_count.i);
// class Employee {
//   constructor(name, year_of_joining, address) {
//     this.name = name;

//     this.Year_ofJoining = year_of_joining;

//     this.address = address;
//   }

//   print_details() {
//     console.table(`${this.name} ${this.Year_ofJoining} ${this.address}`);
//   }
// }

// const Robert = new Employee('Robert', 1994, '64C- WallsStreat');

// const Sam = new Employee('Sam', 2000, '68D- WallsStreat');

// const John = new Employee('John', 1999, '26B- WallsStreat');

// console.table([Robert, Sam, John]);

// Sam.print_details();

// John.print_details();
// class PARENT {
//   print1() {
//     console.log('This is Parent Class');
//   }
// }
// class CHILD extends PARENT {
//   print2() {
//     console.log('This is Child class');
//   }
// }
// const obj1 = new PARENT();
// const obj2 = new CHILD();

// obj1.print1(); //object of parent class calling method of parent class
// //object of child class calling method of child class
// obj2.print2();
// //object of child class calling method of parent class
// obj2.print1();
// class Member {
//   constructor(Name, Age, PhoneNumber, Address, Salary) {
//     this.name = Name;
//     this.Age = Age;
//     this.PhoneNumber = PhoneNumber;
//     this.Address = Address;
//     this.Salary = Salary;
//   }
//   printSalary() {
//     console.log(this.Salary);
//   }
// }
// class Employee extends Member {
//   constructor(Name, Age, PhoneNumber, Address, Salary, specialization) {
//     super(Name, Age, PhoneNumber, Address, Salary);
//     this.specialization = specialization;
//   }
// }
// class Manager extends Member {
//   constructor(Name, Age, PhoneNumber, Address, Salary, department) {
//     super(Name, Age, PhoneNumber, Address, Salary);
//     this.department = department;
//   }
// }

// const EMP = new Employee(
//   'Rohit',
//   26,
//   7889887145,
//   'Mumbai',
//   45000,
//   'Web Developer'
// );
// const MANG = new Manager('Aman', 27, 7006541230, 'Delhi', 50000, 'Marketing');

// console.log(EMP);
// console.log(MANG);
// class Shape {
//   method_Shape() {
//     console.log('This is Shape');
//   }
// }
// class Rectanagle extends Shape {
//   method_Rectangle() {
//     console.log('This is rectangular shape');
//   }
// }
// class Circle extends Shape {
//   method_Circle() {
//     console.log('This is circular shape');
//   }
// }
// class Square extends Rectanagle {
//   method_Square() {
//     console.log('Square is a Rectangle');
//   }
// }
// const obj = new Square();
// obj.method_Shape();
// obj.method_Rectangle();
// console.log(obj);
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// };

// const newMenu = [...restaurant.categories, ...restaurant.mainMenu];
// for (let item of newMenu) console.log(item);

//SETs
// const orderSet = new Set([1, 2, 3, 4, 1, 2, 3]);
// console.log(orderSet);
// const k = new Set('azhar');
// console.log(k.entries());
// console.log(orderSet.size);
// console.log(orderSet.has(8));
// console.log(orderSet.delete(4));
// console.log(orderSet);
// const arr = ['waiter', 'chef', 'chef', 'manager', 'waiter'];
// const unique = [...new Set(arr)];
// console.log(unique);
//MAPs
// const question = new Map([
//   ['question', 'Which is the best programming language'],
//   [1, 'C'],
//   [2, 'java'],
//   [3, 'JvaScript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'try again!'],
// ]);
// console.log(question);
// console.log(question.get('question'));
// for (const [k, v] of question) {
//   if (typeof k === 'number') console.log(`Answer ${k} : ${v}`);
// }
// // const answer = Number(prompt('Your Answer'));
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));
// const arr = [2, 5, 7, 8, 5, 3, 5, 7, 8, 5, 3, 4, 2, 4, 2, 1, 6, 8, 6];
// const getFrequency = array => {
//   const map = {};
//   array.forEach(item => {
//     if (map[item]) {
//       map[item]++;
//     } else {
//       map[item] = 1;
//     }
//   });
//   return map;
// };
// console.log(getFrequency(arr));
// const question = new Map([
//   ['question', 'Which is the best programming language'],
//   [1, 'C'],
//   [2, 'java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'try again!'],
// ]);
// question.forEach(function (value) {
//   if (typeof value === 'number') console.log(value);
// });
// var twoSum = function (nums, target) {
//   let m = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     m.set(nums[i], i);
//   }
//   let diff = 0;
//   let j;
//   for (let i = 0; i < nums.length; i++) {
//     diff = target - nums[i];
//     if (m.has(diff) && i != m.get(diff)) {
//       j = m.get(diff);
//       return [i, j];
//     }
//   }
// };

//////----QUESTION-----//////

// console.log(twoSum([1, 2, 3, 4, 7, 9, 10], 10));
// const arr = [
//   23,
//   'df',
//   undefined,
//   null,
//   12,
//   {
//     name: 'Rajesh',
//   },
//   [2, 4, 7],
//   'dfd',
//   null,
//   Symbol('*'),
//   8,
// ];
// const countDataTypes = arr => {
//   return arr.reduce((acc, val) => {
//     const dataType = typeof val;
//     if (acc.has(dataType)) {
//       acc.set(dataType, acc.get(dataType) + 1);
//     } else {
//       acc.set(dataType, 1);
//     }
//     return acc;
//   }, new Map());
// };
// console.log(countDataTypes(arr));

////-----LUCKY INTEGER-----////

// var luckyInt = function countFreq(arr) {
//   let lucky = [-1];
//   var mp = new Map();
//   for (var i = 0; i < arr.length; i++) {
//     if (mp.has(arr[i])) mp.set(arr[i], mp.get(arr[i]) + 1);
//     else mp.set(arr[i], 1);
//   }

//   let nums = [...mp.keys()];
//   let freq = [...mp.values()];

//   for (let n in nums) {
//     if (nums[n] == freq[n]) {
//       lucky.push(freq[n]);
//     }
//   }

//   if (lucky.length === 1) {
//     return lucky;
//   } else {
//     return Math.max(...lucky);
//   }
// };

// var arr = [5, 1, 2, 3, 3, 3, 3, 77, 2];

// console.log(luckyInt(arr));

///------NEXT------////

// class Employee {
//   constructor(Name, Salary) {
//     this.Name = Name;
//     this.Salary = Salary;
//   }
// }
// var obj1 = new Employee('john', 25000);
// var obj2 = new Employee('Mathew', 30000);
// var obj3 = new Employee('Thomas', 21000);
// var obj4 = new Employee('George', 55000);
// var obj5 = new Employee('Anil', 60000);
// const arr = [];
// arr.push(obj1, obj2, obj3, obj4, obj5);
// function bubbleSort(arr) {
//   var flag = true;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < arr.length; j++) {
//       if (arr[j].Salary > arr[j - 1].Salary) {
//         var temp = arr[j];
//         arr[j] = arr[j - 1];
//         arr[j - 1] = temp;
//         flag = false;
//       }
//     }
//     if (flag == true) break;
//   }
// }
// bubbleSort(arr);
// for (let k in arr) console.log(arr[k].Name);
///////END

// var countPrimes = function (n) {
//   const Prime = [];
//   for (let i = 2; i < n; i++) {
//     Prime[i] = true;
//   }
//   for (let j = 2; j <= Math.sqrt(n); j++) {
//     if (Prime[j] == true) {
//       for (let k = j * j; k < n; k = k + j) {
//         Prime[k] = false;
//       }
//     }
//   }
//   console.log(Prime);
//   let count = 0;
//   const num = Prime.forEach(function (element) {
//     if (element == true) count++;
//   });
//   return count;
// };
// console.log(countPrimes(19));

///-------NEXT--------///
// let stonnes = 'aAzzzAAA';
// let jevels = 'aAz';
// let stones = [...stonnes];
// let jewels = [...jevels];
// var map = new Map();
// for (var i = 0; i < jewels.length; i++) {
//   map.set(jewels[i], 1);
// }
// let count = 0;
// for (let i = 0; i < stones.length; i++) {
//   if (map.has(stones[i])) {
//     count++;
//   }
// }

// console.log(count);

////-----NEXT-----//////
// let n = 212485;
// let r,
//   sum = 0,
//   p = 1;
// while (n > 0) {
//   r = n % 10;
//   n = Math.floor(n / 10);
//   sum = sum + r;
//   p = p * r;
// }
// console.log(p - sum);
// const arr = [1, 2, 3, 7, 8, -8];
// console.log(Math.max(...arr));
// const arr = [1, 2, 3, 4, -5, -6, 7];
// var max = arr[0];
// var maxEnding = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   maxEnding = Math.max(maxEnding + arr[i], arr[i]);
//   max = Math.max(max, maxEnding);
// }
// console.log(max);
// console.log(null == undefined);
// class stack {
//   constructor() {
//     this.top = -1;
//     this.stack = [];
//   }
//   push(ele) {
//     this.top += 1;
//     this.stack.push(ele);
//   }
//   pop() {
//     if (this.isEmpty() === true) {
//       console.log('Stack is empty');
//     } else {
//       this.stack.pop();
//       this.top -= 1;
//     }
//   }
//   peek() {
//     return this.stack[this.top];
//   }
//   isEmpty() {
//     if (this.top === -1) {
//       return true;
//     } else return false;
//   }
//   isFull() {}
// }
// const x = new stack();
// x.push('azhar');
// x.push('gulzar');
// x.push('shahid');
// x.push('ubaid');
// console.log(x.stack);
// x.pop();
// console.log(x.peek());
// var isValid = function (s) {
// const stack = [];
// for (let i = 0; i < s.length; i++) {
//   if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
//     stack.push(s[i]);
//   } else {
//     if (stack.length == 0) return false;
//     else if (
//       ((stack[stack.length - 1] == '(' && s[i] == ')') ||
//         (stack[stack.length - 1] == '{' && s[i] == '}') ||
//         (stack[stack.length - 1] == '[' && s[i] == ']')) == false
//     )
//       return false;
//     else stack.pop();
//   }
// }

// return (stack.length == 0) == true;
// const stack = [];

//   for (let i = 0; i < s.length; i++) {
//     let c = s.charAt(i);
//     switch (c) {
//       case '(':
//         stack.push(')');
//         break;
//       case '[':
//         stack.push(']');
//         break;
//       case '{':
//         stack.push('}');
//         break;
//       default:
//         if (c !== stack.pop()) {
//           return false;
//         }
//     }
//   }

//   return stack.length === 0;
// };
// console.log(isValid('({}[{})'));

/////-------------stack-------------/////
// class stack {
//   constructor() {
//     this.stack = [];
//   }
//   push(ele) {
//     this.stack.push(ele);
//   }
//   pop() {
//     if (this.isEmpty() === true) {
//       console.log('Stack is empty');
//     } else {
//       this.stack.pop();
//     }
//   }
//   peek() {
//     return this.stack[this.stack.length - 1];
//   }
//   isEmpty() {
//     if (this.stack.length == 0) {
//       return true;
//     } else return false;
//   }
//   isFull() {}
// }
// const x = new stack();
// x.push('azhar');
// x.push('gulzar');
// x.push('shahid');
// x.push('ubaid');
// console.log(x.peek());
// x.pop();
// console.log(x.peek());
// const arr = [1, 2, 3, 4, 5];
// console.log(arr[arr.length - 1]);
// arr.pop();
// arr.push(2);
// console.log(arr);

///////////----------twoStacks------------/////////////

// class TwoStacks {
//   constructor(n = Number(prompt('enter the capacity'))) {
//     this.top1 = -1;
//     this.arr = [];
//     this.top2 = n;
//   }
//   push1(ele) {
//     if (this.top1 < this.top2 - 1) {
//       this.top1++;
//       this.arr[this.top1] = ele;
//     }
//   }
//   push2(ele) {
//     if (this.top1 < this.top2 - 1) {
//       this.top2--;
//       this.arr[this.top2] = ele;
//     }
//   }
//   pop1() {
//     if (this.top1 >= 0) {
//       delete this.arr[this.top1];
//       this.top1--;
//     } else {
//       console.log('stack1 is empty');
//     }
//   }
//   pop2() {
//     if (this.top2 < this.arr.length) {
//       delete this.arr[this.top2];
//       this.top2++;
//     } else {
//       console.log('stack2 is empty');
//     }
//   }
//   peek1() {
//     if (this.top1 >= 0) {
//       return this.arr[this.top1];
//     }
//   }
//   peek2() {
//     if (this.top2 < this.arr.length) {
//       return this.arr[this.top2];
//     }
//   }
// }
// const x = new TwoStacks();
// console.log(x.arr);
// x.push2('shahid');
// x.push2('ubaid');
// x.push2('john');
// x.pop2();
// x.push1('george');
// x.push1('azhar');
// console.log(x.arr);
// console.log(x.peek1());
// x.pop1();
// x.push1(23);
// x.pop1();
// x.pop2();
// console.log(x.peek1());
// console.log(x.arr);
// console.log(x.peek2());

//////---------stock span--------////////
// const printSpan = function (...arr) {
//   var s = [];
//   s.push(0);
//   console.log(1);
//   const s_isEmpty = function () {
//     if (s.length == 0) return true;
//     else return false;
//   };
//   const sTop = function () {
//     return s[s.length - 1];
//   };
//   for (let i = 1; i < arr.length; i++) {
//     while (!s_isEmpty() && arr[sTop()] <= arr[i]) {
//       s.pop();
//     }
//     var span = s_isEmpty() ? i + 1 : i - sTop();
//     console.log(span);
//     s.push(i);
//   }
// };
// const arr = [5, 10, 20, 35, 30, 50, 70, 65];
// printSpan(...arr);

// var StockSpanner = function () {
//   this.stock = [];
//   this.day = [];
//   this.stockIsEmpty = function () {
//     if (this.stock.length == 0) return true;
//     else return false;
//   };
//   this.stockTop = function () {
//     return this.stock[this.stock.length - 1];
//   };
// };
// StockSpanner.prototype.next = function (price) {
//   var span = 1;
//   while (!this.stockIsEmpty() && this.stockTop() <= price) {
//     this.stock.pop();
//     span += this.day.pop();
//   }
//   this.stock.push(price);
//   this.day.push(span);
//   return span;
// };
// const x = new StockSpanner();
// console.log(x.next(10));
// console.log(x.next(20));
// console.log(x.next(15));
// console.log(x.next(10));
// console.log(x.next(18));
// console.log(x.next(22));
// console.log(x.next(12));

// var validateStackSequences = function (pushed, popped) {
//   let j = 0;
//   var stack = [];
//   const stack_Empty = function () {
//     if (stack.length == 0) return true;
//     else return false;
//   };
//   const stack_top = function () {
//     return stack[stack.length - 1];
//   };
//   for (let i of pushed) {
//     stack.push(i);
//     while (!stack_Empty() && stack_top() == popped[j]) {
//       stack.pop();
//       j++;
//     }
//   }
//   return j == popped.length;
// };
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [4, 5, 3, 2, 1];
// console.log(validateStackSequences(arr1, arr2));
// const s = 'string';
// for (let i of s) console.log(i);
// const s = 'azxxzy';
// var k = [];
// let i = 0;
// while (i < s.length) {
//   if (k[k.length - 1] === s[i]) {
//     k.pop();
//   } else k.push(s[i]);
//   i++;
// }
// var str = '';
// for (let i of k) str = str + i;
// console.log(str);
/////---------------NEXT
// var decodeString = function (s) {
//   var nums = [];
//   var str = [];
//   var temp = '';
//   var solution = '';
//   for (let char of s) {
//     if (!isNaN(char)) {
//       temp = `${temp}${char}`;
//     } else if (char === '[') {
//       nums.push(temp);
//       temp = '';
//       str.push(solution);
//       solution = '';
//     } else if (char === ']') {
//       solution = str.pop() + solution.repeat(nums.pop());
//     } else {
//       solution += char;
//     }
//   }
//   return solution;
// };
// console.log(decodeString('3[a]2[z]har'));

/////-----------NEXT----------/////

// const Pgreater = function (nums) {
//   let n = nums.length;
//   var s = [];
//   var next = new Array(nums.length).fill(-1);
//   s.push(0);
//   for (let i = 1; i < 2 * n; i++) {
//     if (nums[i % n] <= nums[s[s.length - 1]]) {
//       s.push(i % n);
//     } else {
//       while (!(s.length == 0) && nums[s[s.length - 1]] < nums[i % n])
//         next[s.pop()] = nums[i % n];
//     }
//     s.push(i % n);
//   }
//   return next;
// };
// const arr = [20, 30, 10, 5, 15];
//Pgreater(arr);
//console.log(Pgreater(arr))
// var max = -Number.MAX_VALUE;
// var maxIndex = -1;
// const k = arr.forEach((element, i) => {
//   element >= max ? (maxIndex = i) : (maxIndex = maxIndex);
//   max = Math.max(max, element);
// });

//////======next=======///////

// const arr = [4, 1, 2, 5, 2, 3, 1, 5];
// var n = arr.length;
// var res = 0;
// var sol = 0;
// for (let i = 1; i < n - 1; i++) {
//   var lmax = arr[i];
//   for (let j = 0; j < i; j++) {
//     lmax = Math.max(lmax, arr[j]);
//   }
//   var rmax = arr[i];
//   for (let j = i + 1; j < n; j++) {
//     rmax = Math.max(rmax, arr[j]);
//   }
//   res = res + (Math.min(rmax, lmax) - arr[i]);
// }
// console.log(res);
/////----another approach----//////
// const height = [4, 1, 2, 5, 2, 3, 1, 5];
// var n = height.length;
// var lmax = [];
// lmax[0] = height[0];
// for (let i = 1; i < n; i++) {
//   lmax[i] = Math.max(height[i], lmax[i - 0.1]);
// }

// var kmax = [];
// kmax[n - 1] = height[n - 1];
// for (let i = n - 2; i >= 0; i--) {
//   kmax[i] = Math.max(height[i], kmax[i + 1]);
// }
// for (let i = 1; i < n - 1; i++) {
//   sol = sol + Math.min(lmax[i], kmax[i]) - height[i];
// }

// console.log(sol);
///----another approach {iii}-----///
// const height = [4, 1, 2, 5, 2, 3, 1, 5];
// var n = height.length;
// var maxleft = height[0];
// var maxright = height[n - 1];
// var left = 0;
// var right = n - 1;
// var trapp = 0;
// while (left < right) {
//   if (maxleft < maxright) {
//     left++;
//     maxleft = Math.max(maxleft, height[left]);
//     trapp += maxleft - height[left];
//   } else {
//     right--;
//     maxright = Math.max(maxright, height[right]);
//     trapp += maxright - height[right];
//   }
// }
// console.log(trapp);
///-----next-----///
///////stock span
// const arr = [18, 20, 21, 30, 39, 41];
// for (let i = 0; i < arr.length; i++) {
//   var span = 1;
//   for (let j = i - 1; j >= 0 && arr[j] <= arr[i]; j--) {
//     span++;
//   }
//   console.log(span);
// }
// ////---------next greater element-------////
// const arr1 = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr1.unshift(0, 1, 3, 45), arr1);
// arr1.shift();
// arr1.shift();
// arr1.shift();
// arr1.shift();
// console.log(...arr1);
////-------QUEUE------////

// class Queue {
//   constructor() {
//     this.q = [];
//     this.rear = 0;
//     this.front = 0;
//   }
//   enqueue(val) {
//     this.q[this.rear] = val;
//     this.rear++;
//   }
//   dequeue() {
//     if (this.isEmpty() === true) return null;
//     let data = this.q[this.front];
//     this.front++;
//     if (this.front == this.rear) {
//       this.front = 0;
//       this.rear = 0;
//     }
//     return data;
//   }
//   isEmpty() {
//     if (this.front == 0 && this.rear == 0) {
//       return true;
//     } else return false;
//   }
//   get_first_element() {
//     if (!this.isEmpty()) return this.q[this.front];
//     else return null;
//   }
// }

// const x = new Queue();
// x.enqueue(5);
// x.enqueue(2);
// x.enqueue(9);
// console.log(x.dequeue());
// console.log(x.dequeue());
// console.log(x.dequeue());
// console.log(x.dequeue());
// console.log(x.isEmpty());
// x.enqueue(4);
// console.log(x.isEmpty());
// console.log(x.get_first_element());
// console.log(x.isEmpty());
// console.log(x.get_first_element());
//
// class CrazyQueue {
//   constructor() {
//     this.first = [];
//     this.last = [];
//   }

//   enqueue(value) {
//     const length = this.first.length;
//     for (let i = 0; i < length; i++) {
//       this.last.push(this.first.pop());
//     }
//     this.last.push(value);
//   }

//   dequeue() {
//     const length = this.last.length;
//     for (let i = 0; i < length; i++) {
//       this.first.push(this.last.pop());
//     }
//     return this.first.pop();
//   }
//   peek() {
//     if (this.last.length > 0) {
//       return this.last[0];
//     }
//     return this.first[this.first.length - 1];
//   }
// }

// const myQueue = new CrazyQueue();
// console.log(myQueue.peek());
// myQueue.enqueue('Joy');
// myQueue.enqueue('Matt');
// myQueue.enqueue('Pavel');
// console.log(myQueue.peek());
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
// console.log(myQueue.peek());

// var MyStack = function () {
//   this.Q1 = [];
//   this.Q2 = [];
//   this.rear = -1;
//   this.front = -1;
//   this.enque = function (val) {
//     if (this.front == -1) {
//       this.front++;
//       this.rear++;
//     } else {
//       this.rear++;
//     }
//     this.q[this.rear] = val;
//   };
//   this.deque = function () {
//     if (this.front == this.rear) {
//       this.front = -1;
//       this.rear = -1;
//     } else {
//       this.front++;
//     }
//   };
//   this.isEmpty = function () {
//     if (this.front == -1 && this.rear == -1) {
//       return true;
//     } else return false;
//   };
// };
// MyStack.prototype.push = function (x) {
//   while (!this.Q1.isEmpty()) {
//     var temp = this.Q1.deque();
//     this.Q2.enque(temp);
//   }
//   this.Q1.enque(x);
//   while (!this.Q2.isEmpty()) {
//     var temp = this.Q2.deque();
//     this.Q1.enque(temp);
//   }
// };
// MyStack.prototype.pop = function () {};
// MyStack.prototype.top = function () {};
// MyStack.prototype.empty = function () {};

// const myStack = new MyStack();
// myStack.push(1);
// myStack.push(2);

/// --- circular queue---- ///

// class CircularQueue {
//   constructor(k = 4) {
//     this.q = [];
//     this.rear = -1;
//     this.front = -1;
//     this.capacity = k;
//     this.size = 0;
//   }
//   enqueue(val) {
//     if (this.isFull() === true) return false;
//     if (this.front == -1) this.front++;
//     this.rear = (this.rear + 1) % this.capacity;
//     this.q[this.rear] = val;
//     this.size++;
//     return true;
//   }
//   dequeue() {
//     if (this.isEmpty() === true) return false;
//     this.front = (this.front + 1) % this.capacity;
//     this.size--;
//     return true;
//   }
//   isEmpty() {
//     if (this.size == 0) {
//       return true;
//     } else return false;
//   }
//   isFull() {
//     return this.capacity === this.size;
//   }
//   get_front() {
//     if (!this.isEmpty()) return this.q[this.front];
//     else return -1;
//   }
//   get_rear() {
//     if (!this.isEmpty()) return this.q[this.rear];
//     else return -1;
//   }
// }

// const x = new CircularQueue();
// console.log(x.rear);
// console.log(x.enqueue('azhar'));
// console.log(x.rear);
// console.log(x.enqueue('shah'));
// console.log(x.rear);
// console.log(x.enqueue('umer'));
// console.log(x.rear);
// console.log(x.enqueue('john'));
// console.log(x.rear);

// console.log(x.dequeue());
// console.log(x.dequeue());
// console.log(x.dequeue());
// console.log(x.dequeue());

// console.log(x.front);
// const printSpan = function (...arr) {
//   var s = [];

//   s.push(arr[0]);
//   console.log(null);
//   const s_isEmpty = function () {
//     if (s.length == 0) return true;
//     else return false;
//   };
//   const sTop = function () {
//     return s[s.length - 1];
//   };
//   for (let i = 1; i <= arr.length; i++) {
//     while (!s_isEmpty() && sTop() >= arr[i]) {
//       s.pop();
//     }
//     var span = s_isEmpty() ? null : sTop();
//     console.log(span);
//     s.push(arr[i]);
//   }
// };
// const arr = [50, 10, 38, 35, 30, 50, 70, 65];
// printSpan(...arr);
// /// -----histogram area max-----///
// //const arr = [2, 5, 1, 6, 4, 3, 2];
// console.log('....next.....');
// const arrr = [50, 10, 30, 40, 30, 50, 70, 60];
// let res = 0;
// for (let i = 0; i < arrr.length; i++) {
//   let curr = arrr[i];
//   for (let j = i - 1; j >= 0; j--) {
//     if (arrr[j] >= arrr[i]) curr += arrr[i];
//     else break;
//   }
//   for (let k = i + 1; k <= arrr.length; k++) {
//     if (arrr[k] >= arrr[i]) curr += arrr[i];
//     else break;
//   }
//   res = Math.max(res, curr);
// }
// console.log(res);
/////
// const heights = [2, 5, 1, 6, 4, 3, 2];
// var n = heights.length;
// var s = [];
// var area = 0;
// const s_isEmpty = function () {
//   if (s.length == 0) return true;
//   else return false;
// };
// const sTop = function () {
//   return s[s.length - 1];
// };
// for (let i = 0; i < n; i++) {
//   while (s_isEmpty() == false && heights[sTop()] >= heights[i]) {
//     var k = s.pop();
//     var curr = heights[k] * (s_isEmpty() ? i : i - sTop() - 1);
//     area = Math.max(area, curr);
//   }
//   s.push(i);
// }
// while (s_isEmpty() == false) {
//   k = s.pop();
//   var curr = heights[k] * (s_isEmpty() ? n : n - sTop() - 1);
//   area = Math.max(area, curr);
// }
// console.log(area);
///
// class Queue {
//   constructor() {
//     this.q = [];
//     this.rear = 0;
//     this.front = 0;
//   }
//   enqueue(val) {
//     this.q[this.rear] = val;
//     this.rear++;
//   }
//   dequeue() {
//     if (this.isEmpty() === true) return null;
//     let data = this.q[this.front];
//     this.front++;
//     if (this.front == this.rear) {
//       this.front = 0;
//       this.rear = 0;
//     }
//     return data;
//   }
//   isEmpty() {
//     if (this.front == 0 && this.rear == 0) {
//       return true;
//     } else return false;
//   }
//   peek() {
//     if (!this.isEmpty()) return this.q[this.front];
//     else return null;
//   }
// }

// const x = new Queue();
// x.enqueue(5);
// x.enqueue(2);
// x.enqueue(9);
// console.log(x.dequeue());
// console.log(x.dequeue());
// console.log(x.dequeue());
// console.log(x.dequeue());
// console.log(x.isEmpty());
// x.enqueue(4);
// var MyStack = function () {
//   this.queue = new Queue();
// };
// MyStack.prototype.push = function (x) {
//   let rotate = this.q.length;
// };
// MyStack.prototype.pop = function () {};
// MyStack.prototype.top = function () {};
// MyStack.prototype.empty = function () {};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 15,
//         next: null,
//       },
//     },
//   },
// };
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null,
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(x) {
//     const newNode = new Node(x);
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }
//   prepend(x) {
//     const newNode = new Node(x);
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//   }
// }
// const myLinkedList = new LinkedList();
// myLinkedList.append(14);
// myLinkedList.append(5);
// myLinkedList.append(12);
// myLinkedList.prepend(7);
// myLinkedList.prepend(50);
// console.log(myLinkedList);
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.slice(-8));
// // let i = 0;
// while (arr.length-- > 5) {
//   console.log(arr[i]);
//   i++;
// }
// let x = 5,
//   y = 4;

// console.log(x-- > y);
// console.log(x);
// var MyStack = function () {
//   this.queue = [];
// };
// MyStack.prototype.push = function (x) {
//   this.queue.push(x);
//   this.peek = x;
// };
// MyStack.prototype.pop = function () {
//   let size = this.queue.length;
//   while (size > 1) {
//     this.queue.push(this.queue.shift());
//     size--;
//   }
//   const result = this.queue.shift();
//   this.peek = this.queue[this.queue.length - 1];
//   return result;
// };
// MyStack.prototype.top = function () {
//   return this.peek;
// };
// MyStack.prototype.empty = function () {
//   return this.queue.length === 0;
// };
// var obj = new MyStack();
// obj.push(10);
// obj.push(8);
// obj.push(1);
// obj.push(12);
// obj.pop();
// obj.pop();
// obj.push(7);
// obj.push(13);
// obj.pop();
// console.log(obj.top());

///---window sliding technique---///
// const arr = [1, 8, 30, -5, 20, 7];
// let max = -Infinity;
// let sumK = 0;
// let Gsum = 55;
// let k = 3;
// for (let i = 0; i < k; i++) {
//   sumK += arr[i];
// }
// if (sumK == Gsum) console.log(true);
// for (let j = k; j < arr.length; j++) {
//   sumK += arr[j] - arr[j - k];
//   if (sumK == Gsum) {
//     console.log(true);
//     break;
//   }
// }
// var str = 'ababc';
// const map = new Map();
// const que = [];
// var res = '';
// // console.log(str.charAt(1));
// for (let i = 0; i < str.length; i++) {
//   map.set(str[i], map.get(str[i]) == undefined ? 1 : map.get(str[i]) + 1);
//   if (map.get(str[i]) === 1) que.push(str[i]);

//   while (que.length != 0) {
//     if (map.get(que[0]) === 1) break;
//     else que.shift();
//   }
//   if (que.length === 0) {
//     res += '#';
//   } else {
//     res += que[0];
//   }
// }
// console.log(res);
////---------nexr------////
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null,
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(x) {
//     const newNode = {
//       value: x,
//       next: null,
//     };
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//   }
//   prepend(x) {
//     const newNode = {
//       value: x,
//       next: null,
//     };
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//   }
//   print() {
//     const arr = [];
//     let temp = this.head;
//     while (temp !== null) {
//       arr.push(temp.value);
//       temp = temp.next;
//     }
//     return arr;
//   }
//   insert(index, value) {
//     if (index >= this.length) {
//       this.append(value);
//     } else {
//       const newNode = {
//         value: value,
//         next: null,
//       };
//       const pre = this.goToIndex(index - 1);
//       const next = pre.next;
//       pre.next = newNode;
//       newNode.next = next;
//       this.length++;
//     }
//   }

//   goToIndex(index) {
//     let count = 0;
//     let currentNode = this.head;
//     while (count !== index) {
//       currentNode = currentNode.next;
//       count++;
//     }
//     return currentNode;
//   }

//   delete(index) {
//     if (index >= this.length) {
//       return null;
//     }
//     const pre = this.goToIndex(index - 1);
//     const node = pre.next;
//     pre.next = node.next;
//     this.length--;
//   }
// }
// const myLinkedList = new LinkedList(10);
// myLinkedList.append(14);
// myLinkedList.append(5);
// myLinkedList.append(12);
// myLinkedList.prepend(7);
// myLinkedList.prepend(50);
// myLinkedList.insert(3, 100);
// myLinkedList.delete(2);
// myLinkedList.delete(10);
// console.log(myLinkedList.print());
// ????----doubly linked list---///
// class DoublyLinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null,
//       pre: null,
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(x) {
//     const newNode = {
//       value: x,
//       next: null,
//       pre: null,
//     };
//     newNode.pre = this.tail;
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//   }
//   prepend(x) {
//     const newNode = {
//       value: x,
//       next: null,
//       pre: null,
//     };

//     newNode.next = this.head;
//     this.head.pre = newNode;
//     this.head = newNode;
//     this.length++;
//   }
//   print() {
//     const arr = [];
//     let temp = this.head;
//     while (temp !== null) {
//       arr.push(temp.value);
//       temp = temp.next;
//     }
//     return arr;
//   }
//   insert(index, value) {
//     if (index >= this.length) {
//       this.append(value);
//     } else {
//       const newNode = {
//         value: value,
//         next: null,
//         pre: null,
//       };
//       const leader = this.goToIndex(index - 1);
//       const follwer = leader.next;
//       leader.next = newNode;
//       newNode.pre = leader;
//       follwer.pre = newNode;
//       newNode.next = follwer;
//       this.length++;
//     }
//   }

//   goToIndex(index) {
//     let count = 0;
//     let currentNode = this.head;
//     while (count !== index) {
//       currentNode = currentNode.next;
//       count++;
//     }
//     return currentNode;
//   }

//   delete(index) {
//     if (index >= this.length) {
//       return null;
//     }
//     const follwer = this.goToIndex(index - 1);
//     const target = follwer.next;
//     follwer.next = target.next;
//     target.next.pre = follwer;
//     this.length--;
//   }
// }
// const myLinkedList = new DoublyLinkedList(10);
// myLinkedList.append(14);
// myLinkedList.append(5);
// myLinkedList.append(12);
// myLinkedList.prepend(7);
// myLinkedList.prepend(50);
// myLinkedList.insert(3, 100);
// myLinkedList.delete(2);
// myLinkedList.delete(10);
// console.log(myLinkedList.print());
// // console.log(myLinkedList);

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class LinkedList {
//   constructor(value) {
//     this.head = new Node(value);
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(x) {
//     const newNode = new Node(x);
//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//   }
//   prepend(x) {
//     const newNode = new Node(x);
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//   }
//   print(node) {
//     const arr = [];
//     let temp = node;
//     while (temp !== null) {
//       arr.push(temp.value);
//       temp = temp.next;
//     }
//     return arr;
//   }
//   insert(index, value) {
//     if (index >= this.length) {
//       this.append(value);
//     } else {
//       const newNode = new Node(value);
//       var pre = this.goToIndex(index - 1);
//       var next = pre.next;
//       pre.next = newNode;
//       newNode.next = next;
//       this.length++;
//     }
//   }

//   goToIndex(index) {
//     let count = 0;
//     let currentNode = this.head;
//     while (count !== index) {
//       currentNode = currentNode.next;
//       count++;
//     }
//     return currentNode;
//   }

//   delete(index) {
//     if (index >= this.length) {
//       return null;
//     }
//     var pre = this.goToIndex(index - 1);
//     pre.next = pre.next.next;
//     this.length--;
//   }
//   reverseList(node) {
//     let curr = node;
//     let pre = null;
//     while (curr != null) {
//       let temp = curr.next;
//       curr.next = pre;
//       pre = curr;
//       curr = temp;
//     }
//     return pre;
//   }
// }
// const L1 = new LinkedList(10);

// L1.append(20);
// L1.append(30);
// // L1.append(40);
// // console.log(L1.print(L1.head));
// const L2 = new LinkedList(5);
// L2.append(15);
// L2.append(17);
// L2.append(18);
// L2.append(35);
// // console.log(L2.print(L2.head));

// function MergeL(L1, L2) {
//   var a = L1.head;
//   var b = L2.head;
//   var head, tail;
//   if (a.value <= b.value) {
//     head = tail = a;
//     a = a.next;
//   } else {
//     head = tail = b;
//     b = b.next;
//   }
//   while (a != null && b != null) {
//     if (a.value <= b.value) {
//       tail.next = a;
//       tail = a;
//       a = a.next;
//     } else {
//       tail.next = b;
//       tail = b;
//       b = b.next;
//     }
//   }
//   if (a == null) tail.next = b;
//   else tail.next = a;
//   return head;
// }
// // console.log(L1.print(MergeL(L1, L2)));

// function checkCycle(L1) {
//   let dummy;
//   while (L1 != null) {
//     dummy = L1;
//     if (dummy == L1.next) return true;
//     L1 = L1.next;
//   }
//   return false;
// }
// // console.log(checkCycle(L1));
// console.log(Math.floor(13 % 2));
// console.log(NaN == undefined);
// const arr=[1,6,9];
// const arr2= [2,4,8];
// let i=0;
// while(arr[i]!= NaN || arr2[i]!=NaN){

// }
/// =====recursive==== ////

// function fun(n, i, sum) {
//   if (n === i || i >= 10) return sum;
//   sum += i;
//   return fun(n, i + 2, sum);
// }
// console.log(fun(11, 0, 0));

///// ====iterative==== /////

// let sum1 = 0;
// let n = 11;
// for (let i = 0; i < 10; i += 2) {
//   if (n == i) break;
//   sum += i;
// }
// console.log(sum);
// function Multiply(n, k) {
//   if (k < 6) {
//     console.log(n * k);
//     Multiply(n, k + 1);
//   }
// }
// Multiply(5, 0);
// /// factorial ///
// function fun(n) {
//   if (n == 1) return 1;
//    (n - 1));
// }
// console.log(fun(10));
// console.log('NEXT');
// function fib(n) {
//   if (n == 0) return 0;
//   if (n == 1) return 1;
//   return fib(n - 1) + fib(n - 2);
// }
// console.log(fib(6));
// function print5(n) {
//   if (n === 30) return;
//   else {
//     console.log(n);
//   }
//   print5(n + 5);
// }
// print5(0);
// // function count(n) {
// //   if (n == 5) return 0;
// //   else return n + count(n + 3);
// }
// console.log(count(1));

// using call()
function greet(greeting) {
  console.log(greeting + ", " + this.name);
}

let person1 = { name: "John" };
greet.call(person1, "Hello");

// using apply()
function greet(greeting) {
  console.log(greeting + ", " + this.name);
}
let person2 = { name: "John" };

greet.apply(person2, ["Hello"]);

// using bind()
function greet(greeting) {
  console.log(greeting + ", " + this.name);
}

let person3 = { name: "John" };
let greetJohn = greet.bind(person3, "Hello");
greetJohn();

function printAge() {
  console.log(this.age);
}
const student = { age: 20 };
let age = printAge.bind(student);
age();

///currying using bind()
let multiply = function (x, y) {
  console.log(x * y);
};
const multiplyTwo = multiply.bind(this, 2);
const multiplyThree = multiply.bind(this, 3);
multiplyTwo(5);
multiplyThree(9);
// currying using function closures
const add = function (x) {
  return function (y) {
    console.log(x + y);
  };
};
const addTwo = add(2);
addTwo(5);
const addThree = add(3);
addThree(5);
