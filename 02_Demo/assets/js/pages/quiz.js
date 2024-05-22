import { init as navigationInit } from "../modules/navigation.js";
import Quiz from "../classes/Quiz.js";

function init() {
  navigationInit();
  new Quiz();

}

init();
