//https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
//Who likes it?

//You probably know the "like" system from Facebook and other pages. 
//People can "like" blog posts, pictures or other items. 
//We want to create the text that should be displayed next to such an item.

//Implement the function which takes an array containing the names of people that like an item. 
//It must return the display text as shown in the examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
function likes(names) {
    if(names.length === 0) {
      return "no one likes this"
    }
     return names.map((name, index) => {
          if (names.length === 1) {
              return `${name} likes this`
          } 
          else if (names.length === 2){
              return index === 0 ? name : ` and ${name} like this`
          } 
          else if (names.length === 3) {
              if(index === 0) {
                  return name;
              } else {
                  return index === 1 ? `, ${name}` : ` and ${name} like this`
              }
          } 
          else if  (names.length >= 4) {
              if(index === 0) {
                  return name;
              } else if(index === 1) {
                  return  `, ${name} and ${names.length - 2} others like this`
              }
          }
      }).join("");
    }
  console.log(likes([]));