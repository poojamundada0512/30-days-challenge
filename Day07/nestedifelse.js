//Nested if else condition

//program 1 - create a game of guessing number -
 // condition 1 - If number is correct then print your guess is right.
 // condition 2 - If number is low than guess number then print your guess is low.
 // condition 3 - If number is bigger than gusess number then print your guess is too high.

 let winningNumber = 20;
 let userGuess = +prompt("Guess a Number") //prompt is always string to conver that in number add + before prompt so that convert in number


 if(userGuess === winningNumber)
 {
    console.log ("Your Guess is right");
 }
 else
 {
    if(userGuess < winningNumber)
    {
        console.log("Your guess number is low");
    }
    else{
        console.log("Your guess number is high");
    }
 }