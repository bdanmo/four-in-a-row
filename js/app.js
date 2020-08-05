const beginButton = document.getElementById("begin-game");
const game = new Game();

beginButton.addEventListener("click", function () {
  game.startGame();
  this.style.display = "none";
  document.getElementById("play-area").style.opacity = "1";
});

document.addEventListener('keydown', function (event) {
  game.handleKeydown(event); //outputs a string naming the pressed key 
});