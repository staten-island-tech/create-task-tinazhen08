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
}

function getCategories(x){
  const c = shuffle(x);
  const C1 = c[0];
  const C2 = c[1];
  const C3 = c[2];
  const C4 = c[3];
  const C5 = c[4];
  const C6 = c[5];
  return {C1, C2, C3, C4, C5, C6}
}

const game = getCategories(listAPI)

function displayCategories(){
  const categories = game;
  DOMSelector.container.innerHTML = "";

  for (let i = 0; i < Object.keys(categories).length; i++){
    const categoriesKey = Object.keys(categories)[i]
    const category = categories[categoriesKey];
    DOMSelector.container.insertAdjacentHTML(
      "beforeend", 
      `<h3 class="${category}">${category}</h3>
      <div class="question-grid"></div>`
    )
  }

  const questionGrid = DOMSelector.questionGrid;

  DOMSelector.questionGrid.insertAdjacentHTML("beforeend", `<button class="question-btn"></button>`) 

  for (let j = 0; j < 5; j++){
    const points = (j+1) * 100;
    const questionBtn = DOMSelector.questionBtn;
    questionBtn.dataset.category = category.results[0].category;
    questionBtn.
  }
}

function questionDiff(){
  const q = game;
  for (let i = 0; i < q.length; i++) {
    for (let j = 0; j < q[i].results.length; i++){
      if (q[i][j].difficulty === "easy"){
        const e = [];
        const x = e.push(q[i][j].question);
        console.log(`Number of easy "${q[i].results.category}" questions is: ${x}`)
      }else if (q[i][j].difficulty === "medium"){
        const m = [];
        const y = m.push(q[i][j].question);
        console.log(`Number of easy "${q[i].results.category}" questions is: ${y}`)
      }else{
        const h = [];
        const z = h.push(q[i][j].question);
        console.log(`Number of easy "${q[i].results.category}" questions is: ${z}`)
      }
    }
  }
  return {e, m, h}
}

function chooseQuestions(){

}

function start(){
  DOMSelector.startBtn.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Start Button Clicked!")

    DOMSelector.container.innerHTML = "";
    DOMSelector.startBtn.remove();

    displayCategories();
  })
}

start();
