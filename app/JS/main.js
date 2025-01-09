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
  for (let i = 0; i < categories.length; i++) {
    DOMSelector.container.insertAdjacentHTML(
      "beforeend", 
      `<div class="${categories[i].results.category}">${categories[i].results.category}</div>`
    )
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