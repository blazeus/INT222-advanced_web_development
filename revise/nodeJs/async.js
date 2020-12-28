const doSomethingAsync = () => {
    return new Promise( resolve => {
        setTimeout(() => resolve('I did Something'),3000)
    })
}

const doSomething = async () => {
    console.log(await doSomethingAsync())
}

console.log("Before")
doSomething()
console.log("After")
