let userScore = 0;
let compScore = 0;

let msg = document.querySelector("#msgcont");
let body = document.querySelector(".whole");
let userpoints = document.querySelector("#user-score");
let comppoints = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choices");
const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randInd = Math.floor(Math.random()* 3);
    return options[randInd];
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
showWinner = (userWin,userChoice,comChoice) =>{
    if(userWin){
        userScore++;
        userpoints.innerText = userScore;
        msg.innerText =`You Win! ${userChoice} win ${comChoice}`;
        body.style.backgroundColor ="#90EE90";
    }
    else{
        compScore++;
        comppoints.innerText = compScore;
        msg.innerText = `You Lose! ${userChoice} lose ${comChoice}`;
        body.style.backgroundColor ="red";
    }
}
const playGame = (userChoice) =>{
    const comChoice = genCompChoice();

    if(comChoice === userChoice){
       body.style.backgroundColor ="white";
       msg.innerText ="Game Drawn";
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = comChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = comChoice === "scissors" ? false : true;
        }
        else if (userChoice === "scissors"){
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,comChoice);
    }
}

