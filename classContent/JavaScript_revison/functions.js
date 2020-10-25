// // Callback function for returning the square of a number
// const square = (num) => {
//     return (num**2)
// }

// // Function to map a function to every element of the second argument
// function map (f, a) {
//     let result = [];
//     for (let i=0; i != a.length; i++)
//         result[i] = f(a[i]);
//     return result;
// }

// numbers = [1,2,3,4,5,6,7,8,9]
// console.log(map(square,numbers))


const factorial = (num) => {
    if (num === 0) return 1
    return num * factorial(num - 1)
} 

console.log(factorial(5))
