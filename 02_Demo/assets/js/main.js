// Variables
let formulaireValide = false;
const donnees = {};

// Éléments HTML
const formulaire = document.querySelector("#formulaire-principal");
const champs = formulaire.querySelectorAll("input, textarea,select");
const sections = formulaire.querySelectorAll("section[data-page]");

//Fonctions
function init() {
  formulaire.addEventListener("submit", onSubmit);

  champs.forEach(function (element) {
    element.addEventListener("change", onChangementChamp);
  });
  let sectionValidation = validerSection(sections[0]);
  sections[0].classList.toggle("invalide", sectionValidation == false);
}

function onSubmit(evenement) {
  evenement.preventDefault();

  if (formulaireValide) {
    // formulaire.submit();
    // formulaire.reset();
  }
}

function onChangementChamp(evenement) {
  const declencheur = evenement.currentTarget;
  const type = declencheur.type;
  const name = declencheur.name;
  const value = declencheur.value;

  //Gestion des champs exceptions
  if ((type = "checkbox")) {
    if ((name = "peut-choisir-date")) {
      // Si actif, activer le champ date
      // Sinon, desactiver le champ date
    }
  } else if ((name = "couleur-pref")) {
    // Validation personnalisée
  }

  // Validation de la section
  // Si le champs est valide
  // - Modifier le résumé
  // - Valider le reste de la section
  // Si le champ est invalide, afficher les erreurs du champs
}

function validerChamp(champ) {
  // Affiche le message d'erreur du navigateur
  // Donne de la rétroaction en ajoutant ou enlevant une classe CSS invalide
  // Si valide, vérifie la section
  //Retourne si le champ est valide
}

function validerSection(section) {
  //Trouve les champs de la section
  //
}

function validerFormulaire() {}

function validerCouleur(champ) {
  //Tomato = #FF6347;
}

function activerDate(dateActive = false) {}

// Exécution
init();
