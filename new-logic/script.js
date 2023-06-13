// Character class definition
class Character {
    constructor(name, role, backstory) {
      this.name = name;
      this.role = role;
      this.backstory = backstory;
    }
  }
  
  // Task class definition
  class Task {
    constructor(description, clue) {
      this.description = description;
      this.clue = clue;
    }
  }
  
  // Function to randomly select the imposter
  function selectImposter(characters) {
    return characters[Math.floor(Math.random() * characters.length)];
  }
  
  // Function to choose the player's character
  function chooseCharacter(characters) {
    console.log("Choose your character:");
    characters.forEach((character, index) => {
      console.log(`${index + 1}. ${character.name} - ${character.role}`);
    });
  
    while (true) {
      const choice = prompt("Enter the number corresponding to your choice: ");
      if (choice && /^\d+$/.test(choice) && 1 <= parseInt(choice) && parseInt(choice) <= characters.length) {
        const selectedCharacter = characters[parseInt(choice) - 1];
        if (selectedCharacter.name === "Sneha") {
          console.log("You chose Sneha, who is the imposter. Game over!");
          return null;
        } else {
          return selectedCharacter;
        }
      } else {
        console.log("Invalid choice. Please try again.");
      }
    }
  }
  
  // Function to reveal character backstories
  async function revealBackstories(characters) {
    console.log("Character Backstories:");
    for (const character of characters) {
      console.log(`${character.name}: ${character.backstory}`);
      await sleep(2000);
    }
  }
  
  // Function to perform a task with multiple choices
  function performTask(task, imposter) {
    console.log("\nTask Description:");
    console.log(task.description);
    sleep(2000);
    console.log("\nCompleting the task...");
    sleep(3000);
  
    if (imposter.role === "Taskmaster") {
      console.log("\nYou found a clue!");
      console.log(`Clue: ${task.clue}`);
    } else {
      // Add multiple choices for the task outcome
      if (task.description === "You found a Strange pattern on the wall...wait!!...Mehul haS a Similar pattern on hiS left hand") {
        const choice = prompt(
          "\nWhat will you do?!\n" +
          "1. Use your skills to analyze the pattern.\n" +
          "2. Use the internet to find the meaning between the patterns.\n" +
          "3. Work together as a team to find out the meaning behind the pattern.\n" +
          "Enter your choice (1-3): "
        );
  
        if (choice === "1") {
          console.log("\nYour skills come in handy. You find out a meaning between the patterns!");
          console.log("The clue reveals that the imposter carries a pen which is very special to him/her");
        } else if (choice === "2") {
          console.log("You did not find any clue :(");
        } else if (choice === "3") {
          console.log("You did not find any clue :(");
        }
      } else if (task.description === "You fouNd a white coat haNgiNg on the wall!...") {
        const choice = prompt(
          "\nYou found a company's symbol on it\n" +
          "1. Ask Mehul in which company he works\n" +
          "2. Look for other players' professions\n" +
          "3. Notice random patterns drawn on the coat\n" +
          "Enter your choice (1-3): "
        );
  
        if (choice === "1") {
          console.log("You did not find any clue :(");
        } else if (choice === "2") {
          console.log("You did not find any clue :(");
        } else if (choice === "3") {
          console.log("\nYou have sharp eyes!!");
          console.log("The imposter uses paper on a daily basis");
        }
      } else if (task.description === "You find out Himanshu is hiding somEthing...it's a piEce of papEr") {
        const choice = prompt(
          "\nIt may be a prescription\n" +
          "1. Ask why Himanshu was hiding the paper\n" +
          "2. Check if medicine names are written on it\n" +
          "3. Trust what Sneha is saying about the piece of paper.\n" +
          "Enter your choice (1-3): "
        );
  
        if (choice === "1") {
          console.log("You did not find any clue :(");
        } else if (choice === "2") {
          console.log("You did not find any clue :(");
        } else if (choice === "3") {
          console.log("\nSneha was telling the truth...");
          console.log("The clue hints that the imposter uses the right side of the brain more often");
        }
      } else if (task.description === "A jersey is lying around in tHe room") {
        const choice = prompt(
          "\nWell, well...now who may have a use for a jersey here\n" +
          "1. Ignore what you just saw\n" +
          "2. Stay calm and analyze the situation around you\n" +
          "3. Approach Himanshu\n" +
          "Enter your choice (1-3): "
        );
  
        if (choice === "1") {
          console.log("You did not find any clue :(");
        } else if (choice === "2") {
          console.log("Every task, clue, and profession is connected. Be sure to consider them while making your choice.");
          console.log("CAREFUL!! The imposter is creative in deceiving the people in the room... Or is the imposter playing mind games...");
        } else if (choice === "3") {
          console.log("You did not find any clue :(");
        }
      } else if (task.description === "DeepAli hAnds you A knife....you Are frustrAted And Angry!!!") {
        const choice = prompt(
          "\nWHO DO YOU KILL??\n" +
          "1. Control your anger and calm yourself down\n" +
          "2. Kill Gaurav\n" +
          "3. Kill Deepali\n" +
          "Enter your choice (1-3): "
        );
  
        if (choice === "1") {
          console.log("\nWILD CARD!!!");
          console.log("Think... don't you feel something odd in the tasks given to you from the beginning...");
        } else if (choice === "2") {
          console.log("You did not find any clue :(");
        } else if (choice === "3") {
          console.log("You did not find any clue :(");
        }
      }
    }
  }
  
  // Function to simulate a delay
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  // Define the characters
  const characters = [
    new Character(
      "Himanshu",
      "Doctor",
      "Himanshu is a well-known doctor who specializes in brain-related diseases."
    ),
    new Character(
      "Deepali",
      "Artist",
      "Deepali is a talented artist who loves to create beautiful paintings."
    ),
    new Character(
      "Gaurav",
      "Engineer",
      "Gaurav is a brilliant engineer who designs cutting-edge technology."
    ),
    new Character(
      "Sneha",
      "Imposter",
      "Sneha is the imposter among the players. She is skilled at deception."
    ),
    new Character(
      "Mehul",
      "Writer",
      "Mehul is a famous writer known for his captivating mystery novels."
    ),
  ];
  
  // Define the tasks
  const tasks = [
    new Task(
      "You found a Strange pattern on the wall...wait!!...Mehul haS a Similar pattern on hiS left hand",
      "The imposter carries a pen which is very special to him/her"
    ),
    new Task(
      "You fouNd a white coat haNgiNg on the wall!...",
      "The imposter uses paper on a daily basis"
    ),
    new Task(
      "You find out Himanshu is hiding somEthing...it's a piEce of papEr",
      "The imposter uses the right side of the brain more often"
    ),
    new Task(
      "A jersey is lying around in tHe room",
      "Every task, clue, and profession is connected. Be sure to consider them while making your choice."
    ),
    new Task(
      "DeepAli hAnds you A knife....you Are frustrAted And Angry!!!",
      "Think... don't you feel something odd in the tasks given to you from the beginning..."
    ),
  ];
  
  // Select the imposter
  const imposter = selectImposter(characters);
  if (imposter === null) {
    console.log("Game Over");
  } else {
    // Choose the player's character
    const playerCharacter = chooseCharacter(characters);
    if (playerCharacter !== null) {
      console.log("\nGame Start!");
      sleep(2000);
      console.log("\nRound 1: Reveal Character Backstories");
      revealBackstories(characters);
      sleep(2000);
      console.log("\nRound 2: Perform Tasks");
      tasks.forEach(async (task) => {
        console.log("\n=====================");
        await performTask(task, imposter);
        console.log("=====================");
        await sleep(3000);
      });
      console.log("\nGame Over");
    }
  }
  