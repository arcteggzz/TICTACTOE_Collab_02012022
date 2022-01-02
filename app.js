const squares = Array.from(document.querySelectorAll(".gameBoard div"))
squares.forEach(square => square.addEventListener("click", updateGameBoard))


function updateGameBoard(){
    this.textContent = "O"
}
