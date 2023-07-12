let rendomNumber = parseInt(Math.random() * 100 + 1);
const user_input = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guess_slot = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrhi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

// creat a variable that use in code
const p = document.createElement('p');

// this for store the all gusses of the user
let prvGuess = [];
// totla number of channce
let guessNumber = 1;
// condition playgame
let playGame = true;

//first stpe
if (playGame == true) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(user_input.value);
    guessValid(guess);
  });
}

//  function are there

//gusess validation

function guessValid(guess) {
  if (isNaN(guess)) {
    alert('enter a valid number');
  } else if (guess < 1) {
    alert('enter a number gerter than 0');
  } else if (guess > 100) {
    alert('enter a number lesh than 100');
  } else {
    prvGuess.push(guess);
    checkGuess(guess);

    // kya pta iska ye last chance ho
    if (guessNumber === 11) {
      displayuGuess(guess);
      displayMessage(`GameOver. Your ramdam number was ${rendomNumber} `);
      endGame();
    } else {
      displayuGuess(guess);
      checkGuess(guess);
    }
  }
}

// this function is print the result besed on guessvlaue

function checkGuess(guess) {
  if (guess === rendomNumber) {
    displayMessage(` YaHOOO... YOU GUESSS IT WRITE `)
    endGame()
  } else if (guess < rendomNumber) {
    displayMessage(`you number TOO low`);
  } else if (guess > rendomNumber) {
    displayMessage(`you number TOO high`);
  }
}

// display guesss dom ka sara kam
function displayuGuess(guess) {
  user_input.value = '';
  guess_slot.innerHTML += `${guess} , `;
  guessNumber++;
  lastResult.innerHTML = `${11 - guessNumber}`;
}

// display messages

function displayMessage(message) {
  lowOrhi.innerHTML = `<h1>${message} </h1>`;
}

// start over
function newGame() {
  const newGamebu = document.querySelector('#nayagame');
  newGamebu.addEventListener('click', function (e) {
    rendomNumber = parseInt(Math.random() * 100 + 1);
    guess_slot.innerHTML = '';
    prvGuess = [];
    user_input.removeAttribute('disabled');
    playGame = true;
    lastResult.innerHTML = `${11 - guessNumber}`;
    startOver.removeChild(p);
    displayMessage('');
  });
}

// end game
function endGame() {
  user_input.value = '';
  user_input.setAttribute('disabled', '');
  guessNumber = 1;
  playGame = false;

  p.classList.add('button');
  p.innerHTML = `<h2 id="nayagame"> Start Over <h2>`;
  startOver.appendChild(p);
  newGame();
}
