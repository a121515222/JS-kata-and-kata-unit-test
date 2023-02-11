const findOdd = require('./Find odd int');
describe('complementDNAStrand', () => {
    test.each([
        [[1,0,1], "0"],
        [[1,2,2,3,3,3,4,3,3,3,2,2,1], "4"],
        [[7],"7"],
        [[0],"0"],
    ])("Nucleic acid sequence should be marked complement", (inputArray, expected)=>{
        expect(findOdd(inputArray)).toBe(expected);
    });
  });