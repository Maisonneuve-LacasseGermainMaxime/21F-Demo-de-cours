# Exercice - cours 6 - Les objets

## Consignes

Créer un carrousel d'images à partir d'un tableau d'objets.

## Étapes

1. Créer une fonction `changerImage` qui prend en paramètre l'index de l'image à afficher. Trouvez l'objet correspondant à l'index dans le tableau et affichez l'image dans la balise `img`. Modifiez également l'attribut `alt` de la balise `img` pour afficher la description de l'image.

2. Au clic du bouton "Suivant", appeler la fonction `changerImage` en passant l'index de l'image suivante. Si on arrive au dernier élément du tableau, on revient au premier élément.

3. Au clic du bouton "Précédent", appeler la fonction `changerImage` en passant l'index de l'image précédente. Si on arrive au premier élément du tableau, on revient au dernier élément.

4. Au chargement de la page, afficher la première image du tableau.

## Défi supplémentaire

Au chargement de la page, afficher une image aléatoire du tableau.
