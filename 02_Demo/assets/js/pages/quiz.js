import { init as navigationInit } from "../modules/navigation.js";
import Quiz from "../classes/Quiz.js"

function init() {
  navigationInit();

  let quiz = new Quiz();
}

init();