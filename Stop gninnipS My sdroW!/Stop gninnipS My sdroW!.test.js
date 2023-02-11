const spinWords = require('./Stop gninnipS My sdroW!');
describe('spinWords', () => {
    test.each([
        ["Welcome", "emocleW"],
        ["Hey fellow warriors", "Hey wollef sroirraw"],
        ["This is a test","This is a test"],
        ["This is another test","This is rehtona test"],
        ["You are almost to the last test","You are tsomla to the last test"],
        ["Just kidding there is still one more","Just gniddik ereht is llits one more"],
        ["Seriously this is the last one","ylsuoireS this is the last one"]
    ])("the word over 5 latter should be reversed", (inputString, expected)=>{
        expect(spinWords(inputString)).toBe(expected);
    });
  });