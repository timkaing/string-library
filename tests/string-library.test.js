const {
  capitalize,
  allCaps,
  allLower,
  capitalizeWords,
  oddCaps,
  evenCaps,
  removeExtraSpace,
  kabobCase,
  snakeCase,
  camelCase,
  toLower,
  toUpper,
} = require('../src/string-library');

test('Sanity Check', () => {
  expect(2 + 2).toBe(4);
});

test('Capitalize First Character', () => {
  expect(capitalize('ayy lmao')).toBe('Ayy lmao');
  expect(capitalize('42069')).toBe('42069');
  expect(capitalize('4chan')).toBe('4chan');
  expect(capitalize('')).toBe('');
});

test('Capitalize All Characters', () => {
  expect(allCaps('ayy lmao')).toBe('AYY LMAO');
  expect(allCaps('AYY LMAO')).toBe('AYY LMAO');
  expect(allCaps('42069')).toBe('42069');
  expect(allCaps('4chan')).toBe('4CHAN');
  expect(allCaps('')).toBe('');
});

test('Lowercase All Characters', () => {
  expect(allLower('ayy lmao')).toBe('ayy lmao');
  expect(allLower('AYY LMAO')).toBe('ayy lmao');
  expect(allLower('42069')).toBe('42069');
  expect(allLower('4CHAN')).toBe('4chan');
  expect(allLower('')).toBe('');
});

test('Capitalize Each Word', () => {
  expect(capitalizeWords('ayy lmao')).toBe('Ayy Lmao');
  expect(capitalizeWords('420 69')).toBe('420 69');
  expect(capitalizeWords('420 ayy lmao')).toBe('420 Ayy Lmao');
  expect(capitalizeWords('AYY LMAO')).toBe('AYY LMAO');
});

test('Capitalize Odd Characters', () => {
  expect(oddCaps('a a a a a')).toBe('a a a a a');
  expect(oddCaps(' a a a a a')).toBe(' A A A A A');
});

test('Capitalize Even Characters', () => {
  expect(evenCaps('eoeoeo')).toBe('EoEoEo');
  expect(evenCaps('')).toBe('');
  expect(evenCaps('')).toBe('');
  expect(evenCaps('')).toBe('');
});

test('Remove Extra Spaces Around Characters', () => {
  expect(removeExtraSpace('     ayy Lmao      ')).toBe('ayy Lmao');
  expect(removeExtraSpace('    420 69   ')).toBe('420 69');
  expect(removeExtraSpace('    the potato     cant')).toBe('the potato cant');
  expect(removeExtraSpace('')).toBe('');
});

test('Convert to Kabob Case', () => {
  expect(kabobCase('ayy lmao')).toBe('ayy-lmao');
  expect(kabobCase('4chan dot com')).toBe('4chan-dot-com');
  expect(kabobCase('69 420')).toBe('69-420');
  expect(kabobCase('')).toBe('');
});

test('Convert to Snake Case', () => {
  expect(snakeCase('Ayy Lmao')).toBe('ayy_lmao');
  expect(snakeCase('    ayy LMAO')).toBe('ayy_lmao');
  expect(snakeCase('69 420')).toBe('69_420');
  expect(snakeCase('')).toBe('');
});

test('Convert to Camel Case', () => {
  expect(camelCase('ayy lmao')).toBe('ayylmao');
  expect(camelCase('4 chan')).toBe('4Chan');
  expect(camelCase('69 420')).toBe('69420');
  expect(camelCase('')).toBe('');
});

test('Convert Character to Lowercase', () => {
  expect(toLower('')).toBe('');
  expect(toLower('')).toBe('');
  expect(toLower('')).toBe('');
  expect(toLower('')).toBe('');
});

test('Convert Character to Uppercase', () => {
  expect(toUpper('')).toBe('');
  expect(toUpper('')).toBe('');
  expect(toUpper('')).toBe('');
  expect(toUpper('')).toBe('');
});
