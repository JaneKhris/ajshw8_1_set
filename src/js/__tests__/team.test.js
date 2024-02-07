import Team from '../Team';

test('test add method', () => {
  const ch = { name: 'bo' };
  const team = new Team();
  const expected = new Set([{ name: 'bo' }]);
  expect(team.add(ch)).toEqual(expected);
});

test('test add method error', () => {
  const team = new Team();
  team.members = new Set([{ name: 'bo' }]);
  const ch = { name: 'bo' };
  expect(() => team.add(ch)).toThrow(new Error('Такой персонаж уже существует в команде'));
});

test.each([
  [{ name: 'bo' }, { name: 'zo' }, new Set([{ name: 'bo' }, { name: 'zo' }])],
  [{ name: 'bo' }, { name: 'bo' }, new Set([{ name: 'bo' }])],
])('test addAll method', (name1, name2, expected) => {
  const team = new Team();
  expect(team.addAll(name1, name2)).toEqual(expected);
});

test.each([
  [new Set([{ name: 'bo' }]), [{ name: 'bo' }]],
  [new Set([{ name: 'bo' }, { name: 'zo' }]), [{ name: 'bo' }, { name: 'zo' }]],
])('test toArray method', (set, array) => {
  const team = new Team();
  team.members = set;
  expect(team.toArray()).toEqual(array);
});
