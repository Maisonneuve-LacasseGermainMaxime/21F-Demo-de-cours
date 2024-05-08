// function afficherQuestion(question) {
//   let clone = template.content.cloneNode(true);
//   quizConteneur.appendChild(clone);

//   const questionHTML = quizConteneur.lastElementChild;
//   const titre = questionHTML.querySelector(".question__titre");
//   const options = questionHTML.querySelector(".question__options");

//   titre.textContent = question.question;

//   let boutonsReponses = "";
//   question.reponses.forEach(function (reponse) {
//     boutonsReponses += `<li class="bouton">${reponse}</li>`;
//   });
//   options.innerHTML = boutonsReponses;
// }

class Question {
  constructor(
    titre,
    bonneReponse,
    choixReponses,
    conteneurHTML,
    gabaritHTML,
    quizParent
  ) {
    //Ajouter le quiz parent ici
    // this.id;
    this.titre = titre;
    this.bonneReponse = bonneReponse;
    this.choixReponses = choixReponses;
    this.conteneurHTML = conteneurHTML; //l'endroit où sera affiché la question
    this.gabaritHTML = gabaritHTML; //Le HTML à clôner
    this.quizParent = quizParent;

    let contexte = this;
    //Ajouter un écouteur d'événement global pour les boutons de réponse
    this.conteneurHTML.addEventListener(
      "click",
      this.verifierReponse.bind(contexte)
    );
  }

  injecterHTML() {
    // Vider la section conteneurHTML
    // Cloner le gabaritHTML
    // Remplir le gabarit avec les informations de la question
    // Ajouter le gabarit cloné à la section conteneurHTML
    // Désactiver les boutons de réponse
  }

  poserQuestion() {
    // Injecter et cacher la question
    // Animer l'affichage de la question
    // Activer les boutons de réponse
  }

  verifierReponse(evenement) {
    console.log(this);
    // Retirer l'écouteur d'événement des boutons
    // Vérifier si la réponse est la bonne
    // Si oui, afficherBonneReponse()
    // Sinon, afficherErreur()
  }

  afficherErreur() {
    // Mettre en évidence la mauvaise réponse
    // Mettre en évidence la bonne réponse
    // Attendre un délai et passer à la prochaine question (par le parent Quiz)
    // this.quizParent.prochaineQuestion();
  }

  afficherBonneReponse() {
    // Mettre en évidence la bonne réponse
    // Mettre à jour le pointage
    // Attendre un délai et passer à la prochaine question
    // this.quizParent.prochaineQuestion();
  }
}

export default Question;
