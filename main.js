let main = document.querySelector(".board");
let div = document.querySelectorAll("div");
let player = document.querySelector("#track");
let button = document.querySelector("button");

let message = document.querySelector(".message");

let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");

let player1_score = 0;
let player2_score = 0;

const CHECK_COMBO = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let gameState = true;

function checkDraw() {
  if (
    div[0].textContent != "" &&
    div[1].textContent != "" &&
    div[2].textContent != "" &&
    div[3].textContent != "" &&
    div[4].textContent != "" &&
    div[5].textContent != "" &&
    div[6].textContent != "" &&
    div[7].textContent != "" &&
    div[8].textContent != ""
  ) {
    gameState = true;
    message.textContent = "That was a DRAW!";
  }
}

function restartGame() {
  if (gameState === false) {
    for (let index = 0; index < div.length; index++) {
      div[index].textContent = "";
      div[index].classList = "";
      
    }
    message.textContent = "";
    gameState = true;
  }
}

function checkWin() {
  for (let index = 0; index < CHECK_COMBO.length; index++) {
    if (
      div[CHECK_COMBO[index][0]].textContent === "X" &&
      div[CHECK_COMBO[index][1]].textContent === "X" &&
      div[CHECK_COMBO[index][2]].textContent === "X" && gameState === true
    ) {
      gameState = false;
      message.textContent = "Player X WON!";

      player1_score = player1_score + 1;
      player1.textContent = "Player X scored " + player1_score;
      player2.textContent = "Player O scored " + player2_score;
      div[CHECK_COMBO[index][0]].classList = "animated rubberBand";
      div[CHECK_COMBO[index][1]].classList = "animated rubberBand";
      div[CHECK_COMBO[index][2]].classList = "animated rubberBand";
    } else if (
      div[CHECK_COMBO[index][0]].textContent === "O" &&
      div[CHECK_COMBO[index][1]].textContent === "O" &&
      div[CHECK_COMBO[index][2]].textContent === "O" && gameState === true
    ) {
      gameState = false;
      message.textContent = "Player O WON!";
      player2_score = player2_score + 1;
      player1.textContent = "Player X scored " + player1_score;
      player2.textContent = "Player O scored " + player2_score;
      div[CHECK_COMBO[index][0]].classList = "animated rubberBand";
      div[CHECK_COMBO[index][1]].classList = "animated rubberBand";
      div[CHECK_COMBO[index][2]].classList = "animated rubberBand";
    } else if (
      div[0].textContent !== "" &&
      div[1].textContent !== "" &&
      div[2].textContent !== "" &&
      div[3].textContent !== "" &&
      div[4].textContent !== "" &&
      div[5].textContent !== "" &&
      div[6].textContent !== "" &&
      div[7].textContent !== "" &&
      div[8].textContent !== "" &&
      gameState === true
    ) {
      gameState = false;
      message.textContent = "That was a DRAW!";
    }
  }
}

function myFunction(event) {
  if (event.target.tagName === "DIV" && gameState === true) {
    if (event.target.textContent != "") {
      alert("Please click on another box");
    } else {
      if (player.className === "player1") {
        player.classList.remove("player1");
        player.classList.toggle("player2");
        event.target.textContent = "X";
      } else {
        player.classList.remove("player2");
        player.classList.toggle("player1");
        event.target.textContent = "O";
      }
    }
  } else if (gameState === false) {
    console.log("please restart");
  }

  checkWin();
}

main.addEventListener("click", myFunction);
button.addEventListener("click", restartGame);
