let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock", "paper", "sezer"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
    const drawGame = () => {
        console.log("It's a draw!");
        msg.innerText = "It's a draw!";
        msg.computedStyleMap.backgroundColor = "yellow";
};
const showWinner = (userWins ,userchoice,compchoice) => {
    if (userWins) {
        console.log("YOU WON!");
        msg.innerText = "YOU WON!";
        msg.computedStyleMap.backgroundColor = "green";
    } else {
        console.log("You Lost");
        msg.innerText = "You Lost";
        msg.computedStyleMap.backgroundColor = "red";
    }
};

const playgame = (userchoice) => {
    console.log("user choice=", userchoice);
    const compchoice = genCompChoice();
    console.log("comp choice=", compchoice);

    if (userchoice === compchoice) {
        drawGame();
        
    } else {
        let userWins = true;
        if (userchoice === "rock") {
            userWins = compchoice === "sezer";
        } else if (userchoice === "paper") {
            userWins = compchoice === "rock";
        } else if (userchoice === "sezer") {
            userWins = compchoice === "paper";
        }
        showWinner
    }

};
choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userchoice=choice.getAttribute("id");
        
        playgame(userchoice);
    });
});

    
