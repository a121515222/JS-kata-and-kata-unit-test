const squareDigits  = require('./square');
it("digit should be square", () => {
    const givenNumber = 9119;
    const expectedOutPut ="(81-1-1-81)";
    expect(squareDigits(givenNumber)).toBe(expectedOutPut);
})
test.each([
    [34567, "(9-16-25-36-49)"],
    [1010, "(1-0-1-0)"],
    [8249, "(64-4-16-81)"],
    [1, "(1)"],
  ])('digit should be square', (number, expected) => {
    expect(squareDigits(number)).toBe(expected);
  });