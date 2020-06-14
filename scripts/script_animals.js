// set class visible/invisible following animal type
const cardS = document.querySelectorAll('#animals');
function refreshAnimals(animalType) {
  for (const card of cardS) {
    console.log(animalType);
    const toggleDisplay = card.classList.contains(animalType);
    // card.classList.toggle('hidden', toggleDisplay);
    card.classList.remove('hidden');
  }
}

console.log(cardS);

refreshAnimals('horse');
