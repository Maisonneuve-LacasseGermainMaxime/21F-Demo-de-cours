// Variables
const villes = [
    "Paris",
    "Marseille",
    "Lyon",
    "Toulouse",
    "Nice",
    "Nantes",
    "Montpellier",
    "Strasbourg",
    "Bordeaux",
    "Lille",
];

let isFullScreen = false;
let fullscreenEvent;

// Éléments HTML
const formulaire = document.querySelector("#formulaire-principal");
const inputVilles = formulaire.querySelector("[name='input-villes']");
const panneauListeVilles = formulaire.querySelector(".liste-villes");
const boutonPleinEcran = document.querySelector(".fullscreen-btn");
const messagePleinEcran = document.querySelector(".fullscreen-message");

//Fonctions
function init() {}

function onSubmit(evenement) {
    evenement.preventDefault();
}

function onWindowClick(evenement) {}

function onFocus(evenement) {}

function onKeyUp(evenement) {}

function filtrerVilles(valeur) {}

function afficherVilles(villes) {}

function onFullScreen(evenement) {}

function quitterPleinEcran(evenement) {}
//Exécution
init();
