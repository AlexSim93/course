const {changeNumberReducer, INCREASE} = require('./index.js');

describe('changeNumberReducer', ()=> {
    test('Handle INCREASE firstNumber', ()=> {
        expect(
            changeNumberReducer({firstNumber: 0, secondNumber: 0}, {
                type: INCREASE,
                number: 'firstNumber'
            })
        ).toEqual({firstNumber: 1, secondNumber: 0});
    });
});