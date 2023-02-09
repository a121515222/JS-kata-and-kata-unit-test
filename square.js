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