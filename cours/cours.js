// POP UP CONNEXION

// get elements
const btnConnexion = document.getElementById("connecter");

const popUpBackground = document.getElementById("background");

const btnClosePopUp = document.getElementById("btnClose");

btnConnexion.onclick = () => {
  popUpBackground.style.display = "block";
};

btnClosePopUp.onclick = () => {
  popUpBackground.style.display = "none";
};

// code below doesn't word, but i do not know yet why
// window.onclick = (e) => {
//   if (e.target == popUpContainer) {
//     popUpContainer.style.display = "none";
//   }
// };

// COURS SÉLECTIONÉS
// get cours card for click
const coursCards = document.querySelectorAll("div.card");
// get the span of counter setted in html
const spanCounter = document.getElementById("counter");
// get btnDiscover for diplay none if a cours was chosen or not
const btnDiscover = document.getElementById("btnDiscover");
// get print message for diplay none if a cours was chosen or not
const messageCounterCours = document.getElementById("counter-message-print");

let counter = 0;
// toggle for selecting or disselecting cours
coursCards.forEach((element) => {
  element.onclick = () => {
    element.classList.toggle("selected");
    if (element.classList.contains("selected")) {
      counter++;
    }

    if (!element.classList.contains("selected")) {
      counter--;
    }

    // print dynamically counter
    spanCounter.textContent = counter;
    // switch display of btn and print message
    if (counter > 0) {
      btnDiscover.style.display = "none";
      messageCounterCours.style.display = "block";
    } else if (counter === 0) {
      btnDiscover.style.display = "block";
      messageCounterCours.style.display = "none";
    }
  };
});

// SCROLL DOWN CHEVRON FOR SEEING MORE
const scrollDown = document.getElementById("scroll-down-chevron");
console.log(scrollDown);
