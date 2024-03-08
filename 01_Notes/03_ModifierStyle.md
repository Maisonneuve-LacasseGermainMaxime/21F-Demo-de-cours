# Apprendre JavaScript - Modifier le style inline d'un élément par programmation

## Modifier le style inline d'un élément par programmation

Il est possible de modifier le style d'un élément HTML directement dans le code JavaScript, en utilisant la propriété `style` de l'élément.

1. On sélectionne l'élément sur lequel on veut ajouter un écouteur de clic. Nous avons vu précédemment comment faire cela avec `document.querySelector`.

2. On utilise la propriété `style` de l'élément pour modifier ses propriétés CSS. On accède à une propriété CSS en utilisant son nom en camelCase. Par exemple, pour modifier la propriété `background-color`, on utilise `element.style.backgroundColor`.

On affecte une valeur à la propriété pour la modifier. Cette valeur doit être une chaîne de caractères, comme dans une feuille de style CSS.

```javascript
// On sélectionne l'élément
let monElement = document.querySelector("p");

// On modifie le style de l'élément
monElement.style.backgroundColor = "lightblue";

// On modifie plusieurs propriétés à la fois
monElement.style.color = "white";

// On modifie une propriété avec un nom composé
monElement.style.fontSize = "24px";
```

### Attention

-   On utilise la propriété `style` pour modifier le style inline de l'élément. Si l'élément a un style défini dans une feuille de style CSS, ce style sera écrasé par le style inline. Le style inline est donc plus prioritaire que le style CSS. Cela va causer des problèmes si on veut modifier le style d'un élément qui a déjà un style défini dans une feuille de style CSS.

**Il est donc préférable de ne pas utiliser le style inline si on peut éviter de le faire. Nous verrons comment ajouter des classes CSS à un élément dans un prochain cours.**
