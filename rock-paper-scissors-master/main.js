// rules btn effect
const rulesBtn = document.getElementById("rules_btn");
const closeBtn = document.getElementById("close");
const overlay = document.querySelector(".overlay");
const rulesInfo = document.querySelector(".rules_info");
const scoreNum = document.querySelector(".score_num");
let scoreNumber = 0;
let scoreInterval;

scoreNum.textContent = localStorage.getItem("score");

rulesBtn.onclick = function () {
  if (overlay.classList.contains("active")) {
    return false;
  } else {
    overlay.classList.add("active");
    rulesInfo.classList.add("active");
  }
};

closeBtn.onclick = function () {
  overlay.classList.remove("active");
  rulesInfo.classList.remove("active");
};

// start game
let mediaQuery = window.matchMedia("(max-width: 992px)");

const gameImgs = document.querySelectorAll(".img-cont img");
// my picked desktop
const gameContainer = document.querySelector(".game_container");
const myPicked = document.querySelector(".my_picked .my_picked_chose");
const HousePicked = document.querySelector(".house_picked .house_picked_chose");
const myPickedWin = document.querySelector(".my_picked .my_picked_chose .win");
const HousePickedWin = document.querySelector(".house_picked_chose .win");
const myPickedDC = document.querySelector(".game_playing_dc");
const center = document.querySelector(".center");
const resultLose = document.querySelector(".center .resultl");
const resultWin = document.querySelector(".center .resultw");
const resultDraw = document.querySelector(".center .resultd");
const playAgainBtn = document.getElementById("play_again");

// my picked mobile
const myPickedMb = document.querySelector(
  ".game_playing_mb .my_picked .my_picked_chose"
);
const HousePickedMb = document.querySelector(
  ".game_playing_mb .house_picked .house_picked_chose"
);
const myPickedWinMb = document.querySelector(
  ".game_playing_mb .my_picked .my_picked_chose .win"
);
const HousePickedWinMb = document.querySelector(
  ".game_playing_mb .house_picked_chose .win"
);
const myPickedMB = document.querySelector(".game_playing_mb");
const centerMb = document.querySelector(".game_playing_mb .center");
const resultLoseMb = document.querySelector(
  ".game_playing_mb .center .resultl"
);
const resultWinMb = document.querySelector(".game_playing_mb .center .resultw");
const resultDrawMb = document.querySelector(
  ".game_playing_mb .center .resultd"
);
const playAgainBtnMb = document.querySelector(".game_playing_mb #play_again");

let randomNumber = Math.floor(Math.random() * gameImgs.length);

