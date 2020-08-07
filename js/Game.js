class Game {
  constructor() {
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = null;
  }

  /**
   * Gets the active player
   * @return {object} player - the active player 
   */
  get activePlayer() {
    return this.players.find(player => player.active = true)
  }

  /**
   * Creates two player objects, p1 is automatically set to actives
   * @return  {Array}  An array of two Player objects.
   */
  createPlayers() {
    const players = [
      new Player("Player 1", 1, "#e15258", true),
      new Player("Player 2", 2, "#e59a13"),
    ];

    return players;
  }

  /** Gets game ready for play */
  startGame() {
    console.log("Game Start!");
    this.board.drawHTMLboard();
    this.activePlayer.activeToken.drawHTMLtoken();
    this.ready = true;
  }

  playToken() {
    const columnLocation = this.activePlayer.activeToken.columnLocation,
      column = this.board.spaces[columnLocation],
      targetSpace = column.pop();

    if (column.length) {
      this.ready = false;
      this.activePlayer.activeToken.drop(targetSpace, function () {
        console.log('Reset!')
      });
    }
  }

  /**
   * Branches code, depending on what key player presses
   * @param   {Object}    e - Keydown event object
   */
  handleKeydown(e) {
    if (this.ready) {
      if (e.key === 'ArrowLeft') {
        this.activePlayer.activeToken.moveLeft();
      } else if (e.key === 'ArrowRight') {
        this.activePlayer.activeToken.moveRight(this.board.columns);
      } else if (e.key === 'ArrowDown') {
        this.playToken();
      }
    }
  }

}