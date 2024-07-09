// Révision
// ==== Révision des boucles
// Récupérer tous les éléments avec la classe bouton et afficher chaque élément dans la console à l'aide d'une boucle for et d'une boucle forEach

// ==== Révision des chaines de caractères
let chaine = " Bonjour, je suis une chaine de caracteres   ";
// Créer une fonction qui prend en paramètre une chaine de caractères et qui retourne la chaine de caractères inversée
// Créer une fonction qui prend en paramètre une chaine de caractères et qui retourne la chaine de caractères avec la première lettre de chaque mot en majuscule
// Créer une fonction qui prend en paramètre une chaine de caractères et qui retourne la chaine de caractères sans les voyelles
// Créer une fonction qui prend en paramètre une chaine de caractères et qui remplace les voyelles par un tiret

// ==== Révision des tableaux
let tableauAnimauxTerrestres = [
    "chien",
    "chat",
    "souris",
    "lapin",
    "cheval",
    "vache",
    "souris",
    "mouton",
    "cochon",
    "souris",
    "poule",
    "canard",
];

let tableauAnimauxMarins = [
    "requin",
    "dauphin",
    "crabe",
    "baleine",
    "méduse",
    "poisson",
    "poulpe",
    "pieuvre",
    "moule",
    "Crabe",
    "esturgeon",
    "étoile de mer",
    "hippocampe",
    "crabe",
];
// Retirer et ajouter un élément au milieu du tableau
// Fusionner les deux tableaux

// Créer une fonction qui prend en paramètre le tableau et qui retourne un tableau avec les éléments commençant par "re" ou "po"
// Créer une fonction qui prend en paramètre le tableau et qui retourne un tableau avec les éléments triés par ordre alphabétique incluant les accents
// Créer une fonction qui prend en paramètre le tableau et qui retourne un tableau sans les doublons
// Créer une fonction qui trie les éléments selon la longueur des mots

// ==== Révision des objets
let etudiants = [
    {
        id: 1,
        nom: "Pigeon",
        prenom: "Maxime",
        age: 25,
        resultats: [75, 80, 85, 70, 90],
    },
    {
        id: 2,
        nom: "Lacasse",
        prenom: "Maxime",
        age: 40,
        resultats: [60, 72, 78, 65, 80],
    },
    {
        id: 3,
        nom: "Chartier",
        prenom: "Marc-André",
        age: 22,
        resultats: [67, 72, 96, 76, 80],
    },
    {
        id: 4,
        nom: "Harvey",
        prenom: "Guillaume",
        age: 43,
        resultats: [100, 45, 78, 65, 80],
    },
    {
        id: 5,
        nom: "Pouliot",
        prenom: "Stéphanie",
        age: 35,
        resultats: [96, 84, 76, 65, 100],
    },
    {
        id: 6,
        nom: "Côté-Bouchard",
        prenom: "Simon",
        age: 30,
        resultats: [67, 89, 54, 99, 10],
    },
];
// Créer une fonction qui prend en paramètre un objet étudiant et qui retourne la moyenne des résultats d'un étudiant
// Créer une fonction qui prend en paramètre un tableau d'étudiants et qui retourne les deux plus jeunes étudiants
// Créer une fonction qui trie les étudiants par ordre alphabétique et qui retourne le tableau trié
// Créer une fonction qui cherche un étudiant par son id et qui retourne l'étudiant trouvé

// ==== Révision des événements
// Gabarit HTML pour afficher un étudiant
// `<div class="etudiant" id="">
//     <p>Nom: <span class="nom"></span></p>
//     <p>Prénom: <span class="prenom"></span></p>
//     <p>Âge: <span class="age"></span></p>
// </div>`;

// Créer une fonction qui affiche la liste des étudiants dans un conteneur HTML
// Appeler la fonction pour afficher la liste des étudiants au chargement de la page
// Au clic d'une div étudiant, afficher les résultats et la moyenne de l'étudiant dans la console
// Au clic du bouton, supprimer le dernier étudiant de la liste et afficher la nouvelle liste
