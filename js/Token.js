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
    return this.htmlToken.offsetLeft();
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
   * Gets left offset of html element.
   * @return  {number}   Left offset of token object's htmlToken.
   */
  moveLeft() {
    if (this.columnLocation > 0) {
      this.columnLocation--
      this._HTMLtoken.offsetLeft -= '76px';
    }
  }

  /** 
   * Moves html token one column to right.
   * @param   {number}    rightLimit number of columns in the game board, the farthest a token can move right
   */
  moveRight(rightLimit) {
    if (this.columnLocation < rightLimit) {
      this.columnLocation++
      this._HTMLtoken.offsetLeft += '76px';
    }
  }
}