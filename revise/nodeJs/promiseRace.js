const first = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'first')
  })
  const second = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'second')
  })
  
  Promise.race([first, second]).then(result => {
    console.log(result) // second
  })