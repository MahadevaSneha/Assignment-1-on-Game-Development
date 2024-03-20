document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    var num1 = document.getElementById("number1");
    var num2 = document.getElementById("number2");
    var buttons = document.getElementById("buttons").getElementsByTagName("img");
    var timerDisplay = document.getElementById('timer');
  
    // Function to generate random numbers
    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    // Function to generate random numbers and update display
    function generateRandomNumbers() {
      var randomNum1 = randomNumber(1, 100);
      var randomNum2 = randomNumber(1, 100);
      num1.textContent = randomNum1;
      num2.textContent = randomNum2;
    }
  
    // Call generateRandomNumbers initially to display random numbers
    generateRandomNumbers();
  
    // Function to handle symbol button click
    function handleSymbolButtonClick() {
      var relation = this.getAttribute('id');
      var number1 = parseInt(num1.textContent);
      var number2 = parseInt(num2.textContent);
  
      if ((relation === 'greater-than' && number1 > number2) ||
          (relation === 'equal-to' && number1 === number2) ||
          (relation === 'lesser-than' && number1 < number2)) {
        timeLeft++; // Increment time left if the answer is correct
        updateTimer();
      }
  
      generateRandomNumbers();
    }
  
    // Add event listeners to symbol buttons
    for (let button of buttons) {
      button.addEventListener('click', handleSymbolButtonClick);
    }
  
    // Timer variables
    var timeLeft = 5; // Initial time left in seconds
  
    // Function to update timer display
    function updateTimer() {
      timerDisplay.textContent = timeLeft;
    }
  
    // Function to handle timeout
    function handleTimeout() {
      localStorage.setItem('timeLeft', timeLeft);
      
      // Redirect to game over page
      window.location.href = "gameOver.html";
    }
  
    // Start the initial timer
    updateTimer();
    var timerInterval = setInterval(function() {
      timeLeft--;
      updateTimer();
      if (timeLeft === 0) {
        clearInterval(timerInterval); // Stop the timer interval
        handleTimeout();
      }
    }, 1000);
  });