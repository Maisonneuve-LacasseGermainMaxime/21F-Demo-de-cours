// Variables
const chaussures = {
    modeleChaussure: "Nike",
    pointure: 8.5,
    couleurs: ["rouge", "vert", "or"],
    estVendu: true,
    afficherMessage: function () {
        console.log(chaussures.modele);
    },
};
//Accéder avec la notation par point
// console.log(chaussures.pointure);
// const cle = "pointure";
// console.log(chaussures["pointure"]);
// chaussures.pointure = 10; //Modifie une propriété existante
// chaussures.quantite = 90; //Ajoute une nouvelle propriété
// console.log(chaussures);
// delete chaussures.quantite; //On supprime une propriété et sa valeur

// const proprietesChaussures = Object.keys(chaussures); //Retourne un tableau avec toutes les clés
// const valeursChaussures = Object.values(chaussures);
// console.log(proprietesChaussures, valeursChaussures);

// for (let i = 0; i < proprietesChaussures.length; i++) {
//   const propriete = proprietesChaussures[i];
//   const valeur = chaussures[propriete];
//   //debugger;
// }

//window = browser window, fenetre navigateur
//document = Page HTML
// Math
// console.dir(window);
const tableauNombres = ["djfhsdjkf", 34, true, "sjdkhf", 4, false, 1];
//Récupérer un entier aléatoire
const indexAleatoire = Math.floor(Math.random() * tableauNombres.length);
// console.log(tableauNombres[indexAleatoire]);

const objetTest = {
    "artiste super": "Massive Attack",
    album: "Mezzanine",
    prix: 15,
    annee: 1998,
    genre: "rock",
    enStock: false,
    src: "assets/img/albums/mezzanine.webp",
};
//objetTest["artiste super"]

const albums = [
    {
        id: 1,
        artiste: "The Beatles",
        album: "Abbey Road",
        prix: 20,
        annee: 1969,
        genre: "rock",
        enStock: true,
    },
    {
        id: 2,
        artiste: "Nirvana",
        album: "Nevermind",
        prix: 100,
        annee: 1991,
        genre: "rock",
        enStock: true,
    },
    {
        id: 3,
        artiste: "Pink Floyd",
        album: "The Dark Side of the Moon",
        prix: 30,
        annee: 1973,
        genre: "rock",
        enStock: true,
    },
    {
        id: 4,
        artiste: "The Rolling Stones",
        album: "Aftermath",
        prix: 10,
        annee: 1966,
        genre: "rock",
        enStock: true,
    },
    {
        id: 5,
        artiste: "The Doors",
        album: "The Doors",
        prix: 5,
        annee: 1967,
        genre: "rock",
        enStock: false,
    },
    {
        id: 6,
        artiste: "Janis Joplin",
        album: "Pearl",
        prix: 20,
        annee: 1971,
        genre: "rock",
        enStock: false,
    },
    {
        id: 7,
        artiste: "Massive Attack",
        album: "Mezzanine",
        prix: 15,
        annee: 1998,
        genre: "rock",
        enStock: false,
    },
    {
        id: 8,
        artiste: "The Beatles",
        album: "Sgt. Pepper's Lonely Hearts Club Band",
        prix: 25,
        annee: 1967,
        genre: "rock",
        enStock: true,
    },
    {
        id: 9,
        artiste: "Massive Attack",
        album: "Blue Lines",
        prix: 15,
        annee: 1991,
        genre: "rock",
        enStock: false,
    },
];

//==== Éléments HTML
const listeAlbumsHTML = document.querySelector(".liste-albums");
const artisteSelection = document.querySelector(".artiste-selection");
const liens = [
    {
        url: "index.html",
        texte: "Accueil",
    },
    {
        url: "contact.html",
        texte: "Page contact",
    },
];
//Créer une fonction qui boucle dans la liste et qui retourne le nom de chaque artiste dans la console.

function afficherArtiste() {
    //Boucler dans la liste
    for (let i = 0; i < albums.length; i++) {
        const album = albums[i];
        //Récupérer le nom de chaque artiste
        const id = album.id;
        const artiste = album.artiste;
        const prix = album.prix;
        //Afficher dans la console
        // console.log(artiste);
        const template = `
      <div class="album" id="${id}">
        <h2>${artiste}</h2>
        <p>Prix: ${prix}$</p>
      </div> 
      `;

        listeAlbumsHTML.insertAdjacentHTML("beforeend", template);
        const dernierElement = listeAlbumsHTML.lastElementChild;
        dernierElement.addEventListener("click", onClicBoite);
    }
}

function onClicBoite(evenement) {
    const declencheur = evenement.currentTarget;
    declencheur.style.backgroundColor = "green";
    const id = declencheur.id;
    const albumClic = trouverAlbum(id);
    //Changer tous les éléments que je voudrais afficher
    artisteSelection.textContent = albumClic.artiste;
}

function trouverAlbum(id) {
    let albumTrouve;
    albums.forEach(function (element) {
        if (element.id === parseInt(id)) {
            albumTrouve = element;
        }
    });

    return albumTrouve;
}

afficherArtiste();

// Accéder à une propriété avec la notation pointée
// Accéder à la propriété  avec la notation par crochet
// Afficher les propriétés de l'objet dans la console
// Boucler sur un tableau d'objets
// Utiliser un tableau d'objets pour créer du HTML

// Boucler sur les clés et les valeurs d'un objet

// Modifier et supprimer les propriétés d'un objet
// Objet prédéfinis Window, Document, Math, ElementHTML,

// Créer une fonction qui retourne un album au hasard

// Créer une fonction qui cherche et retourne un album par nom d'album

// Créer une fonction qui filtre les albums en stock

// Créer une fonction qui trie les albums par prix croissant

// Créer une fonction qui cherche et retourne tous les albums d'un artiste
