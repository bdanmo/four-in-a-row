const beginButton = document.getElementById("begin-game");
const game = new Game();

beginButton.addEventListener("click", () => game.startGame());
