const {increase, decrease, INCREASE, DECREASE} = require('./index.js');

describe('actions', ()=>{
    it('It should increase number', () => {
        const firstNumber = 'firstNumber';
        const expectedActions = {
            type: INCREASE,
            number: 'firstNumber'
        };
        expect(increase(firstNumber)).toEqual(expectedActions);
    });
    it('It should decrease number', () => {
        const firstNumber = 'firstNumber';
        const expectedActions = {
            type: DECREASE,
            number: 'firstNumber'
        };
        expect(decrease(firstNumber)).toEqual(expectedActions);
    });
});