import conteneurNav, { init as navigationInit } from "../modules/navigation.js";
import Modale from "../classes/Modale.js";
import albums from "../donnees/albums.js";

let panierAchat = [];
// ====== Variables HTML ======
const boutonsFiltres = document.querySelectorAll(".filtre");
const boutonsTris = document.querySelectorAll(".tri");
const conteneurListe = document.querySelector(".grille-produits");

const detailHTML = document.querySelector(".detail");
const detailImg = detailHTML.querySelector(".detail__img");
const detailArtiste = detailHTML.querySelector(".detail__artiste");
const detailAlbum = detailHTML.querySelector(".detail__album");
const detailAnnee = detailHTML.querySelector(".detail__annee");
const detailPrix = detailHTML.querySelector(".detail__prix");
const detailStock = detailHTML.querySelector(".detail__enStock");
const detailGenre = detailHTML.querySelector(".detail__genre");

// ====== Fonctions ======
/**
 * Fonction pour initialiser la page
 */
function init() {
  const modale1 = new Modale("Boite 1", "Message 1");
  // const modale2 = new Modale("Boite 2", "Message 2");
  console.log(modale1);

  // On récupère le panier d'achat dans le local storage
  const panierString = localStorage.getItem("panierAchat");
  // Si le panier est déjà dans le local storage, on le récupère
  // Sinon, on initialise un tableau vide
  // (dans le cas où c'est la première fois qu'on visite le site)
  if (panierString !== null) {
    // On convertit la chaine de caractères en tableau
    panierAchat = JSON.parse(panierString);
  }

  boutonsTris.forEach(function (tri) {
    tri.addEventListener("click", trier);
  });
  boutonsFiltres.forEach(function (filtre) {
    filtre.addEventListener("click", filtrer);
  });

  afficherListe(albums);

  //Affiche un album différent au chargement de la page
  const albumAleatoire = Math.floor(Math.random() * albums.length);
  afficherDetails(albums[albumAleatoire]);

  navigationInit();
}

/**
 * Fonction pour afficher la liste des albums
 * @param {Array} listeAlbums
 */
function afficherListe(listeAlbums) {
  conteneurListe.innerHTML = "";

  listeAlbums.forEach(function (album) {
    let itemListe = `
        <div class="produit" id=${album.id}>
            <img class="produit__img" src="${getNomImage(
              album.album
            )}" alt="" />
            <h2 class="produit__groupe">${album.artiste}</h2>
            <h3 class="produit__album">${album.album}</h3>
            <p class="produit__prix">${album.prix} $</p>
            <div class="bouton">Ajouter au panier</div>
        </div>`;

    conteneurListe.insertAdjacentHTML("beforeend", itemListe);
    const elementAjoute = conteneurListe.lastElementChild;
    const bouton = elementAjoute.querySelector(".bouton");

    //Ajoute un écouteur d'événement pour ajouter un album au panier
    bouton.addEventListener("click", function () {
      //On ajoute l'album au panier
      panierAchat.push(album);
      //On convertit le tableau en chaine de caractères pour l'enregistrement
      let panierString = JSON.stringify(panierAchat);
      //On enregistre le panier dans le local storage
      localStorage.setItem("panierAchat", panierString);
    });
    elementAjoute.addEventListener("click", onClicElementListe);
  });
}

/**
 * Fonction qui récupère le nom de l'image d'un album
 * @param {String} album
 * @returns {String} le nom de l'image formaté
 */
function getNomImage(album) {
  let nom = album.trim().toLowerCase().replaceAll(" ", "_");
  let chemin = `assets/img/albums/${nom}.webp`;

  return chemin;
}

/**
 * Fonction pour afficher les détails d'un album
 * @param {Object} l'album à afficher
 */
function afficherDetails(album) {
  const chemin = getNomImage(album.album);
  detailImg.src = chemin;
  detailArtiste.textContent = album.artiste;
  detailAlbum.textContent = album.album;
  detailAnnee.textContent = album.annee;
  detailPrix.textContent = `${album.prix} $`;
  detailStock.textContent = album.enStock ? "En stock" : "En rupture de stock";
  detailGenre.textContent = album.genre;
}

/**
 * Fonction captée au clic
 * @param {Event} evenement
 */
function onClicElementListe(evenement) {
  const declencheur = evenement.currentTarget;
  const id = declencheur.id;

  const albumSelectionne = albums.find((album) => album.id == id);
  afficherDetails(albumSelectionne);
}

/**
 * Fonction pour trier la liste des albums
 * @param {Event} evenement
 */

function trier(evenement) {
  const copie = [...albums];
  const boutonTriDeclencheur = evenement.currentTarget;
  const id = boutonTriDeclencheur.id;

  copie.sort((albumA, albumB) => {
    if (id === "tri-artiste") {
      return albumA.artiste.localeCompare(albumB.artiste);
    } else if (id === "tri-album") {
      return albumA.album.localeCompare(albumB.album);
    } else if (id === "tri-annee") {
      if (albumA.annee > albumB.annee) {
        return -1;
      } else if (albumA.annee < albumB.annee) {
        return 1;
      } else {
        return 0;
      }
    } else if (id === "tri-prix") {
      if (albumA.prix < albumB.prix) {
        return -1;
      } else if (albumA.prix > albumB.prix) {
        return 1;
      } else {
        return 0;
      }
    }
  });

  //On affiche la liste triée
  afficherListe(copie);
}

/**
 * Fonction pour filtrer la liste des albums
 * @param {Event} evenement
 */
function filtrer(evenement) {
  let tableauFiltre = [];
  const boutonFiltreDeclencheur = evenement.currentTarget;
  const id = boutonFiltreDeclencheur.id;

  if (id === "filtre-rabais-20") {
    albums.forEach(function (album) {
      if (album.prix < 20) {
        tableauFiltre.push(album);
      }
    });
  }

  //On affiche la liste filtrée
  afficherListe(tableauFiltre);
}

// ====== Exécution ======
// Initialisation de la page
init();
