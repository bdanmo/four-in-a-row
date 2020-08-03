/** Class representing a game board */
class Board {
  constructor() {
    this.columns = 7;
    this.rows = 6;
    this.columnsOfSpaces = this.createSpaces();
    this.token = null;
  }

  /**
   * Creates a 2D array of spaces on the game board
   * @returns {Array} spaces - a 2D array representing columns full of Space objects
   */
  createSpaces() {
    const columnsOfSpaces = [];

    for (let x = 0; x < this.columns; x++) {
      let column = [];

      for (let y = 0; y < this.rows; y++) {
        let space = new Space(x, y);
        column.push(space);
      }

      columnsOfSpaces.push(column);
    }
    return columnsOfSpaces;
  }

  /** Draws associated SVG spaces for all game spaces. */

  drawHTMLboard() {
    for (let column of this.columnsOfSpaces) {
      for (let space of column) {
        space.drawSVGspace();
      }
    }
  }
}