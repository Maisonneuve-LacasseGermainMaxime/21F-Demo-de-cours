# Apprendre le JavaScript - Techniques de débogage - prompt, alert, confirm

Dans cette section, nous allons voir comment utiliser les fonctions `prompt`, `alert` et `confirm` pour déboguer nos applications JavaScript.

Ces méthodes appartiennent à l'objet `window` et sont utilisées pour afficher des boîtes de dialogue à l'utilisateur. Windows est un objet global qui représente la fenêtre du navigateur. Il contient des propriétés et des méthodes pour manipuler la fenêtre du navigateur.

## `alert`

La méthode `alert` affiche une boîte de dialogue avec un message et un bouton "OK". Elle est utilisée pour afficher des messages d'erreur, des avertissements ou des informations à l'utilisateur.

```javascript
alert("Ceci est un message d'alerte");
```

## `prompt`

La méthode `prompt` affiche une boîte de dialogue avec un message, un champ de saisie et deux boutons "OK" et "Annuler". Elle est utilisée pour demander à l'utilisateur de saisir une valeur. La méthode retourne la valeur saisie par l'utilisateur ou `null` si l'utilisateur a cliqué sur le bouton "Annuler".

```javascript
let prenom = prompt("Entrez votre prénom");
alert("Bonjour " + prenom);
```

## `confirm`

La méthode `confirm` affiche une boîte de dialogue avec un message et deux boutons "OK" et "Annuler". Elle est utilisée pour demander à l'utilisateur de confirmer une action. La méthode retourne `true` si l'utilisateur a cliqué sur le bouton "OK" et `false` si l'utilisateur a cliqué sur le bouton "Annuler".

```javascript
let resultat = confirm("Êtes-vous sûr de vouloir supprimer cet élément ?");
if (resultat) {
    alert("L'élément a été supprimé");
} else {
    alert("L'élément n'a pas été supprimé");
}
```

### Meilleures pratiques

Il est recommandé de ne **pas utiliser** ces méthodes dans un contexte réel de développement pour afficher des messages à l'utilisateur car elles bloquent l'exécution du code JavaScript . Elles sont principalement utilisées pour déboguer des applications. Pour afficher des messages à l'utilisateur, il est recommandé d'utiliser des éléments HTML et de les manipuler avec JavaScript, nous verrons comment faire cela dans un prochain cours.

## Autres méthodes de l'objet `console` pour déboguer des applications

Nous avons vu au dernier cours qu'il est possible d'afficher des messages dans la console du navigateur en utilisant la méthode `console.log`. Il existe d'autres méthodes de l'objet `console` qui permettent de déboguer des applications :

-   `console.log` : Affiche un message dans la console du navigateur.
-   `console.error` : Affiche un message d'erreur dans la console du navigateur.
-   `console.warn` : Affiche un message d'avertissement dans la console du navigateur.
-   `console.info` : Affiche un message d'information dans la console du navigateur.

-   `console.table` : Affiche un tableau dans la console du navigateur.
-   `console.count` : Affiche le nombre de fois que cette ligne de code a été exécutée.
-   `console.time` : Démarre un chronomètre dans la console du navigateur.
-   `console.timeEnd` : Arrête un chronomètre dans la console du navigateur et affiche le temps écoulé.
