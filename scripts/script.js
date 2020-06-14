// -- work with animalsArray

// generate a “card columns” layout <-- refer to <figure> tag inside the #animals
// Ref: code adapted from my Actors Agency project
// define parent cards container of Animals
const animalGrid = document.querySelector('#animals');
// define mock Card to clone
const animalFigure = animalGrid.querySelector('figure');
// define the animal's select block where to append the animals' options
const animalSelect = document.querySelector('#select-animal');
// the element to duplicate is the first option of the select.
const animalOption = animalSelect.querySelector('option');

// Loop through Animals List
// populate the cards with the picture and the name of the animal.
// also populate the options in the form's <select><option>s
animalsArray.forEach((animal) => {
  // Create a variable "newCard" and append it to the #animals <article>
  const newCard = animalFigure.cloneNode(true);
  animalGrid.append(newCard);
  // In this variable, find the <figcaption> and change the text of the html element with the property value "actor.name"
  newCard.querySelector('figcaption').textContent = animal.name;
  // In this newCard, find the img and change its "src" attribute value.
  newCard.querySelector('img').src = animal.picture;
  // Add the animal "type" as a class : this step may be useful for the filtering later on.
  newCard.classList.add(animal.type);
  // 6. Remove the class "d-none" to make this duplicated card visible.
  //   newCard.classList.remove("d-none");
  // clone the animal option and append it to the <select>
  const newOption = animalOption.cloneNode(true);
  animalSelect.append(newOption);
  newOption.value = animal.name;
  newOption.innerHTML = animal.name;
  newOption.classList.add(animal.type);
  newOption.removeAttribute('id');
});
animalFigure.remove();
animalOption.remove;

// function to set class visible/invisible following animal type
const cardS = animalGrid.querySelectorAll('figure');
const optionS = animalSelect.querySelectorAll('option');
function refreshAnimals(animalType) {
  for (const card of cardS) {
    const toggleCard = !card.classList.contains(animalType) && animalType;
    card.classList.toggle('hidden', toggleCard);
  }
  optionS.forEach((option) => {
    const toggleOption = !option.classList.contains(animalType) && animalType;
    option.classList.toggle('hidden', toggleOption);
  });
}

// test form submission
const reasonText = document.querySelector('#reasontxt');
const emailInput = document.querySelector('#emailinput');
document.querySelector('form').addEventListener('submit', function (ev) {
  ev.preventDefault;
  // test for selected animal
  if (animalSelect.value.length == 0) {
    animalSelect.classList.add('border-alert');
  }
  // test for Reason text
  if (reasonText.value.length < 40) {
    reasonText.classList.add('border-alert');
  }
  // test for email text
  if (emailInput.value.length == 0) {
    emailInput.classList.add('border-alert');
  }
});

// reset animal selector border to normal if field clicked
animalSelect.addEventListener('click', function () {
  animalSelect.classList.remove('border-alert');
});
// reset reason and email text border to normal if field entered after key release
reasonText.addEventListener('keyup', function () {
  reasonText.classList.remove('border-alert');
});
emailInput.addEventListener('keyup', function () {
  emailInput.classList.remove('border-alert');
});

// When click on the species buttons,
// define all buttons (of class .btn)
const speciesBtnS = document
  .querySelector('#species')
  .querySelectorAll('figure');
for (const btn of speciesBtnS) {
  btn.addEventListener('click', function () {
    // define and show only the selected category
    const selectedType = btn.querySelector('img').alt;
    // show only the selected species type
    btn.querySelector('figcaption').classList.toggle('button-bold');
    let speciesFilter = getFilterArray();
    refreshAnimals(selectedType);
  });
}

// create species filter as an array
function getFilterArray() {
  speciesBtnS.forEach((btn) => {
    let filterArray = [];
    const selectedType = btn.querySelector('img').alt;
    const isBold = btn
      .querySelector('figcaption')
      .classList.contains('button-bold');
    filterArray.push(isBold ? selectedType : '');
    console.log(selectedType, isBold, filterArray);

    return filterArray;
  });
}

let speciesFilter = getFilterArray();

refreshAnimals('');
