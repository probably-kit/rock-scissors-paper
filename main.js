

//let rockButton = document.getElementById("RockButton");
//let scissorsButton = document.getElementById("ScissorsButton");
//let paperButton = document.getElementById("PaperButton");
const showCustomAlert = (message) => {
    let customAlert = document.getElementById('customAlert');
    let customAlertMessage = document.getElementById('customAlertMessage');

    customAlertMessage.innerText = message;
    customAlert.style.display = 'block';
};

const hideCustomAlert = () => {
    let customAlert = document.getElementById('customAlert');

    customAlert.style.display = 'none';
    location.reload();
};




const getRandomNumber = (min, max) => {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
};

const getRockPaperScissors = () => {
    let answer;
    switch (getRandomNumber(1, 3)) {
        case 1:
            answer = "Rock";
            return answer;
            break;
        case 2:
            answer = "Paper"
            return answer;
            break;
        case 3:
            answer = "Scissors"
            return answer;
            break;

        default:
            return "error";
            break;
    }
}


const getComputerChoice = () => {
    const answer = getRockPaperScissors();
    return answer;
}


const rules = (playerSelection, computerSelection) => {
    let result;
    if (playerSelection === computerSelection) {
        result = "tie";
        return result;
    }
    else if ((playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Rock")) {
        result = "lose";
        return result;
    }
    else if ((playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper") ||
        (playerSelection === "Rock" && computerSelection === "Scissors")) {
        result = "win";
        return result;
    }
}



let computerScoreCounter = 0;
let humanScoreCounter = 0;




const playRound = (playerSelection, computerSelection) => {
    const info = document.getElementById('info');
    const computerScore = document.getElementById('ComputerScore');
    const humanScore = document.getElementById('HumanScore');
    const result = rules(playerSelection, computerSelection)
    switch (result) {
        case "tie":
            info.innerHTML = 'TIE';
            break;
        case "lose":
            computerScoreCounter += 1;
            computerScore.innerHTML = `Computer: ${computerScoreCounter}`;
            info.innerHTML = 'computer got a score';
            break;
        case "win":
            humanScoreCounter += 1;
            humanScore.textContent = `Human: ${humanScoreCounter}`;
            info.innerHTML = 'human got a score'
            break;
        default:
            break;
    }
    if (computerScoreCounter >= 5) {
        showCustomAlert('YOU LOSE!');
    }
    else if (humanScoreCounter >= 5) {
        showCustomAlert('YOU WON!');
    }
}





//rockButton.addEventListener("click", playRound(rockButton.value,getComputerChoice()));
//scissorsButton.addEventListener("click", playRound(scissorsButton.value,getComputerChoice()));
//paperButton.addEventListener("click", playRound(paperButton.value,getComputerChoice()));

