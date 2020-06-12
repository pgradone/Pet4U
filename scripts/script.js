// -- work with animalsArray

// generate a “card columns” layout <-- refer to <figure> tag inside the #animals
// Ref: code adapted from my Actors Agency project
// Loop through Animals List
// define parent cards container of Animals
const cardGrid = document.querySelector("#animals");
// define mock Card to clone
const mockCard = cardGrid.querySelector("figure");
// define the animal's select block where to append the animals' options
const animalSelect = document.querySelector("#select-animal");
// the element to duplicate is the first option of the select.
const mockAnimalOption = animalSelect.querySelector("option");
// populate the generated cards with the picture and the name of the animal.
animalsArray.forEach((animal) => {
  // Create a variable "newCard" and append it to the #animals <article>
  const newCard = mockCard.cloneNode(true);
  cardGrid.append(newCard);
  // In this variable, find the <figcaption> and change the text of the html element with the property value "actor.name"
  newCard.querySelector("figcaption").textContent = animal.name;
  // In this newCard, find the img and change its "src" attribute value.
  newCard.querySelector("img").src = animal.picture;
  // Add the animal "type" as a class : this step may be useful for the filtering later on.
  newCard.classList.add(animal.type);
  // 6. Remove the class "d-none" to make this duplicated card visible.
  //   newCard.classList.remove("d-none");
  // clone the animal option and append it to the <select>
  const newAnimalOption = mockAnimalOption.cloneNode(true);
  animalSelect.append(newAnimalOption);
  newAnimalOption.value = animal.name;
  newAnimalOption.innerHTML = animal.name;
  newAnimalOption.removeAttribute("id");
});
mockCard.remove();
mockAnimalOption.remove;

// test form submission
document.querySelector("form").addEventListener("submit", function (ev) {
  ev.preventDefault;
  const animalSelected = document.querySelector("#select-animal");
  // test for selected animal
  if (animalSelected.value.length == 0) {
    animalSelected.classList.add("border-alert");
  }
  const reasonText = document.querySelector("#reasontxt");
  // test for Reason text
  if (reasonText.value.length < 40) {
    reasonText.classList.add("border-alert");
  }
  // test for email text
  const emailInput = document.querySelector("#emailinput");
  if (emailInput.value.length == 0) {
    emailInput.classList.add("border-alert");
  }
});

// reset border to normal if field clicked
const animalSel = document.querySelector("#select-animal");
animalSel.addEventListener("click", function () {
  animalSel.classList.remove("border-alert");
});

// reset border to normal if field entered after key release
const reasonTxt = document.querySelector("#reasontxt");
reasonTxt.addEventListener("keyup", function () {
  reasonTxt.classList.remove("border-alert");
});

const emailInput = document.querySelector("#emailinput");
emailInput.addEventListener("keyup", function () {
  emailInput.classList.remove("border-alert");
});
