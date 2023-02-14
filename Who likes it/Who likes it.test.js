const likes = require('./Who likes it');
describe('likes', () => {
    test.each([
        [[], "no one likes this"],
        [['Peter'], "Peter likes this"],
        [['Jacob', 'Alex'], "Jacob and Alex like this"],
        [['Max', 'John', 'Mark'], "Max, John and Mark like this"],
        [['Alex', 'Jacob', 'Mark', 'Max'], "Alex, Jacob and 2 others like this"],
        [['Alex', 'Jacob', 'Mark', 'Max' , 'May'], "Alex, Jacob and 3 others like this"]
    ])("Name list should display by rule", (inpuName, expected)=>{
        expect(likes(inpuName)).toBe(expected);
    });
    
  });