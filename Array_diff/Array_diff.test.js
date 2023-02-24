const arrayDiff = require('./Array_diff');
describe('Compare tow array and show the different', () => {
    it("input A empty array and compar B array should show empty array", () => {
        const aArray = [];
        const bArray = [1,2];
        const expected =[];
        expect(arrayDiff(arrayDiff(aArray,bArray))).toEqual(expected);
    });

    it("input A array and compar B empty array should show A array", () => {
        const aArray = [1,2,2];
        const bArray = [];
        const expected =[1,2,2];
        expect(arrayDiff(aArray,bArray)).toEqual(expected);
    });

    test.each([
        [[1,2,2,2,3], [2],[1,3]],
        [[1,2,3],[1,2],[3]],
    ])("Expected array should show A array's element different element from B array's element", (aArray,bArray, expected)=>{
        expect(arrayDiff(aArray,bArray)).toEqual(expected);
    });
  });
