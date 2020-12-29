'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = 'No Input';
    }
    else if (guess === secretNumber) {

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        document.querySelector('.message').textContent = 'Correct Guess';
        document.querySelector('body').style.backgroundColor = '#60b347';

    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? 'Too High' : 'Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = ' You Lost The Game';
        }
    }
});


document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start Guessing Again';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = ' ? ';
    document.querySelector('.guess').value = ' ';
    document.querySelector('.score').textContent = score;
})