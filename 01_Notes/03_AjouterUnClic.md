# Apprendre JavaScript - Ajouter un clic

L'interaction avec l'utilisateur est un des aspects les plus importants de JavaScript. Dans cette leçon, nous allons voir comment ajouter un écouteur de clic à un élément HTML. Nous verrons les autres types d'écouteurs dans les prochaines leçons.

## Ajouter un écouteur de clic

1. On sélectionne l'élément sur lequel on veut ajouter un écouteur de clic. Nous avons vu précédemment comment faire cela avec `document.querySelector`.

2. On utilise la méthode `addEventListener` pour ajouter un écouteur de clic à l'élément. Cette méthode prend deux arguments : le nom de l'événement (ici, `"click"`) et une fonction qui sera exécutée lorsque l'événement se produit.

**Attention, on ne met pas de parenthèses après le nom de la fonction, sinon elle sera exécutée immédiatement.**

```javascript
// On sélectionne le bouton
let monBouton = document.querySelector("button");

// On prépare la fonction qui sera exécutée lorsqu'on clique sur le bouton
function direBonjour() {
    console.log("Bonjour");
}

// On ajoute un écouteur de clic au bouton
monBouton.addEventListener("click", direBonjour);
```
