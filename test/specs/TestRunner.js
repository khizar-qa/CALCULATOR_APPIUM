const addition = require('/Users/kanees/Desktop/calculator_appium/test/methods/addition');
const subtraction = require('/Users/kanees/Desktop/calculator_appium/test/methods/subtraction');
const multiplication = require('/Users/kanees/Desktop/calculator_appium/test/methods/multiplication');
const division = require('/Users/kanees/Desktop/calculator_appium/test/methods/division');

describe('Calculator Application', () => {
    it('should add digits 7 and 2', async () => {
        await addition.doSum();
    })

    it('should subtract digit 4 from 6', async () => {
        await subtraction.doSub();
    })

    it('should multiply digits 8 and 5', async () => {
        await multiplication.doMul();
    })

    it('should divide digit 9 by 3', async () => {
        await division.doDiv();
    })

})