import Carrousel from "../classes/Carrousel/Carrousel.js";
import albums from "../donnees/albums.js";

let carrousel = new Carrousel(document.querySelector(".carrousel-conteneur"), albums, 3000);
