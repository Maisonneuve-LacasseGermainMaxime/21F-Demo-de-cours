// Variables
let sectionActuelle = 0;
let formulaireValide = false;
const donnees = {};

// Éléments HTML
const formulaire = document.querySelector("#formulaire-principal");
const sectionResume = document.querySelector(".resume");

//Fonctions
function init() {
  formulaire.addEventListener("submit", onSubmit);
}

function onSubmit(evenement) {
  evenement.preventDefault();

  if (formulaireValide) {
    // formulaire.submit();
    // formulaire.reset();
  }
}

function onChangementChamp(evenement) {}

function afficherResume(nomChamp, valeur) {}

// Exécution
init();
