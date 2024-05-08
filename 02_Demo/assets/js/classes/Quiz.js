import { questions } from "../donnees/questionsQuiz.js";
import Pointage from "./Pointage.js";
import Question from "./Question.js";

// let reponsesQuiz = [];
// let indexQuestionCourante = 0;
// const template = document.querySelector("template#question");
// const quizConteneur = document.querySelector(".quiz-conteneur");
// const quizMessageConteneur = document.querySelector(".quiz-message-conteneur");

class Quiz {
    constructor() {
        this.nbMaxQuestions = 5;
        this.questions;
        // OPTIONNEL: Choisir 5 questions au hasard (psst, l'objet Math est ton ami)

        this.indexQuestionActuelle; // L'index de la question
        this.questionActuelle; // L'instance de la question actuelle

        this.conteneurPointage = document.querySelector(".pointage");
        this.pointage = new Pointage(0, this.conteneurPointage);

        this.panneauDebutHTML;
        this.boutonDemarrageQuiz;
        this.panneauFinHTML;
        this.panneauQuestionHTML;
        this.messageConteneur;

        //Ajouter les écouteurs d'événements ici
    }

    // ====================
    // AFFICHAGE ET NAVIGATION

    cacherPanneaux() {
        // Utiliser les classes CSS pour cacher les panneaux
    }

    afficherPanneau(panneauHTML) {
        // Utiliser les classes CSS pour afficher le panneau
    }

    // ====================
    // GESTION DES QUESTIONS ET DU QUIZ
    demarrerQuiz() {
        // Afficher le panneau de début
        // Afficher la première question
        //
        // OPTIONNEL: Afficher les scores des utilisateurs précédents
    }

    prochaineQuestion() {
        // Afficher le panneau de question
        // Vérifier si c'est la dernière question
        // // Si oui, terminer le quiz
        // Sinon
        // // Récupérer la question suivante
        // // Instancier une nouvelle question en passant la question actuelle au constructeur
        // // Avancer l'index de la question actuelle
    }

    terminerQuiz() {
        // Afficher le panneau de fin
        // Calculer le score final
        // Si plus de 50%, afficher un message de félicitations
        // Sinon, afficher un message d'encouragement
        //
        // === OPTIONNEL
        // Demander le nom du joueur et s'il souhaite enregistrer son score
        // Enregistrer le score sous forme d'objet. Ex: {nom: "nom", score: 100}
    }

    // ====================
    // ENGISTREMENT DU SCORE (OPTIONNEL)
    enregistrerNouveauScore(nouveauPointage) {
        let scoresString = localStorage.getItem("quizScores");
        let scoresTableau;

        if (scoresString === null) {
            scoresTableau = [];
        } else {
            scoresTableau = JSON.parse(scoresString);
        }

        scoresTableau.push(nouveauPointage);
        scoresString = JSON.stringify(scoresTableau);
        localStorage.setItem("quizScores", scoresString);
    }

    recupererScore() {
        let scoresString = localStorage.getItem("quizScores");
        let scoresTableau;

        if (scoresString === null) {
            scoresTableau = [];
        } else {
            scoresTableau = JSON.parse(scoresString);
        }

        return scoresTableau;
    }
}

export default Quiz;
