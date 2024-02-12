import Character from '../Character';
import Team from '../Team';

test('test add method', () => {
  const ch = new Character('bo');
  const team = new Team();
  const expected = new Set([{ name: 'bo' }]);
  team.add(ch);
  expect(team.members).toEqual(expected);
});

test('test add method error', () => {
  const team = new Team();
  const ch = new Character('bo');
  team.add(ch);
  expect(() => team.add(ch)).toThrow(new Error('Такой персонаж уже существует в команде'));
});

test('test addAll method the same', () => {
  const team = new Team();
  const ch = new Character('bo');
  team.addAll(ch, ch);
  const expected = new Set([{ name: 'bo' }]);
  expect(team.members).toEqual(expected);
});

test('test addAll method ', () => {
  const team = new Team();
  const ch1 = new Character('bo');
  const ch2 = new Character('zo');
  team.addAll(ch1, ch2);
  const expected = new Set([{ name: 'bo' }, { name: 'zo' }]);
  expect(team.members).toEqual(expected);
});

test.each([
  [new Set([{ name: 'bo' }]), [{ name: 'bo' }]],
  [new Set([{ name: 'bo' }, { name: 'zo' }]), [{ name: 'bo' }, { name: 'zo' }]],
])('test toArray method', (set, array) => {
  const team = new Team();
  team.members = set;
  expect(team.toArray()).toEqual(array);
});
