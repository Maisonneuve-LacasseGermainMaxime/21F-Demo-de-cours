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

  // let sectionValidation = validerSection(sections[0]);
  // sections[0].classList.toggle("invalide", sectionValidation == false);
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
  console.log(declencheur.validity);
  if (name == "nom") {
    let nouvelleChaine = value.replace(/(\w\d\w)\s*(\d\w\d)/, `$1 $2`);
    declencheur.value = nouvelleChaine;
  }
  //Gestion des champs exceptions
  if (type == "checkbox") {
    if (name == "peut-choisir-date") {
      let estCoche = declencheur.checked;
      // Si actif, activer le champ date
      // Sinon, desactiver le champ date
      const date = formulaire.querySelector("[name='date']");
      date.disabled = estCoche == false;
      date.required = estCoche == true;
      date.classList.toggle(
        "invalid",
        date.required == true && date.checkValidity() == false
      );
    }
  } else if (name == "couleur-pref") {
    // Validation personnalisée
    if (value == "#000000") {
      declencheur.setCustomValidity(
        "Noir n'est pas une couleur, c'est un niveau de luminosité"
      );
      // declencheur.reportValidity();
    } else {
      declencheur.setCustomValidity("");
    }
  }

  const estValide = declencheur.checkValidity();
  // Validation de la section
  // Si le champs est valide
  // declencheur.classList.toggle("invalid", estValide==false)//Alternative au add et remove
  if (estValide) {
    declencheur.classList.remove("invalid");
    // - Modifier le résumé
  } else {
    // Si le champ est invalide, afficher les erreurs du champs
    declencheur.classList.add("invalid");
  }

  // Valider le reste de la section
  const section = declencheur.closest("section[data-page]");
  validerSection(section);
}

function validerChamp(champ) {
  // Affiche le message d'erreur du navigateur
  // Donne de la rétroaction en ajoutant ou enlevant une classe CSS invalide
  // Si valide, vérifie la section
  //Retourne si le champ est valide
}

function validerSection(section) {
  //Trouve les champs de la section
  const champs = section.querySelectorAll("[name]");

  let sectionValide = false;
  //On vérifie chacun des champs et sa validité
  for (let i = 0; i < champs.length; i++) {
    let element = champs[i];
    let champValide = element.checkValidity();

    if (champValide == false) {
      sectionValide = false;
      break;
    } else {
      sectionValide = true;
    }
  }

  //Affiche de la retroaction a l'utilisateur
  section.classList.toggle("invalid", sectionValide == false);
  console.log(sectionValide);
  return sectionValide;
}

function validerFormulaire() {}

function validerCouleur(champ) {
  //Tomato = #FF6347;
}

function activerDate(dateActive = false) {}

// Exécution
init();
