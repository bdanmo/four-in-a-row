/** A class representing a player's token. */
class Token {
  /**
   * Creates a new instance of the Token class.
   * @param {Player} owner 
   * @param {number} index 
   */
  constructor(owner, index) {
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`;
    this.color = this.owner.color;
    this.columnLocation = 0;
    this.dropped = false;
  }

  /**
   * A getter for the associated HTML token
   * @return  {element}  The HTML div element representing a player token.  
   */
  get htmlToken() {
    return document.getElementById(this.id);
  }

  /** 
   * Gets left offset of html element.
   * @return  {number}   Left offset of token object's htmlToken.
   */
  get offsetLeft() {
    return this.htmlToken.offsetLeft;
  }

  /**
   * Creates an HTML token, appends it to the game board underlay, and returns the token div.
   * @return {element} tokenDiv - the div representing the token.
   */
  drawHTMLtoken() {
    const tokenDiv = document.createElement("div");
    tokenDiv.setAttribute("id", this.id);
    tokenDiv.setAttribute("class", "token");
    tokenDiv.style.backgroundColor = this.color;
    document.getElementById("game-board-underlay").appendChild(tokenDiv);
  }

  /** 
   * Moves the token one column to the left.
   */
  moveLeft() {
    if (this.columnLocation > 0) {
      this.columnLocation--
      this.htmlToken.style.left = this.offsetLeft - 76;
    }
  }

  /** 
   * Moves html token one column to right.
   * @param   {number}    columns number of columns in the game board, the farthest a token can move right
   */
  moveRight(columns) {
    if (this.columnLocation < columns - 1) {
      this.columnLocation++
      this.htmlToken.style.left = this.offsetLeft + 76;
    }
  }

  /** 
   * Drops html token into targeted board space.
   * @param   {Object}   target - Targeted space for dropped token.
   * @param   {function} reset  - The reset function to call after the drop animation has completed.
   */
  drop(target, reset) {
    this.dropped = true;
    console.log('dropped!')
  }
}