if (mediaQuery.matches) {
  gameImgs.forEach((img) => {
    img.addEventListener("click", function () {
      // function clone() {
      // }
      var imgClone = this.cloneNode(true);
      gameContainer.classList.add("active");
      myPickedMB.classList.remove("active");
      myPickedMb.appendChild(imgClone);
      // random
      setTimeout(() => {
        this.addEventListener("click", function () {
          return null;
        });
        HousePickedMb.appendChild(gameImgs[randomNumber]);
        if (this.className === gameImgs[randomNumber].className) {
          centerMb.classList.add("active");
          resultDrawMb.classList.add("active");
        } else if (
          this.className === "paper" &&
          gameImgs[randomNumber].className === "rock"
        ) {
          centerMb.classList.add("active");
          resultWinMb.classList.add("active");
          myPickedWinMb.classList.add("active");
          // interval
          scoreInterval = setInterval(() => {
            if (localStorage.getItem("score") > 9) {
              scoreNum.textContent = scoreNumber + 1;
              ++scoreNumber;
              if (
                scoreNumber ===
                Number.parseInt(localStorage.getItem("score")) + 10
              ) {
                clearInterval(scoreInterval);
                scoreNumber === localStorage.getItem("score");
                localStorage.setItem("score", scoreNumber);
              }
            } else {
              scoreNum.textContent = scoreNumber + 1;
              ++scoreNumber;
              if (scoreNumber / 10 === 1) {
                clearInterval(scoreInterval);
                scoreNumber === localStorage.getItem("score");
                localStorage.setItem("score", scoreNumber);
              }
            }
          }, 20);
        } else if (
          this.className === "paper" &&
          gameImgs[randomNumber].className === "scissors"
        ) {
          centerMb.classList.add("active");
          resultLoseMb.classList.add("active");
          HousePickedWinMb.classList.add("active");
        } else if (
          this.className === "rock" &&
          gameImgs[randomNumber].className === "paper"
        ) {
          centerMb.classList.add("active");
          resultLoseMb.classList.add("active");
          HousePickedWinMb.classList.add("active");
        } else if (
          this.className === "rock" &&
          gameImgs[randomNumber].className === "scissors"
        ) {
          centerMb.classList.add("active");
          resultWinMb.classList.add("active");
          myPickedWinMb.classList.add("active");
          // interval
          scoreInterval = setInterval(() => {
            if (localStorage.getItem("score") > 9) {
              scoreNum.textContent = scoreNumber + 1;
              ++scoreNumber;
              if (
                scoreNumber ===
                Number.parseInt(localStorage.getItem("score")) + 10
              ) {
                clearInterval(scoreInterval);
                scoreNumber === localStorage.getItem("score");
                localStorage.setItem("score", scoreNumber);
              }
            } else {
              scoreNum.textContent = scoreNumber + 1;
              ++scoreNumber;
              if (scoreNumber / 10 === 1) {
                clearInterval(scoreInterval);
                scoreNumber === localStorage.getItem("score");
                localStorage.setItem("score", scoreNumber);
              }
            }
          }, 20);
        } else if (
          this.className === "scissors" &&
          gameImgs[randomNumber].className === "paper"
        ) {
          centerMb.classList.add("active");
          resultWinMb.classList.add("active");
          myPickedWinMb.classList.add("active");
          // interval
          scoreInterval = setInterval(() => {
            if (localStorage.getItem("score") > 9) {
              scoreNum.textContent = scoreNumber + 1;
              ++scoreNumber;
              if (
                scoreNumber ===
                Number.parseInt(localStorage.getItem("score")) + 10
              ) {
                clearInterval(scoreInterval);
                scoreNumber === localStorage.getItem("score");
                localStorage.setItem("score", scoreNumber);
              }
            } else {
              scoreNum.textContent = scoreNumber + 1;
              ++scoreNumber;
              if (scoreNumber / 10 === 1) {
                clearInterval(scoreInterval);
                scoreNumber === localStorage.getItem("score");
                localStorage.setItem("score", scoreNumber);
              }
            }
          }, 20);
        } else if (
          this.className === "scissors" &&
          gameImgs[randomNumber].className === "rock"
        ) {
          centerMb.classList.add("active");
          resultLoseMb.classList.add("active");
          HousePickedWinMb.classList.add("active");
        }
        // play again btn
        playAgainBtnMb.onclick = function () {
          location.reload();
        };
      }, 1000);
    });
  });
} else {
  gameImgs.forEach((img) => {
    img.addEventListener("click", function () {
      var imgClone = this.cloneNode(true);
      gameContainer.classList.add("active");
      myPickedDC.classList.remove("active");
      myPicked.appendChild(imgClone);
      // random
      setTimeout(() => {
        HousePicked.appendChild(gameImgs[randomNumber]);
        if (this.className === gameImgs[randomNumber].className) {
          center.classList.add("active");
          resultDraw.classList.add("active");
        } else if (
          this.className === "paper" &&
          gameImgs[randomNumber].className === "rock"
        ) {
          center.classList.add("active");
          resultWin.classList.add("active");
          myPickedWin.classList.add("active");
          // interval
          scoreInterval = setInterval(() => {
            if (localStorage.getItem("score") > 9) {
              scoreNum.textContent = scoreNumber + 1;
              ++scoreNumber;
              if (
                scoreNumber ===
                Number.parseInt(localStorage.getItem("score")) + 10
              ) {
                clearInterval(scoreInterval);
                scoreNumber === localStorage.getItem("score");
                localStorage.setItem("score", scoreNumber);
              }
            } else {
              scoreNum.textContent = scoreNumber + 1;
              ++scoreNumber;
              if (scoreNumber / 10 === 1) {
                clearInterval(scoreInterval);
                scoreNumber === localStorage.getItem("score");
                localStorage.setItem("score", scoreNumber);
              }
            }
          }, 80);
        } else if (
          this.className === "paper" &&
          gameImgs[randomNumber].className === "scissors"
        ) {
          center.classList.add("active");
          resultLose.classList.add("active");
          HousePickedWin.classList.add("active");
        } else if (
          this.className === "rock" &&
          gameImgs[randomNumber].className === "paper"
        ) {
          center.classList.add("active");
          resultLose.classList.add("active");
          HousePickedWin.classList.add("active");
        } else if (
          this.className === "rock" &&
          gameImgs[randomNumber].className === "scissors"
        ) {
          center.classList.add("active");
          resultWin.classList.add("active");
          myPickedWin.classList.add("active");
          // interval
          scoreInterval = setInterval(() => {
            if (localStorage.getItem("score") > 9) {
              scoreNum.textContent = scoreNumber + 1;
              ++scoreNumber;
              if (
                scoreNumber ===
                Number.parseInt(localStorage.getItem("score")) + 10
              ) {
                clearInterval(scoreInterval);
                scoreNumber === localStorage.getItem("score");
                localStorage.setItem("score", scoreNumber);
              }
            } else {
              scoreNum.textContent = scoreNumber + 1;
              ++scoreNumber;
              if (scoreNumber / 10 === 1) {
                clearInterval(scoreInterval);
                scoreNumber === localStorage.getItem("score");
                localStorage.setItem("score", scoreNumber);
              }
            }
          }, 80);
        } else if (
          this.className === "scissors" &&
          gameImgs[randomNumber].className === "paper"
        ) {
          center.classList.add("active");
          resultWin.classList.add("active");
          myPickedWin.classList.add("active");
          // interval
          scoreInterval = setInterval(() => {
            if (localStorage.getItem("score") > 9) {
              scoreNum.textContent = scoreNumber + 1;
              ++scoreNumber;
              if (
                scoreNumber ===
                Number.parseInt(localStorage.getItem("score")) + 10
              ) {
                clearInterval(scoreInterval);
                scoreNumber === localStorage.getItem("score");
                localStorage.setItem("score", scoreNumber);
              }
            } else {
              scoreNum.textContent = scoreNumber + 1;
              ++scoreNumber;
              if (scoreNumber / 10 === 1) {
                clearInterval(scoreInterval);
                scoreNumber === localStorage.getItem("score");
                localStorage.setItem("score", scoreNumber);
              }
            }
          }, 80);
        } else if (
          this.className === "scissors" &&
          gameImgs[randomNumber].className === "rock"
        ) {
          center.classList.add("active");
          resultLose.classList.add("active");
          HousePickedWin.classList.add("active");
        }
        // play again btn
        playAgainBtn.onclick = function () {
          location.reload();
        };
      }, 1000);
    });
  });
}
