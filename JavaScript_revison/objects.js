var car = {
    brand : "Rolls Royce",
    model : "Phantom",
    srno : 1
};

car.special = Symbol("Black Badge");

const printFun = () => {
    console.log(car.brand)
    console.log(car.model)
    console.log(car.srno)
    console.log(car.special)
}

printFun()


