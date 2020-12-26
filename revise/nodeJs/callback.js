const getMessage = callback => {
    setTimeout(() => callback({message: "This is a message!"}), 1000)
}

getMessage((showMessage => console.log(showMessage.message)))