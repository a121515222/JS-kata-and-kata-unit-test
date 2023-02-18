const maskify = require('./Credit Card Mask');
// 依照預期結果不同分開測試
test.each([
    ["stringMask", "######Mask"],
    ["12345543211", "#######3211"],

    ["",""],


    ["0","0"],


    ["1234","1234"],

    ["12345","12345"],

])("string should be marked by # except the last 4 string", (beMasked,expected)=>{
    expect(maskify(beMasked)).toBe(expected);
});

