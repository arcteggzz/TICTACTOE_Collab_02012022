//This playerFactory is like the class used to create the player objects.
const playerFactory = (name, marker) => {
    return {name, marker}
}

let counter = 0
const startButton = document.querySelector(".content button")
startButton.addEventListener("click", startGame)

function startGame(){
    playOneRound(counter)
}

function playOneRound(counter){
    //Create an array of Objects to represent the Gameboard.
    //Each object of the array represents the information for one of the squares.
    const gameBoardArray = [
        {id : 1, dataValue : ""},
        {id : 2, dataValue : ""},
        {id : 3, dataValue : ""},
        {id : 4, dataValue : ""},
        {id : 5, dataValue : ""},
        {id : 6, dataValue : ""},
        {id : 7, dataValue : ""},
        {id : 8, dataValue : ""},
        {id : 9, dataValue : ""}
    ]

    //Create Player Objects uisng the Factory function method
    const playerOne = playerFactory("Tega", "X")//Just a random input for player name.
    const playerTwo = playerFactory("Jite", "O")//Just a random input for player name.

    //Selects and creates the array from the divs
    const squares = Array.from(document.querySelectorAll(".gameBoard div")) 
    squares.forEach(square => square.addEventListener("click", ()=> {
        counter =  updateCounter(counter);
        getPlayerMove(gameBoardArray, playerOne, playerTwo, square, squares, counter);
    }));
}

function getPlayerMove(gameBoardArray, playerOne, playerTwo, square, squares, counter){
    //Step one in this function is to get the player move(i.e the clicked square)
    //After getting the player move, we use it to update the game board array.
    for (const obj of gameBoardArray) {
        //the first conditional matches the clicked div square to the right object in the array.
        //the second conditional validates the user's move and prevents a user from clicking on a non-empty square.
        if ((obj.id == square.dataset.position) && (square.textContent == "")){
            if (counter % 2 === 1) {  
                //updates the value of the object in the gameBoardArray
                obj.dataValue = playerOne.marker;
            } else if (counter % 2 === 0){
                //updates the value of the object in the gameBoardArray
                obj.dataValue = playerTwo.marker;
            }
            updateGameBoard(squares, gameBoardArray);
            //create a checker function here
            if (counter >= 5){
                findWinner(gameBoardArray, playerOne, playerTwo)
            }
        }
    }
}

function updateCounter(counter){
    return counter + 1;
}

function updateGameBoard(squares, gameBoardArray){
    //We map over each square and change it's text content to match the correct value.
    //the function runs properly in the initial version. so I don't think there is an error here.
    squares.map(square => square.textContent = gameBoardArray[square.dataset.position - 1].dataValue)
}

function findWinner(gameBoardArray, playerOne, playerTwo){
    //create an array of values
    let dataValueArray = []
    gameBoardArray.forEach(obj => dataValueArray.push(obj.dataValue));
    //Draw
    // if (!dataValueArray.includes("")) { 
    //     console.log("Draw")
    // }
    if (dataValueArray[0] === "O" && dataValueArray[1] === "O" && dataValueArray[2] === "O"){
        console.log("winner")
    }
}