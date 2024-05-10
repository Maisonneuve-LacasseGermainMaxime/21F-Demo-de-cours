/**
 * Classe représentant une image dans un carrousel.
 */
class CarrouselImage {
    /**
     * Crée une image de carrousel.
     * @param {Object} carrouselParent - Le carrousel parent qui contient cette image.
     * @param {string} src - Le chemin de l'image.
     * @param {string} alt - Le texte alternatif de l'image.
     * @param {HTMLElement} conteneurHTML - L'élément HTML qui contiendra l'image.
     */
    constructor(carrouselParent, src, alt, conteneurHTML) {
        this.carrouselParent = carrouselParent;
        this.src = src;
        this.alt = alt;
        this.conteneurHTML = conteneurHTML;
        this.elementHTML = null;
        this.injecterHTML();
        this.afficher();
    }

    /**
     * Injecte le HTML de l'image dans le conteneur HTML.
     */
    injecterHTML() {
        this.conteneurHTML.innerHTML = "";

        let gabaritHTML = `
            <img src="${this.src}" alt="${this.alt}">
        `;
        this.conteneurHTML.insertAdjacentHTML("beforeend", gabaritHTML);
        this.elementHTML = this.conteneurHTML.lastElementChild;

        this.elementHTML.addEventListener("click", this.carrouselParent.prochaineDiapo.bind(this.carrouselParent));
    }

    /**
     * Affiche l'image.
     */
    afficher() {
        this.elementHTML.style.opacity = 1;
        //TODO: Animer
    }

    /**
     * Cache l'image.
     */
    cacher() {
        this.elementHTML.style.opacity = 0;
        this.carrouselParent.diapoActuelle = null;
        //TODO: Animer
    }
}

export default CarrouselImage;
