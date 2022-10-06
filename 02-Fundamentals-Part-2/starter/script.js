// function logger() {
//   console.log('My name is jack');
// }

// logger();
// logger();
// logger();
// logger();
// logger();
// logger();
// logger();
// logger();
// logger();
// logger();

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// };

// const calcAge3 = (birthYear) => 2022 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const ageDiffHxHyw = (ageHx, ageHyw) => ageHyw - ageHx;

// // function ageDiffHxHyw(ageHx, ageHyw) {
// //   return ageHyw - ageHx;
// // }

// // const ageDiffHxHyw = function (ageHx, ageHyw) {
// //   return ageHyw - ageHx;
// // };

// console.log(typeof ageDiffHxHyw, ageDiffHxHyw(28, 55));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = (year) => {
//   return 2037 - year;
// };

// const yearsUntilRetirement = function (birthYeah, firstName) {
//   const age = calcAge(birthYeah);
//   const retirement = 65 - age;

//   if (retirement >= 0) {
//     return `${firstName} retires in ${retirement} years.`;
//   } else {
//     console.log(`${firstName} has retired.`);
//     return retirement;
//   }
// };

// console.log(typeof yearsUntilRetirement(1995, 'Xia'));
// console.log(typeof yearsUntilRetirement(1970, 'Hua'));

// const friend1 = 'Chun';
// const friend2 = 'Xia';
// const friend3 = 'Qiu';
// const friend4 = 'Dong';

// const friends = ['Chun', 'Xia', 'Qiu', 'Dong'];

// const year = new Array(1991, 1992, 1993, 1994);

// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// console.log(friends);

// friends[3] = 'siJi';
// console.log(friends);

// const firstName = 'Watson';
// const watson = [firstName, 2022 - 1995, 'designer', friends];
// console.log(watson);

// const calcAge = function (birthYear) {
//   return 2022 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// console.log(calcAge(years));

const friends = ['Chun', 'Xia', 'Qiu', 'Dong'];

const newLength = friends.push('siJi');

console.log(friends);
console.log(newLength);

friends.unshift('Start');
console.log(friends);

friends.pop();
console.log(friends);
const shiftted = friends.shift();
console.log(shiftted);
console.log(friends);

console.log(friends.includes('Chun'));
console.log(friends.indexOf('Xia'));
