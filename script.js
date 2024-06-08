'use strict';

let number = Math.round(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
function className(htmlClass, message) {
  document.querySelector(htmlClass).textContent = message;
}
document
  .querySelector('.check')
  .addEventListener('click', function guessInput() {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
      className('.message', ' (☞ﾟヮﾟ)☞ No number input');
    } // if user wins
    else if (guess === number) {
      className('.message', '🎉You guess correctly');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      className('.number', number);
      className('.score', score);
      // Filling the highscore
      if (score > highScore) {
        highScore = score;
        className('.highscore', highScore);
      }
    }
    //when guess is different
    else if (guess !== number) {
      if (score > 1) {
        // too high or too low
        className('.message', guess > number ? '📈Too high' : '📉Too low');
        score--;
        className('.score', score);
      } // when score goes to 0 player loses
      else {
        className('.message', '😹You lost');
        className('.score', 0);
      }
    }
  });
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.round(Math.random() * 20 + 1);
  className('.score', 20);
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  className('.number', '?');
  className('.score', score);
  className('.message', '🎉Start guessing...');
  document.querySelector('.guess').value = '';
});
