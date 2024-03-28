# Apprendre JavaScript - Filtrer et trier des tableaux d'objets

## Introduction

Les bases de données sont souvent utilisées pour stocker des données. Les données sont souvent stockées dans des tableaux d'objets. Ces tableaux d'objets peuvent être filtrés et triés pour obtenir des données spécifiques.

## À quoi ressemble un tableau d'objets?

Un tableau d'objets est un tableau qui contient des objets. Un objet est une collection de propriétés. Chaque propriété a un nom et une valeur. Il faut voir un objet comme une collection de paires clé-valeur.

```javascript
let personnes = [
    { nom: "Alice", age: 25 },
    { nom: "Bob", age: 30 },
    { nom: "Charlie", age: 35 },
];
```

## Traiter un tableau d'objets

Pour traiter les éléments d'un tableau d'objets, on peut utiliser une boucle `for` ou la méthode `forEach`.

```javascript
let personnes = [
    { nom: "Alice", age: 25 },
    { nom: "Bob", age: 30 },
    { nom: "Charlie", age: 35 },
];

for (let i = 0; i < personnes.length; i++) {
    personne.nom = personne.nom.toUpperCase();
}

// OU

personnes.forEach((personne) => {
    personne.nom = personne.nom.toUpperCase();
});
```

## Filtrer un tableau d'objets

Filtrer implique de sélectionner des éléments qui répondent à un critère spécifique et de créer un nouveau tableau avec ces éléments.

### Méthode avec une boucle `for`

```javascript
let personnes = [
    { nom: "Alice", age: 25 },
    { nom: "Bob", age: 30 },
    { nom: "Charlie", age: 35 },
];

function filtrerPersonnesParAge(personnes, age) {
    let personnesFiltrees = [];
    for (let i = 0; i < personnes.length; i++) {
        if (personnes[i].age > age) {
            personnesFiltrees.push(personnes[i]);
        }
    }
    return personnesFiltrees;
}

let personnesFiltrees = filtrerPersonnesParAge(personnes, 30);
```

### Méthode avec la méthode `filter`

Il existe une méthode plus élégante pour filtrer un tableau d'objets. La méthode `filter` crée un nouveau tableau avec tous les éléments qui passent le test implémenté par la fonction fournie. La fonction fournie est appelée pour chaque élément du tableau.

https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

```javascript
let personnes = [
    { nom: "Alice", age: 25 },
    { nom: "Bob", age: 30 },
    { nom: "Charlie", age: 35 },
];

let personnesFiltrees = personnes.filter(function (personne) {
    return personne.age > 30; //Si la condition est vraie, l'élément est ajouté au tableau
});
```

## Trier un tableau d'objets

Trier implique de réorganiser les éléments d'un tableau dans un ordre spécifique. Lorsque le tableau ne contient que des nombres, la méthode `sort` peut être utilisée.

https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

Lorsque le tableau contient des objets, la méthode `sort` peut être utilisée avec une fonction de comparaison.

La fonction de comparaison compare deux éléments du tableau et renvoie un nombre négatif si le premier élément est inférieur au deuxième, un nombre positif si le premier élément est supérieur au deuxième, et zéro si les deux éléments sont égaux.

```javascript
let personnes = [
    { nom: "Charlie", age: 35 },
    { nom: "Bob", age: 30 },
    { nom: "Alice", age: 25 },
];

personnes.sort(function (a, b) {
    if (a.age < b.age) {
        return -1; // L'élément a est placé avant l'élément b
    } else if (a.age > b.age) {
        return 1; // L'élément a est placé après l'élément b
    } else {
        return 0; // Les éléments restent dans le même ordre
    }
});

console.log(personnes); //[{ nom: "Alice", age: 25 },{ nom: "Bob", age: 30 },{ nom: "Charlie", age: 35 }]
```
