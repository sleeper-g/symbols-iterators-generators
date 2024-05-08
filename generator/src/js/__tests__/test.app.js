import Team from '../app';

test('Testing Team iterator', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const iterator = new Team(character, character, character);
  for (const item of iterator) {
    expect(item).toEqual(character);
  }
});
