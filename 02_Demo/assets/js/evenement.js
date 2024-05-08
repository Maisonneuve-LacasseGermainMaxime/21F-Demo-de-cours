let body = document.body;
let main = document.querySelector("main");
let h1 = document.querySelector("h1");
let liste = document.querySelector("ul");
const nbChancesMax = 2;
let nbChance = 0;

function init() {
  //   body.addEventListener("click", onClic, true);
  //   main.addEventListener("click", onClic, true);
  //   h1.addEventListener("click", onClic, true);
  //   body.addEventListener("click", onClic);
  //   main.addEventListener("click", onClic);
  //   h1.addEventListener("click", onClic);
  liste.addEventListener("click", onClicListe);
}

function onClicListe(evenement) {
  nbChance++;

  if (nbChance >= nbChancesMax) {
    finPartie();
    return;
  }
  console.log(nbChance);
  const target = evenement.target;
  const bouton = target.closest("[data-reponse]");

  if (bouton !== null) {
    const reponse = bouton.dataset.reponse;
    if (reponse == "4") {
      finPartie();
      alert("Félicitations");
    } else {
      bouton.classList.add("inactif");
    }
  }
}

function finPartie() {
  //Mettre message fin
  //   alert("Partie terminée");
  //Afficher la bonne réponse
  const boutons = document.querySelectorAll(".bouton");

  boutons.forEach(function (element) {
    if (element.dataset.reponse == "4") {
      element.classList.add("bonne-reponse");
    } else {
      element.classList.add("inactif");
    }
  });
  //Retirer l'écouteur d'événement
  liste.removeEventListener("click", onClicListe);
}
function onClic(evenement) {
  let attache = evenement.currentTarget;
  let declencheur = evenement.target;

  console.log(
    "click sur " + declencheur.tagName,
    "declencheur:",
    declencheur,
    "Élément HTML attaché au AddEventListener:",
    attache
  );
}

init();
