// Function to display the character list
function displayCharacterList() {
    const characterList = document.getElementById('character-list');

    characters.forEach((character, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${character.name}</strong> - ${character.role}`;
        listItem.setAttribute('for', `character-${index}`);
        
        const radioBtn = document.createElement('input');
        radioBtn.setAttribute('type', 'radio');
        radioBtn.setAttribute('name', 'character');
        radioBtn.setAttribute('id', `character-${index}`);
        radioBtn.setAttribute('value', index);

        listItem.prepend(radioBtn);
        characterList.appendChild(listItem);
    });
}
// Function to display the character list
function displayCharacterList() {
    const characterList = document.getElementById('character-list');
  
    characters.forEach((character, index) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<label for="character-${index}">
                              <input type="radio" name="character" id="character-${index}" value="${index}">
                              <strong>${character.name}</strong> - ${character.role}
                            </label>`;
      characterList.appendChild(listItem);
    });
  }
  