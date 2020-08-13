/** A class representing a Player in the game. */
class Player {
  /**
   * Creates an new instance of the Player class.
   * @param {String} name
   * @param {Number} id
   * @param {String} color
   * @param {Boolean} active
   */
  constructor(name, id, color, active = false) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = active;
    this.tokens = this.collectTokens(21);
  }

  /**
   * Gets tokens that haven't been dropped.
   * @return {array} unusedTokens - An array of unused tokens.
   */
  get unusedTokens() {
    return this.tokens.filter(token => !token.dropped)
  }

  /**
   * Gets the first unused token from the array of unused tokens.
   * @return {object} activeToken - First token object in the array of unused tokens.
   */
  get activeToken() {
    return this.unusedTokens[0];
  }

  /**
   * Check if a player has any undropped tokens left
   * @return {Boolean} 
   */
  get hasTokens() {
    return this.unusedTokens.length == 0 ? false : true;
  }

  /**
   * Creates token objects for player
   * @param   {integer}   num - Number of token objects to be created
   * @return  {array}     tokens - an array of new Token class instances
   */
  collectTokens(num) {
    const tokens = [];
    for (let i = 0; i < num; i++) {
      let token = new Token(this, i);
      tokens.push(token);
    }
    return tokens;
  }



}