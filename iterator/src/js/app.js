// TODO: write your code here

export default class Team {
  constructor(...characters) {
    this.characters = characters;
  }

  [Symbol.iterator]() {
    let index = 0;
    const characters = this.characters;
    return {
      next() {
        index++;
        if (index > characters.length) {
          return {
            value: undefined,
            done: true,
          };
        }
        return {
          value: characters[index - 1],
          done: false,
        };
      },
    };
  }
}
