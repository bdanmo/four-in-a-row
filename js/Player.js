class Player {
  constructor(name, id, color, active = false) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = false;
    this.tokens = collectTokens(21);
  }

  collectTokens(num) {
    const tokens = [];
    for (i = 0; i < num; i++) {
      token = new Token(this, i);
      tokens.push(token);
    }
  }
}
