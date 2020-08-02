class Token {
  constructor(owner, index) {
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`;
    this.color = this.owner.color;
    this.dropped = false;
  }

  createHTMLtoken() {
    const tokenDiv = document.createElement("div");
    tokenDiv.setAttribute("id", this.id);
    tokenDiv.setAttribute("class", "token");
    tokenDiv.style.backgroundColor = this.color;
    document.getElementById("game-board-underlay").appendChild(tokenDiv);
  }

  get htmlToken() {
    return this.createHTMLtoken();
  }
}
