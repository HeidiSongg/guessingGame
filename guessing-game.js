const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const secretNumber = 77;

const checkGuess = function(arg) {
  if(arg > secretNumber) {
    console.log("Too high")
    return false
  } 
  else if (arg < secretNumber){
    console.log("Too low")
    return false
  }
  else {
    console.log("Correct!")
    return true
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

