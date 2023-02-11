const findOdd = require('./Find odd int');
describe('findOdd', () => {
    test.each([
        [[1,0,1], 0],
        [[1,2,2,3,3,3,4,3,3,3,2,2,1], 4],
        [[7],7],
        [[0],0],
    ])("findOdd should return occur time is odd's int", (inputArray, expected)=>{
        expect(findOdd(inputArray)).toBe(expected);
    });
  });