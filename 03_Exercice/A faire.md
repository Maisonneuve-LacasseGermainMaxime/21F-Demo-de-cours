# Exercice - cours 8 - Le DOM

## Consignes

Créer du contenu dynamique au changement d'un élément du DOM.

## Étapes

1. Sélectionner le champ nombre par son attribut type et la balise template.

2. Ajouter un écouteur d'événement sur le champ nombre de type `change` qui appelle une fonction `changement`.

3. Créer une fonction `cloner` qui clône le contenu du template dans la section resume.

4. Créer la fonction `changement` qui affiche dans la console le contenu du champ nombre. Récupérer la valeur du champ nombre, vider la section resume et cloner le contenu du template dans la section resume autant de fois que la valeur du champ nombre.

**Défi supplémentaire**
Après avoir ajouté le contenu du template dans la section resume, ajouter un écouteur d'événement sur le bouton supprimer à l'intérieur du contenu cloné.

Au clic, récupérer le parent du bouton et le supprimer.
