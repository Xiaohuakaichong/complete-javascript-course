const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas * 2) {
    return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
  } else if (avgKoalas > avgDolphins * 2) {
    return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
  } else {
    return `Nobody Win`;
  }
}

console.log(checkWinner(scoreDolphins, scoreKoalas));
