const options = ["rock", "paper", "scissor"];
let score = {
  you: 0,
  computer: 0
};
const WIN_GREEN = "#6ac475";
const LOSE_RED = "#c4736a";
const DRAW_BLUE = "#5865f2";

function getRandomInt() {
  return Math.floor(Math.random() * 3);
}


const btns = document.querySelectorAll(".options button");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // set a 'wait' for 3 seconds before displaying computer's choice
    //  and displaying a winner
    let token = 0;
    let intervalId = setInterval(() => {
      const rock = "./images/rock.png";
      const paper = "./images/paper.png";
      const scissor = "./images/scissors.png";
      const result = document.querySelector('.result')
      const playerHand = document.querySelector(".hands .player-hand");
      const computerHand = document.querySelector(".hands .computer-hand");
      const block = document.querySelector(".block");
      block.style.display = 'inherit';
      switch (token) {
        case 1:
          playerHand.src = rock;
          computerHand.src = rock;
          result.textContent = '.'
          break;

        case 2:
          playerHand.src = paper;
          computerHand.src = paper;
          result.textContent = '..'
          
          break;
        
        case 3:
          playerHand.src = scissor;
          computerHand.src = scissor;
          result.textContent = '...'
          token = 0;
          break;
      }
      token += 1;
  }, 250)

  setTimeout(() => {
    clearInterval(intervalId);

    // 'wait' is over!, display computer choice and winner
    const playerA = btn.querySelector("label").innerText;
    const playerB = options[getRandomInt()];
    const block = document.querySelector('.block');
    block.style.display = 'none';

    compare(playerA, playerB)
  }, 3000);
  });
});


function compare(player, computer) {
  const won = "YOU WON";
  const lose = "YOU LOST";
  const resultEl = document.querySelector(".hands .result");
  const youScore = document.querySelector(".score .you");
  const computerScore = document.querySelector(".score .computer");

  if (player == computer) {
    console.log(`${player} is equal to ${computer}`);
    update(player, computer);
    resultEl.style.color = DRAW_BLUE;
    resultEl.innerText = "DRAW";
  } else if (player == "rock" && computer == "scissor") {
    console.log(`${player} defeats ${computer}`);
    update(player, computer);
    score.you++;
    resultEl.style.color = WIN_GREEN;
    resultEl.innerText = won;
    youScore.innerText = score.you;
  } else if (player == "rock" && computer == "paper") {
    console.log(`${player} loses to ${computer}`);
    update(player, computer);
    score.computer++;
    resultEl.style.color = LOSE_RED;
    resultEl.innerText = lose;
    computerScore.innerText = score.computer;
  } else if (player == "paper" && computer == "scissor") {
    console.log(`${player} loses to ${computer}`);
    update(player, computer);
    score.computer++;
    resultEl.style.color = LOSE_RED;
    resultEl.innerText = lose;
    computerScore.innerText = score.computer;
  } else if (player == "paper" && computer == "rock") {
    console.log(`${player} defeats ${computer}`);
    update(player, computer);
    score.you++;
    resultEl.style.color = WIN_GREEN;
    resultEl.innerText = won;
    youScore.innerText = score.you;
  } else if (player == "scissor" && computer == "rock") {
    console.log(`${player} loses to ${computer}`);
    update(player, computer);
    score.computer++;
    resultEl.style.color = LOSE_RED;
    resultEl.innerText = lose;
    computerScore.innerText = score.computer;
  } else if (player == "scissor" && computer == "paper") {
    console.log(`${player} defeats ${computer}`);
    update(player, computer);
    score.you++;
    resultEl.style.color = WIN_GREEN;
    resultEl.innerText = won;
    youScore.innerText = score.you;
  }
}


function update(player, computer) {
  const rock = "./images/rock.png";
  const paper = "./images/paper.png";
  const scissor = "./images/scissors.png";

  const playerHand = document.querySelector(".hands .player-hand");
  const computerHand = document.querySelector(".hands .computer-hand");

  
  // playerHand
  if (player == "rock") {
    playerHand.src = rock;
  } else if (player == "paper") {
    playerHand.src = paper;
  } else if (player == "scissor") {
    playerHand.src = scissor;
  }

  // computerHand
  if (computer == "rock") {
    computerHand.src = rock;
  } else if (computer == "paper") {
    computerHand.src = paper;
  } else if (computer == "scissor") {
    computerHand.src = scissor;
  }
};


//Reset Game Button ---------------------------------
const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", () => {
  score.you = 0;
  score.computer = 0;
  document.querySelector(".score .you").innerText = score.you;
  document.querySelector(".score .computer").innerText = score.computer;
  document.querySelector(".hands .result").innerText = "";
  document.querySelector(".hands .player-hand").src = "./images/rock.png";
  document.querySelector(".hands .computer-hand").src = "./images/rock.png";
});


// // Mapping
// // 0 -> rock, 1->paper, 2->scissor
// const options = ["rock", "paper", "scissor"];

// // number
// /**
//  *
//  * @param {number} player1Choice
//  * @param {number} player2Choice
//  * return string player1, player2, draw
//  */
// function whoWon(player1Choice, player2Choice) {
//   /**
//    * 0, 0 => draw
//    * 0, 1 => rock
//    * 0, 2 => scissor
//    * 1, 0 => rock
//    * 1, 1 => draw
//    * 1, 2
//    * 2, 0
//    * 2, 1
//    * 2, 2 => draw
//    */
// }

// function generateComputerChoice() {
//   let a = options[getRandomInt(3)];
//   console.log(a);
// }
// generateComputerChoice();

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }
