

const functions = require('../src/client/js/tobe')

test('add numbers',() =>{
    expect(functions.add(2,2)).toBe(4);
})