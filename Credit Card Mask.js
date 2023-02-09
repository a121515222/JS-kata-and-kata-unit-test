//Credit Card Mask
// Usually when you buy something, you're asked whether your credit card number,
// phone number or answer to your most secret question is still correct. However, 
//since someone could look over your shoulder, you don't want that shown on your screen. 
//Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.
function mask(info) {
    return `${info}`.split('').map((item,index) => {
        if( index < (info.length - 4)) {
            console.log(item)
            return "#"
        } else{
            return item
        }
    }).join("")
}
module.exports = mask;
let result;
console.log(result = mask("1234567")) 
