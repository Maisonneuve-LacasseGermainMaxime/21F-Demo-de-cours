import CarrouselImage from "./CarrouselImage.js";

/**
 * Classe représentant un carrousel d'images.
 */
class Carrousel {
    /**
     * Crée un carrousel. Est appelé lors de l'instanciation de la classe.
     * @param {HTMLElement} conteneurHTML - L'élément HTML qui contiendra le carrousel.
     * @param {Array} listeAlbums - La liste des albums à afficher dans le carrousel.
     * @param {number} duree - La durée d'affichage de chaque diapositive (en millisecondes).
     */
    constructor(conteneurHTML, listeAlbums, duree = 5000) {
        this.listeAlbums = listeAlbums;
        this.indexDiapo = 0;

        this.conteneurHTML = conteneurHTML;
        this.interval = null;
        this.duree = duree;

        this.elementHTML = null;
        this.diapoConteneur = null;
        this.diapoActuelle = null;
        this.injecterHTML();
        this.demarrer();

        //Affiche la première diapo
        this.afficherDiapo(this.indexDiapo);
    }

    /**
     * Injecte le HTML du carrousel dans le conteneur HTML.
     */
    injecterHTML() {
        const gabaritHTML = `
            <div class="carrousel">
                <div class="bouton" data-direction="-1"><</div>
                <div class="carrousel__conteneur_diapo"></div>
                <div class="bouton" data-direction="1">></div>
            </div>
        `;
        this.conteneurHTML.insertAdjacentHTML("beforeend", gabaritHTML);

        this.elementHTML = this.conteneurHTML.lastElementChild;
        this.diapoConteneur = this.elementHTML.querySelector(".carrousel__conteneur_diapo");

        this.elementHTML.querySelectorAll(".bouton").forEach((bouton) => {
            if (bouton.dataset.direction === "-1") {
                bouton.addEventListener("click", this.onClickPrecedentDiapo.bind(this));
            } else {
                bouton.addEventListener("click", this.onClickProchaineDiapo.bind(this));
            }
        });
    }

    /**
     * Gère le clic sur le bouton pour afficher la diapositive suivante.
     */
    onClickProchaineDiapo() {
        this.arreter();
        this.prochaineDiapo();
        this.demarrer();
    }

    /**
     * Gère le clic sur le bouton pour afficher la diapositive précédente.
     */
    onClickPrecedentDiapo() {
        this.arreter();
        this.precedentDiapo();
        this.demarrer();
    }

    /**
     * Démarre le carrousel.
     */
    demarrer() {
        //Ajouter une temporisation
        this.prochaineDiapo.bind(this);
    }

    /**
     * Affiche la diapositive suivante.
     */
    prochaineDiapo() {
        this.indexDiapo++;

        if (this.indexDiapo >= this.listeAlbums.length) {
            this.indexDiapo = 0;
        }
        this.afficherDiapo(this.indexDiapo);
    }

    /**
     * Affiche la diapositive précédente.
     */
    precedentDiapo() {
        this.indexDiapo--;
        if (this.indexDiapo < 0) {
            this.indexDiapo = this.listeAlbums.length - 1;
        }
        this.afficherDiapo(this.indexDiapo);
    }

    /**
     * Affiche la diapositive à l'index spécifié.
     * @param {number} index - L'index de la diapositive à afficher.
     */
    afficherDiapo(index) {
        this.album = this.listeAlbums[index];
        const src = this.formatterAlbumSrc(this.album);
        const alt = this.formatterAlbumAlt(this.album);
        this.diapoActuelle = new CarrouselImage(this, src, alt, this.diapoConteneur);
    }

    /**
     * Arrête le carrousel.
     */
    arreter() {
        //Ajouter une temporisation
    }

    /**
     * Formate le chemin de l'image de l'album.
     * @param {Object} album - L'album dont on veut formater le chemin de l'image.
     * @returns {string} Le chemin de l'image de l'album.
     */
    formatterAlbumSrc(album) {
        return `assets/img/albums/${album.album.toLowerCase().replace(" ", "_")}.webp`;
    }

    /**
     * Formate le texte alternatif de l'image de l'album.
     * @param {Object} album - L'album dont on veut formater le texte alternatif de l'image.
     * @returns {string} Le texte alternatif de l'image de l'album.
     */
    formatterAlbumAlt(album) {
        return album.album + " de " + album.artiste;
    }
}

export default Carrousel;
