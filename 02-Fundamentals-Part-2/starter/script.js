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

// const friends = ['Chun', 'Xia', 'Qiu', 'Dong'];

// const newLength = friends.push('siJi');

// console.log(friends);
// console.log(newLength);

// friends.unshift('Start');
// console.log(friends);

// friends.pop();
// console.log(friends);
// const shiftted = friends.shift();
// console.log(shiftted);
// console.log(friends);

// console.log(friends.includes('Chun'));
// console.log(friends.indexOf('Xia'));

// const watson = {
//   firstName: 'Xia',
//   lastName: 'Hua',
//   age: 2022 - 1995,
//   job: 'designer',
//   friends: ['1', '2', '3'],
// };

// console.log(watson);

// console.log(watson.lastName);

// const nameKey = 'Name';
// console.log(watson['first' + nameKey]);
// console.log(watson['last' + nameKey]);

// const input = prompt('123');

// watson[input] ? console.log(watson[input]) : console.log(`The value is not exist`);

// watson.location = 'Shaoxing';
// console.log(watson);
// console.log(this);
// const watson = {
//   firstName: 'Xia',
//   lastName: 'Hua',
//   birthYear: 1995,
//   job: 'designer',
//   friends: ['1', '2', '3'],
//   hasDriversLicense: true,
//   // calcAge: function () {
//   //   return 2022 - this.birthYear;
//   // },
//   calcAge: function () {
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },
//   driveLicense: function () {
//     if (this.hasDriversLicense) {
//       return `a`;
//     } else {
//       return `no`;
//     }
//   },

//   calcAge2: () => {
//     this.age = 2022 - this.birthYear;
//     console.log(this);
//   },
// };

// console.log(watson['calcAge'](1995));
// console.log(watson.calcAge2());

// console.log(watson.age);

// console.log(
//   `${watson.firstName} is a ${watson.calcAge()} years old ${watson.job}, and he has ${
//     watson.hasDriversLicense ? `a` : `no`
//   } driver's license. `
// );

// const jack = {
//   firstName: 'Xia',
//   lastName: 'Hua',
//   birthYear: 1985,
//   job: 'designer',
//   friends: ['1', '2', '3'],
//   hasDriversLicense: true,
// };

// jack.calcAge = watson.calcAge;
// console.log(jack.calcAge());

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights reptition ${rep} `);
// }

// const jonasArray = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true,
// ];

// const types = [];

// for (let i = 0; i < jonasArray.length; i++) {
//   console.log(jonasArray[i], typeof jonasArray[i]);
//   types[i] = typeof jonasArray[i];
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const age = [];

// for (let i = 0; i < years.length; i++) {
//   age.push(2022 - years[i]);
// }
// console.log(age);

const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2022 - 1995,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true,
];

console.log('ONLY STRINGS');

for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== 'string') continue;
  console.log(jonasArray[i], typeof jonasArray[i]);
}
