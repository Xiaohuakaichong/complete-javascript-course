'use strict';
document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);

  console.log(guessNumber);

  if (!guessNumber || guessNumber > 20 || guessNumber < 1) {
    document.querySelector('.message').textContent =
      'Please input between 1 and 20!';
  } else {
    document.querySelector('.message').textContent = 'hao!';
  }
});
