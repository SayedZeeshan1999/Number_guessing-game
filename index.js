var guessedNumber = Math.floor(Math.random() * 10);
// function guessedNumber() {
//     guessedNumber = ;
    console.log(guessedNumber);
//     document.getElementById('submitguess');
//     document.getElementById('textfield');

//     console.log(guessedNumber);
// }

function submitguess() {
    var userinput = document.getElementById('textfield').value
    if (userinput < 1 || userinput > 10) {
        alert("Guessed the number between 1 to 10 ")
        return;
    }
    if (userinput == guessedNumber) {
        alert("your guess number is correct");
        return;
    }
    else if (userinput > guessedNumber) {
        alert("your guess is to high")
    }
    else if (userinput < guessedNumber) {
        alert("your guess is too low")
    }
}