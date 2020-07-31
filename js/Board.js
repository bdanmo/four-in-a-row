/** Class representing a game board */
class Board {
  constructor() {
    this.columns = 7;
    this.rows = 6;
    this.spaces = this.createSpaces();
    this.token = null;
  }

  /**
   * Creates a 2D array of spaces on the game board
   * @returns {Array} spaces - a 2D array of instances of the Space class
   */
  createSpaces() {
    const spaces = [];

    for (let x = 0; x < this.columns; x++) {
      let column = [];

      for (let y = 0; y < this.rows; y++) {
        let space = new Space(x, y);
        column.push(space);
      }

      spaces.push(column);
    }
    return spaces;
  }
}
