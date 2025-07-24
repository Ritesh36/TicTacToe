const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winningPatt = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const enableBoxes = () => {
    for( let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disableBoxes = () => {
    for( let box of boxes) {
        box.disabled = true;
        box.innerText = "";
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("btn pressed");
        box.innerText = "X";
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true; 

        checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winningPatt) {
        
           position1 =  boxes[pattern[0]].innerText,
           position2 =  boxes[pattern[1]].innerText,
           position3 =  boxes[pattern[2]].innerText
        
           if(position1 != "" && position2 != "" && position3 !="") {
            if(position1 == position2 && position2 == position3){
                showWinner(position1);
            } 
            if(position1 == position2 && position2 != position3){
                gameDraw();
            }
           }
    }

};

const gameDraw = () => {
    msg.innerText = "Game is draw";
    msgContainer.classList.remove("hide");
    disableBoxes();
}

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
