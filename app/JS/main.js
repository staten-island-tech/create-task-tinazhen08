import "../css/style.css";
import {generalKnowledge, books, film, music, musicalsAndTheatres, videoGames, scienceAndNature, computers} from "./trivia"
import { DOMSelector } from "./dom";

const listAPI = [generalKnowledge, books, film, music, musicalsAndTheatres, videoGames, scienceAndNature, computers]

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

function getCategories(x){
  const c = shuffle(x);
  const C1 = c[0];
  const C2 = c[1];
  const C3 = c[2];
  const C4 = c[3];
  const C5 = c[4];
  const C6 = c[5];
  return {C1, C2, C3, C4, C5, C6}
};

const game = getCategories(listAPI)
let currentScore = 0;

function displayCategories(){
  const categories = game;
  DOMSelector.container.innerHTML = "";
  DOMSelector.score.innerHTML = `Score: ${currentScore}`

  for (let i = 0; i < Object.keys(categories).length; i++){
    const categoriesKey = Object.keys(categories)[i]
    const category = categories[categoriesKey];
    const points = [100, 200, 300, 400, 500, 600]
    DOMSelector.container.insertAdjacentHTML(
      "beforeend", 
      `<div class="category">
        <h3>${category.results[0].category}</h3>
        <div class="question-grid">
          ${points
            .map(
              (point, index) =>
                `<button class="question-btn" data-category="${category.results[0].category}" data-points="${point}" data-index="${index}" data-chosen="false">${point}</button>`
            )
            .join("")}
        </div>
      </div>`
    )
  }

  const questionBtns = document.querySelectorAll(".question-btn");
  questionBtns.forEach((button) => {
    button.addEventListener("click", showQuestion);
  });
};

function showQuestion(event){
  const category = event.target.dataset.category;
  const points = Number(event.target.dataset.points);
  const index = Number(event.target.dataset.index);

  if (event.target.dataset.chosen === "true") {
    return;
  }

  event.target.dataset.chosen = "true";

  const questionData = getQuestionData(category, index);
  if (!questionData) {
    console.error(`No question data found for category: ${category} and index: ${index}`);
    return;  
  }

  const question = questionData.question;
  const correctAnswer = questionData.correct_answer;
  const incorrectAnswers = shuffle([...questionData.incorrect_answers])

  let selectedQuestion = question;
  console.log(selectedQuestion);

  DOMSelector.container.insertAdjacentHTML("beforeend", 
    `<div class="question-modal">
    <h2>${category}: ${points} Points</h2>
    <p>${question}</p>
    <div class="answer-options">
      <button class="answer-btn" data-correct="true">${correctAnswer}</button>
      <button class="answer-btn" data-correct="false">${incorrectAnswers[0]}</button>
      <button class="answer-btn" data-correct="false">${incorrectAnswers[1]}</button>
      <button class="answer-btn" data-correct="false">${incorrectAnswers[2]}</button>
    </div>
    <button class="close-modal-btn">Close</button>
  </div>`)

  const questionModal = DOMSelector.questionModal;
  const closeModalBtn = DOMSelector.closeModalBtn;
  const answerBtn = DOMSelector.answerBtns;

  closeModalBtn.addEventListener("click", function(){
    questionModal.remove();
  });

  answerBtn.forEach((button) => button.addEventListener("click", function(){
    if (button.dataset.correct === "true"){
      currentScore += points;
      DOMSelector.score.innerHTML = `Score: ${currentScore}`;
      alert("Correct! Your score has increased by " + points + " points")
    } else {
      currentScore -= points;
      DOMSelector.score.innerHTML = `Score: ${currentScore}`;
      alert("Incorrect! Your score has decreased by " + points + " points")
    }
    questionModal.remove();
  }))
};

function getQuestionData(category, index){
  const categories = game;
  let questionData = null;
  for (let i = 0; i < Object.keys(categories).length; i++){
    const categoryKey = Object.keys(categories)[i];
    if (categories[categoryKey].results[0].category === category) {
      questionData = categories[categoryKey].results[index];
      break;
    }
  }
  return questionData;
}

function start(){
  DOMSelector.startBtn.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Start Button Clicked!")

    DOMSelector.container.innerHTML = "";
    DOMSelector.startBtn.remove();
    DOMSelector.container.insertAdjacentHTML("beforeend",
      `<h1 class="score"></h1>`
    )
    DOMSelector.score = document.querySelector(".score")

    displayCategories();
  })
}

start();
