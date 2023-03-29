const gameBoard = document.getElementById("gameBoard").children;
let currentPlayer = "x";
let moves = 0;

function makeMove(index) {
  if (gameBoard[index].classList.contains("x") || gameBoard[index].classList.contains("o")) return;

  gameBoard[index].classList.add(currentPlayer);
  gameBoard[index].textContent = currentPlayer.toUpperCase();

  moves++;

  if (checkWinner(currentPlayer) || moves === 9) {
    setTimeout(() => {
      alert(moves === 9 ? "It's a tie!" : `Player ${currentPlayer.toUpperCase()} wins!`);
      resetGame();
    }, 100);
  } else {
    currentPlayer = currentPlayer === "x" ? "o" : "x";
  }
}

function checkWinner(player) {
  const winCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  return winCombinations.some(combination =>
    combination.every(index => gameBoard[index].classList.contains(player))
  );
}

function resetGame() {
  for (let cell of gameBoard) {
    cell.classList.remove("x", "o");
    cell.textContent = "";
  }
  currentPlayer = "x";
  moves = 0;
}
