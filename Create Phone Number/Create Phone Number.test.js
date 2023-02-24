const createPhoneNumber = require('./Create Phone Number');
describe('input a array and each element is single digit. ', () => {
    test.each([
        [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], "(000) 000-0000",
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "(123) 456-7890"],
    ])("input array that contents 10 integers should combine to phone format", (numbers, expected)=>{
        expect(createPhoneNumber(numbers)).toBe(expected);
    });   
  });