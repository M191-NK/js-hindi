let score = "33"

console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof(valueInNumber))
// for character,null,undefined,boolean => NaN,0,NaN,1or2 respectively.
console.log(valueInNumber) // NaN

let isLoggedIn = " "
// 1," ","mayank",33 => true; 0,"" => false
let booleanIsLggedIn = Boolean(isLoggedIn)
console.log(booleanIsLggedIn)

let somenumber = undefined
// all data type convert to string
let stringSomeNumber = String(somenumber)
console.log(stringSomeNumber)
console.log(typeof(stringSomeNumber))