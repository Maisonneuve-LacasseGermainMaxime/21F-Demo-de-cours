# Apprendre JavaScript - Les structures de contrôle

Les structures de contrôle permettent de contrôler le flux d'exécution d'un programme. Elles permettent d'exécuter des blocs de code en fonction de conditions. Elles sont similaires à celles que l'on retrouve dans d'autres langages de programmation comme php.

Il existe deux types de structures de contrôle en JavaScript :

-   Les `structures de contrôle conditionnelles` (if, else if, else, switch).
-   Les `structures de contrôle itératives` ou `boucles` (for, while, do while).

Nous verrons les boucles dans un prochain cours.

## Les structures de contrôle conditionnelles

Les structures de contrôle conditionnelles permettent d'exécuter des blocs de code en fonction de conditions.

### `if`, `else if`, `else`

La structure `if` permet d'exécuter un bloc de code si une condition est vraie. Si la condition est fausse, le bloc de code n'est pas exécuté. La structure `else if` permet d'ajouter une condition supplémentaire. La structure `else` permet d'exécuter un bloc de code si aucune des conditions précédentes n'est vraie.

Il est possible d'utiliser plusieurs `else if` pour ajouter autant de conditions que nécessaire.

```javascript
let a = 10;

if (a > 5) {
    console.log("a est supérieur à 5");
} else if (a === 5) {
    console.log("a est égal à 5");
} else {
    console.log("a est inférieur à 5");
}
```

#### Meilleures pratiques

La structure `if, else if, else` est très utile pour exécuter des blocs de code en fonction de conditions. Cependant, il est recommandé de ne pas imbriquer trop de conditions pour éviter de rendre le code difficile à lire. Si vous avez besoin d'imbriquer plusieurs conditions, il est recommandé de les séparer en plusieurs fonctions (voir le cours sur les fonctions).

### `switch`

La structure `switch` permet de comparer une expression ou le contenu d'une variable à une liste de valeurs et d'exécuter un bloc de code en fonction de la valeur de l'expression.

Pour chaque valeur, il est possible d'exécuter un bloc de code en utilisant le mot-clé `case`. Il est possible d'exécuter le même bloc de code pour plusieurs valeurs en utilisant le mot-clé `case` suivi de plusieurs valeurs séparées par des virgules.

Il est possible de sortir de la structure `switch` en utilisant le mot-clé `break`, ainsi le bloc de code suivant ne sera pas exécuté.

Il est possible d'exécuter un bloc de code par défaut si aucune des valeurs précédentes n'est vraie en utilisant le mot-clé `default`.

```javascript
let jour = "lundi";

switch (jour) {
    case "lundi":
        console.log("C'est le début de la semaine");
        break;
    case "mardi":
        console.log("C'est le deuxième jour de la semaine");
        break;
    case "mercredi":
        console.log("C'est le milieu de la semaine");
        break;
    case "jeudi":
        console.log("C'est presque le week-end");
        break;
    case "vendredi":
        console.log("C'est le dernier jour de la semaine");
        break;
    case "samedi":
    case "dimanche":
        console.log("C'est le week-end");
        break;
    default:
        console.log("Ce n'est pas un jour de la semaine");
}
```
