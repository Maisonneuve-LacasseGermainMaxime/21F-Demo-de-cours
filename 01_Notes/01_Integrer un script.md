# Syntaxe de base et intégration à une page Web

## Intégrer un script JavaScript à une page HTML

Il existe plusieurs façons d'intégrer un script JavaScript à une page HTML. Voici les trois principales :

1. **Dans la balise `<script>`** : On peut intégrer un script JavaScript directement dans une balise `<script>` dans le corps de la page HTML. Par exemple :

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Ma page Web</title>
    </head>
    <body>
        <h1>Ma page Web</h1>
        <p>Ceci est un paragraphe.</p>
        <script>
            alert("Bonjour !");
        </script>
    </body>
</html>
```

2. **Dans un attribut `onclick`** : On peut également intégrer un script JavaScript directement dans un attribut `onclick` d'un élément HTML. Par exemple :

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Ma page Web</title>
    </head>
    <body>
        <h1>Ma page Web</h1>
        <p>Ceci est un paragraphe.</p>
        <button onclick="alert('Bonjour !')">Cliquez ici</button>
    </body>
</html>
```

Cette méthode est utile pour ajouter des comportements interactifs à des éléments HTML, mais elle est moins recommandée car elle mélange le code JavaScript avec le code HTML, ce qui peut rendre le code difficile à lire et à maintenir. Elle sera utilisée particulièrement avec des cadriciels comme React ou Vue.js ou les éléments sont créés en composants.

3. **Dans un fichier externe** : On peut également intégrer un script JavaScript dans un fichier externe, puis l'inclure dans la page HTML à l'aide de la balise `<script>`. Par exemple :

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Ma page Web</title>
        <script src="./assets/script.js" defer></script>
    </head>
    <body>
        <h1>Ma page Web</h1>
        <p>Ceci est un paragraphe.</p>
    </body>
</html>
```

## Meilleures pratiques

Il est recommandé d'utiliser la **troisième méthode** pour intégrer un script JavaScript à une page HTML, car cela permet de séparer le code JavaScript du code HTML, ce qui rend le code plus lisible et plus facile à maintenir.

On évitera d'ajouter des scripts JavaScript directement dans le corps de la page HTML, car cela peut rendre le code HTML difficile à lire et à maintenir. De plus, cela peut également poser des problèmes de performance, car le navigateur doit télécharger et exécuter le script à chaque fois que la page est chargée.

## Attribut `defer`

Dans l'exemple de la troisième méthode, on a utilisé l'attribut `defer` dans la balise `<script>`. Cet attribut indique au navigateur de différer l'exécution du script jusqu'à ce que la page soit entièrement chargée. Ainsi, si on doit sélectionner des éléments HTML dans le script, on est sûr que ces éléments existent déjà sur la page sinon on risque d'obtenir une erreur ou un comportement inattendu.

## Attribut `src`

L'attribut `src` de la balise `<script>` permet de spécifier l'URL du fichier JavaScript externe à inclure dans la page HTML. Il est important de noter que cet attribut est obligatoire si on utilise la troisième méthode pour intégrer un script JavaScript à une page HTML.

### Chemin relatif ou absolu

On utilisera de préférence un chemin relatif pour spécifier l'URL du fichier JavaScript, par exemple `src="./assets/script.js"`. Ainsi, si on déplace le dossier du projet dans un autre emplacement, le lien vers le fichier JavaScript restera valide.
