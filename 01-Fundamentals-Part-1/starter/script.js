/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Watson');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1995;
console.log(typeof year);

console.log(typeof null);
*/

/*
let age = 30;
age = 31;

const birthYear = 1995;
const firstName = 'xia';
const lastName = 'hua';
console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x++;
x--;
x += 30;
x = x ** 2;
console.log(x);

//comparison operators
let now = 2022;
const ageWatson = now - 1995;
const ageYinway = now - 1967;
console.log(ageWatson > ageYinway); //会输出false 反之会输出true
console.log(ageWatson > 18);
*/

// const now = 2022;
// const ageWatson = now - 1995;
// const ageYinway = now - 1967;

// console.log(ageWatson > ageYinway);
// console.log(25 - 10 - 5);

// const averageAge = (ageWatson + ageYinway) / 2;
// console.log(ageWatson, ageYinway);
// console.log(averageAge);

// console.log();

const firstName = 'Xia';
const job = 'interior designer';
const birthYear = 1995;
const year = 2022;

const Watson = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job;

console.log(Watson);

const watsonNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(watsonNew);

console.log(`just a simple string`);

console.log(`String
multiple
lines`);
