import { init as navigationInit } from "../modules/navigation.js";
import { questions, messages } from "../donnees/questionsQuiz.js";

let reponsesQuiz = [];
let indexQuestionCourante = 0;
const template = document.querySelector("template#question");
const quizConteneur = document.querySelector(".quiz-conteneur");
const quizMessageConteneur = document.querySelector(".quiz-message-conteneur");

function init() {
  navigationInit();

  demarrerQuiz();
  afficherMessage("Bienvenue au quiz!");

  enregistrerPositionLocalStorage();
  enregistrerReponsesLocalStorage();
}

function demarrerQuiz() {
  questions.forEach(function (question) {
    afficherQuestion(question);
  });
}

function afficherQuestion(question) {
  let clone = template.content.cloneNode(true);
  quizConteneur.appendChild(clone);

  const questionHTML = quizConteneur.lastElementChild;
  const titre = questionHTML.querySelector(".question__titre");
  const options = questionHTML.querySelector(".question__options");

  titre.textContent = question.question;

  let boutonsReponses = "";
  question.reponses.forEach(function (reponse) {
    boutonsReponses += `<li class="bouton">${reponse}</li>`;
  });
  options.innerHTML = boutonsReponses;
}

function afficherMessage(message) {
  quizMessageConteneur.textContent = message;
}

function enregistrerReponsesLocalStorage() {
  const reponsesString = JSON.stringify(reponsesQuiz);
  localStorage.setItem("quizReponses", reponsesString);
}

function enregistrerPositionLocalStorage() {
  let positionString = JSON.stringify(indexQuestionCourante);
  localStorage.setItem("quizPosition", positionString);
}
init();
