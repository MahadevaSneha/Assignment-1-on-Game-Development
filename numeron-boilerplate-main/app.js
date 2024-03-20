// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.

document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    var buttons = document.getElementById("buttons").getElementsByTagName("img");
  
    // Function to handle symbol button click
    function handleSymbolButtonClick() {
        console.log("Button clicked:", this.getAttribute('id'));
    }

    // Add event listeners to symbol buttons
    for (let button of buttons) {
        button.addEventListener('click', handleSymbolButtonClick);
    }
});