import { init as navigationInit } from "../modules/navigation.js";

// Variables
let sectionActuelle = 0;

// Éléments HTML
const formulaire = document.querySelector("form#formulaire-livraison");
const sections = formulaire.querySelectorAll("section");
const sectionResume = formulaire.querySelector("[data-resume]");
const boutons = formulaire.querySelectorAll(".bouton[data-direction]");
const champsFormulaire = formulaire.querySelectorAll("[name]");

const champsSelect = formulaire.querySelector("[name='succursale']");
const champsRadioService = formulaire.querySelectorAll("[name='service']");

//Fonctions
function init() {
  formulaire.addEventListener("submit", onSubmit);

  champsFormulaire.forEach(function (champ) {
    modifierResume(champ);
    cacherErreur(champ);
    champ.addEventListener("change", onChangementChamp);

    if (champ.name == "en-magasin") {
      changementLivraison(champ);
    }

    if (champ.name == "date") {
      champ.min = dateAujourdhui();
    }
  });

  boutons.forEach(function (bouton) {
    bouton.addEventListener("click", onBoutonClic);
  });

  validerSection(sectionActuelle);
  afficherSection(sectionActuelle);
}

//=========================================================
// Soumission du formulaire et validation
function onSubmit(evenement) {
  evenement.preventDefault();

  if (formulaire.checkValidity() && sectionActuelle == sections.length - 1) {
    console.log("félicitations, le formulaire est valide");
    reinitialiserFormulaire();
    // formulaire.submit();
  }
}

function reinitialiserFormulaire() {
  formulaire.reset();
  sectionActuelle = 0;
  afficherSection(sectionActuelle);
  validerSection(sectionActuelle);
}

function changementLivraison(champ) {
  const estCoche = champ.checked;

  if (estCoche) {
    champsSelect.disabled = false;
    champsSelect.required = true;

    champsRadioService.forEach(function (champ) {
      champ.disabled = true;
      champ.required = false;
      champ.checked = false;
    });
  } else {
    champsSelect.disabled = true;
    champsSelect.required = false;
    champsSelect.value = "";

    champsRadioService.forEach(function (champ) {
      champ.disabled = false;
      champ.required = true;
    });
  }
}

function onChangementChamp(evenement) {
  const declencheur = evenement.currentTarget;

  if (declencheur.name == "en-magasin") {
    changementLivraison(declencheur);
  }

  if (validerNettoyerChamps(declencheur)) {
    cacherErreur(declencheur);
  } else {
    afficherErreur(declencheur);
  }

  modifierResume(declencheur);
  validerSection(sectionActuelle);
}

function validerSection(index) {
  const section = sections[index];
  const inputs = section.querySelectorAll("[name]");
  let validityTableau = [];

  inputs.forEach(function (input) {
    const estValide = input.checkValidity();
    console.log(estValide, input);
    validityTableau.push(estValide);
  });

  const sectionValide = validityTableau.includes(false) == false;
  const boutonSuivant = section.querySelector(".bouton[data-direction='1'");

  if (boutonSuivant !== null) {
    boutonSuivant.classList.toggle("inactif", sectionValide == false);
  }

  return sectionValide;
}

function validerNettoyerChamps(champ) {
  const name = champ.name;
  champ.value = champ.value.trim();

  if (name == "code-postal") {
    champ.value = champ.value
      .replace(/^([A-z][0-9][A-z])\s*([0-9][A-z][0-9])$/, "$1 $2")
      .toUpperCase();
  }
  if (name == "tel") {
    champ.value = champ.value
      .replace(
        /[1]?[\s\-\.]?\(?([0-9]{3})\)?[\s\-\.]?([0-9]{3})[\s\-\.]?([0-9]{4})/,
        "$1-$2-$3"
      )
      .toUpperCase();
  }

  if (champ.name == "succursale") {
    if (champ.value == "" && champ.required) {
      champ.setCustomValidity("Choisissez une succursale");
    } else {
      champ.setCustomValidity("");
    }
  }
  console.log(champ.checkValidity());

  return champ.checkValidity();
}

function afficherErreur(champ) {
  const erreur = champ.parentElement.querySelector(".erreur");

  if (erreur !== null) {
    erreur.classList.remove("invisible");
  }
}

function cacherErreur(champ) {
  const erreur = champ.parentElement.querySelector(".erreur");

  if (erreur !== null) {
    erreur.classList.add("invisible");
  }
}

function modifierResume(elementHTML) {
  const name = elementHTML.name;
  let value = elementHTML.value;
  const span = sectionResume.querySelector(`[data-name=${name}]`);

  if (span !== null) {
    if (name == "en-magasin") {
      if (elementHTML.checked) {
        value = "Oui";
      } else {
        value = "Non";
      }
    }

    span.textContent = value;
  } else {
    console.log(
      "Il n'y a pas de bloc de texte dans le champ résumé pour cet élément de formulaire"
    );
  }
}

function dateAujourdhui() {
  const date = new Date();
  const dateAujourdhui = date.toISOString().split("T")[0];
  return dateAujourdhui;
}

//=========================================================
// Affichage des sections
function afficherSection(index) {
  toutCacher();
  sections.forEach(function (section) {
    const page = parseInt(section.dataset.page);

    if (page == index) {
      section.classList.remove("invisible");
    } else {
      section.classList.add("invisible");
    }
  });
  console.log(sectionActuelle);
}

function toutCacher() {
  sections.forEach(function (section) {
    section.classList.add("invisible");
  });
}

function activerDate() {}

//=========================================================
// Navigation
function onBoutonClic(evenement) {
  const direction = parseInt(evenement.target.dataset.direction);

  if (direction === -1) {
    reculerSection();
  } else {
    avancerSection();
  }
}

function avancerSection() {
  if (sectionActuelle < sections.length - 1) {
    sectionActuelle++;
    afficherSection(sectionActuelle);
    validerSection(sectionActuelle);
  }
}

function reculerSection() {
  if (sectionActuelle > 0) {
    sectionActuelle--;
    afficherSection(sectionActuelle);
  }
}

// Exécution
init();
