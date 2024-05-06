import tableauNavigation from "../donnees/tableauNavigation.js";

// ====== Variables HTML ======
const conteneurNav = document.querySelector("header nav .nav__liste");
export default conteneurNav;
// ====== Fonctions ======
/**
 * Fonction pour initialiser la navigation
 * @returns {void}
 */
export function init() {
  tableauNavigation.forEach(function (lien) {
    creerElementLien(lien);
  });
}

/**
 * Fonction pour vérifier si une page est active
 * @param {string} urlAVerifier
 * @returns {boolean} Vrai si la page est active, faux autrement
 */
function verifierSiPageActive(urlAVerifier) {
  // On récupère l'url de la page
  const url = document.documentURI;
  // On divise l'url en tableau avec chaque /
  let tableauUrl = url.split("/");
  //On récupère la partie après le domaine
  let page = tableauUrl.pop();

  // On se donne une condition si la page est l'accueil
  if (page === "") {
    page = "index.html";
  }

  //On retourne un booléen
  return urlAVerifier === page;
}

/**
 * Fonction pour créer un élément de lien
 * Une fois créé, l'élément est ajouté au conteneur de navigation
 * Si la page est active, l'élément de lien reçoit la classe "actif"
 * @param {Object} objetLien
 * @returns {void}
 */
export function creerElementLien(objetLien) {
  // On crée un élément de lien
  const lien = `<li><a href="${objetLien.lien}">${objetLien.titre}</a></li>`;
  conteneurNav.insertAdjacentHTML("beforeend", lien);

  // On récupère le dernier élément ajouté
  const lienAjoute = conteneurNav.lastElementChild;

  // On vérifie si la page est active, on stocke une valeur booléenne dans la variable estPageActive
  const estPageActive = verifierSiPageActive(objetLien.lien);

  // On ajoute le style si la page est active
  if (estPageActive) {
    lienAjoute.querySelector("a").classList.add("actif");
  } else {
    lienAjoute.querySelector("a").classList.remove("actif");
  }
}

// ====== Exécution ======

// Initialisation de la navigation
// init();
