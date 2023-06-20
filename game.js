// Character class
class Character {
    constructor(name, profession, backstory) {
      this.name = name;
      this.profession = profession;
      this.backstory = backstory;
    }
  }
  
  // Task class
  class Task {
    constructor(description, clue) {
      this.description = description;
      this.clue = clue;
    }
  }
  
  // Select the imposter
  function selectImposter(characters) {
    const imposterIndex = Math.floor(Math.random() * characters.length);
    return characters[imposterIndex];
  }
  
  // Choose the player's character
  function chooseCharacter(characters) {
    const characterNames = characters.map((character) => character.name);
    const selectedCharacterName = prompt(
      "Choose your character by entering the corresponding number:\n" +
        characterNames.map((name, index) => `${index + 1}. ${name}`).join("\n")
    );
  
    const selectedCharacterIndex = parseInt(selectedCharacterName) - 1;
    if (
      Number.isNaN(selectedCharacterIndex) ||
      selectedCharacterIndex < 0 ||
      selectedCharacterIndex >= characters.length
    ) {
      console.log("Invalid character selection.");
      return null;
    }
  
    return characters[selectedCharacterIndex];
  }
  
  // Reveal character backstories
  function revealBackstories(characters) {
    console.log("Revealing character backstories...");
    characters.forEach((character) => {
      console.log(`Name: ${character.name}`);
      console.log(`Profession: ${character.profession}`);
      console.log(`Backstory: ${character.backstory}`);
      console.log("------------------------------");
    });
  }
  
  // Perform a task
  function performTask(task, imposter) {
    console.log(`Task: ${task.description}`);
    console.log(`Clue: ${task.clue}`);
  
    if (task.description === "You found a Strange pattern on the wall...wait!!...Mehul haS a Similar pattern on hiS left hand") {
      const choice = prompt(
        "\nThe pattern on the wall seems familiar...\n" +
          "1. Ask Mehul about the pattern\n" +
          "2. Look for other patterns in the room\n" +
          "3. Examine Mehul's left hand\n" +
          "Enter your choice (1-3): "
      );
  
      if (choice === "1") {
        console.log("You did not find any clue :(");
      } else if (choice === "2") {
        console.log("You did not find any clue :(");
      } else if (choice === "3") {
        console.log("\nYou have a sharp eye!!");
        console.log("The clue reveals that the imposter carries a pen which is very special to him/her");
      }
    } else if (task.description === "You fouNd a white coat haNgiNg on the wall!...") {
      const choice = prompt(
        "\nThere might be some clue on the coat...\n" +
          "1. Ignore the coat and move on\n" +
          "2. Inspect the coat closely\n" +
          "3. Check the pockets of the coat\n" +
          "Enter your choice (1-3): "
      );
  
      if (choice === "1") {
        console.log("You did not find any clue :(");
      } else if (choice === "2") {
        console.log("You did not find any clue :(");
      } else if (choice === "3") {
        console.log("\nGreat job!!");
        console.log("The imposter uses paper on a daily basis");
      }
    } else if (task.description === "You find out Himanshu is hiding somEthing...it's a piEce of papEr") {
      const choice = prompt(
        "\nHimanshu seems a bit suspicious...\n" +
          "1. Confront Himanshu about the paper\n" +
          "2. Leave Himanshu alone\n" +
          "3. Secretly take a photo of the paper\n" +
          "Enter your choice (1-3): "
      );
  
      if (choice === "1") {
        console.log("\nHimanshu is innocent!");
        console.log("The clue hints that the imposter uses the right side of the brain more often");
      } else if (choice === "2") {
        console.log("You did not find any clue :(");
      } else if (choice === "3") {
        console.log("You did not find any clue :(");
      }
    } else if (task.description === "A jersey is lying around in tHe room") {
      const choice = prompt(
        "\nWhat could this jersey signify?\n" +
          "1. It's just a random item, ignore it\n" +
          "2. Look for other related items\n" +
          "3. Examine the jersey closely\n" +
          "Enter your choice (1-3): "
      );
  
      if (choice === "1") {
        console.log("You did not find any clue :(");
      } else if (choice === "2") {
        console.log("You did not find any clue :(");
      } else if (choice === "3") {
        console.log("\nGood observation!");
        console.log("Every task, clue, and profession is connected. Be sure to consider them while making your choice.");
      }
    } else if (task.description === "DeepAli hAnds you A knife....you Are frustrAted And Angry!!!") {
      const choice = prompt(
        "\nWhy did Deepali give you a knife?\n" +
          "1. Ask Deepali about the knife\n" +
          "2. Look for other clues in the room\n" +
          "3. Examine the knife carefully\n" +
          "Enter your choice (1-3): "
      );
  
      if (choice === "1") {
        console.log("You did not find any clue :(");
      } else if (choice === "2") {
        console.log("You did not find any clue :(");
      } else if (choice === "3") {
        console.log("\nWell done!");
        console.log("Think... don't you feel something odd in the tasks given to you from the beginning...");
      }
    } else {
      console.log("Invalid task.");
    }
  
    if (imposter.name === "Sneha") {
      console.log("\nYou have successfully completed a task!");
    } else {
      console.log("\nOops! The imposter sabotaged your task.");
    }
  }
  
  // Main function
  function startGame() {
    // Character objects
    const characters = [
      new Character(
        "Sneha",
        "Imposter",
        "Sneha is a master of disguise and can easily blend in with the crowd. She uses her charm to manipulate others and carry out her secret plans."
      ),
      new Character(
        "Mehul",
        "Programmer",
        "Mehul is a talented programmer who loves solving complex problems. He is known for his logical thinking and attention to detail."
      ),
      new Character(
        "Himanshu",
        "Artist",
        "Himanshu is a passionate artist who sees the world through his vibrant imagination. He often expresses his emotions through his artwork."
      ),
      new Character(
        "Deepali",
        "Chef",
        "Deepali is a skilled chef who creates culinary masterpieces. She has a deep understanding of flavors and loves experimenting with different cuisines."
      ),
      new Character(
        "Rajesh",
        "Doctor",
        "Rajesh is a dedicated doctor who saves lives every day. He is highly knowledgeable in the medical field and is always ready to help others."
      ),
    ];
  
    // Task objects
    const tasks = [
      new Task(
        "You found a Strange pattern on the wall...wait!!...Mehul haS a Similar pattern on hiS left hand",
        "The clue reveals that the imposter carries a pen which is very special to him/her"
      ),
      new Task(
        "You fouNd a white coat haNgiNg on the wall!...",
        "The imposter uses paper on a daily basis"
      ),
      new Task(
        "You find out Himanshu is hiding somEthing...it's a piEce of papEr",
        "The clue hints that the imposter uses the right side of the brain more often"
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
  
    // Choose the player's character
    const playerCharacter = chooseCharacter(characters);
  
    if (playerCharacter) {
      // Reveal character backstories
      revealBackstories(characters);
  
      // Perform tasks
      tasks.forEach((task) => {
        performTask(task, imposter);
      });
    }
  }
  
  // Start the game when the page finishes loading
  window.addEventListener("load", startGame);
