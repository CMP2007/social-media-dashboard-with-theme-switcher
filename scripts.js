//All elements and classes are grouped so they can be used in a later cycle.
const body = document.body;
const switchItems = document.querySelectorAll(".switch, .switch > *");
const darkBigText = document.querySelectorAll(".tittle, .itemNumber, .Item2Number, h3, .aText");
const darkSmallText = document.querySelectorAll(".headerText, .itemText, .itemFollowers, .item2TExt, .attributionText")
const secItems = document.querySelectorAll(".sec1Item, .sec2Item");

const darkItems = [darkBigText, darkSmallText, secItems];
const darkStyles = [`DarkBigText`, `DarkSmallText`, `DarkCard`];


//The following function is responsible for validating whether the switch is active or not and sends the corresponding parameter while modifying the color of the simplest elements.
function validateSwitch() {
  if (!switchItems[1].checked) {
    chageColors("add");
    body.classList.add("DarkBody");
    switchItems[0].classList.add("DarkSwitch")
  } else {
    chageColors("remove");
    body.classList.remove("DarkBody");
    switchItems[0].classList.remove("DarkSwitch")
  }
}


//This function consists of a first for loop, which is used to alternate the value of the element to which the second forEach loop will be applied and the value of the property of the classList object.
function chageColors(action) {
  for (let cont = 0; cont < darkItems.length; cont++) {
    const element = darkItems[cont];
    element.forEach(item =>{
      item.classList[action](darkStyles[cont]);
    });
  };
}  


switchItems[1].addEventListener('change', () => {
    validateSwitch();
  });