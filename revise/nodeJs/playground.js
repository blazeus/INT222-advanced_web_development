var a = 20
const getTodo = getting => setTimeout(() => getting({a: 30}) ,2000)
console.log(a)
getTodo(todo => console.log(todo.a))