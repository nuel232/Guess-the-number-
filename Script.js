"use strict";
const check = document.querySelector(".check");
const guess = document.querySelector(".guess");
const number = document.querySelector(".number");
const body = document.querySelector("body");
const highscoreEl = document.querySelector(".highscore");
const scoreEl = document.querySelector(".score");
const againEl = document.querySelector(".again");
const messageEl = document.querySelector(".message");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  messageEl.textContent = message;
};

check.addEventListener("click", function () {
  const guessValue = Number(guess.value);
  console.log(guessValue, typeof guessValue);

  if (!guessValue) {
    displayMessage("⛔ No number entered!");
  } else if (guessValue === secretNumber) {
    displayMessage("🎉 Correct number");
    number.textContent = secretNumber;

    body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";
    if (score > highscore) {
      highscore = score; // Corrected this line
      highscoreEl.textContent = highscore; // Updated the highscore element
    }
  } else if (guessValue !== secretNumber) {
    if (score > 1) {
      displayMessage(guessValue > secretNumber ? "📈 Too high " : "📉 Too low");
      score--;
      scoreEl.textContent = score;
    } else {
      displayMessage("💥  You lost the game ");
      scoreEl.textContent = 0;
    }
  }
});

againEl.addEventListener("click", function () {
  score = 20;
  scoreEl.textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  number.textContent = "?";
  displayMessage("Start guessing...");
  body.style.backgroundColor = "#222";
  number.style.width = "15rem";
  guess.value = "";
});
