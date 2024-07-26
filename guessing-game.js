//https://www.toptal.com/javascript/interview-questions
function guessingGame() {
  const num = Math.floor(Math.random() * 100);
  let count = 0;
  let over = false;
  return function guess(n) {
    if (over) {
      return "The game is over, you already won!";
    }
    count++;
    if (n === num) {
      over = true;
      return "You win! You found " + n + " in " + count + " guesses.";
    } else if (n < num) {
      return n + " is too low!";
    } else if (n > num) {
      return n + " is too high!";
    }
  };
}

module.exports = { guessingGame };
