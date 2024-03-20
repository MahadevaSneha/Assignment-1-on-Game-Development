// Iteration 5: Store the player score and display it on the game over screen
// Initialize player's score

document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    var scoreBoard = document.getElementById("score-board");
  
    // Retrieve the player's score from local storage
    var playerScore = localStorage.getItem('playerScore');
  
    // Log the retrieved score to the console
    console.log("Player's score:", playerScore);
  
    // Update score board with the retrieved score
    scoreBoard.textContent = playerScore;
});
play_again_button=document.getElementById("play-again-button");
play_again_button.addEventListener("click", function()
{
  window.location.href = "game.html";
});