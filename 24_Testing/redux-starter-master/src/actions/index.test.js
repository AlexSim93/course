const {increase, decrease, INCREASE, DECREASE} = require('./index.js');

describe('actions', ()=>{
    it('It should create an action that increase first number', () => {
        const firstNumber = 'firstNumber';
        const expectedActions = {
            type: INCREASE,
            number: firstNumber
        };
        expect(increase(firstNumber)).toEqual(expectedActions);
    });
    it('It should create an action that decrease first number', () => {
        const firstNumber = 'firstNumber';
        const expectedActions = {
            type: DECREASE,
            number: firstNumber
        };
        expect(decrease(firstNumber)).toEqual(expectedActions);
    });
    it('It should create an action that increase second number', () => {
        const secondNumber = 'secondNumber';
        const expectedActions = {
            type: INCREASE,
            number: secondNumber
        };
        expect(increase(secondNumber)).toEqual(expectedActions);
    });
    it('It should create an action that decrease decrease number', () => {
        const secondNumber = 'secondNumber';
        const expectedActions = {
            type: DECREASE,
            number: secondNumber
        };
        expect(decrease(secondNumber)).toEqual(expectedActions);
    });
});