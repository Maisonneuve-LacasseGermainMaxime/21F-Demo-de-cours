// Variables
let sectionActuelle = 0;
let formulaireValide = false;
const donnees = {};

// Éléments HTML
const formulaire = document.querySelector("#formulaire-principal");
const champs = formulaire.querySelectorAll("input, textarea,select");
// const champsAvecName = formulaire.querySelectorAll("[name]");
const sectionResume = document.querySelector(".resume");
const checkbox = formulaire.querySelector("[type='checkbox']");
const hidden = formulaire.querySelector("[type='hidden']");
const select = formulaire.querySelector("select");
const date = formulaire.querySelector("[type='date']");
//Fonctions
function init() {
  formulaire.addEventListener("submit", onSubmit);

  champs.forEach(function (element) {
    element.addEventListener("change", onChangementChamp);
  });
  //Cocher ou décocher une b
  checkbox.checked = false;
  hidden.value = "Patate";
  console.log(hidden);

  select.value = "2";
  console.log(select.value);
  // let dateAujourdhui = new Date.now();
  //Source: https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd
  date.min = getDate();
  date.max = getDate(13);
}

function getDate(decallage = 0) {
  let aujourdhui = new Date();

  //On récupère l'année, le mois et le jour formattés correctement
  let annee = aujourdhui.getFullYear(); //Retourne l'année avec 4 caractères. Ex: 2024
  let mois = (aujourdhui.getMonth() + 1).toString().padStart(2, "0"); //Si le mois est 3, on affiche "03"
  let jour = (aujourdhui.getDate() + decallage).toString().padStart(2, "0"); //Si le jour est 3, on affiche "03"

  //On retourne une chaine séparée par des tirets
  // return `${annee}-${mois}-${jour}`;
  return [annee, mois, jour].join("-");
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

  //TODO: exception pour les checkbox
  if (type == "checkbox") {
    let estCoche = declencheur.checked;
    let valeurCheckbox = estCoche == true ? "OUI" : "NON";
    //L'opérateur ternaire au-dessus remplace l'équivalent d'un if/else
    // if (estCoche == true) {
    //   valeurCheckbox = "OUI";
    // } else {
    //   valeurCheckbox = "NON";
    // }

    afficherResume(name, valeurCheckbox);
  } else {
    afficherResume(name, value);
  }
}

function afficherResume(nomChamp, valeur) {
  const champ = sectionResume.querySelector(`[data-name="${nomChamp}"]`);
  console.log(champ);
  //Vérifier si non null
  if (champ !== null) {
    champ.textContent = valeur;
  }
}

// Exécution
init();
