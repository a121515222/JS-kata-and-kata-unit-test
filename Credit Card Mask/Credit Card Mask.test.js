const maskify = require('./Credit Card Mask');
test.each([
    ["stringMask", "######Mask"],
    ["12345543211", "#######3211"],
    ["",""],
    ["0","0"],
    ["1234","1234"]
])("string should be marked by # except the last 4 string", (beMasked,expected)=>{
    expect(maskify(beMasked)).toBe(expected);
});

