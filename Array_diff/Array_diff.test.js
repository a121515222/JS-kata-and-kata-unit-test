const arrayDiff = require('./Array_diff');
describe('arrayDiff', () => {
    test.each([
        [[1,2,2,2,3], [2],[1,3]],
        [[], [1,2],[]],
        [[1,2,2],[],[1,2,2]],
        [[1,2,3],[1,2],[3]],
    ])("Expected array should show Aarray's element different element form Barray's element", (aArray,bArray, expected)=>{
        expect(arrayDiff(aArray,bArray)).toEqual(expected);
    });
  });
