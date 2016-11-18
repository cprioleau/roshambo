$(document).ready(function () {

  // Step 1: On page load, calculate a choice (Rock, Paper, or Scissor) for the computer.
  // get random number between 1 and 3 inclusive
  var computerScore = Math.floor((Math.random() * 3) + 1);
  console.log(computerScore, "COMPUTER SCORE");

  // assign rock, paper or scissors to computerScore
  if (computerScore === 1) {
    computerScore = "rock";
  } else if (computerScore === 2) {
    computerScore = "paper";
  } else {
    computerScore = "scissors";
  }
  console.log(computerScore, "COMPUTER SCORE");

  // Step 2: On click of one of the choices, grab the name of the choice from the element's id and store it to a variable.
  // define user choice
  $("#rock").on("click", function()  {
    userScore = "rock";
    console.log(userScore, "USER SCORE");
    if (computerScore === "scissors") {
      $(this).addClass("success green-background");
      alert("You win!");
    } else if (computerScore === "rock") {
      alert ("Tie game!");
    } else {
      alert ("You lost!");
    }
  });
  $("#paper").on("click", function()  {
    userScore = "paper";
    console.log(userScore, "USER SCORE");
  });
  $("#scissors").on("click", function()  {
    userScore = "scissors";
    console.log(userScore, "USER SCORE");
  });



  // Step 3: Inside of the click event handler, compare the user-selected choice with the computer-selected choice.

  //Step 4: If the user wins, add the class of "success" to the option element they clicked on. If the user lost, create an alert indicating that.

  //Step 5: Create a check in your code to account for a tie. If the two choices are the same, alert the user of this.

  // if userScore = computerScore {
  //   alert "tie!";
  // };

});
