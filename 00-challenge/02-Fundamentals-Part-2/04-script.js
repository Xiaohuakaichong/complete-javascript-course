const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let totals = [];
let tip;

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

console.log(tips);
console.log(totals);

let average;
const calcAverage = function (abc) {
  let sum = 0;

  for (i = 0; i < abc.length; i++) {
    sum = sum + abc[i];
  }
  return sum / abc.length;
};

console.log(calcAverage(totals));

console.log();

console.log(calcAverage(totals));
