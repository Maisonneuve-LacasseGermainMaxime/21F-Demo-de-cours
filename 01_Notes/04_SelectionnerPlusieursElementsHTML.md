# Apprendre le JavaScript - Sélectionner des éléments HTML

Il existe plusieurs méthodes pour sélectionner des éléments HTML en JavaScript. Ces méthodes permettent de récupérer des éléments du DOM (page Web) pour les manipuler. Pour le moment, nous nous limiterons aux méthodes `querySelector` et `querySelectorAll`.

## Sélectionner un élément HTML

La méthode `querySelector` permet de sélectionner un élément HTML en utilisant un sélecteur CSS. Elle retourne le premier élément correspondant au sélecteur spécifié.

```javascript
let paragraphe = document.querySelector("p");
```

## Sélectionner plusieurs éléments HTML

La méthode `querySelectorAll` permet de sélectionner plusieurs éléments HTML en utilisant un sélecteur CSS. Elle retourne un tableau d'éléments correspondant au sélecteur spécifié.

```javascript
let paragraphes = document.querySelectorAll("p");
```

**À noter, que ce n'est pas tout à fait un tableau, mais un objet de type NodeList. Donc, les méthodes habituelles des tableaux ne sont pas toutes disponibles.**

https://developer.mozilla.org/fr/docs/Web/API/NodeList

## Exemple

```javascript
let paragraphes = document.querySelectorAll("p");

paragraphes.forEach(function (paragraphe, index) {
    paragraphe.textContent = "Paragraphe " + index;
});

// OU avec une boucle for
for (let i = 0; i < paragraphes.length; i++) {
    paragraphes[i].textContent = "Paragraphe " + i;
}
```

## Sélectionner les enfants d'un élément HTML

La méthode `querySelector` et `querySelectorAll` permettent de sélectionner les enfants d'un élément HTML. Il suffit de spécifier le sélecteur CSS de l'élément enfant. Depuis le début nous avons utilisé document.querySelector et document.querySelectorAll, mais il est possible d'utiliser ces méthodes sur n'importe quel élément HTML.

**Attention, cela fonctionne sur un élément unique et non pas sur un tableau d'éléments HTML. Il faut utiliser une boucle pour cela**

```javascript
let divAlbum = document.querySelector(".album");

let paragraphes = divAlbum.querySelectorAll("p"); // Sélectionne tous les éléments p enfants de divAlbum

// Pour chaque paragraphe, on sélectionne le span et on modifie le texte
paragraphes.forEach(function (paragraphe, index) {
    const paraHTML = paragraphe.querySelector("span");
    paraHTML.textContent = "Paragraphe " + index;
});

// OU avec une boucle for

for (let i = 0; i < paragraphes.length; i++) {
    const paraHTML = paragraphe.querySelector("span");
    paraHTML.textContent = "Paragraphe " + i;
}
```
