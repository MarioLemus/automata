import promps from 'prompts'

promps.prompt([
  {
    type: 'text',
    message: 'What is your name?'
  }
]).then((answers: any) => {
  console.log(answers)
})

