// const Mark = {
//   firstName: 'Mark',
//   lastName: 'Miller',
//   weight: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.weight / this.height ** 2;
//     return this.BMI;
//   },
// };

// const John = {
//   firstName: 'John',
//   lastName: 'Smith',
//   weight: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMI = this.weight / this.height ** 2;
//     return this.BMI;
//   },
// };

function peopleInfo(fullName, weight, height) {
  const person = {
    fullName,
    weight,
    height,
    // calcBMI: function () {
    //   this.BMI = this.weight / this.height ** 2;
    //   return this.BMI;
    // },
    BMI: weight / height ** 2,
  };
  return person;
}

const jack = peopleInfo('jacklee', 100, 1.5);
const mark = peopleInfo('mark louis', 120, 1.7);
console.log(jack);
console.log(jack.BMI);

// function calcBMI() {
//   this.BMI = this.weight / this.height ** 2;
//   return this.BMI;
// }

// const Mark = {
//   firstName: 'Mark',
//   lastName: 'Miller',
//   weight: 78,
//   height: 1.69,
//   calcBMI,
// };

// const John = {
//   firstName: 'John',
//   lastName: 'Smith',
//   weight: 92,
//   height: 1.95,
//   calcBMI,
// };

// console.log(
//   John.calcBMI() > Mark.calcBMI()
//     ? `John's calcBMI (${John.calcBMI()}) is higher than Mark's(${Mark.calcBMI()})!`
//     : `Mark's calcBMI (${Mark.calcBMI()}) is higher than John's calcBMI (${John.calcBMI()})! `
// );
