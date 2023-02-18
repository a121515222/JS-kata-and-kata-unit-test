const arrayDiff = require('./Array_diff');
describe('arrayDiff', () => {
    test.each([
        [[1,2,2,2,3], [2],[1,3]],
        [[1,2,3],[1,2],[3]],

        [[], [1,2],[]],

        [[1,2,2],[],[1,2,2]],

       
    ])("Expected array should show A array's element different element from B array's element", (aArray,bArray, expected)=>{
        expect(arrayDiff(aArray,bArray)).toEqual(expected);
    });
  });
