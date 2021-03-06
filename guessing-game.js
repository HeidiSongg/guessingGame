const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const secretNumber = Math.floor(Math.random() * 100)  

const checkGuess = function(arg) {
  if(arg > secretNumber) {
    console.log("Too high")
    return false
  } 
  else if (arg < secretNumber){
    console.log("Too low")
    return false
  }
  else if (arg == secretNumber){
    console.log("Correct!")
    return true
  }
  else {
    console.log("Enter valid number")
    return false
  }
}

const askGuess = function(arg){
  rl.question('Enter a guess ', (arg) =>{
  
  if(checkGuess(arg)) {
    console.log('You Win!')
    rl.close()
  } else askGuess()
})
}

askGuess()

