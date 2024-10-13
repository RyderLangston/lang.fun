<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Guess the Number</h1>
    <p>Guess a number between 1 and 100:</p>
    <input type="number" id="guess" min="1" max="100">
    <button onclick="checkGuess()">Submit</button>

    <p id="message"></p>

    <script>
        const randomNumber = Math.floor(Math.random() * 100) + 1;

        function checkGuess() {
            const userGuess = parseInt(document.getElementById('guess').value);
            const message = document.getElementById('message');

            if (userGuess === randomNumber) {
                message.textContent = "Congratulations! You guessed the number.";
            } else if (userGuess < randomNumber) {
                message.textContent = "Too low! Try again.";
            } else {
                message.textContent = "Too high! Try again.";
            }
        }
    </script>
</body>
</html>
