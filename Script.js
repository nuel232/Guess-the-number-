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
//document.querySelector(".number").textContent = secretNumber;
check.addEventListener("click", function () {
  const guess = Number(guess.value);
  console.log(guess, typeof guess);
  //when there is no input
  if (!guess) {
    //document.querySelector(".message").textContent = "⛔ No number entered!";
    displayMessage("⛔ No number entered!");
    //when player wins
  } else if (guess === secretNumber) {
    //document.querySelector(".message").textContent = "🎉 correct number";
    displayMessage("🎉 correct number");
    number.textContent = secretNumber;

    body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";
    if (score > highscore) {
      highscoreEl = score;
      highscore.textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector(".message").textContent =
      displayMessage(guess > secretNumber ? "📈Too high " : "📉 Too low");
      score--;
      scoreEl.textContent = score;
    } else {
      //document.querySelector(".message").textContent = "💥  You lost the game ";
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
  //document.querySelector(".message").textContent = "Start guesing...";
  displayMessage("Start guessing...");
  body.style.backgroundColor = "#222";
  number.style.width = "15rem";
  guess.value = "";
});
