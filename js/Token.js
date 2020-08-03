/** A class representing a token. */
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
    this.dropped = false;
  }

  /**
   * Creates an HTML token, appends it to the game board underlay, and returns the token div.
   * @return {HTMLDivElement} tokenDiv - the div representing the token.
   */
  drawHTMLtoken() {
    const tokenDiv = document.createElement("div");
    tokenDiv.setAttribute("id", this.id);
    tokenDiv.setAttribute("class", "token");
    tokenDiv.style.backgroundColor = this.color;
    document.getElementById("game-board-underlay").appendChild(tokenDiv);

    return tokenDiv;
  }

  get htmlToken() {
    return this.createHTMLtoken();
  }
}