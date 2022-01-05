const playerFactory = (name, marker) => {
    return {name, marker}
}

let counter = 0
//Selects and creates the array from the divs
const squares = Array.from(document.querySelectorAll(".gameBoard div")) 
squares.forEach(square => square.addEventListener("click", getPlayerMove))

//Gameboard Array of Objects
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
const playerOne = playerFactory("Tega", "X")
const playerTwo = playerFactory("Jite", "O")


function getPlayerMove(){
    for (const obj of gameBoardArray) {
        //the first conditional matches the clicked div square to the right object in the array.
        //the second conditional validates the user's move and prevents a user from clicking on a non-empty square.
        if ((obj.id == this.dataset.position) && (this.textContent == "")){
            //only increment counter if move is valid
            counter = updateCounter()
            if (counter % 2 === 1) {
                //updates the value of the object in the gameBoardArray
                obj.dataValue = playerOne.marker
            } else if (counter % 2 === 0){
                //updates the value of the object in the gameBoardArray
                obj.dataValue = playerTwo.marker
            }     
            break;
        }
    }
    //update the board based on the updated gameBoardArray
    updateGameBoard()
    //create a checker function here
}

function updateGameBoard(){
    squares.map(square => square.textContent = gameBoardArray[square.dataset.position - 1].dataValue)
}

function updateCounter(){
    return counter = counter + 1
}

