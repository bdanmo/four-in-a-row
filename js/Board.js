/** Class representing a game board */
class Board {
  /** Creates a board */
  constructor() {
    this.rows = 6;
    this.columns = 7;
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
      for (let i = 0; i < y; i++) {
        let space = new Space(x, y);
        spaces.push(space);
      }
    }
    return spaces;
  }
}
