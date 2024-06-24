/**************************************** Items ******************************************************/
const body = document.body;
const switchItems = document.querySelectorAll(".switch > *");
const darkBigText = document.querySelectorAll(".tittle, .itemNumber, .Item2Number, h3");
const darkSmallText = document.querySelectorAll(".headerText, .itemText, .itemFollowers, .item2TExt")
const secItems = document.querySelectorAll(".sec1Item, .sec2Item");



function DarkCard() {
  if (switchItems[0].checked) {
    secItems.forEach(elemento => {
        elemento.classList.add("DarkCard");
    });
    console.log('Checkbox seleccionado');
  } else {
    secItems.forEach(elemento => {
        elemento.classList.remove("DarkCard");
    });
    console.log('Checkbox deseleccionado');
  }
}


function addDarkBigText() {
  if (switchItems[0].checked) {
    darkBigText.forEach(elemento => {
        elemento.classList.add("DarkBigText");
    });
  } else {
    darkBigText.forEach(elemento => {
        elemento.classList.remove("DarkBigText");
    });
  }
}



function addDarkSmallText() {
    if (switchItems[0].checked) {
      darkSmallText.forEach(elemento => {
          elemento.classList.add("DarkSmallText");
      });
    } else {
      darkSmallText.forEach(elemento => {
          elemento.classList.remove("DarkSmallText");
      });
    }
  }
  
  
function darkBody() {
    if (switchItems[0].checked) {
       body.classList.add("DarkBody");
      } else {
        body.classList.remove("DarkBody");
    }
}




switchItems[0].addEventListener('change', () => {
    DarkCard();
    addDarkSmallText();
    addDarkBigText();
    darkBody();
  });