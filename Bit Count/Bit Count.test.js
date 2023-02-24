const countBits = require('./Bit Count');
describe(' input number > 0 and transfer to binary. ', () => {
    test.each([
        [0, 0],
        [1, 1],
    ])("binary show 1 should be counted for single digit", (number, expected)=>{
        expect(countBits(number)).toBe(expected);
    });
    test.each([
        [123, 6],
        [1238955, 13],
    ])("binary show 1 should be counted for multi digit", (number, expected)=>{
        expect(countBits(number)).toBe(expected);
    });
   
  });
