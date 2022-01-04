
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

//Create Player Objects
let playerOne = new Player("Tega", "X")
let playerTwo = new Player("Jite", "O")

//Class constructor for the player objects
class Player{
	constructor(name, marker){
		this.name = name 
        this.marker = "marker"
	}
}

function getPlayerMove(){
    counter = updateCounter()
    for (const obj of gameBoardArray) {
        //the first conditional matches the clicked div square to the right object in the array.
        //the second conditional validates the user's move and prevents a user from clicking on a non-empty square.
        if ((obj.id == this.dataset.position) && (this.textContent == "")){
            obj.dataValue = 'X';     
            break;
        }
    }
    updateGameBoard()
}

function updateGameBoard(){
    squares.map(square => square.textContent = gameBoardArray[square.dataset.position - 1].dataValue)
}

function updateCounter(counter){
    return counter++
}