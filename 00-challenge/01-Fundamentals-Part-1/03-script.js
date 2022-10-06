const averageScoreDolphins = (96 + 108 + 89) / 3;
const averageScoreKoalas = (88 + 91 + 110) / 3;

// const averageScoreDolphins = (97 + 112 + 101) / 3;
// const averageScoreKoalas = (109 + 95 + 123) / 3;

// const averageScoreDolphins = (97 + 112 + 101) / 3;
// const averageScoreKoalas = (109 + 95 + 106) / 3;

console.log(`Dolphins:${averageScoreDolphins}\nKoalas:${averageScoreKoalas}`);

if (averageScoreDolphins < 100 && averageScoreKoalas < 100) return console.log('Nobody win');

if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins > 100) {
  console.log('Winner is Dolphins!😀');
} else if (
  averageScoreDolphins === averageScoreKoalas &&
  averageScoreDolphins >= 100 &&
  averageScoreKoalas >= 100
) {
  console.log('DRAW');
} else if (averageScoreDolphins < averageScoreKoalas && averageScoreKoalas >= 100) {
  console.log('Winner is Koalas!');
} else {
  console.log('Nobody win');
}
