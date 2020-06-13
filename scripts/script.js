// -- work with animalsArray

// generate a “card columns” layout <-- refer to <figure> tag inside the #animals
// Ref: code adapted from my Actors Agency project
// Loop through Animals List
// define parent cards container of Animals
const animalGrid = document.querySelector('#animals');
// define mock Card to clone
const animalFigure = animalGrid.querySelector('figure');
// define the animal's select block where to append the animals' options
const animalSelect = document.querySelector('#select-animal');
// the element to duplicate is the first option of the select.
const animalOption = animalSelect.querySelector('option');
// populate the generated cards with the picture and the name of the animal.
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
  const newAnimalOption = animalOption.cloneNode(true);
  animalSelect.append(newAnimalOption);
  newAnimalOption.value = animal.name;
  newAnimalOption.innerHTML = animal.name;
  newAnimalOption.removeAttribute('id');
});
animalFigure.remove();
animalOption.remove;

// test form submission
const reasonText = document.querySelector('#reasontxt');
const emailInput = document.querySelector('#emailinput');
document.querySelector('form').addEventListener('submit', function (ev) {
  ev.preventDefault;
  // const animalSelected = document.querySelector('#select-animal');
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

// reset border to normal if field clicked
const animalSel = document.querySelector('#select-animal');
animalSel.addEventListener('click', function () {
  animalSel.classList.remove('border-alert');
});

// reset border to normal if field entered after key release
const reasonTxt = document.querySelector('#reasontxt');
reasonTxt.addEventListener('keyup', function () {
  reasonTxt.classList.remove('border-alert');
});

const emailInput = document.querySelector('#emailinput');
emailInput.addEventListener('keyup', function () {
  emailInput.classList.remove('border-alert');
});

// When click on the species buttons,
// define all buttons (of class .btn)
const btnClass = document.querySelectorAll('species-type');
for (const btn of btnClass) {
  btn.addEventListener('click', function (evnt) {
    // define the selected category
    const selectedCat = this.querySelector('input').value;
    // we need to show only the correct species-type
    // define the animals' card parent container
    const cardS = document.querySelector('#animals');
    cardS.forEach((card) => {
      console.log(d);
      // const toggleDisplay = !card.classList.contains(selCat);
      // card.classList.toggle('d-none', toggleDisplay);
    });
    formCatSelected.selected = true;
  });
}
