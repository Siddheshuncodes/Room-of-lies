<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/js/bootstrap.bundle.min.js"></script>


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
  const glowingEyes = document.querySelector('.glowing-eyes');

  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
  
    const eyesX = glowingEyes.offsetLeft + glowingEyes.offsetWidth / 2;
    const eyesY = glowingEyes.offsetTop + glowingEyes.offsetHeight / 2;
  
    const deltaX = mouseX - eyesX;
    const deltaY = mouseY - eyesY;
  
    const angle = Math.atan2(deltaY, deltaX);
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  
    const maxDistance = 100; // Adjust the maximum distance the eyes can move
  
    if (distance < maxDistance) {
      const eyeMovement = (maxDistance - distance) / maxDistance * 10;
      const eyeX = Math.cos(angle) * eyeMovement;
      const eyeY = Math.sin(angle) * eyeMovement;
  
      glowingEyes.style.transform = `translate(${eyeX}px, ${eyeY}px)`;
      glowingEyes.classList.add('active');
    } else {
      glowingEyes.style.transform = 'translate(0)';
      glowingEyes.classList.remove('active');
    }
  });
    