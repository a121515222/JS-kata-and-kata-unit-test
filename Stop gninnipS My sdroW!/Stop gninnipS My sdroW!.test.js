const spinWords = require('./Stop gninnipS My sdroW!');
describe('spinWords', () => {
    //測試可以當成AC解釋
    // 可以多一個小於四或大於等於五的單字測試
    test.each([
        ["Welcome", "emocleW"],
        // single word over 5 length should be reversed



        ["Hey fellow warriors", "Hey wollef sroirraw"],
        ["This is another test","This is rehtona test"],
        ["Just kidding there is still one more","Just gniddik ereht is llits one more"],
        ["Seriously this is the last one","ylsuoireS this is the last one"],
        ["You are almost to the last test","You are tsomla to the last test"],
        // A sentence contains word that over 5 letters and the word should be reversed  



        ["This is a test","This is a test"]
        // A sentence contains word that below 5 letters and the word should not be changed

        
    ])("the word over 5 latter should be reversed", (inputString, expected)=>{
        expect(spinWords(inputString)).toBe(expected);
    });
  });