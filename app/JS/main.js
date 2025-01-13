import "../css/style.css";
import {
  books,
  computers,
  generalKnowledge,
  mathematics,
  music,
  mythology,
  television,
  videoGames,
  boardGames,
  film
} from "./trivia";
import { DOMSelector } from "./dom";

const listArray = [
  generalKnowledge,
  books,
  music,
  videoGames,
  computers,
  mythology,
  television,
  mathematics,
  boardGames, 
  film
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getCategories(x) {
  const c = shuffle(x);
  const C1 = c[0];
  const C2 = c[1];
  const C3 = c[2];
  const C4 = c[3];
  const C5 = c[4];
  const C6 = c[5];
  return { C1, C2, C3, C4, C5, C6 };
}

const game = getCategories(listArray);
let currentScore = 0;

function displayCategories() {
  const categories = game;
  DOMSelector.container.innerHTML = "";
  DOMSelector.score.innerHTML = `Score: ${currentScore}`;

  for (let i = 0; i < Object.keys(categories).length; i++) {
    const categoriesKey = Object.keys(categories)[i];
    const category = categories[categoriesKey];
    const points = [100, 200, 300, 400, 500, 600];
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
    );
  }

  const questionBtns = document.querySelectorAll(".question-btn");
  questionBtns.forEach((button) => {
    button.addEventListener("click", showQuestion);
  });

  const dailyDoubleBtns = [];
  for (let i = 0; i < questionBtns.length; i++) {
    if (Math.random() < 0.1 && dailyDoubleBtns.length < 2) {
      dailyDoubleBtns.push(questionBtns[i]);
      questionBtns[i].classList.add("daily-double");
    }
  }
}

function showQuestion(event) {
  const category = event.target.dataset.category;
  const points = Number(event.target.dataset.points);
  const index = Number(event.target.dataset.index);

  if (event.target.dataset.chosen === "true") {
    return;
  }

  event.target.dataset.chosen = "true";

  const questionBtns = document.querySelectorAll(".question-btn");
  questionBtns.forEach((btn) => (btn.disabled = true));

  const existingModal = document.querySelector(".question-modal");
  if (existingModal) {
    existingModal.remove();
  }

  const questionData = getQuestionData(category, index);
  if (!questionData) {
    console.error(
      `No question data found for category: ${category} and index: ${index}`
    );
    event.target.dataset.chosen = "false";
    questionBtns.forEach((btn) => (btn.disabled = false));
    alert("Error displaying question. Please try again!");
    return;
  }

  const question = questionData.question;
  const correctAnswer = questionData.correct_answer;
  const incorrectAnswers = questionData.incorrect_answers;

  const allAnswers = [correctAnswer, ...incorrectAnswers];
  const shuffledAnswers = shuffle(allAnswers);

  let wagerAmount = 0;
  if (event.target.classList.contains("daily-double")) {
    alert(
      "Daily Double question chosen! Enter in the amount of point you would like to wager on the question. Get the answer right and double the amount you wager! Get the question wrong and lose the amount you wager!"
    );
    DOMSelector.container.insertAdjacentHTML(
      "beforeend",
      `<div class="wager-modal">
      <h2>Daily Double</h2>
      <p>How much would you like to wager?</p>
      <input type="number" id="wager-amount" value="0" max="${currentScore}">
      <button id="wager-btn">Wager</button>
    </div>`
    );

    const wagerBtn = document.querySelector("#wager-btn");
    const wagerModal = document.querySelector(".wager-modal");
    if (currentScore <= 0) {
      wagerAmount = 0;
      alert(
        "You are too poor to wager points! Wager amount set to 0. You can still win the amount of points the question is worth."
      );
      wagerModal.remove();
      displayQuestion(
        event,
        question,
        correctAnswer,
        shuffledAnswers,
        wagerAmount,
        points
      );
    } else {
      wagerBtn.addEventListener("click", async () => {
        console.log("Wager button clicked");
        let wagerAmount = Number(document.querySelector("#wager-amount").value);
        if (isNaN(wagerAmount) || wagerAmount < 0) {
          alert("Please enter a valid positive number to wager.");
          return;
        }

        if (wagerAmount > currentScore) {
          wagerAmount = currentScore;
          alert(
            "You do not have enough points to wager that much! Wager amount will default to your current score."
          );
        }
        wagerModal.remove();
        displayQuestion(
          event,
          question,
          correctAnswer,
          shuffledAnswers,
          wagerAmount,
          points
        );
      });
    }
  } else {
    displayQuestion(
      event,
      question,
      correctAnswer,
      shuffledAnswers,
      wagerAmount,
      points
    );
  }
}

function displayQuestion(
  event,
  question,
  correctAnswer,
  shuffledAnswers,
  wagerAmount,
  points
) {
  DOMSelector.container.insertAdjacentHTML(
    "beforeend",
    `<div class="question-modal">
      <p>${question}</p>
      <div class="answer-options">
        ${shuffledAnswers
          .map(
            (answer, index) =>
              `<button class="answer-btn" data-correct="${
                answer === correctAnswer
              }" data-answer="${answer}">${answer}</button>`
          )
          .join("")}
      </div>
      <button class="close-modal-btn">Close</button>
    </div>`
  );

  const questionBtns = document.querySelectorAll(".question-btn");
  const questionModal = document.querySelector(".question-modal");
  const closeModalBtn = document.querySelector(".close-modal-btn");
  const answerBtns = questionModal.querySelectorAll(".answer-btn");

  closeModalBtn.addEventListener("click", function () {
    questionModal.remove();
    event.target.dataset.chosen = "false";
    questionBtns.forEach((btn) => (btn.disabled = false));
  });

  answerBtns.forEach((button) =>
    button.addEventListener("click", function () {
      const isCorrect = button.dataset.correct === "true";
      if (isCorrect && wagerAmount > 0) {
        currentScore += wagerAmount * 2;
        alert(`Correct! Your score has increased by ${wagerAmount * 2} points`);
      } else if (!isCorrect && wagerAmount > 0) {
        currentScore -= wagerAmount;
        alert(`Incorrect! Your score has decreased by ${wagerAmount} points`);
      } else if (isCorrect) {
        currentScore += points;
        alert(`Correct! Your score has increased by ${points} points`);
      } else {
        currentScore -= points;
        alert(`Incorrect! Your score has decreased by ${points} points`);
      }
      questionModal.remove();
      questionBtns.forEach((btn) => (btn.disabled = false));
      DOMSelector.score.innerHTML = `Score: ${currentScore}`;
    })
  );
}

function getQuestionData(category, index) {
  const categories = game;
  let questionData = null;
  for (let i = 0; i < Object.keys(categories).length; i++) {
    const categoryKey = Object.keys(categories)[i];
    if (categories[categoryKey].results[0].category === category) {
      questionData = categories[categoryKey].results[index];
      break;
    }
  }
  return questionData;
}

function start() {
  DOMSelector.startBtn.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Start Button Clicked!");

    DOMSelector.container.innerHTML = "";
    DOMSelector.startBtn.remove();
    document
      .querySelector("#app")
      .insertAdjacentHTML("beforeend", `<h1 class="score"></h1>`);
    DOMSelector.score = document.querySelector(".score");

    displayCategories();
  });
}

start();
