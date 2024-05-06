class Modale {
  constructor(titre, message) {
    console.log(titre, message);
    this.titre = titre;
    this.message = message;
    this.gabaritHTML = document.querySelector("template#modale");
    this.conteneurHTML = document.body;

    this.injecterHTML();
    this.afficher();
  }

  injecterHTML() {
    let clone = this.gabaritHTML.content.cloneNode(true);
    this.conteneurHTML.appendChild(clone);

    this.elementHTML = this.conteneurHTML.lastElementChild;
    this.elementHTML.querySelector(".modale__titre").textContent = this.titre;
    this.elementHTML.querySelector(".modale__message").textContent =
      this.message;

    let nouveauContexte = this;
    this.elementHTML.classList.add("invisible");
    this.elementHTML.querySelector(".modale__btn-fermer").addEventListener(
      "click",
      function (evenement) {
        this.fermer();
      }.bind(nouveauContexte)
    );
  }

  afficher() {
    this.elementHTML.classList.remove("invisible");
  }

  fermer() {
    this.elementHTML.remove();
  }
}

// function personne (nom, age){

// }
export default Modale;
