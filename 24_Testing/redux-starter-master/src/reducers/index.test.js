const {changeNumberReducer, INCREASE, DECREASE} = require('./index.js');

describe('changeNumberReducer', ()=> {
    it('should return initial state', ()=> {
        expect(changeNumberReducer(
            {firstNumber: 0, secondNumber: 0}, 
            {type: 'INCREASE', number: 'thirdNumber'})).toEqual({firstNumber: 0, secondNumber: 0});
    });
    it('Should increase firstNumber', ()=> {
        expect(
            changeNumberReducer({firstNumber: 0, secondNumber: 0}, {
                type: INCREASE,
                number: 'firstNumber'
            })
        ).toEqual({firstNumber: 1, secondNumber: 0});
        expect(
            changeNumberReducer({firstNumber: 1, secondNumber: 0}, {
                type: INCREASE,
                number: 'firstNumber'
            })
        ).toEqual({firstNumber: 2, secondNumber: 0});
    });
    it('Should decrease firstNumber', ()=> {
        expect(
            changeNumberReducer({firstNumber: 0, secondNumber: 0}, {
                type: DECREASE,
                number: 'firstNumber'
            })
        ).toEqual({firstNumber: -1, secondNumber: 0});
        expect(
            changeNumberReducer({firstNumber: -1, secondNumber: 0}, {
                type: DECREASE,
                number: 'firstNumber'
            })
        ).toEqual({firstNumber: -2, secondNumber: 0});
    });
    it('Should increase secondNumber', ()=> {
        expect(
            changeNumberReducer({firstNumber: 0, secondNumber: 0}, {
                type: INCREASE,
                number: 'secondNumber'
            })
        ).toEqual({firstNumber: 0, secondNumber: 1});
        expect(
            changeNumberReducer({firstNumber: 0, secondNumber: 1}, {
                type: INCREASE,
                number: 'secondNumber'
            })
        ).toEqual({firstNumber: 0, secondNumber: 2});
    });
    it('Should decrease secondNumber', ()=> {
        expect(
            changeNumberReducer({firstNumber: 0, secondNumber: 0}, {
                type: DECREASE,
                number: 'secondNumber'
            })
        ).toEqual({firstNumber: 0, secondNumber: -1});
        expect(
            changeNumberReducer({firstNumber: 0, secondNumber: -1}, {
                type: DECREASE,
                number: 'secondNumber'
            })
        ).toEqual({firstNumber: 0, secondNumber: -2});
    });
});