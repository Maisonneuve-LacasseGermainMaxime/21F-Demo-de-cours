# Préparation du quiz en module

## Consignes

### Partie 1

Dans les prochains cours, vous devrez créer un quiz animé de 5 questions en lien avec le thème de votre site. Vous devrez utiliser les classes et les modules pour organiser votre code.

Dans un module séparé, créez un tableau `quiz` qui contiendra les questions, les réponses possibles et la réponse correcte sous forme d'objets.

Dans le même fichier, créez un tableau d'objets comprenant les messages de félicitations et d'encouragement pour les réponses correctes et incorrectes.

```javascript
const quiz = [
    {
        question: "Quelle est la capitale de la France?",
        options: ["Paris", "Londres", "Berlin", "Madrid"],
        reponse: "Paris",
    },
    //... Ajoutez un total de 5 questions
];

const messages = [
    { resultat: 0, message: "Désolé! Vous n'avez rien compris" },
    //... Ajoutez un message pour chaque résultat possible
    { resultat: 5, message: "Félicitations! Vous avez tout juste!" },
];
```

Dans le fichier principal, importez les deux tableaux et créez une fonction `démarrerQuiz` qui affichera les questions et les réponses possibles.
Utilisez un template dans le html pour chaque question et ses réponses.

### Partie 2

Créez une variable `score` qui sera incrémentée à chaque bonne réponse.
Créez une variable `index` qui sera incrémentée à chaque question.
Créez une fonction `enregistrerQuiz` qui stockera le score et l'index dans le `localStorage` pour les garder en mémoire.
