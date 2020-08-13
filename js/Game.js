class Game {
  constructor() {
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
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
      new Player("Player 2", 2, "#e59a13")
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


  /**
   * Finds Space object to drop Token into, drops Token
   */
  playToken() {
    let activeToken = this.activePlayer.activeToken;
    let targetColumn = this.board.spaces[activeToken.columnLocation];
    let targetSpace;

    for (let space of targetColumn) {
      if (!space.token) {
        targetSpace = space;
      }
    }

    if (targetSpace) {
      const game = this;
      game.ready = false;
      activeToken.drop(targetSpace, function () {
        game.updateGameState(activeToken, targetSpace);
      });
      //console.log(targetSpace);
    }
  }


  /** 
   * Checks for a winning move
   * @param {token} target - The last space that a token was dropped into
   * @returns {boolean} Boolena indicating whether or not the last move was a winning move.
   * @author Ashley Boucher
   */
  checkForWin(target) {
    const owner = target.token.owner;
    let win = false;

    // vertical
    for (let x = 0; x < this.board.columns; x++) {
      for (let y = 0; y < this.board.rows - 3; y++) {
        if (this.board.spaces[x][y].owner === owner &&
          this.board.spaces[x][y + 1].owner === owner &&
          this.board.spaces[x][y + 2].owner === owner &&
          this.board.spaces[x][y + 3].owner === owner) {
          win = true;
        }
      }
    }

    // horizontal
    for (let x = 0; x < this.board.columns - 3; x++) {
      for (let y = 0; y < this.board.rows; y++) {
        if (this.board.spaces[x][y].owner === owner &&
          this.board.spaces[x + 1][y].owner === owner &&
          this.board.spaces[x + 2][y].owner === owner &&
          this.board.spaces[x + 3][y].owner === owner) {
          win = true;
        }
      }
    }

    // diagonal
    for (let x = 3; x < this.board.columns; x++) {
      for (let y = 0; y < this.board.rows - 3; y++) {
        if (this.board.spaces[x][y].owner === owner &&
          this.board.spaces[x - 1][y + 1].owner === owner &&
          this.board.spaces[x - 2][y + 2].owner === owner &&
          this.board.spaces[x - 3][y + 3].owner === owner) {
          win = true;
        }
      }
    }

    // diagonal
    for (let x = 3; x < this.board.columns; x++) {
      for (let y = 3; y < this.board.rows; y++) {
        if (this.board.spaces[x][y].owner === owner &&
          this.board.spaces[x - 1][y - 1].owner === owner &&
          this.board.spaces[x - 2][y - 2].owner === owner &&
          this.board.spaces[x - 3][y - 3].owner === owner) {
          win = true;
        }
      }
    }

    return win;
  }


  /** 
   * Switches active player. 
   */
  switchPlayer() {
    for (let player of this.players) {
      player.active = !player.active;
      console.log(player);
    }
    console.log(this.players);
  }


  /** 
   * Displays game over message.
   * @param {string} message - Game over message.      
   */
  gameOver(message) {
    const messageDiv = document.getElementById('game-over');
    messageDiv.innerText = message;
    messageDiv.style.display = 'block';
  }


  /**
   * Updates game state after token is dropped.
   * @param   {Object}  token  -  The token that's being dropped.
   * @param   {Object}  target -  Targeted space for dropped token.
   */
  updateGameState(token, target) {
    target.mark(token);

    if (this.checkForWin(target)) {

      this.gameOver(`${target.owner.name} wins!`);

    } else {

      this.switchPlayer();

      if (this.activePlayer.hasTokens) {
        this.activePlayer.activeToken.drawHTMLtoken();
        this.ready = true;
      } else {
        this.gameOver(`Game over! You are out of tokens!`);
      }
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