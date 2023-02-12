const digitalRoot = require('./Digital Root');
describe('digitalRoot', () => {
    test.each([
        [101, 2],
        [456, 6],
        [10001,2],
        [0,0],
        [999,9],
    ])("Nucleic acid sequence should be marked complement", (inputNumber, expected)=>{
        expect(digitalRoot(inputNumber)).toBe(expected);
    });
    
  });
