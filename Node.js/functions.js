// //Function to add
// var add = (a,b) => {
//     return a+b
// }

// //Function to substract
// var sub = (a,b) => {
//     return a-b
// }

// //Function to divide
// var divide = (a,b) => {
//     if(b == 0) {
//         return "Invalid!"
//     }
//     return a/b
// }

// console.log(add(2,6))
// console.log(sub(6,2))
// console.log(divide(4,2))

//module.exports.add = add
/**
 *  module.exports = exports
 *  exports acts as the shorthand for the same and performs the same export.
 */

//Shorthand implementation
// exports.add = add
// exports.sub = sub
// exports.divide = divide

//Object-wise implementation

module.exports = {
    add: (a,b) => {
            return a+b
        },
    sub: (a,b) => {
        return a-b
        },
    divide: (a,b) => {
        if(b == 0) {
            return "Invalid!"
        }
        return a/b
    },
    a: 7,
    b: 8
}