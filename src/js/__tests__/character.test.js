import Character from '../Character';

test('test constructor', () => {
  expect(new Character('bo')).toEqual({ name: 'bo' });
});
