let randomNum = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessslot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')
let prevGues = []
let numGuess = 1

let PlayGame = true
if(PlayGame){
  submit.addEventListener('click', (e) => {
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateguess(guess)
  })
}
function validateguess(guess){
  if(isNaN(guess)){
    alert('Please Enter a valid number')
  }else if(guess < 1){
    alert('Please Enter a Number more than 1')
  }else if(guess > 100){
    alert('Please Enter a number less than 100')
  }else{
    prevGues.push(guess)
    if(numGuess === 11){
      displayguess(guess)
      displaymessage(`Game Over. Random Number was ${randomNum}`)
      endGame()
    }    else{
      displayguess(guess)
      checkguess(guess)
    }
  }
}

function checkguess(guess){
  if(guess === randomNum){
    displaymessage('You Guessed it right')
    endGame();
  }else if(guess < randomNum){
    displaymessage('Your guess is too low')
  }else if(guess > randomNum){
    displaymessage('Your guess is too high')
  }
}

function displayguess(guess){
  userInput.value = ''
  guessslot.innerHTML += `${guess},  `
  numGuess++
  remaining.innerHTML = `${11 - numGuess}`

}


function displaymessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id = "NewGame">Start New Game</h2>`;
  PlayGame = false
  startOver.appendChild(p)
  startGame();
}

function startGame(){
const NewGamebutton = document.querySelector('#NewGame')
NewGamebutton.addEventListener('click', (e) => {
  randomNum = parseInt(Math.random() * 100 + 1);
  prevGues = []
  numGuess = 1
  guessslot.innerHTML = ''
  remaining.innerHTML = `${11 - numGuess}`
  userInput.removeAttribute('disabled')
  startOver.removeChild(p)
  PlayGame = true
})
}