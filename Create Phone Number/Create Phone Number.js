function createPhoneNumber(numbers){
    let first='';
    let middle='';
    let last='';
    numbers.forEach((number, index)=>{
      if(index < 3){
        first += `${number}`
      } else if (index <6) {
        middle += `${number}`
      } else if (index <10){
        last += `${number}`
      }
    })
    return `(${first}) ${middle}-${last}`
  }