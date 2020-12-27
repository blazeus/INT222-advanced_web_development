const inquirer = require('inquirer')

var questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?"
  },
  {
    type: 'input',
    name: 'age',
    message: 'What is your Age?'
  }
]

inquirer.prompt(questions).then(answers => {
  console.log(`Hi ${answers['name']}!`)
  if(answers['age'] >= 18) 
      console.log("You are of legal age! Conratulations!")
  else
    console.log("Sorry! You are still a kid! ")
})