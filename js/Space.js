/** A class representing a space in the game board */
class Space {
  /**
   * Creates a new instance of the Player class.
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.id = `space-${x}-${y}`;
    this.diameter = 76;
    this.radius = this.diameter / 2;
    this.token = null;
  }

  /** Draws an SVG space associated with the instance the method is called on. */
  drawSVGspace() {
    const svgSpace = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    svgSpace.setAttributeNS(null, "id", this.id);
    svgSpace.setAttributeNS(null, "cx", this.x * this.diameter + this.radius);
    svgSpace.setAttributeNS(null, "cy", this.y * this.diameter + this.radius);
    svgSpace.setAttributeNS(null, "r", this.radius - 8);
    svgSpace.setAttributeNS(null, "fill", "black");
    svgSpace.setAttributeNS(null, "stroke", "none");

    document.getElementById("mask").appendChild(svgSpace);
  }

  /**
   * Checks if space has an associated token to find its owner
   * @return  {(null|Object)} Returns null or the owner object of the space's associated token.
   */
  get owner() {
    let owner;
    if (this.token) {
      owner = this.token.owner;
      return owner;
    } else {
      return null;
    }
  }

}