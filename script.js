const announcer = document.getElementById("announcer");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const pcButton = document.getElementById("pcButton");
const resetButton = document.getElementById("reset");
const options = ["rock", "paper", "scissors"];
let playerChoice, pcChoice, playerScore, pcScore;

console.log(rockButton.value, paperButton.value, scissorsButton.value);

reset();

rockButton.addEventListener("click", function() {
    playerChoice = 0;
    console.log(playerChoice);
});

paperButton.addEventListener("click", function() {
    playerChoice = 1;
    console.log(playerChoice);
});

scissorsButton.addEventListener("click", function() {
    playerChoice = 2;
    console.log(playerChoice);
});

resetButton.addEventListener("click", function(){
    reset();
    console.log(playerChoice, pcChoice, playerScore, pcScore);
});

pcButton.addEventListener("click", function() {
   pcChoice = Math.floor(Math.random() * 3);
   console.log(pcChoice);
   switch (gameChoice(playerChoice, pcChoice)) {
    case 0:
         announcer.innerText = options[playerChoice] + " matches " + options[pcChoice] + ". It's a tie! Score is " + playerScore + " vs " + pcScore;
         break;
     case 1:
         ++playerScore;
         announcer.innerText = options[playerChoice] + " beats " + options[pcChoice] + ". You win! Score is " + playerScore + " vs " + pcScore;
         break;
     case 2:
            ++pcScore;
            announcer.innerText = options[pcChoice] + " beats " + options[playerChoice] + ". You lose! Score is " + playerScore + " vs " + pcScore;
         }
});

function reset() {
    playerChoice = "";
    pcChoice = "";
    playerScore = 0;
    pcScore = 0;
}

function gameChoice(playerChoice, pcChoice){
    gameSelection = (playerChoice - pcChoice) % 3;
    console.log(gameSelection);
    return gameSelection;
    /*if ((gameSelection%3) === 1){
        ++playerScore;
        announcer.innerText = options[playerChoice] + " beats " + options[pcChoice] + ". You win! Score is " + playerScore + " vs " + pcScore;
    } else if ((gameSelection%3) === 2){
        ++pcScore;
        announcer.innerText = options[pcChoice] + " beats " + options[playerChoice] + ". You lose! Score is " + playerScore + " vs " + pcScore;
    } else if (gameSelection === 0){
        announcer.innerText = options[playerChoice] + " matches " + options[pcChoice] + ". It's a tie! Score is " + playerScore + " vs " + pcScore;
    }*/
}

