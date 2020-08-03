const beginButton = document.getElementById("begin-game");
const game = new Game();

beginButton.addEventListener("click", function () {
  game.startGame();
  this.style.display = "none";
  document.getElementById("play-area").style.opacity = "1";
});