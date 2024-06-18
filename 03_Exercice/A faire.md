# Exercice - cours 4 - Les tableaux et les boucles

## Consignes

Vous devez modifier plusieurs éléments HTML à partir d'un tableau de données, de fonctions et de boucles. De plus, vous devrez trier ces éléments au clic d'un bouton et les réafficher.

1. Sélectionnez tous les éléments `div` de la liste qui ont la classe `album__artiste` et enregistrez-les dans une seule variable.

2. Créer une fonction `afficherAlbums` servant à afficher les albums dans la page. Cette fonction prendra un deux paramètres : un tableau d'albums et une liste d'éléments HTML. Cette fonction contient une boucle qui utilise la fonction `modifierNom` pour afficher le nom de l'artiste dans chaque élément HTML.

3. Créer une fonction `modifierNom` servant à changer le texte d'un élément HTML. Cette fonction prendra deux paramètres : l'élément HTML à modifier et le texte à insérer dans cet élément.

4. Créez une fonction `initialiser` qui sera appelée au chargement de la page. Appelez la fonction
   `afficherAlbums` avec le tableau d'albums et la liste d'éléments HTML.

5. Au clic du bouton, triez les albums par ordre alphabétique et réaffichez-les dans la page.
