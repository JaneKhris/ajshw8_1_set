export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    this.members.forEach((member) => {
      if (member.name === character.name) {
        throw new Error('Такой персонаж уже существует в команде');
      }
    });
    return this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((item) => {
      let check = false;
      this.members.forEach((member) => {
        if (member.name === item.name) {
          check = true;
        }
      });
      if (!check) {
        this.members.add(item);
      }
    });
    return this.members;
  }

  toArray() {
    return Array.from(this.members);
  }
}
