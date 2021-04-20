const add = require('../src/utils')
test('test add start', () => {
    expect(add(1, 2)).toBe(3);
})