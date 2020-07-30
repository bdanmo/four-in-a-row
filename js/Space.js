/** A class representing a space in the game board */
class Space {
  /**
   * Creates a space
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
    /** */
    this.id = `space-${x}-${y}`;
  }
}
