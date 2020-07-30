/** Class representing a game board */
class Board {
  /** Creates a board */
  constructor() {
    this.columns = 7;
    this.rows = 6;
    this.spaces = this.createSpaces(this.columns, this.rows);
  }

  /**
   *
   * @param {number} x - number of columns/spaces on the x axis
   * @param {number} y - number of rows/spaces on the y axis
   * @returns {Array} spaces - an array of instances of the Space class
   */
  createSpaces(x, y) {
    const spaces = [];
    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        let space = new Space(i + 1, j + 1);
        spaces.push(space);
      }
    }
    return spaces;
  }
}
