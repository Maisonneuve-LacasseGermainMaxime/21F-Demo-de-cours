# Apprendre JavaScript - La structure d'un script

Il est important de bien structurer son code pour le rendre lisible et facile à maintenir. Dans cette leçon, nous allons voir comment structurer un script JavaScript, et comment organiser son code.

## Structure d'un script

Un script JavaScript est un fichier texte qui contient du code JavaScript. Il est exécuté par le navigateur web, qui interprète le code et l'exécute. Il est exécuté dans l'ordre dans lequel il est écrit, de haut en bas.

Un script peut contenir plusieurs types de code :

-   Des déclarations de variables
-   Des déclarations de fonctions
-   Des appels de fonctions
-   Des instructions conditionnelles
-   Des boucles
-   Des événements

Il est important de bien organiser son code pour le rendre lisible et facile à maintenir. Pour cela, on peut utiliser des commentaires pour expliquer le code, et des espaces pour aérer le code. On évite de mettre trop de code dans un seul bloc. C'est mieux de diviser en plus petites fonctions.

## Organiser son code

On place toujours dans l'ordre :

1.  Les déclarations de variables
2.  Sélectionner les éléments HTML
3.  Les écouteurs d'événements
4.  Les déclarations de fonctions
5.  Les appels de fonctions ou l'exécution du code

Ex:

```javascript
// Déclarations de variables. Ces variables sont globales, elles sont accessibles partout dans le script
let prenom = "Jean";
let nom = "Dupont";

// Sélectionner les éléments HTML. On les sélectionne une seule fois, au chargement de la page. On les stocke dans des variables pour pouvoir les réutiliser plus tard. Ces variables sont globales, elles sont accessibles partout dans le script
let monBouton = document.querySelector("button");

function initialiser() {
    // Les écouteurs d'événements
    monBouton.addEventListener("click", direBonjour);

    //*** Autres fonctions à déclencher au chargement de la page
}

// Déclarations de fonctions
function direBonjour(prenom, nom) {
    console.log(`Bonjour ${prenom} ${nom}`);
}

// Appels de fonctions ou exécution du code
initialiser();
```

## Commentaires dans le code et avant les fonctions

Il est important de commenter son code pour expliquer ce qu'il fait. On peut mettre des commentaires sur une seule ligne avec `//`, ou sur plusieurs lignes avec `/*` et `*/`.

Chaque fonction doit aussi être précédée d'un commentaire qui explique ce qu'elle fait, quels sont ses paramètres, et ce qu'elle retourne. Cela permet d'ajouter la documentation lorsqu'on survole la fonction dans un éditeur de code, et de comprendre ce que fait la fonction sans avoir à lire son code.

```javascript
/**
 * Affiche un message de bienvenue
 * @param {string} prenom - Le prénom de la personne à saluer
 * @param {string} nom - Le nom de la personne à saluer
 * @returns {void} - Ne retourne rien
 */
function direBonjour(prenom, nom) {
    console.log(`Bonjour ${prenom} ${nom}`);
}
```
