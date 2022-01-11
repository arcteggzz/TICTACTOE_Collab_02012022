//This is the refactored Code. The Idea here was to make my code neater and reduce the scope of Variables.
//We were just taught function scope and Global Scope in the class before they gave us this project. 
//So I am trying to introduce this to my code.

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
            //only increment counter if move is valid
            
            // counter = updateCounter(counter)
           //This is where you had your previous counter incremented. This wouldn't work because every time a square is clicked
           //Look at the top you will notice that counter parameter is actually getting the counter which was declared in the global scope every time a square is clicked
           //Looking at what you did before, you passed as an argument and incremented it within the function, yeah counter 
           //got incremented but only within that function block
           //Once we click another square, getPlayMove(gameBoardArray, playerOne, playerTwo, square, squares, counter) gets called again, but the counter 
           //gets the global counter as an argument and not the counter which we incremented in the previous function block.

            if (counter % 2 === 1) {  
                //updates the value of the object in the gameBoardArray
                obj.dataValue = playerOne.marker;
                updateGameBoard(squares, gameBoardArray);
                break;
            } else if (counter % 2 === 0){
                //updates the value of the object in the gameBoardArray
                obj.dataValue = playerTwo.marker;
                updateGameBoard(squares, gameBoardArray);
                break;
            }  
        }
    }
    //Step3 is where we now display the game board on screen using the updated game board Array from step2.
    //This step 3 is done by the function(updateGameBoard)
    
    //create a checker function here
}


function updateCounter(counter){
    return counter + 1;
}

function updateGameBoard(squares, gameBoardArray){
    //We map over each square and change it's text content to match the correct value.
    //the function runs properly in the initial version. so I don't think there is an error here.
    squares.map(square => square.textContent = gameBoardArray[square.dataset.position - 1].dataValue)
}



