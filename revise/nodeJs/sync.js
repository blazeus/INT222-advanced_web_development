// Callback representation
// const getTodo = callback => setTimeout(() => callback ({ text: 'Complete code Example'}), 2000)

// getTodo(todo => console.log(todo.text))

console.log("This is the first Output")

// Promise function representation

const getTodo = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=> {
            let error = true;
            if(!error)
                resolve({ text: 'Complete text Example'})
            else 
                reject()
        },2000)
    })
}

// getTodo()
//     .then(todo => console.log(todo.text))
//     .catch(error => console.log("Error occured"))

// ASync

async function fetchTodo () {
    try { 
        const todo = await getTodo()
        return todo
    } catch (error) {
        console.log("Error occurred")
    }
}

fetchTodo()
    .then(todo => console.log(todo.text))
    .catch(() => console.log("Error occurred"))