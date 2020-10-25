var i=0
// for (;;) {
//     console.log(i)
//     i++
//     if(i>9) break;
// }

// in for-in we traverse through the index values and in for-of we traverse through the values
// const types = ['object', 'array', 'string', 'integer', 'float', 'boolean']

// for (const type in types) {
//     console.log(`A Javascript type is : ${types[type]} at position ${type}`)
// }


// for (const type in types) {
//     console.log(`A Javascript type is : ${types[type]}`)
// }


const user = {name: 'Marcus', likes: 'Node.js'}

for (const key in user) {
    console.log(`${key}: ${user[key]}`)
}