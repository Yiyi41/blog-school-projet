const btnLeft = document.getElementById("left");
// console.log(btnLeft);
const btnRight = document.getElementById("right");

const photos = document.getElementsByClassName("scroll-img");
// console.log(photos);

const nbPhotos = photos.length;
// console.log(nbPhotos);

let counter = 0;

const suivant = () => {
  photos[counter].classList.remove("active");
  if (counter < nbPhotos - 1) {
    counter++;
  } else {
    counter = 0;
  }
  photos[counter].classList.add("active");
  //   console.log(counter);
};

btnRight.addEventListener("click", suivant);

const precedent = () => {
  photos[counter].classList.remove("active");
  if (counter > 0) {
    counter--;
  } else {
    counter = nbPhotos - 1;
  }
  photos[counter].classList.add("active");
  //   console.log(counter);
};

btnLeft.addEventListener("click", precedent);
