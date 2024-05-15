import Carrousel from "../classes/Carrousel/Carrousel.js";
import albums from "../donnees/albums.js";

const titre = document.querySelector("h1");
const question = document.querySelector("section.question");
const carrouselConteneur = document.querySelector(
  "section.carrousel-conteneur"
);

let carrousel = new Carrousel(
  document.querySelector(".carrousel-conteneur"),
  albums,
  3000
);
// let h1 = document.querySelector("h1");

// h1.addEventListener("click", function () {
//   h1.classList.toggle("titre-anim");
// });

//SetTimeout permet de déclencher une fonction avec un délai
// window.setTimeout(function () {
//   console.log("patate");
// }, 2000);

// let compteur = 0;

// let interval = setInterval(function () {
//   compteur++;
//   if (compteur >= 4) {
//     clearInterval(interval);
//   }

//   console.log("patate à l'infini");
// }, 2000);

//Ajouter un délai avec le carrousel
//Ajouter animation au clic du bouton
//Modifier CSS
titre.addEventListener("animationend", finAnimTitre);

function finAnimTitre() {
  console.log("fin animation");

  question.classList.remove("invisible");
  question.classList.add("animTitreFadeIn");

  carrouselConteneur.classList.remove("invisible");
  carrouselConteneur.classList.add("animTitreFadeIn");

  titre.removeEventListener("animationend", finAnimTitre);
  titre.classList.remove("animTitreFadeIn");
  console.log("retrait ecouteur evenement");

  const animation = titre.animate(
    [
      {
        transform: "scale(1)",
      },
      {
        transform: "scale(1.5)",
      },
    ],
    {
      duration: 3000,
      iterations: 4,
      direction: "alternate",
    }
  );

  animation.addEventListener("finish", function () {
    titre.style.color = "blue";
  });
}

document.addEventListener("click", function () {
  titre.classList.add("animTitreFadeIn");
});

titre.classList.remove("invisible");
titre.classList.add("animTitreFadeIn");
// Ajouter une animation de fondu au titre
//Lorsque l'animation est terminée,
//  // Retirer la classe avec l'animation
//  // Retirer l'écouteur événement
//  // Afficher le reste de la page
