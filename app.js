//Ignore all the code below this line _________
function playRound(){
    let counter = -1
    counter = updateCounter(counter)
    updateGameBoard(counter)    
}

function updateGameBoard(counter){
    if ((counter % 2 === 0) && (this.textContent === "")){
        this.textContent = "O"
    } else if((counter % 2 != 0) && (this.textContent ==="")){
        this.textContent = "X"
    }
}

function updateCounter(counter){
    return counter++
}
//Ignore all the code above this line _________

//Gameboard Object
const gameBoard = {
    squareOne : "X",
    squareTwo : "O",
    sqareThree : "",
    squareFour : "",
    squareFive : "O",
    squareSix : "X",
    squareSeven : "",
    squareEight : "X",
    squareNine : "O"
}

//Selects and creates the array from the divs
const squares = Array.from(document.querySelectorAll(".gameBoard div")) 

//My attempt at solving the problem
// squares.map(square => {
//     //get the position of the div in the array
//     let position = square.dataset.position
//     //get the position of the correct gameBoard position
//     //match the value of the object to the array div
//     console.log(square, position)
//     })