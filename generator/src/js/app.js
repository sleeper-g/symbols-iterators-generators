// TODO: write your code here


export default class Team {
  constructor(...characters) {
    this.characters = characters;
  }

  * [Symbol.iterator]() {
    for (let index = 0; index < this.characters.length; index++) {
      yield this.characters[index];
    }
  }
}
