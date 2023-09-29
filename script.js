'use strict';

function getRandomInt(max) {
  return Math.trunc(Math.random() * max) + 1;
}

let secretNumber = getRandomInt(20);
let score = Number(document.querySelector('.score').textContent);
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);

  if (!guessNumber) {
    displayMessage('⛔️ No number!');
  } else {
    if (score > 1) {
      if (guessNumber === secretNumber) {
        displayMessage('🎉 Correct Number!');

        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
          highScore = score;
          document.querySelector('.highscore').textContent = highScore;
        }
      } else {
        const message =
          guessNumber < secretNumber ? '📉 Too low!' : '📈 Too high!';
        displayMessage(message);
        score--;
        document.querySelector('.score').textContent = score;
      }
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  score = 10;
  document.querySelector('.score').textContent = score;
  secretNumber = getRandomInt(20);
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
