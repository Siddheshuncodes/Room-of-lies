// Character data
const characters = [
    {
      name: "Deepali",
      backstory: "Deepali is a skilled doctor with a deep knowledge of medicine. She has dedicated her life to healing others and is known for her compassion and expertise. With years of experience in the medical field, Deepali has saved countless lives and earned the respect of her colleagues. She is meticulous in her work and always strives for perfection. Deepali's calm and composed nature makes her a reliable and trustworthy individual.",
      tasks: [
        {
          description: "Task 1 for Deepali",
          choices: ["Choice 1", "Choice 2", "Choice 3"],
          correctChoice: 2
        },
        {
          description: "Task 2 for Deepali",
          choices: ["Choice A", "Choice B", "Choice C"],
          correctChoice: 1
        }
      ]
    },
    {
      name: "Mehul",
      backstory: "Mehul is an expert data analyst with a passion for deciphering complex patterns and extracting meaningful insights from large datasets. With a strong background in data science and analytics, Mehul has a sharp eye for detail and a logical approach to problem-solving. He is known for his innovative thinking and ability to uncover hidden trends. Mehul's analytical skills and attention to detail make him a valuable asset in any investigative task.",
      tasks: [
        {
          description: "Task 1 for Mehul",
          choices: ["Choice X", "Choice Y", "Choice Z"],
          correctChoice: 0
        },
        {
          description: "Task 2 for Mehul",
          choices: ["Choice M", "Choice N", "Choice O"],
          correctChoice: 2
        }
      ]
    }
    // Add more characters with their backstories and tasks
  ];
  
  // Game state variables
  let currentCharacterIndex = 0;
  let currentTaskIndex = 0;
  
  // HTML element references
  const backstoryContainer = document.getElementById("backstory");
  const characterList = document.getElementById("character-list");
  const taskDescription = document.getElementById("task-description");
  const taskChoices = document.getElementById("task-choices");
  const choiceInput = document.getElementById("choice-input");
  const submitButton = document.getElementById("submit-button");
  
  // Display initial character and backstory
  displayCharacter();
  
  // Function to display the current character
  function displayCharacter() {
    const character = characters[currentCharacterIndex];
    backstoryContainer.innerText = character.backstory;
    displayTasks(character);
  }
  
  // Function to display the tasks for the current character
  function displayTasks(character) {
    characterList.innerHTML = "";
    character.tasks.forEach((task, index) => {
      const taskElement = document.createElement("div");
      taskElement.classList.add("task");
      taskElement.innerText = task.description;
      taskElement.addEventListener("click", () => {
        currentTaskIndex = index;
        displayTask(task);
      });
      if (index === currentTaskIndex) {
        taskElement.classList.add("selected");
      }
      characterList.appendChild(taskElement);
    });
  }
  
  // Function to display the current task
  function displayTask(task) {
    taskDescription.innerText = task.description;
    taskChoices.innerHTML = "";
    task.choices.forEach((choice, index) => {
      const choiceElement = document.createElement("div");
      choiceElement.classList.add("choice");
      choiceElement.innerText = choice;
      choiceElement.addEventListener("click", () => {
        handleChoice(index, task.correctChoice);
      });
      taskChoices.appendChild(choiceElement);
    });
  }
  
  // Function to handle user choice
  function handleChoice(choiceIndex, correctChoiceIndex) {
    const userChoice = choiceInput.value.trim().toLowerCase();
    const isCorrect = choiceIndex === correctChoiceIndex;
    
    if (isCorrect) {
      showMessage("Correct choice!");
    } else {
      showMessage("Incorrect choice. Try again.");
    }
    
    currentTaskIndex++;
    if (currentTaskIndex >= characters[currentCharacterIndex].tasks.length) {
      currentTaskIndex = 0;
      currentCharacterIndex++;
      if (currentCharacterIndex >= characters.length) {
        currentCharacterIndex = 0;
      }
    }
    
    displayCharacter();
    displayBackstory();
  }
  
  // Function to display a message to the user
  function showMessage(message) {
    const messageContainer = document.getElementById("message");
    messageContainer.innerText = message;
  }
  