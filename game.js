// Function to show the game area and hide the character selection area
function showGameArea() {
    document.getElementById("character-selection").style.display = "none";
    document.getElementById("game-area").style.display = "block";
}

// Function to show the game result area and hide the game area
function showGameResultArea() {
    document.getElementById("game-area").style.display = "none";
    document.getElementById("game-result").style.display = "block";
}

// Function to handle the start game button click event
function startGame() {
    showGameArea();
}

// Function to handle the perform task button click event
function performTask() {
    // Get the selected task option
    var selectedOption = document.querySelector('input[name="task-option"]:checked');

    if (selectedOption) {
        // Get the task description and clue
        var description = selectedOption.getAttribute("data-description");
        var clue = selectedOption.getAttribute("data-clue");

        // Show the task description and clue
        document.getElementById("task-description").textContent = description;
        document.getElementById("task-clue").textContent = clue;

        // Hide the task options
        document.getElementById("task-options").style.display = "none";

        // Show the perform task result button
        document.getElementById("perform-task-result-btn").style.display = "block";
    }
}

// Function to handle the perform task result button click event
function performTaskResult() {
    showGameResultArea();
}

// Add event listeners to buttons
document.getElementById("start-game-btn").addEventListener("click", startGame);
document.getElementById("perform-task-btn").addEventListener("click", performTask);
document.getElementById("perform-task-result-btn").addEventListener("click", performTaskResult);



// Function to show the game area and hide the character selection area
function showGameArea() {
    document.getElementById("character-selection").style.display = "none";
    document.getElementById("game-area").style.display = "block";
}

// Function to show the game result area and hide the game area
function showGameResultArea() {
    document.getElementById("game-area").style.display = "none";
    document.getElementById("game-result").style.display = "block";
}

// Function to handle the start game button click event
function startGame() {
    showGameArea();
}

// Function to handle the perform task button click event
function performTask() {
    // Hide the perform task button
    document.getElementById("perform-task-btn").style.display = "none";

    // Show the task options
    document.getElementById("task-options").style.display = "block";
}

// Function to handle the perform task result button click event
function performTaskResult() {
    showGameResultArea();
}

// Add event listeners to buttons
document.getElementById("start-game-btn").addEventListener("click", startGame);
document.getElementById("perform-task-btn").addEventListener("click", performTask);
document.getElementById("perform-task-result-btn").addEventListener("click", performTaskResult);

// Function to handle the perform task button click event
function performTask() {
    // Hide the perform task button
    document.getElementById("perform-task-btn").style.display = "none";

    // Get the task description and set it in the HTML element
    var taskDescription = "Task Description: [Task description goes here]"; // Replace with actual task description
    document.getElementById("task-description-text").textContent = taskDescription;

    // Show the task description and options
    document.getElementById("task-description").style.display = "block";
    document.getElementById("task-options").style.display = "block";
}
