const likes = require('./Who likes it');
// describe 寫清楚
describe('likes', () => {
    //分開測試，因為每個輸入的參數不同，得到不同的結果。
    test.each([
        [[], "no one likes this"],
        [['Peter'], "Peter likes this"],
        [['Jacob', 'Alex'], "Jacob and Alex like this"],
        [['Max', 'John', 'Mark'], "Max, John and Mark like this"],
        [['Alex', 'Jacob', 'Mark', 'Max'], "Alex, Jacob and 2 others like this"],
        [['Alex', 'Jacob', 'Mark', 'Max' , 'May'], "Alex, Jacob and 3 others like this"]
    ])("Name list should display by rule", (inputName, expected)=>{
        expect(likes(inputName)).toBe(expected);
    });
    
  });