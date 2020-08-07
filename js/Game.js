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
   * Gets the 0-indexed column locaiton of the active token.
   * @return {number} columnLocation - the current location of the token currently in play.
   */

  get columnLocation() {
    return this.activePlayer.activeToken.columnLocation;
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
        this.activePlayer.activeToken.drop(this.board.nextSpace(this.columnLocation));
      }
    }
  }

}