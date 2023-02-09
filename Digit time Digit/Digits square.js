//https://www.codewars.com/kata/546e2562b03326a88e000020
//Digit*Digit
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 7^2 is 49, 6^2 is 36, and 5^2 is 25. (49-36-35)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

function squareDigits(num) {
    const digits =`${num}`;
    const digitsArray = digits.split("");
    const squareArray =  digitsArray.map(digit => digit * digit)
    let result = "";
    squareArray.forEach((num,index) =>{
      if(digitsArray.length === 1) 
      {
        result += `(${num})`
      } else if(index === (digitsArray.length)-1) {
        result += `-${num})`
      } else if(index === 0) {
        result += `(${num}`
      } 
      else {
        result +=`-${num}`
      }
    });
    return result;
  };
  module.exports = squareDigits;
  console.log("Hello")
  console.log(squareDigits(9119)); // expect (81-1-1-81)