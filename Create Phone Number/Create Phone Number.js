function createPhoneNumber(numbers){
    let formate = '(xxx) xxx-xxxx'
    numbers.forEach(number=>{
      formate = formate.replace('x',number)
    })
    return formate
  }