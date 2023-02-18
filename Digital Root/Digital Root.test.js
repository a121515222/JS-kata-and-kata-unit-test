const digitalRoot = require('./Digital Root');
describe('digitalRoot', () => {
    test.each([
        [101, 2],
        [456, 6],
        [10001,2],
        [0,0],
        [999,9],
    ])("number should sum for each digit until one digit", (inputNumber, expected)=>{
        expect(digitalRoot(inputNumber)).toBe(expected);
    });
    
  });
